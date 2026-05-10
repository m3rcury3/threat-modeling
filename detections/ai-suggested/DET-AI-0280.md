---
detection_id: DET-AI-0280
title: AI Suggested Detection - T1218.002 Control Panel
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
  - T1218.002
mitre_detection_strategies:
  - DET0194
coverage_gaps: []
---

# [DET-AI-0280] AI Suggested Detection - T1218.002 Control Panel

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0280 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1218.002 - Control Panel |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0194 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1218.002 (Control Panel).

## Detection Hypothesis

Detect behavior consistent with technique T1218.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1218.002 - Control Panel
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1218.002](https://attack.mitre.org/techniques/T1218/002/)
- [MITRE Detection Strategy DET0194](https://attack.mitre.org/detectionstrategies/DET0194)
