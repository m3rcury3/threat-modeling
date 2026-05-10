---
detection_id: DET-AI-0193
title: AI Suggested Detection - T1110.002 Password Cracking
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
  - T1110.002
mitre_detection_strategies:
  - DET0105
coverage_gaps: []
---

# [DET-AI-0193] AI Suggested Detection - T1110.002 Password Cracking

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0193 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1110.002 - Password Cracking |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0105 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1110.002 (Password Cracking).

## Detection Hypothesis

Detect behavior consistent with technique T1110.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1110.002 - Password Cracking
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1110.002](https://attack.mitre.org/techniques/T1110/002/)
- [MITRE Detection Strategy DET0105](https://attack.mitre.org/detectionstrategies/DET0105)
