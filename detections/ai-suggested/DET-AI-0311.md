---
detection_id: DET-AI-0311
title: AI Suggested Detection - T1486 Data Encrypted for Impact
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
  - TA0040
mitre_techniques:
  - T1486
mitre_detection_strategies:
  - DET0215
coverage_gaps: []
---

# [DET-AI-0311] AI Suggested Detection - T1486 Data Encrypted for Impact

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0311 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1486 - Data Encrypted for Impact |
| **MITRE Tactics** | TA0040 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0215 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1486 (Data Encrypted for Impact).

## Detection Hypothesis

Detect behavior consistent with technique T1486 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1486 - Data Encrypted for Impact
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1486](https://attack.mitre.org/techniques/T1486/)
- [MITRE Detection Strategy DET0215](https://attack.mitre.org/detectionstrategies/DET0215)
