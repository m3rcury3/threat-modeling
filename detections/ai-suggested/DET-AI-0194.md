---
detection_id: DET-AI-0194
title: AI Suggested Detection - T1110.003 Password Spraying
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1110.003
mitre_detection_strategies:
  - DET0487
coverage_gaps: []
---

# [DET-AI-0194] AI Suggested Detection - T1110.003 Password Spraying

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0194 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1110.003 - Password Spraying |
| **MITRE Tactics** | TA0006 |
| **MITRE Detection Strategies** | DET0487 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1110.003 (Password Spraying).

## Detection Hypothesis

Detect behavior consistent with technique T1110.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1110.003 - Password Spraying
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1110.003](https://attack.mitre.org/techniques/T1110/003/)
- [MITRE Detection Strategy DET0487](https://attack.mitre.org/detectionstrategies/DET0487)
