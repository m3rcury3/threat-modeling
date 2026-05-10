---
detection_id: DET-AI-0184
title: AI Suggested Detection - T1102 Web Service
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
  - TA0011
mitre_techniques:
  - T1102
mitre_detection_strategies:
  - DET0425
coverage_gaps: []
---

# [DET-AI-0184] AI Suggested Detection - T1102 Web Service

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0184 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1102 - Web Service |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0425 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1102 (Web Service).

## Detection Hypothesis

Detect behavior consistent with technique T1102 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1102 - Web Service
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1102](https://attack.mitre.org/techniques/T1102/)
- [MITRE Detection Strategy DET0425](https://attack.mitre.org/detectionstrategies/DET0425)
