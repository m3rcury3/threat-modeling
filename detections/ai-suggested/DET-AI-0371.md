---
detection_id: DET-AI-0371
title: AI Suggested Detection - T1546.003 Windows Management Instrumentation Event Subscription
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
  - TA0004
mitre_techniques:
  - T1546.003
mitre_detection_strategies:
  - DET0086
coverage_gaps: []
---

# [DET-AI-0371] AI Suggested Detection - T1546.003 Windows Management Instrumentation Event Subscription

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0371 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1546.003 - Windows Management Instrumentation Event Subscription |
| **MITRE Tactics** | TA0003, TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0086 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1546.003 (Windows Management Instrumentation Event Subscription).

## Detection Hypothesis

Detect behavior consistent with technique T1546.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1546.003 - Windows Management Instrumentation Event Subscription
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1546.003](https://attack.mitre.org/techniques/T1546/003/)
- [MITRE Detection Strategy DET0086](https://attack.mitre.org/detectionstrategies/DET0086)
