---
detection_id: DET-AI-0649
title: AI Suggested Detection - T1620 Reflective Code Loading
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
  - T1620
mitre_detection_strategies:
  - DET0300
coverage_gaps: []
---

# [DET-AI-0649] AI Suggested Detection - T1620 Reflective Code Loading

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0649 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1620 - Reflective Code Loading |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0300 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1620 (Reflective Code Loading).

## Detection Hypothesis

Detect behavior consistent with technique T1620 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1620 - Reflective Code Loading
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1620](https://attack.mitre.org/techniques/T1620/)
- [MITRE Detection Strategy DET0300](https://attack.mitre.org/detectionstrategies/DET0300)
