---
detection_id: DET-AI-0491
title: AI Suggested Detection - T1565.003 Runtime Data Manipulation
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0040
mitre_techniques:
  - T1565.003
mitre_detection_strategies:
  - DET0391
coverage_gaps: []
---

# [DET-AI-0491] AI Suggested Detection - T1565.003 Runtime Data Manipulation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0491 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1565.003 - Runtime Data Manipulation |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0391 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1565.003 (Runtime Data Manipulation).

## Detection Hypothesis

Detect behavior consistent with technique T1565.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1565.003 - Runtime Data Manipulation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1565.003](https://attack.mitre.org/techniques/T1565/003/)
- [MITRE Detection Strategy DET0391](https://attack.mitre.org/detectionstrategies/DET0391)
