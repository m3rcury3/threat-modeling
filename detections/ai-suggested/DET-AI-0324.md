---
detection_id: DET-AI-0324
title: AI Suggested Detection - T1497.001 System Checks
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
  - TA0005
  - TA0007
mitre_techniques:
  - T1497.001
mitre_detection_strategies:
  - DET0168
coverage_gaps: []
---

# [DET-AI-0324] AI Suggested Detection - T1497.001 System Checks

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0324 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1497.001 - System Checks |
| **MITRE Tactics** | TA0005, TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0168 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1497.001 (System Checks).

## Detection Hypothesis

Detect behavior consistent with technique T1497.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1497.001 - System Checks
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1497.001](https://attack.mitre.org/techniques/T1497/001/)
- [MITRE Detection Strategy DET0168](https://attack.mitre.org/detectionstrategies/DET0168)
