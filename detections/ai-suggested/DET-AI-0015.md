---
detection_id: DET-AI-0015
title: AI Suggested Detection - T1006 Direct Volume Access
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
  - T1006
mitre_detection_strategies:
  - DET0426
coverage_gaps: []
---

# [DET-AI-0015] AI Suggested Detection - T1006 Direct Volume Access

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0015 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1006 - Direct Volume Access |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0426 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1006 (Direct Volume Access).

## Detection Hypothesis

Detect behavior consistent with technique T1006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1006 - Direct Volume Access
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1006](https://attack.mitre.org/techniques/T1006/)
- [MITRE Detection Strategy DET0426](https://attack.mitre.org/detectionstrategies/DET0426)
