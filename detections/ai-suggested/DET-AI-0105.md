---
detection_id: DET-AI-0105
title: AI Suggested Detection - T1055.009 Proc Memory
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
  - T1055.009
mitre_detection_strategies:
  - DET0541
coverage_gaps: []
---

# [DET-AI-0105] AI Suggested Detection - T1055.009 Proc Memory

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0105 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1055.009 - Proc Memory |
| **MITRE Tactics** | TA0004, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0541 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1055.009 (Proc Memory).

## Detection Hypothesis

Detect behavior consistent with technique T1055.009 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1055.009 - Proc Memory
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1055.009](https://attack.mitre.org/techniques/T1055/009/)
- [MITRE Detection Strategy DET0541](https://attack.mitre.org/detectionstrategies/DET0541)
