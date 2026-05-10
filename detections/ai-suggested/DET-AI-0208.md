---
detection_id: DET-AI-0208
title: AI Suggested Detection - T1125 Video Capture
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
  - TA0009
mitre_techniques:
  - T1125
mitre_detection_strategies:
  - DET0197
coverage_gaps: []
---

# [DET-AI-0208] AI Suggested Detection - T1125 Video Capture

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0208 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1125 - Video Capture |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0197 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1125 (Video Capture).

## Detection Hypothesis

Detect behavior consistent with technique T1125 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1125 - Video Capture
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1125](https://attack.mitre.org/techniques/T1125/)
- [MITRE Detection Strategy DET0197](https://attack.mitre.org/detectionstrategies/DET0197)
