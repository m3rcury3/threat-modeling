---
detection_id: DET-AI-0679
title: AI Suggested Detection - T1683.002 Audio-Visual Content
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
  - TA0042
mitre_techniques:
  - T1683.002
mitre_detection_strategies:
  - DET0918
coverage_gaps: []
---

# [DET-AI-0679] AI Suggested Detection - T1683.002 Audio-Visual Content

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0679 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1683.002 - Audio-Visual Content |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0918 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1683.002 (Audio-Visual Content).

## Detection Hypothesis

Detect behavior consistent with technique T1683.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1683.002 - Audio-Visual Content
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1683.002](https://attack.mitre.org/techniques/T1683/002/)
- [MITRE Detection Strategy DET0918](https://attack.mitre.org/detectionstrategies/DET0918)
