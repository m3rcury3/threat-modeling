---
detection_id: DET-AI-0408
title: AI Suggested Detection - T1548.006 TCC Manipulation
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
  - TA0004
mitre_techniques:
  - T1548.006
mitre_detection_strategies:
  - DET0534
coverage_gaps: []
---

# [DET-AI-0408] AI Suggested Detection - T1548.006 TCC Manipulation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0408 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1548.006 - TCC Manipulation |
| **MITRE Tactics** | TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0534 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1548.006 (TCC Manipulation).

## Detection Hypothesis

Detect behavior consistent with technique T1548.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1548.006 - TCC Manipulation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1548.006](https://attack.mitre.org/techniques/T1548/006/)
- [MITRE Detection Strategy DET0534](https://attack.mitre.org/detectionstrategies/DET0534)
