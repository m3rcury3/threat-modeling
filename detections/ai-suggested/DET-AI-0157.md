---
detection_id: DET-AI-0157
title: AI Suggested Detection - T1078.002 Domain Accounts
threat_actors: []
category: application
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
  - T1078.002
mitre_detection_strategies:
  - DET0210
coverage_gaps: []
---

# [DET-AI-0157] AI Suggested Detection - T1078.002 Domain Accounts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0157 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1078.002 - Domain Accounts |
| **MITRE Tactics** | TA0001, TA0003, TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0210 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1078.002 (Domain Accounts).

## Detection Hypothesis

Detect behavior consistent with technique T1078.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1078.002 - Domain Accounts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1078.002](https://attack.mitre.org/techniques/T1078/002/)
- [MITRE Detection Strategy DET0210](https://attack.mitre.org/detectionstrategies/DET0210)
