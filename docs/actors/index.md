# Threat Actors

This section is now sourced from live MITRE ATT&CK data and local detection metadata.

## Live Snapshot

<div id="actors-meta">Loading...</div>

## Mapped Detections Filter

<label>Group Search:
  <input type="text" id="actors-group-search" placeholder="Search Group ID, name, aliases, keywords">
</label>

<div id="actors-filter-summary">Loading...</div>

## All MITRE Groups

<div id="actors-groups-table">Loading...</div>

## Overall Detection Statistics Per Tactic

<div id="actors-tactic-stats-table">Loading...</div>

## How Actor Mapping Works

- Techniques in local detections are mapped to MITRE ATT&CK Groups and Software
- Group and software relationships are read from the latest MITRE STIX feed
- Results are published to `docs/data/mitre_live_mapping.json`

## View Live Actor Coverage

- Open [Live ATT&CK Mapping](../dashboards/live-mapping.md)
- In the **Groups Coverage** table, each group shows:
  - mapped techniques
  - mapped local detections

## Refresh from MITRE

Use the workflow run button to refresh repository data:

- [Refresh MITRE ATT&CK Data](https://github.com/m3rcury3/threat-modeling/actions/workflows/refresh-mitre-data.yml)

After running the workflow, the site will include updated group and software mappings based on current MITRE content.
