---
detection_id: DET-AI-0516
title: AI Suggested Detection - T1574 Hijack Execution Flow
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
  - TA0002
  - TA0005
mitre_techniques:
  - T1574
mitre_detection_strategies:
  - DET0218
coverage_gaps: []
---

# [DET-AI-0516] AI Suggested Detection - T1574 Hijack Execution Flow

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0516 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1574 - Hijack Execution Flow |
| **MITRE Tactics** | TA0002, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0218 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1574 (Hijack Execution Flow).

## Detection Hypothesis

Detect behavior consistent with technique T1574 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1574 - Hijack Execution Flow
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1574](https://attack.mitre.org/techniques/T1574/)
- [MITRE Detection Strategy DET0218](https://attack.mitre.org/detectionstrategies/DET0218)
