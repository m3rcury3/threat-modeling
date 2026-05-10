---
detection_id: DET-AI-0464
title: AI Suggested Detection - T1560.001 Archive via Utility
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
  - T1560.001
mitre_detection_strategies:
  - DET0298
coverage_gaps: []
---

# [DET-AI-0464] AI Suggested Detection - T1560.001 Archive via Utility

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0464 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1560.001 - Archive via Utility |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0298 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1560.001 (Archive via Utility).

## Detection Hypothesis

Detect behavior consistent with technique T1560.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1560.001 - Archive via Utility
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1560.001](https://attack.mitre.org/techniques/T1560/001/)
- [MITRE Detection Strategy DET0298](https://attack.mitre.org/detectionstrategies/DET0298)
