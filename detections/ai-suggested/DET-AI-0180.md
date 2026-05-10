---
detection_id: DET-AI-0180
title: AI Suggested Detection - T1098.004 SSH Authorized Keys
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
  - T1098.004
mitre_detection_strategies:
  - DET0126
coverage_gaps: []
---

# [DET-AI-0180] AI Suggested Detection - T1098.004 SSH Authorized Keys

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0180 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1098.004 - SSH Authorized Keys |
| **MITRE Tactics** | TA0003, TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0126 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1098.004 (SSH Authorized Keys).

## Detection Hypothesis

Detect behavior consistent with technique T1098.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1098.004 - SSH Authorized Keys
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1098.004](https://attack.mitre.org/techniques/T1098/004/)
- [MITRE Detection Strategy DET0126](https://attack.mitre.org/detectionstrategies/DET0126)
