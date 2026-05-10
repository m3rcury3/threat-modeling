---
detection_id: DET-AI-0191
title: AI Suggested Detection - T1110 Brute Force
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
  - T1110
mitre_detection_strategies:
  - DET0463
coverage_gaps: []
---

# [DET-AI-0191] AI Suggested Detection - T1110 Brute Force

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0191 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1110 - Brute Force |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0463 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1110 (Brute Force).

## Detection Hypothesis

Detect behavior consistent with technique T1110 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1110 - Brute Force
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1110](https://attack.mitre.org/techniques/T1110/)
- [MITRE Detection Strategy DET0463](https://attack.mitre.org/detectionstrategies/DET0463)
