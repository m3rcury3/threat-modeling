---
detection_id: DET-AI-0642
title: AI Suggested Detection - T1611 Escape to Host
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
  - TA0004
mitre_techniques:
  - T1611
mitre_detection_strategies:
  - DET0219
coverage_gaps: []
---

# [DET-AI-0642] AI Suggested Detection - T1611 Escape to Host

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0642 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1611 - Escape to Host |
| **MITRE Tactics** | TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0219 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1611 (Escape to Host).

## Detection Hypothesis

Detect behavior consistent with technique T1611 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1611 - Escape to Host
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1611](https://attack.mitre.org/techniques/T1611/)
- [MITRE Detection Strategy DET0219](https://attack.mitre.org/detectionstrategies/DET0219)
