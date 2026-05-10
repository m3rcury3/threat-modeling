---
detection_id: DET-AI-0152
title: AI Suggested Detection - T1074 Data Staged
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
  - T1074
mitre_detection_strategies:
  - DET0014
coverage_gaps: []
---

# [DET-AI-0152] AI Suggested Detection - T1074 Data Staged

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0152 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1074 - Data Staged |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0014 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1074 (Data Staged).

## Detection Hypothesis

Detect behavior consistent with technique T1074 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1074 - Data Staged
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1074](https://attack.mitre.org/techniques/T1074/)
- [MITRE Detection Strategy DET0014](https://attack.mitre.org/detectionstrategies/DET0014)
