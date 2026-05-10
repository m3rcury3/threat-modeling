---
detection_id: DET-AI-0273
title: AI Suggested Detection - T1213.006 Databases
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
  - TA0009
mitre_techniques:
  - T1213.006
mitre_detection_strategies:
  - DET0242
coverage_gaps: []
---

# [DET-AI-0273] AI Suggested Detection - T1213.006 Databases

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0273 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1213.006 - Databases |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0242 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1213.006 (Databases).

## Detection Hypothesis

Detect behavior consistent with technique T1213.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1213.006 - Databases
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1213.006](https://attack.mitre.org/techniques/T1213/006/)
- [MITRE Detection Strategy DET0242](https://attack.mitre.org/detectionstrategies/DET0242)
