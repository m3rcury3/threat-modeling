---
detection_id: DET-AI-0170
title: AI Suggested Detection - T1090.002 External Proxy
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
  - TA0011
mitre_techniques:
  - T1090.002
mitre_detection_strategies:
  - DET0325
coverage_gaps: []
---

# [DET-AI-0170] AI Suggested Detection - T1090.002 External Proxy

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0170 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1090.002 - External Proxy |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0325 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1090.002 (External Proxy).

## Detection Hypothesis

Detect behavior consistent with technique T1090.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1090.002 - External Proxy
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1090.002](https://attack.mitre.org/techniques/T1090/002/)
- [MITRE Detection Strategy DET0325](https://attack.mitre.org/detectionstrategies/DET0325)
