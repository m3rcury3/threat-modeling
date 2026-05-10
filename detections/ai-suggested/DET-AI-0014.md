---
detection_id: DET-AI-0014
title: AI Suggested Detection - T1005 Data from Local System
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1005
mitre_detection_strategies:
  - DET0380
coverage_gaps: []
---

# [DET-AI-0014] AI Suggested Detection - T1005 Data from Local System

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0014 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1005 - Data from Local System |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0380 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1005 (Data from Local System).

## Detection Hypothesis

Detect behavior consistent with technique T1005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1005 - Data from Local System
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1005](https://attack.mitre.org/techniques/T1005/)
- [MITRE Detection Strategy DET0380](https://attack.mitre.org/detectionstrategies/DET0380)
