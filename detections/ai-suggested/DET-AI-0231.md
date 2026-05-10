---
detection_id: DET-AI-0231
title: AI Suggested Detection - T1137.002 Office Test
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
mitre_techniques:
  - T1137.002
mitre_detection_strategies:
  - DET0315
coverage_gaps: []
---

# [DET-AI-0231] AI Suggested Detection - T1137.002 Office Test

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0231 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1137.002 - Office Test |
| **MITRE Tactics** | TA0003 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0315 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1137.002 (Office Test).

## Detection Hypothesis

Detect behavior consistent with technique T1137.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1137.002 - Office Test
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1137.002](https://attack.mitre.org/techniques/T1137/002/)
- [MITRE Detection Strategy DET0315](https://attack.mitre.org/detectionstrategies/DET0315)
