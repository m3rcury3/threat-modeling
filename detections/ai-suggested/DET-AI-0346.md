---
detection_id: DET-AI-0346
title: AI Suggested Detection - T1526 Cloud Service Discovery
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
  - T1526
mitre_detection_strategies:
  - DET0402
coverage_gaps: []
---

# [DET-AI-0346] AI Suggested Detection - T1526 Cloud Service Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0346 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1526 - Cloud Service Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0402 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1526 (Cloud Service Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1526 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1526 - Cloud Service Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1526](https://attack.mitre.org/techniques/T1526/)
- [MITRE Detection Strategy DET0402](https://attack.mitre.org/detectionstrategies/DET0402)
