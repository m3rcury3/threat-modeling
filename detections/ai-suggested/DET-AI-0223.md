---
detection_id: DET-AI-0223
title: AI Suggested Detection - T1134.005 SID-History Injection
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
  - TA0005
mitre_techniques:
  - T1134.005
mitre_detection_strategies:
  - DET0136
coverage_gaps: []
---

# [DET-AI-0223] AI Suggested Detection - T1134.005 SID-History Injection

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0223 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1134.005 - SID-History Injection |
| **MITRE Tactics** | TA0004, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0136 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1134.005 (SID-History Injection).

## Detection Hypothesis

Detect behavior consistent with technique T1134.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1134.005 - SID-History Injection
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1134.005](https://attack.mitre.org/techniques/T1134/005/)
- [MITRE Detection Strategy DET0136](https://attack.mitre.org/detectionstrategies/DET0136)
