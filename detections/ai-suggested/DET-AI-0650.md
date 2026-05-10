---
detection_id: DET-AI-0650
title: AI Suggested Detection - T1621 Multi-Factor Authentication Request Generation
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
mitre_techniques:
  - T1621
mitre_detection_strategies:
  - DET0160
coverage_gaps: []
---

# [DET-AI-0650] AI Suggested Detection - T1621 Multi-Factor Authentication Request Generation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0650 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1621 - Multi-Factor Authentication Request Generation |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0160 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1621 (Multi-Factor Authentication Request Generation).

## Detection Hypothesis

Detect behavior consistent with technique T1621 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1621 - Multi-Factor Authentication Request Generation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1621](https://attack.mitre.org/techniques/T1621/)
- [MITRE Detection Strategy DET0160](https://attack.mitre.org/detectionstrategies/DET0160)
