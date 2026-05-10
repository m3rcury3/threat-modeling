---
detection_id: DET-AI-0551
title: AI Suggested Detection - T1584.006 Web Services
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
  - T1584.006
mitre_detection_strategies:
  - DET0882
coverage_gaps: []
---

# [DET-AI-0551] AI Suggested Detection - T1584.006 Web Services

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0551 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1584.006 - Web Services |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0882 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1584.006 (Web Services).

## Detection Hypothesis

Detect behavior consistent with technique T1584.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1584.006 - Web Services
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1584.006](https://attack.mitre.org/techniques/T1584/006/)
- [MITRE Detection Strategy DET0882](https://attack.mitre.org/detectionstrategies/DET0882)
