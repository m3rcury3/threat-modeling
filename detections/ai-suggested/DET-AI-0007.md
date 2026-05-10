---
detection_id: DET-AI-0007
title: AI Suggested Detection - T1003.002 Security Account Manager
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
  - T1003.002
mitre_detection_strategies:
  - DET0085
coverage_gaps: []
---

# [DET-AI-0007] AI Suggested Detection - T1003.002 Security Account Manager

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0007 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1003.002 - Security Account Manager |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0085 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1003.002 (Security Account Manager).

## Detection Hypothesis

Detect behavior consistent with technique T1003.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1003.002 - Security Account Manager
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1003.002](https://attack.mitre.org/techniques/T1003/002/)
- [MITRE Detection Strategy DET0085](https://attack.mitre.org/detectionstrategies/DET0085)
