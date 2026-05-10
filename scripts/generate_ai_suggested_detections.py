#!/usr/bin/env python3
"""Generate AI-suggested detections for all MITRE ATT&CK enterprise techniques.

Outputs markdown files under detections/ai-suggested/ as DET-AI-XXXX.md.
"""

from __future__ import annotations

import datetime as dt
import json
import pathlib
import urllib.request


REPO_ROOT = pathlib.Path(__file__).resolve().parents[1]
MITRE_STIX_URL = (
    "https://raw.githubusercontent.com/mitre-attack/attack-stix-data/master/"
    "enterprise-attack/enterprise-attack.json"
)
OUT_DIR = REPO_ROOT / "detections" / "ai-suggested"


def fetch_stix() -> dict:
    with urllib.request.urlopen(MITRE_STIX_URL, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))


def attack_id(obj: dict, prefixes: tuple[str, ...]) -> str | None:
    for ref in obj.get("external_references", []):
        ext_id = ref.get("external_id")
        if ext_id and ext_id.startswith(prefixes):
            return ext_id
    return None


def parse_tactics(objects: list[dict]) -> dict[str, dict]:
    tactics_by_shortname: dict[str, dict] = {}
    for obj in objects:
        if obj.get("type") != "x-mitre-tactic":
            continue
        tactic_id = attack_id(obj, ("TA",))
        shortname = obj.get("x_mitre_shortname")
        if not tactic_id or not shortname:
            continue
        tactics_by_shortname[shortname] = {
            "tactic_id": tactic_id,
            "name": obj.get("name", shortname),
        }
    return tactics_by_shortname


def parse_detection_strategies(objects: list[dict]) -> tuple[dict[str, dict], dict[str, set[str]]]:
    strategies_by_stix: dict[str, dict] = {}
    technique_to_strategies: dict[str, set[str]] = {}

    for obj in objects:
        if obj.get("revoked") or obj.get("x_mitre_deprecated"):
            continue
        if obj.get("type") != "x-mitre-detection-strategy":
            continue
        strategy_id = attack_id(obj, ("DET",))
        if not strategy_id:
            continue
        url = ""
        for ref in obj.get("external_references", []):
            if ref.get("source_name") == "mitre-attack" and ref.get("url"):
                url = ref["url"]
                break
        if not url:
            url = f"https://attack.mitre.org/detectionstrategies/{strategy_id}"
        strategies_by_stix[obj["id"]] = {
            "strategy_id": strategy_id,
            "name": obj.get("name", strategy_id),
            "url": url,
        }

    for obj in objects:
        if obj.get("type") != "relationship" or obj.get("relationship_type") != "detects":
            continue
        src = obj.get("source_ref")
        dst = obj.get("target_ref")
        if src not in strategies_by_stix:
            continue
        technique_to_strategies.setdefault(dst, set()).add(strategies_by_stix[src]["strategy_id"])

    return strategies_by_stix, technique_to_strategies


def parse_techniques(objects: list[dict], tactics_by_shortname: dict[str, dict]) -> list[dict]:
    techniques: list[dict] = []
    for obj in objects:
        if obj.get("revoked") or obj.get("x_mitre_deprecated"):
            continue
        if obj.get("type") != "attack-pattern":
            continue

        technique_id = attack_id(obj, ("T",))
        if not technique_id:
            continue

        phase_names = [
            p.get("phase_name")
            for p in obj.get("kill_chain_phases", [])
            if p.get("kill_chain_name") == "mitre-attack" and p.get("phase_name")
        ]
        tactic_ids = sorted(
            {
                tactics_by_shortname[p]["tactic_id"]
                for p in phase_names
                if p in tactics_by_shortname
            }
        )

        techniques.append(
            {
                "stix_id": obj["id"],
                "technique_id": technique_id,
                "name": obj.get("name", technique_id),
                "tactic_ids": tactic_ids,
            }
        )

    return sorted(techniques, key=lambda x: x["technique_id"])


def to_slug(technique_id: str) -> str:
    return technique_id.replace(".", "-").lower()


def build_markdown(record: dict, detection_id: str, strategy_ids: list[str], today: str) -> str:
    tactic_lines = "\n".join([f"  - {t}" for t in record["tactic_ids"]]) or "  - TA0001"
    strategy_lines = "\n".join([f"  - {s}" for s in strategy_ids]) or "  -"

    references = [
        f"- [MITRE ATT&CK Technique {record['technique_id']}](https://attack.mitre.org/techniques/{record['technique_id'].split('.')[0]}/{record['technique_id'].split('.')[1]}/)"
        if "." in record["technique_id"]
        else f"- [MITRE ATT&CK Technique {record['technique_id']}](https://attack.mitre.org/techniques/{record['technique_id']}/)",
    ]
    references.extend(
        [
            f"- [MITRE Detection Strategy {sid}](https://attack.mitre.org/detectionstrategies/{sid})"
            for sid in strategy_ids
        ]
    )

    refs_text = "\n".join(references)

    return f"""---
detection_id: {detection_id}
title: AI Suggested Detection - {record['technique_id']} {record['name']}
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: {today}
last_updated: {today}
owner: ai-assistant
mitre_tactics:
{tactic_lines}
mitre_techniques:
  - {record['technique_id']}
mitre_detection_strategies:
{strategy_lines}
coverage_gaps: []
---

# [{detection_id}] AI Suggested Detection - {record['technique_id']} {record['name']}

| Field | Value |
|-------|-------|
| **Detection ID** | {detection_id} |
| **Status** | AI Suggested |
| **MITRE Technique** | {record['technique_id']} - {record['name']} |
| **MITRE Tactics** | {', '.join(record['tactic_ids']) if record['tactic_ids'] else 'N/A'} |
| **MITRE Detection Strategies** | {', '.join(strategy_ids) if strategy_ids else 'None mapped'} |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique {record['technique_id']} ({record['name']}).

## Detection Hypothesis

Detect behavior consistent with technique {record['technique_id']} by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for {record['technique_id']} - {record['name']}
// Replace with environment-specific logic.
```

## References

{refs_text}
"""


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    stix = fetch_stix()
    objects = stix.get("objects", [])

    tactics_by_shortname = parse_tactics(objects)
    _, technique_to_strategies = parse_detection_strategies(objects)
    techniques = parse_techniques(objects, tactics_by_shortname)

    today = dt.date.today().isoformat()

    for idx, record in enumerate(techniques, start=1):
        detection_id = f"DET-AI-{idx:04d}"
        strategy_ids = sorted(technique_to_strategies.get(record["stix_id"], set()))
        content = build_markdown(record, detection_id, strategy_ids, today)
        filename = OUT_DIR / f"{detection_id}.md"
        filename.write_text(content, encoding="utf-8")

    print(f"Generated {len(techniques)} AI suggested detections in {OUT_DIR}")


if __name__ == "__main__":
    main()
