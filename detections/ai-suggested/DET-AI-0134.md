---
detection_id: DET-AI-0134
title: AI Suggested Detection - T1069.002 Domain Groups
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
  - TA0007
mitre_techniques:
  - T1069.002
mitre_detection_strategies:
  - DET0360
coverage_gaps: []
---

# [DET-AI-0134] AI Suggested Detection - T1069.002 Domain Groups

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0134 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1069.002 - Domain Groups |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0360 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1069.002 (Domain Groups).

## Detection Hypothesis

Detect behavior consistent with technique T1069.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1069.002 - Domain Groups
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1069.002](https://attack.mitre.org/techniques/T1069/002/)
- [MITRE Detection Strategy DET0360](https://attack.mitre.org/detectionstrategies/DET0360)
