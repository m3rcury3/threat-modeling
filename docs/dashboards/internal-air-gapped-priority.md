# Internal & Air-Gapped Priority

This dashboard ranks detections that protect internal or air-gapped environments so the SOC can implement them in order.

## Refresh

<button class="md-button" id="refresh-priority-view-btn" type="button">Refresh View</button>

The list is sorted by a documented priority score that favors detections that still need implementation and are most relevant to internal or air-gapped environments.

## Priority Rules

- Detections are included when `network_applicability` contains `both` or `air_gapped`.
- Higher priority goes to detections that are still `Planned`, `AI Suggested`, or `In Testing`.
- Detection families mapped to `host`, `internal-network`, `access-control`, and `self-monitoring` are ranked ahead of broader application or intelligence-only detections.
- Tactics are weighted in reverse kill chain order to prioritize detecting threats already operating within the network: `Exfiltration` (TA0040) and `Collection` (TA0011) score highest, while `Reconnaissance` (TA0001) and `Resource Development` (TA0002) score lowest. This approach assumes the threat actor has already passed the perimeter and focuses on detecting active compromise.

## Snapshot

<div id="priority-meta">Loading...</div>

## Ranked Detections

<div id="priority-table">Loading...</div>