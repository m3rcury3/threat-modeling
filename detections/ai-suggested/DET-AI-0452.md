---
detection_id: DET-AI-0452
title: AI Suggested Detection - T1557.004 Evil Twin
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
  - TA0009
mitre_techniques:
  - T1557.004
mitre_detection_strategies:
  - DET0379
coverage_gaps: []
---

# [DET-AI-0452] AI Suggested Detection - T1557.004 Evil Twin

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0452 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1557.004 - Evil Twin |
| **MITRE Tactics** | TA0006, TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0379 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1557.004 (Evil Twin).

## Detection Hypothesis

Detect behavior consistent with technique T1557.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1557.004 - Evil Twin
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1557.004](https://attack.mitre.org/techniques/T1557/004/)
- [MITRE Detection Strategy DET0379](https://attack.mitre.org/detectionstrategies/DET0379)
