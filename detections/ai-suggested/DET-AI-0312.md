---
detection_id: DET-AI-0312
title: AI Suggested Detection - T1489 Service Stop
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
  - TA0040
mitre_techniques:
  - T1489
mitre_detection_strategies:
  - DET0021
coverage_gaps: []
---

# [DET-AI-0312] AI Suggested Detection - T1489 Service Stop

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0312 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1489 - Service Stop |
| **MITRE Tactics** | TA0040 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0021 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1489 (Service Stop).

## Detection Hypothesis

Detect behavior consistent with technique T1489 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1489 - Service Stop
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1489](https://attack.mitre.org/techniques/T1489/)
- [MITRE Detection Strategy DET0021](https://attack.mitre.org/detectionstrategies/DET0021)
