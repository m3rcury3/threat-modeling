---
detection_id: DET-AI-0167
title: AI Suggested Detection - T1087.004 Cloud Account
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0007
mitre_techniques:
  - T1087.004
mitre_detection_strategies:
  - DET0386
coverage_gaps: []
---

# [DET-AI-0167] AI Suggested Detection - T1087.004 Cloud Account

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0167 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1087.004 - Cloud Account |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0386 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1087.004 (Cloud Account).

## Detection Hypothesis

Detect behavior consistent with technique T1087.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1087.004 - Cloud Account
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1087.004](https://attack.mitre.org/techniques/T1087/004/)
- [MITRE Detection Strategy DET0386](https://attack.mitre.org/detectionstrategies/DET0386)
