---
detection_id: DET-AI-0412
title: AI Suggested Detection - T1550.003 Pass the Ticket
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
  - T1550.003
mitre_detection_strategies:
  - DET0352
coverage_gaps: []
---

# [DET-AI-0412] AI Suggested Detection - T1550.003 Pass the Ticket

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0412 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1550.003 - Pass the Ticket |
| **MITRE Tactics** | TA0008 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0352 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1550.003 (Pass the Ticket).

## Detection Hypothesis

Detect behavior consistent with technique T1550.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1550.003 - Pass the Ticket
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1550.003](https://attack.mitre.org/techniques/T1550/003/)
- [MITRE Detection Strategy DET0352](https://attack.mitre.org/detectionstrategies/DET0352)
