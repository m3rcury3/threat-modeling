---
detection_id: DET-AI-0454
title: AI Suggested Detection - T1558.001 Golden Ticket
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
  - T1558.001
mitre_detection_strategies:
  - DET0144
coverage_gaps: []
---

# [DET-AI-0454] AI Suggested Detection - T1558.001 Golden Ticket

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0454 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1558.001 - Golden Ticket |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0144 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1558.001 (Golden Ticket).

## Detection Hypothesis

Detect behavior consistent with technique T1558.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1558.001 - Golden Ticket
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1558.001](https://attack.mitre.org/techniques/T1558/001/)
- [MITRE Detection Strategy DET0144](https://attack.mitre.org/detectionstrategies/DET0144)
