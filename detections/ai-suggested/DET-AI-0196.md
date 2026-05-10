---
detection_id: DET-AI-0196
title: AI Suggested Detection - T1111 Multi-Factor Authentication Interception
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
  - T1111
mitre_detection_strategies:
  - DET0246
coverage_gaps: []
---

# [DET-AI-0196] AI Suggested Detection - T1111 Multi-Factor Authentication Interception

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0196 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1111 - Multi-Factor Authentication Interception |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0246 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1111 (Multi-Factor Authentication Interception).

## Detection Hypothesis

Detect behavior consistent with technique T1111 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1111 - Multi-Factor Authentication Interception
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1111](https://attack.mitre.org/techniques/T1111/)
- [MITRE Detection Strategy DET0246](https://attack.mitre.org/detectionstrategies/DET0246)
