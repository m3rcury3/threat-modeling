---
detection_id: DET-AI-0419
title: AI Suggested Detection - T1552.005 Cloud Instance Metadata API
threat_actors: []
category: application
speed_framework:
  - application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1552.005
mitre_detection_strategies:
  - DET0001
coverage_gaps: []
---

# [DET-AI-0419] AI Suggested Detection - T1552.005 Cloud Instance Metadata API

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0419 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1552.005 - Cloud Instance Metadata API |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0001 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1552.005 (Cloud Instance Metadata API).

## Detection Hypothesis

Detect behavior consistent with technique T1552.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1552.005 - Cloud Instance Metadata API
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1552.005](https://attack.mitre.org/techniques/T1552/005/)
- [MITRE Detection Strategy DET0001](https://attack.mitre.org/detectionstrategies/DET0001)
