---
detection_id: DET-AI-0305
title: AI Suggested Detection - T1482 Domain Trust Discovery
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
  - T1482
mitre_detection_strategies:
  - DET0007
coverage_gaps: []
---

# [DET-AI-0305] AI Suggested Detection - T1482 Domain Trust Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0305 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1482 - Domain Trust Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0007 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1482 (Domain Trust Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1482 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1482 - Domain Trust Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1482](https://attack.mitre.org/techniques/T1482/)
- [MITRE Detection Strategy DET0007](https://attack.mitre.org/detectionstrategies/DET0007)
