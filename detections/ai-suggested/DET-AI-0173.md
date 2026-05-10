---
detection_id: DET-AI-0173
title: AI Suggested Detection - T1091 Replication Through Removable Media
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
  - TA0001
  - TA0008
mitre_techniques:
  - T1091
mitre_detection_strategies:
  - DET0301
coverage_gaps: []
---

# [DET-AI-0173] AI Suggested Detection - T1091 Replication Through Removable Media

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0173 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1091 - Replication Through Removable Media |
| **MITRE Tactics** | TA0001, TA0008 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0301 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1091 (Replication Through Removable Media).

## Detection Hypothesis

Detect behavior consistent with technique T1091 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1091 - Replication Through Removable Media
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1091](https://attack.mitre.org/techniques/T1091/)
- [MITRE Detection Strategy DET0301](https://attack.mitre.org/detectionstrategies/DET0301)
