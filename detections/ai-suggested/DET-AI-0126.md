---
detection_id: DET-AI-0126
title: AI Suggested Detection - T1059.009 Cloud API
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
  - TA0002
mitre_techniques:
  - T1059.009
mitre_detection_strategies:
  - DET0078
coverage_gaps: []
---

# [DET-AI-0126] AI Suggested Detection - T1059.009 Cloud API

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0126 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1059.009 - Cloud API |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0078 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1059.009 (Cloud API).

## Detection Hypothesis

Detect behavior consistent with technique T1059.009 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1059.009 - Cloud API
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1059.009](https://attack.mitre.org/techniques/T1059/009/)
- [MITRE Detection Strategy DET0078](https://attack.mitre.org/detectionstrategies/DET0078)
