---
detection_id: DET-AI-0146
title: AI Suggested Detection - T1071.001 Web Protocols
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
  - T1071.001
mitre_detection_strategies:
  - DET0027
coverage_gaps: []
---

# [DET-AI-0146] AI Suggested Detection - T1071.001 Web Protocols

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0146 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1071.001 - Web Protocols |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0027 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1071.001 (Web Protocols).

## Detection Hypothesis

Detect behavior consistent with technique T1071.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1071.001 - Web Protocols
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1071.001](https://attack.mitre.org/techniques/T1071/001/)
- [MITRE Detection Strategy DET0027](https://attack.mitre.org/detectionstrategies/DET0027)
