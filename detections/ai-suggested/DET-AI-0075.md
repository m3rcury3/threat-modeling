---
detection_id: DET-AI-0075
title: AI Suggested Detection - T1037.001 Logon Script (Windows)
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
  - TA0003
  - TA0004
mitre_techniques:
  - T1037.001
mitre_detection_strategies:
  - DET0072
coverage_gaps: []
---

# [DET-AI-0075] AI Suggested Detection - T1037.001 Logon Script (Windows)

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0075 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1037.001 - Logon Script (Windows) |
| **MITRE Tactics** | TA0003, TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0072 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1037.001 (Logon Script (Windows)).

## Detection Hypothesis

Detect behavior consistent with technique T1037.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1037.001 - Logon Script (Windows)
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1037.001](https://attack.mitre.org/techniques/T1037/001/)
- [MITRE Detection Strategy DET0072](https://attack.mitre.org/detectionstrategies/DET0072)
