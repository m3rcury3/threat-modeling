---
detection_id: DET-AI-0252
title: AI Suggested Detection - T1202 Indirect Command Execution
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
  - TA0005
mitre_techniques:
  - T1202
mitre_detection_strategies:
  - DET0200
coverage_gaps: []
---

# [DET-AI-0252] AI Suggested Detection - T1202 Indirect Command Execution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0252 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1202 - Indirect Command Execution |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0200 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1202 (Indirect Command Execution).

## Detection Hypothesis

Detect behavior consistent with technique T1202 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1202 - Indirect Command Execution
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1202](https://attack.mitre.org/techniques/T1202/)
- [MITRE Detection Strategy DET0200](https://attack.mitre.org/detectionstrategies/DET0200)
