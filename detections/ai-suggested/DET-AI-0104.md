---
detection_id: DET-AI-0104
title: AI Suggested Detection - T1055.008 Ptrace System Calls
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
  - TA0005
mitre_techniques:
  - T1055.008
mitre_detection_strategies:
  - DET0203
coverage_gaps: []
---

# [DET-AI-0104] AI Suggested Detection - T1055.008 Ptrace System Calls

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0104 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1055.008 - Ptrace System Calls |
| **MITRE Tactics** | TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0203 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1055.008 (Ptrace System Calls).

## Detection Hypothesis

Detect behavior consistent with technique T1055.008 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1055.008 - Ptrace System Calls
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1055.008](https://attack.mitre.org/techniques/T1055/008/)
- [MITRE Detection Strategy DET0203](https://attack.mitre.org/detectionstrategies/DET0203)
