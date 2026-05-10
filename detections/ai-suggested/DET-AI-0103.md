---
detection_id: DET-AI-0103
title: AI Suggested Detection - T1055.005 Thread Local Storage
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
  - TA0004
  - TA0005
mitre_techniques:
  - T1055.005
mitre_detection_strategies:
  - DET0467
coverage_gaps: []
---

# [DET-AI-0103] AI Suggested Detection - T1055.005 Thread Local Storage

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0103 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1055.005 - Thread Local Storage |
| **MITRE Tactics** | TA0004, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0467 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1055.005 (Thread Local Storage).

## Detection Hypothesis

Detect behavior consistent with technique T1055.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1055.005 - Thread Local Storage
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1055.005](https://attack.mitre.org/techniques/T1055/005/)
- [MITRE Detection Strategy DET0467](https://attack.mitre.org/detectionstrategies/DET0467)
