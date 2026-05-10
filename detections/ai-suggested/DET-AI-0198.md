---
detection_id: DET-AI-0198
title: AI Suggested Detection - T1113 Screen Capture
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
  - T1113
mitre_detection_strategies:
  - DET0346
coverage_gaps: []
---

# [DET-AI-0198] AI Suggested Detection - T1113 Screen Capture

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0198 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1113 - Screen Capture |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0346 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1113 (Screen Capture).

## Detection Hypothesis

Detect behavior consistent with technique T1113 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1113 - Screen Capture
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1113](https://attack.mitre.org/techniques/T1113/)
- [MITRE Detection Strategy DET0346](https://attack.mitre.org/detectionstrategies/DET0346)
