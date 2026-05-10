---
detection_id: DET-AI-0142
title: AI Suggested Detection - T1070.008 Clear Mailbox Data
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
  - T1070.008
mitre_detection_strategies:
  - DET0266
coverage_gaps: []
---

# [DET-AI-0142] AI Suggested Detection - T1070.008 Clear Mailbox Data

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0142 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1070.008 - Clear Mailbox Data |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0266 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1070.008 (Clear Mailbox Data).

## Detection Hypothesis

Detect behavior consistent with technique T1070.008 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1070.008 - Clear Mailbox Data
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1070.008](https://attack.mitre.org/techniques/T1070/008/)
- [MITRE Detection Strategy DET0266](https://attack.mitre.org/detectionstrategies/DET0266)
