---
detection_id: DET-AI-0156
title: AI Suggested Detection - T1078.001 Default Accounts
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
  - TA0001
  - TA0003
  - TA0004
  - TA0005
mitre_techniques:
  - T1078.001
mitre_detection_strategies:
  - DET0465
coverage_gaps: []
---

# [DET-AI-0156] AI Suggested Detection - T1078.001 Default Accounts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0156 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1078.001 - Default Accounts |
| **MITRE Tactics** | TA0001, TA0003, TA0004, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0465 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1078.001 (Default Accounts).

## Detection Hypothesis

Detect behavior consistent with technique T1078.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1078.001 - Default Accounts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1078.001](https://attack.mitre.org/techniques/T1078/001/)
- [MITRE Detection Strategy DET0465](https://attack.mitre.org/detectionstrategies/DET0465)
