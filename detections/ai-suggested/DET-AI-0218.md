---
detection_id: DET-AI-0218
title: AI Suggested Detection - T1134 Access Token Manipulation
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
  - TA0005
mitre_techniques:
  - T1134
mitre_detection_strategies:
  - DET0283
coverage_gaps: []
---

# [DET-AI-0218] AI Suggested Detection - T1134 Access Token Manipulation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0218 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1134 - Access Token Manipulation |
| **MITRE Tactics** | TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0283 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1134 (Access Token Manipulation).

## Detection Hypothesis

Detect behavior consistent with technique T1134 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1134 - Access Token Manipulation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1134](https://attack.mitre.org/techniques/T1134/)
- [MITRE Detection Strategy DET0283](https://attack.mitre.org/detectionstrategies/DET0283)
