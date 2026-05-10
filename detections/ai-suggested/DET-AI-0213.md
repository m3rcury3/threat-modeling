---
detection_id: DET-AI-0213
title: AI Suggested Detection - T1129 Shared Modules
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
  - TA0002
mitre_techniques:
  - T1129
mitre_detection_strategies:
  - DET0018
coverage_gaps: []
---

# [DET-AI-0213] AI Suggested Detection - T1129 Shared Modules

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0213 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1129 - Shared Modules |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0018 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1129 (Shared Modules).

## Detection Hypothesis

Detect behavior consistent with technique T1129 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1129 - Shared Modules
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1129](https://attack.mitre.org/techniques/T1129/)
- [MITRE Detection Strategy DET0018](https://attack.mitre.org/detectionstrategies/DET0018)
