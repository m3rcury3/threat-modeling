---
detection_id: DET-AI-0413
title: AI Suggested Detection - T1550.004 Web Session Cookie
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
  - TA0008
mitre_techniques:
  - T1550.004
mitre_detection_strategies:
  - DET0074
coverage_gaps: []
---

# [DET-AI-0413] AI Suggested Detection - T1550.004 Web Session Cookie

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0413 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1550.004 - Web Session Cookie |
| **MITRE Tactics** | TA0008 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0074 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1550.004 (Web Session Cookie).

## Detection Hypothesis

Detect behavior consistent with technique T1550.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1550.004 - Web Session Cookie
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1550.004](https://attack.mitre.org/techniques/T1550/004/)
- [MITRE Detection Strategy DET0074](https://attack.mitre.org/detectionstrategies/DET0074)
