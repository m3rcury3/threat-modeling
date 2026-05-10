---
detection_id: DET-AI-0202
title: AI Suggested Detection - T1114.003 Email Forwarding Rule
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1114.003
mitre_detection_strategies:
  - DET0576
coverage_gaps: []
---

# [DET-AI-0202] AI Suggested Detection - T1114.003 Email Forwarding Rule

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0202 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1114.003 - Email Forwarding Rule |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0576 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1114.003 (Email Forwarding Rule).

## Detection Hypothesis

Detect behavior consistent with technique T1114.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1114.003 - Email Forwarding Rule
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1114.003](https://attack.mitre.org/techniques/T1114/003/)
- [MITRE Detection Strategy DET0576](https://attack.mitre.org/detectionstrategies/DET0576)
