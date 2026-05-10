---
detection_id: DET-AI-0068
title: AI Suggested Detection - T1036.007 Double File Extension
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
  - TA0005
mitre_techniques:
  - T1036.007
mitre_detection_strategies:
  - DET0366
coverage_gaps: []
---

# [DET-AI-0068] AI Suggested Detection - T1036.007 Double File Extension

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0068 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1036.007 - Double File Extension |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0366 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1036.007 (Double File Extension).

## Detection Hypothesis

Detect behavior consistent with technique T1036.007 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1036.007 - Double File Extension
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1036.007](https://attack.mitre.org/techniques/T1036/007/)
- [MITRE Detection Strategy DET0366](https://attack.mitre.org/detectionstrategies/DET0366)
