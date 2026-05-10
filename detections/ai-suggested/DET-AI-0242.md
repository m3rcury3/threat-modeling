---
detection_id: DET-AI-0242
title: AI Suggested Detection - T1189 Drive-by Compromise
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
  - TA0001
mitre_techniques:
  - T1189
mitre_detection_strategies:
  - DET0176
coverage_gaps: []
---

# [DET-AI-0242] AI Suggested Detection - T1189 Drive-by Compromise

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0242 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1189 - Drive-by Compromise |
| **MITRE Tactics** | TA0001 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0176 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1189 (Drive-by Compromise).

## Detection Hypothesis

Detect behavior consistent with technique T1189 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1189 - Drive-by Compromise
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1189](https://attack.mitre.org/techniques/T1189/)
- [MITRE Detection Strategy DET0176](https://attack.mitre.org/detectionstrategies/DET0176)
