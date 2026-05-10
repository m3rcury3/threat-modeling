---
detection_id: DET-AI-0630
title: AI Suggested Detection - T1606 Forge Web Credentials
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
  - TA0006
mitre_techniques:
  - T1606
mitre_detection_strategies:
  - DET0260
coverage_gaps: []
---

# [DET-AI-0630] AI Suggested Detection - T1606 Forge Web Credentials

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0630 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1606 - Forge Web Credentials |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0260 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1606 (Forge Web Credentials).

## Detection Hypothesis

Detect behavior consistent with technique T1606 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1606 - Forge Web Credentials
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1606](https://attack.mitre.org/techniques/T1606/)
- [MITRE Detection Strategy DET0260](https://attack.mitre.org/detectionstrategies/DET0260)
