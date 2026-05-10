---
detection_id: DET-AI-0686
title: AI Suggested Detection - T1685.003 Modify or Spoof Tool UI
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
  - TA0112
mitre_techniques:
  - T1685.003
mitre_detection_strategies:
  - DET0311
coverage_gaps: []
---

# [DET-AI-0686] AI Suggested Detection - T1685.003 Modify or Spoof Tool UI

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0686 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1685.003 - Modify or Spoof Tool UI |
| **MITRE Tactics** | TA0112 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0311 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1685.003 (Modify or Spoof Tool UI).

## Detection Hypothesis

Detect behavior consistent with technique T1685.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1685.003 - Modify or Spoof Tool UI
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1685.003](https://attack.mitre.org/techniques/T1685/003/)
- [MITRE Detection Strategy DET0311](https://attack.mitre.org/detectionstrategies/DET0311)
