---
detection_id: DET-AI-0084
title: AI Suggested Detection - T1047 Windows Management Instrumentation
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
  - TA0002
mitre_techniques:
  - T1047
mitre_detection_strategies:
  - DET0364
coverage_gaps: []
---

# [DET-AI-0084] AI Suggested Detection - T1047 Windows Management Instrumentation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0084 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1047 - Windows Management Instrumentation |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0364 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1047 (Windows Management Instrumentation).

## Detection Hypothesis

Detect behavior consistent with technique T1047 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1047 - Windows Management Instrumentation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1047](https://attack.mitre.org/techniques/T1047/)
- [MITRE Detection Strategy DET0364](https://attack.mitre.org/detectionstrategies/DET0364)
