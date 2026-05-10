---
detection_id: DET-AI-0532
title: AI Suggested Detection - T1578.003 Delete Cloud Instance
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
  - TA0112
mitre_techniques:
  - T1578.003
mitre_detection_strategies:
  - DET0084
coverage_gaps: []
---

# [DET-AI-0532] AI Suggested Detection - T1578.003 Delete Cloud Instance

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0532 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1578.003 - Delete Cloud Instance |
| **MITRE Tactics** | TA0112 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0084 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1578.003 (Delete Cloud Instance).

## Detection Hypothesis

Detect behavior consistent with technique T1578.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1578.003 - Delete Cloud Instance
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1578.003](https://attack.mitre.org/techniques/T1578/003/)
- [MITRE Detection Strategy DET0084](https://attack.mitre.org/detectionstrategies/DET0084)
