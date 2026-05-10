---
detection_id: DET-AI-0270
title: AI Suggested Detection - T1213.003 Code Repositories
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
  - TA0009
mitre_techniques:
  - T1213.003
mitre_detection_strategies:
  - DET0263
coverage_gaps: []
---

# [DET-AI-0270] AI Suggested Detection - T1213.003 Code Repositories

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0270 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1213.003 - Code Repositories |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0263 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1213.003 (Code Repositories).

## Detection Hypothesis

Detect behavior consistent with technique T1213.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1213.003 - Code Repositories
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1213.003](https://attack.mitre.org/techniques/T1213/003/)
- [MITRE Detection Strategy DET0263](https://attack.mitre.org/detectionstrategies/DET0263)
