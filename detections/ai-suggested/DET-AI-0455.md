---
detection_id: DET-AI-0455
title: AI Suggested Detection - T1558.002 Silver Ticket
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
  - T1558.002
mitre_detection_strategies:
  - DET0241
coverage_gaps: []
---

# [DET-AI-0455] AI Suggested Detection - T1558.002 Silver Ticket

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0455 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1558.002 - Silver Ticket |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0241 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1558.002 (Silver Ticket).

## Detection Hypothesis

Detect behavior consistent with technique T1558.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1558.002 - Silver Ticket
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1558.002](https://attack.mitre.org/techniques/T1558/002/)
- [MITRE Detection Strategy DET0241](https://attack.mitre.org/detectionstrategies/DET0241)
