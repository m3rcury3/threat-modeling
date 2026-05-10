---
detection_id: DET-AI-0096
title: AI Suggested Detection - T1053.006 Systemd Timers
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
  - TA0003
  - TA0004
mitre_techniques:
  - T1053.006
mitre_detection_strategies:
  - DET0231
coverage_gaps: []
---

# [DET-AI-0096] AI Suggested Detection - T1053.006 Systemd Timers

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0096 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1053.006 - Systemd Timers |
| **MITRE Tactics** | TA0002, TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0231 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1053.006 (Systemd Timers).

## Detection Hypothesis

Detect behavior consistent with technique T1053.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1053.006 - Systemd Timers
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1053.006](https://attack.mitre.org/techniques/T1053/006/)
- [MITRE Detection Strategy DET0231](https://attack.mitre.org/detectionstrategies/DET0231)
