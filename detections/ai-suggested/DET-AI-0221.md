---
detection_id: DET-AI-0221
title: AI Suggested Detection - T1134.003 Make and Impersonate Token
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
  - T1134.003
mitre_detection_strategies:
  - DET0498
coverage_gaps: []
---

# [DET-AI-0221] AI Suggested Detection - T1134.003 Make and Impersonate Token

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0221 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1134.003 - Make and Impersonate Token |
| **MITRE Tactics** | TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0498 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1134.003 (Make and Impersonate Token).

## Detection Hypothesis

Detect behavior consistent with technique T1134.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1134.003 - Make and Impersonate Token
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1134.003](https://attack.mitre.org/techniques/T1134/003/)
- [MITRE Detection Strategy DET0498](https://attack.mitre.org/detectionstrategies/DET0498)
