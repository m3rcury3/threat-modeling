---
detection_id: DET-AI-0361
title: AI Suggested Detection - T1542.005 TFTP Boot
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
  - TA0003
  - TA0005
mitre_techniques:
  - T1542.005
mitre_detection_strategies:
  - DET0582
coverage_gaps: []
---

# [DET-AI-0361] AI Suggested Detection - T1542.005 TFTP Boot

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0361 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1542.005 - TFTP Boot |
| **MITRE Tactics** | TA0003, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0582 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1542.005 (TFTP Boot).

## Detection Hypothesis

Detect behavior consistent with technique T1542.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1542.005 - TFTP Boot
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1542.005](https://attack.mitre.org/techniques/T1542/005/)
- [MITRE Detection Strategy DET0582](https://attack.mitre.org/detectionstrategies/DET0582)
