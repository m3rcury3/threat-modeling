---
detection_id: DET-AI-0217
title: AI Suggested Detection - T1133 External Remote Services
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
mitre_techniques:
  - T1133
mitre_detection_strategies:
  - DET0354
coverage_gaps: []
---

# [DET-AI-0217] AI Suggested Detection - T1133 External Remote Services

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0217 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1133 - External Remote Services |
| **MITRE Tactics** | TA0001, TA0003 |
| **MITRE Detection Strategies** | DET0354 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1133 (External Remote Services).

## Detection Hypothesis

Detect behavior consistent with technique T1133 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1133 - External Remote Services
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1133](https://attack.mitre.org/techniques/T1133/)
- [MITRE Detection Strategy DET0354](https://attack.mitre.org/detectionstrategies/DET0354)
