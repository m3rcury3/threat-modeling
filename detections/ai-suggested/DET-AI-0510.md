---
detection_id: DET-AI-0510
title: AI Suggested Detection - T1570 Lateral Tool Transfer
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
  - TA0008
mitre_techniques:
  - T1570
mitre_detection_strategies:
  - DET0183
coverage_gaps: []
---

# [DET-AI-0510] AI Suggested Detection - T1570 Lateral Tool Transfer

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0510 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1570 - Lateral Tool Transfer |
| **MITRE Tactics** | TA0008 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0183 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1570 (Lateral Tool Transfer).

## Detection Hypothesis

Detect behavior consistent with technique T1570 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1570 - Lateral Tool Transfer
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1570](https://attack.mitre.org/techniques/T1570/)
- [MITRE Detection Strategy DET0183](https://attack.mitre.org/detectionstrategies/DET0183)
