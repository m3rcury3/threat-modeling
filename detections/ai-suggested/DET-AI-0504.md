---
detection_id: DET-AI-0504
title: AI Suggested Detection - T1568.002 Domain Generation Algorithms
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
  - TA0011
mitre_techniques:
  - T1568.002
mitre_detection_strategies:
  - DET0419
coverage_gaps: []
---

# [DET-AI-0504] AI Suggested Detection - T1568.002 Domain Generation Algorithms

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0504 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1568.002 - Domain Generation Algorithms |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0419 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1568.002 (Domain Generation Algorithms).

## Detection Hypothesis

Detect behavior consistent with technique T1568.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1568.002 - Domain Generation Algorithms
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1568.002](https://attack.mitre.org/techniques/T1568/002/)
- [MITRE Detection Strategy DET0419](https://attack.mitre.org/detectionstrategies/DET0419)
