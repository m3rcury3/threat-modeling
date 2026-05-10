---
detection_id: DET-AI-0116
title: AI Suggested Detection - T1057 Process Discovery
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
  - TA0007
mitre_techniques:
  - T1057
mitre_detection_strategies:
  - DET0034
coverage_gaps: []
---

# [DET-AI-0116] AI Suggested Detection - T1057 Process Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0116 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1057 - Process Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0034 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1057 (Process Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1057 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1057 - Process Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1057](https://attack.mitre.org/techniques/T1057/)
- [MITRE Detection Strategy DET0034](https://attack.mitre.org/detectionstrategies/DET0034)
