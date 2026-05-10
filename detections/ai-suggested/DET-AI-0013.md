---
detection_id: DET-AI-0013
title: AI Suggested Detection - T1003.008 /etc/passwd and /etc/shadow
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
  - T1003.008
mitre_detection_strategies:
  - DET0446
coverage_gaps: []
---

# [DET-AI-0013] AI Suggested Detection - T1003.008 /etc/passwd and /etc/shadow

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0013 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1003.008 - /etc/passwd and /etc/shadow |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0446 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1003.008 (/etc/passwd and /etc/shadow).

## Detection Hypothesis

Detect behavior consistent with technique T1003.008 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1003.008 - /etc/passwd and /etc/shadow
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1003.008](https://attack.mitre.org/techniques/T1003/008/)
- [MITRE Detection Strategy DET0446](https://attack.mitre.org/detectionstrategies/DET0446)
