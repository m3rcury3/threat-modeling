---
detection_id: DET-AI-0612
title: AI Suggested Detection - T1597.001 Threat Intel Vendors
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
  - TA0043
mitre_techniques:
  - T1597.001
mitre_detection_strategies:
  - DET0816
coverage_gaps: []
---

# [DET-AI-0612] AI Suggested Detection - T1597.001 Threat Intel Vendors

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0612 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1597.001 - Threat Intel Vendors |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0816 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1597.001 (Threat Intel Vendors).

## Detection Hypothesis

Detect behavior consistent with technique T1597.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1597.001 - Threat Intel Vendors
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1597.001](https://attack.mitre.org/techniques/T1597/001/)
- [MITRE Detection Strategy DET0816](https://attack.mitre.org/detectionstrategies/DET0816)
