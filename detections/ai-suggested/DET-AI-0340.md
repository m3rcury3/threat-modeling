---
detection_id: DET-AI-0340
title: AI Suggested Detection - T1505.005 Terminal Services DLL
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
mitre_techniques:
  - T1505.005
mitre_detection_strategies:
  - DET0212
coverage_gaps: []
---

# [DET-AI-0340] AI Suggested Detection - T1505.005 Terminal Services DLL

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0340 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1505.005 - Terminal Services DLL |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0212 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1505.005 (Terminal Services DLL).

## Detection Hypothesis

Detect behavior consistent with technique T1505.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1505.005 - Terminal Services DLL
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1505.005](https://attack.mitre.org/techniques/T1505/005/)
- [MITRE Detection Strategy DET0212](https://attack.mitre.org/detectionstrategies/DET0212)
