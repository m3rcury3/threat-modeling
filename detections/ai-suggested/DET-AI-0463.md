---
detection_id: DET-AI-0463
title: AI Suggested Detection - T1560 Archive Collected Data
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1560
mitre_detection_strategies:
  - DET0526
coverage_gaps: []
---

# [DET-AI-0463] AI Suggested Detection - T1560 Archive Collected Data

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0463 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1560 - Archive Collected Data |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0526 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1560 (Archive Collected Data).

## Detection Hypothesis

Detect behavior consistent with technique T1560 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1560 - Archive Collected Data
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1560](https://attack.mitre.org/techniques/T1560/)
- [MITRE Detection Strategy DET0526](https://attack.mitre.org/detectionstrategies/DET0526)
