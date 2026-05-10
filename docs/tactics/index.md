# MITRE ATT&CK Tactics

This section is maintained from live ATT&CK content, not static tactic snapshots.

## Live Snapshot

<div id="tactics-meta">Loading...</div>

## Tactic Search

<label>Tactic Search:
  <input type="text" id="tactics-search" placeholder="Search Tactic ID or name">
</label>

<div id="tactics-filter-summary">Loading...</div>

## All MITRE Tactics and Detection Statistics Per Tactic

<div id="tactics-stats-table">Loading...</div>

## Tactic-First Model

- A single detection may span multiple categories
- Coverage is measured by ATT&CK behavior and phase
- Technique, group, and software relationships come from MITRE STIX

## Live Tactic Coverage

Open [Live ATT&CK Mapping](../dashboards/live-mapping.md) to view:

- tactics mapped to your local detections
- techniques under each tactic
- linked groups and software from MITRE

## Refresh Workflow

Run this workflow whenever you want the latest MITRE updates in-repo:

- [Refresh MITRE ATT&CK Data](https://github.com/m3rcury3/threat-modeling/actions/workflows/refresh-mitre-data.yml)
