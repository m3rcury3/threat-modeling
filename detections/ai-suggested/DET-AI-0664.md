---
detection_id: DET-AI-0664
title: AI Suggested Detection - T1667 Email Bombing
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
  - TA0040
mitre_techniques:
  - T1667
mitre_detection_strategies:
  - DET0355
coverage_gaps: []
---

# [DET-AI-0664] AI Suggested Detection - T1667 Email Bombing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0664 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1667 - Email Bombing |
| **MITRE Tactics** | TA0040 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0355 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1667 (Email Bombing).

## Detection Hypothesis

Detect behavior consistent with technique T1667 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1667 - Email Bombing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1667](https://attack.mitre.org/techniques/T1667/)
- [MITRE Detection Strategy DET0355](https://attack.mitre.org/detectionstrategies/DET0355)
