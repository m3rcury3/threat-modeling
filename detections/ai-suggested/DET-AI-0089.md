---
detection_id: DET-AI-0089
title: AI Suggested Detection - T1049 System Network Connections Discovery
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
  - T1049
mitre_detection_strategies:
  - DET0320
coverage_gaps: []
---

# [DET-AI-0089] AI Suggested Detection - T1049 System Network Connections Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0089 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1049 - System Network Connections Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0320 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1049 (System Network Connections Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1049 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1049 - System Network Connections Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1049](https://attack.mitre.org/techniques/T1049/)
- [MITRE Detection Strategy DET0320](https://attack.mitre.org/detectionstrategies/DET0320)
