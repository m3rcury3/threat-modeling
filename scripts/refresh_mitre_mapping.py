#!/usr/bin/env python3
"""Refresh ATT&CK mappings from MITRE STIX and local detections.

Outputs:
- data/detection_index.json
- data/mitre_live_mapping.json
- docs/data/detection_index.json
- docs/data/mitre_live_mapping.json
"""

from __future__ import annotations

import datetime as dt
import json
import pathlib
import urllib.request

import yaml


REPO_ROOT = pathlib.Path(__file__).resolve().parents[1]
MITRE_STIX_URL = (
    "https://raw.githubusercontent.com/mitre-attack/attack-stix-data/master/"
    "enterprise-attack/enterprise-attack.json"
)


def read_text(path: pathlib.Path) -> str:
    return path.read_text(encoding="utf-8")


def write_json(path: pathlib.Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(payload, indent=2, sort_keys=False, default=str) + "\n",
        encoding="utf-8",
    )


def parse_frontmatter(markdown_text: str) -> dict:
    lines = markdown_text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}
    for idx in range(1, len(lines)):
        if lines[idx].strip() == "---":
            block = "\n".join(lines[1:idx])
            data = yaml.safe_load(block) or {}
            if isinstance(data, dict):
                return data
            return {}
    return {}


def load_local_detections() -> list[dict]:
    detections_root = REPO_ROOT / "detections"
    records: list[dict] = []
    for path in sorted(detections_root.rglob("DET-*.md")):
        frontmatter = parse_frontmatter(read_text(path))
        if not frontmatter:
            continue
        record = {
            "detection_id": frontmatter.get("detection_id") or path.stem,
            "title": frontmatter.get("title") or path.stem,
            "category": frontmatter.get("category", "unknown"),
            "status": frontmatter.get("status", "unknown"),
            "network_applicability": frontmatter.get("network_applicability", "unknown"),
            "threat_actors": frontmatter.get("threat_actors", []),
            "mitre_tactics": frontmatter.get("mitre_tactics", []),
            "mitre_techniques": frontmatter.get("mitre_techniques", []),
            "owner": frontmatter.get("owner", "unknown"),
            "created": frontmatter.get("created"),
            "last_updated": frontmatter.get("last_updated"),
            "coverage_gaps": frontmatter.get("coverage_gaps", []),
            "source_file": str(path.relative_to(REPO_ROOT)).replace('\\\\', '/'),
        }
        if isinstance(record["network_applicability"], str):
            record["network_applicability"] = [record["network_applicability"]]
        records.append(record)
    return records


def fetch_mitre_stix() -> dict:
    with urllib.request.urlopen(MITRE_STIX_URL, timeout=60) as response:
        payload = response.read().decode("utf-8")
    return json.loads(payload)


def attack_id(obj: dict, prefixes: tuple[str, ...]) -> str | None:
    for ref in obj.get("external_references", []):
        ext_id = ref.get("external_id")
        if not ext_id:
            continue
        if ext_id.startswith(prefixes):
            return ext_id
    return None


def to_list(value: object) -> list:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    return [value]


def build_mapping(local_detections: list[dict], stix_bundle: dict) -> dict:
    objects = stix_bundle.get("objects", [])

    groups_by_stix: dict[str, dict] = {}
    software_by_stix: dict[str, dict] = {}
    techniques_by_stix: dict[str, dict] = {}
    techniques_by_attack: dict[str, dict] = {}
    tactics_by_shortname: dict[str, dict] = {}

    for obj in objects:
        obj_type = obj.get("type")
        if obj_type == "x-mitre-tactic":
            tactic_id = attack_id(obj, ("TA",))
            shortname = obj.get("x_mitre_shortname")
            if tactic_id and shortname:
                tactics_by_shortname[shortname] = {
                    "tactic_id": tactic_id,
                    "name": obj.get("name", shortname),
                    "shortname": shortname,
                }

    for obj in objects:
        if obj.get("revoked") or obj.get("x_mitre_deprecated"):
            continue

        obj_type = obj.get("type")
        if obj_type == "intrusion-set":
            group_id = attack_id(obj, ("G",))
            if group_id:
                groups_by_stix[obj["id"]] = {
                    "group_id": group_id,
                    "name": obj.get("name", group_id),
                }

        elif obj_type in ("tool", "malware"):
            software_id = attack_id(obj, ("S",))
            if software_id:
                software_by_stix[obj["id"]] = {
                    "software_id": software_id,
                    "name": obj.get("name", software_id),
                    "type": obj_type,
                }

        elif obj_type == "attack-pattern":
            technique_id = attack_id(obj, ("T",))
            if not technique_id:
                continue
            phase_names = [
                p.get("phase_name")
                for p in obj.get("kill_chain_phases", [])
                if p.get("kill_chain_name") == "mitre-attack" and p.get("phase_name")
            ]
            tactics = [tactics_by_shortname[p] for p in phase_names if p in tactics_by_shortname]
            details = {
                "technique_id": technique_id,
                "name": obj.get("name", technique_id),
                "is_subtechnique": bool(obj.get("x_mitre_is_subtechnique", False)),
                "tactics": tactics,
                "groups": set(),
                "software": set(),
            }
            techniques_by_stix[obj["id"]] = details
            techniques_by_attack[technique_id] = details

    for obj in objects:
        if obj.get("type") != "relationship" or obj.get("relationship_type") != "uses":
            continue
        src = obj.get("source_ref")
        dst = obj.get("target_ref")
        if dst in techniques_by_stix and src in groups_by_stix:
            techniques_by_stix[dst]["groups"].add(src)
        if dst in techniques_by_stix and src in software_by_stix:
            techniques_by_stix[dst]["software"].add(src)

    detections_by_technique: dict[str, list[dict]] = {}
    for det in local_detections:
        for technique in to_list(det.get("mitre_techniques")):
            detections_by_technique.setdefault(technique, []).append(
                {
                    "detection_id": det["detection_id"],
                    "title": det["title"],
                    "status": det["status"],
                    "source_file": det["source_file"],
                }
            )

    mapped_technique_ids = sorted(detections_by_technique.keys())
    mapped_techniques: list[dict] = []
    group_to_techniques: dict[str, set[str]] = {}
    software_to_techniques: dict[str, set[str]] = {}
    tactic_to_techniques: dict[str, set[str]] = {}
    tactic_to_detections: dict[str, set[str]] = {}

    for technique_id in mapped_technique_ids:
        detail = techniques_by_attack.get(technique_id)
        technique_name = detail["name"] if detail else "Unknown technique (not found in MITRE feed)"
        tactic_entries = detail["tactics"] if detail else []
        group_entries: list[dict] = []
        software_entries: list[dict] = []

        if detail:
            for g_stix in sorted(detail["groups"]):
                group = groups_by_stix[g_stix]
                group_entries.append(group)
                group_to_techniques.setdefault(group["group_id"], set()).add(technique_id)
            for s_stix in sorted(detail["software"]):
                software = software_by_stix[s_stix]
                software_entries.append(software)
                software_to_techniques.setdefault(software["software_id"], set()).add(technique_id)

        for tactic in tactic_entries:
            tactic_to_techniques.setdefault(tactic["tactic_id"], set()).add(technique_id)
            for det in detections_by_technique.get(technique_id, []):
                tactic_to_detections.setdefault(tactic["tactic_id"], set()).add(det["detection_id"])

        mapped_techniques.append(
            {
                "technique_id": technique_id,
                "name": technique_name,
                "is_subtechnique": bool(detail["is_subtechnique"]) if detail else False,
                "tactics": sorted(tactic_entries, key=lambda x: x["tactic_id"]),
                "groups": sorted(group_entries, key=lambda x: x["group_id"]),
                "software": sorted(software_entries, key=lambda x: x["software_id"]),
                "detections": sorted(
                    detections_by_technique.get(technique_id, []), key=lambda x: x["detection_id"]
                ),
            }
        )

    mapped_groups: list[dict] = []
    for group in sorted(groups_by_stix.values(), key=lambda x: x["group_id"]):
        technique_ids = sorted(group_to_techniques.get(group["group_id"], set()))
        covered_detections = sorted(
            {
                d["detection_id"]
                for t in technique_ids
                for d in detections_by_technique.get(t, [])
            }
        )
        mapped_groups.append(
            {
                "group_id": group["group_id"],
                "name": group["name"],
                "mapped_techniques": technique_ids,
                "mapped_detections": covered_detections,
            }
        )

    mapped_software: list[dict] = []
    for software in sorted(software_by_stix.values(), key=lambda x: x["software_id"]):
        technique_ids = sorted(software_to_techniques.get(software["software_id"], set()))
        if not technique_ids:
            continue
        covered_detections = sorted(
            {
                d["detection_id"]
                for t in technique_ids
                for d in detections_by_technique.get(t, [])
            }
        )
        mapped_software.append(
            {
                "software_id": software["software_id"],
                "name": software["name"],
                "type": software["type"],
                "mapped_techniques": technique_ids,
                "mapped_detections": covered_detections,
            }
        )

    mapped_tactics: list[dict] = []
    for tactic in sorted(tactics_by_shortname.values(), key=lambda x: x["tactic_id"]):
        techs = sorted(tactic_to_techniques.get(tactic["tactic_id"], set()))
        mapped_tactics.append(
            {
                "tactic_id": tactic["tactic_id"],
                "name": tactic["name"],
                "shortname": tactic["shortname"],
                "mapped_techniques": techs,
                "mapped_detections": sorted(tactic_to_detections.get(tactic["tactic_id"], set())),
            }
        )

    return {
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "source": {
            "mitre_stix_url": MITRE_STIX_URL,
            "object_count": len(objects),
        },
        "counts": {
            "local_detections": len(local_detections),
            "mapped_techniques": len(mapped_techniques),
            "mapped_tactics": len([x for x in mapped_tactics if x["mapped_techniques"]]),
            "mapped_groups": len([x for x in mapped_groups if x["mapped_techniques"]]),
            "mapped_software": len(mapped_software),
            "total_tactics": len(mapped_tactics),
            "total_groups": len(mapped_groups),
        },
        "mappings": {
            "tactics": mapped_tactics,
            "techniques": mapped_techniques,
            "groups": mapped_groups,
            "software": mapped_software,
        },
        "refresh": {
            "workflow": "https://github.com/m3rcury3/threat-modeling/actions/workflows/refresh-mitre-data.yml",
            "note": "Use the workflow Run workflow button to refresh repository data from MITRE.",
        },
    }


def build_detection_index(local_detections: list[dict]) -> dict:
    by_status: dict[str, int] = {}
    by_category: dict[str, int] = {}
    by_network: dict[str, int] = {}
    by_actor: dict[str, list[str]] = {}
    by_technique: dict[str, list[str]] = {}

    for det in local_detections:
        by_status[det["status"]] = by_status.get(det["status"], 0) + 1
        by_category[det["category"]] = by_category.get(det["category"], 0) + 1

        for net in to_list(det.get("network_applicability")):
            by_network[net] = by_network.get(net, 0) + 1
        for actor in to_list(det.get("threat_actors")):
            by_actor.setdefault(actor, []).append(det["detection_id"])
        for technique in to_list(det.get("mitre_techniques")):
            by_technique.setdefault(technique, []).append(det["detection_id"])

    for key in by_actor:
        by_actor[key] = sorted(set(by_actor[key]))
    for key in by_technique:
        by_technique[key] = sorted(set(by_technique[key]))

    return {
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "total_detections": len(local_detections),
        "detections": local_detections,
        "by_status": dict(sorted(by_status.items())),
        "by_category": dict(sorted(by_category.items())),
        "by_network_applicability": dict(sorted(by_network.items())),
        "by_threat_actor": dict(sorted(by_actor.items())),
        "by_mitre_technique": dict(sorted(by_technique.items())),
    }


def main() -> None:
    local_detections = load_local_detections()
    stix = fetch_mitre_stix()

    live_mapping = build_mapping(local_detections, stix)
    detection_index = build_detection_index(local_detections)

    write_json(REPO_ROOT / "data" / "mitre_live_mapping.json", live_mapping)
    write_json(REPO_ROOT / "docs" / "data" / "mitre_live_mapping.json", live_mapping)
    write_json(REPO_ROOT / "data" / "detection_index.json", detection_index)
    write_json(REPO_ROOT / "docs" / "data" / "detection_index.json", detection_index)


if __name__ == "__main__":
    main()
