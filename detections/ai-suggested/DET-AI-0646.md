---
detection_id: DET-AI-0646
title: AI Suggested Detection - T1614.001 System Language Discovery
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
  - TA0007
mitre_techniques:
  - T1614.001
mitre_detection_strategies:
  - DET0565
coverage_gaps: []
---

# [DET-AI-0646] AI Suggested Detection - T1614.001 System Language Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0646 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1614.001 - System Language Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0565 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1614.001 (System Language Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1614.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1614.001 - System Language Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1614.001](https://attack.mitre.org/techniques/T1614/001/)
- [MITRE Detection Strategy DET0565](https://attack.mitre.org/detectionstrategies/DET0565)
