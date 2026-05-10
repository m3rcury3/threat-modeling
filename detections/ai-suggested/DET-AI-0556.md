---
detection_id: DET-AI-0556
title: AI Suggested Detection - T1585.002 Email Accounts
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
  - TA0042
mitre_techniques:
  - T1585.002
mitre_detection_strategies:
  - DET0835
coverage_gaps: []
---

# [DET-AI-0556] AI Suggested Detection - T1585.002 Email Accounts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0556 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1585.002 - Email Accounts |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0835 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1585.002 (Email Accounts).

## Detection Hypothesis

Detect behavior consistent with technique T1585.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1585.002 - Email Accounts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1585.002](https://attack.mitre.org/techniques/T1585/002/)
- [MITRE Detection Strategy DET0835](https://attack.mitre.org/detectionstrategies/DET0835)
