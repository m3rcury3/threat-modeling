---
detection_id: DET-AI-0628
title: AI Suggested Detection - T1602.001 SNMP (MIB Dump)
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
  - TA0009
mitre_techniques:
  - T1602.001
mitre_detection_strategies:
  - DET0453
coverage_gaps: []
---

# [DET-AI-0628] AI Suggested Detection - T1602.001 SNMP (MIB Dump)

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0628 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1602.001 - SNMP (MIB Dump) |
| **MITRE Tactics** | TA0009 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0453 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1602.001 (SNMP (MIB Dump)).

## Detection Hypothesis

Detect behavior consistent with technique T1602.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1602.001 - SNMP (MIB Dump)
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1602.001](https://attack.mitre.org/techniques/T1602/001/)
- [MITRE Detection Strategy DET0453](https://attack.mitre.org/detectionstrategies/DET0453)
