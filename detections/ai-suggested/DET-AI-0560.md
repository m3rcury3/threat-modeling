---
detection_id: DET-AI-0560
title: AI Suggested Detection - T1586.002 Email Accounts
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0042
mitre_techniques:
  - T1586.002
mitre_detection_strategies:
  - DET0861
coverage_gaps: []
---

# [DET-AI-0560] AI Suggested Detection - T1586.002 Email Accounts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0560 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1586.002 - Email Accounts |
| **MITRE Tactics** | TA0042 |
| **MITRE Detection Strategies** | DET0861 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1586.002 (Email Accounts).

## Detection Hypothesis

Detect behavior consistent with technique T1586.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1586.002 - Email Accounts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1586.002](https://attack.mitre.org/techniques/T1586/002/)
- [MITRE Detection Strategy DET0861](https://attack.mitre.org/detectionstrategies/DET0861)
