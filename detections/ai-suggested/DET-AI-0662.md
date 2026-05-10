---
detection_id: DET-AI-0662
title: AI Suggested Detection - T1665 Hide Infrastructure
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
  - TA0011
mitre_techniques:
  - T1665
mitre_detection_strategies:
  - DET0411
coverage_gaps: []
---

# [DET-AI-0662] AI Suggested Detection - T1665 Hide Infrastructure

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0662 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1665 - Hide Infrastructure |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0411 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1665 (Hide Infrastructure).

## Detection Hypothesis

Detect behavior consistent with technique T1665 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1665 - Hide Infrastructure
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1665](https://attack.mitre.org/techniques/T1665/)
- [MITRE Detection Strategy DET0411](https://attack.mitre.org/detectionstrategies/DET0411)
