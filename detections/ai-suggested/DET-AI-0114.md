---
detection_id: DET-AI-0114
title: AI Suggested Detection - T1056.003 Web Portal Capture
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
  - TA0006
  - TA0009
mitre_techniques:
  - T1056.003
mitre_detection_strategies:
  - DET0480
coverage_gaps: []
---

# [DET-AI-0114] AI Suggested Detection - T1056.003 Web Portal Capture

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0114 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1056.003 - Web Portal Capture |
| **MITRE Tactics** | TA0006, TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0480 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1056.003 (Web Portal Capture).

## Detection Hypothesis

Detect behavior consistent with technique T1056.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1056.003 - Web Portal Capture
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1056.003](https://attack.mitre.org/techniques/T1056/003/)
- [MITRE Detection Strategy DET0480](https://attack.mitre.org/detectionstrategies/DET0480)
