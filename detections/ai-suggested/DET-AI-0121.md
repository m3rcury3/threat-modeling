---
detection_id: DET-AI-0121
title: AI Suggested Detection - T1059.004 Unix Shell
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
  - T1059.004
mitre_detection_strategies:
  - DET0384
coverage_gaps: []
---

# [DET-AI-0121] AI Suggested Detection - T1059.004 Unix Shell

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0121 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1059.004 - Unix Shell |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0384 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1059.004 (Unix Shell).

## Detection Hypothesis

Detect behavior consistent with technique T1059.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1059.004 - Unix Shell
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1059.004](https://attack.mitre.org/techniques/T1059/004/)
- [MITRE Detection Strategy DET0384](https://attack.mitre.org/detectionstrategies/DET0384)
