---
detection_id: DET-AI-0613
title: AI Suggested Detection - T1597.002 Purchase Technical Data
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
  - TA0043
mitre_techniques:
  - T1597.002
mitre_detection_strategies:
  - DET0880
coverage_gaps: []
---

# [DET-AI-0613] AI Suggested Detection - T1597.002 Purchase Technical Data

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0613 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1597.002 - Purchase Technical Data |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0880 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1597.002 (Purchase Technical Data).

## Detection Hypothesis

Detect behavior consistent with technique T1597.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1597.002 - Purchase Technical Data
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1597.002](https://attack.mitre.org/techniques/T1597/002/)
- [MITRE Detection Strategy DET0880](https://attack.mitre.org/detectionstrategies/DET0880)
