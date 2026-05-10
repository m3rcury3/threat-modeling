---
detection_id: DET-AI-0279
title: AI Suggested Detection - T1218.001 Compiled HTML File
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
  - T1218.001
mitre_detection_strategies:
  - DET0342
coverage_gaps: []
---

# [DET-AI-0279] AI Suggested Detection - T1218.001 Compiled HTML File

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0279 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1218.001 - Compiled HTML File |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0342 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1218.001 (Compiled HTML File).

## Detection Hypothesis

Detect behavior consistent with technique T1218.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1218.001 - Compiled HTML File
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1218.001](https://attack.mitre.org/techniques/T1218/001/)
- [MITRE Detection Strategy DET0342](https://attack.mitre.org/detectionstrategies/DET0342)
