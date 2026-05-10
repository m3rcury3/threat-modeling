---
detection_id: DET-AI-0204
title: AI Suggested Detection - T1119 Automated Collection
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
  - T1119
mitre_detection_strategies:
  - DET0186
coverage_gaps: []
---

# [DET-AI-0204] AI Suggested Detection - T1119 Automated Collection

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0204 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1119 - Automated Collection |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0186 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1119 (Automated Collection).

## Detection Hypothesis

Detect behavior consistent with technique T1119 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1119 - Automated Collection
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1119](https://attack.mitre.org/techniques/T1119/)
- [MITRE Detection Strategy DET0186](https://attack.mitre.org/detectionstrategies/DET0186)
