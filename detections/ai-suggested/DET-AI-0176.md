---
detection_id: DET-AI-0176
title: AI Suggested Detection - T1098 Account Manipulation
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0004
mitre_techniques:
  - T1098
mitre_detection_strategies:
  - DET0096
coverage_gaps: []
---

# [DET-AI-0176] AI Suggested Detection - T1098 Account Manipulation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0176 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1098 - Account Manipulation |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0096 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1098 (Account Manipulation).

## Detection Hypothesis

Detect behavior consistent with technique T1098 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1098 - Account Manipulation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1098](https://attack.mitre.org/techniques/T1098/)
- [MITRE Detection Strategy DET0096](https://attack.mitre.org/detectionstrategies/DET0096)
