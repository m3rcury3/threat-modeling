---
detection_id: DET-AI-0481
title: AI Suggested Detection - T1564.008 Email Hiding Rules
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1564.008
mitre_detection_strategies:
  - DET0192
coverage_gaps: []
---

# [DET-AI-0481] AI Suggested Detection - T1564.008 Email Hiding Rules

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0481 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1564.008 - Email Hiding Rules |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0192 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1564.008 (Email Hiding Rules).

## Detection Hypothesis

Detect behavior consistent with technique T1564.008 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1564.008 - Email Hiding Rules
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1564.008](https://attack.mitre.org/techniques/T1564/008/)
- [MITRE Detection Strategy DET0192](https://attack.mitre.org/detectionstrategies/DET0192)
