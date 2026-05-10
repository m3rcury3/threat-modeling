---
detection_id: DET-AI-0261
title: AI Suggested Detection - T1205.001 Port Knocking
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
  - TA0003
  - TA0005
  - TA0011
mitre_techniques:
  - T1205.001
mitre_detection_strategies:
  - DET0302
coverage_gaps: []
---

# [DET-AI-0261] AI Suggested Detection - T1205.001 Port Knocking

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0261 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1205.001 - Port Knocking |
| **MITRE Tactics** | TA0003, TA0005, TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0302 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1205.001 (Port Knocking).

## Detection Hypothesis

Detect behavior consistent with technique T1205.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1205.001 - Port Knocking
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1205.001](https://attack.mitre.org/techniques/T1205/001/)
- [MITRE Detection Strategy DET0302](https://attack.mitre.org/detectionstrategies/DET0302)
