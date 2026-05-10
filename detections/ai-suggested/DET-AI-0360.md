---
detection_id: DET-AI-0360
title: AI Suggested Detection - T1542.004 ROMMONkit
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
  - TA0003
  - TA0005
mitre_techniques:
  - T1542.004
mitre_detection_strategies:
  - DET0175
coverage_gaps: []
---

# [DET-AI-0360] AI Suggested Detection - T1542.004 ROMMONkit

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0360 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1542.004 - ROMMONkit |
| **MITRE Tactics** | TA0003, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0175 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1542.004 (ROMMONkit).

## Detection Hypothesis

Detect behavior consistent with technique T1542.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1542.004 - ROMMONkit
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1542.004](https://attack.mitre.org/techniques/T1542/004/)
- [MITRE Detection Strategy DET0175](https://attack.mitre.org/detectionstrategies/DET0175)
