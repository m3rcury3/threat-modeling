---
detection_id: DET-AI-0676
title: AI Suggested Detection - T1682 Query Public AI Services
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
  - TA0043
mitre_techniques:
  - T1682
mitre_detection_strategies:
  - DET0919
coverage_gaps: []
---

# [DET-AI-0676] AI Suggested Detection - T1682 Query Public AI Services

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0676 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1682 - Query Public AI Services |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0919 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1682 (Query Public AI Services).

## Detection Hypothesis

Detect behavior consistent with technique T1682 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1682 - Query Public AI Services
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1682](https://attack.mitre.org/techniques/T1682/)
- [MITRE Detection Strategy DET0919](https://attack.mitre.org/detectionstrategies/DET0919)
