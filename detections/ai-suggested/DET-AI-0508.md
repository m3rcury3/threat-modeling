---
detection_id: DET-AI-0508
title: AI Suggested Detection - T1569.002 Service Execution
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
  - T1569.002
mitre_detection_strategies:
  - DET0421
coverage_gaps: []
---

# [DET-AI-0508] AI Suggested Detection - T1569.002 Service Execution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0508 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1569.002 - Service Execution |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0421 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1569.002 (Service Execution).

## Detection Hypothesis

Detect behavior consistent with technique T1569.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1569.002 - Service Execution
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1569.002](https://attack.mitre.org/techniques/T1569/002/)
- [MITRE Detection Strategy DET0421](https://attack.mitre.org/detectionstrategies/DET0421)
