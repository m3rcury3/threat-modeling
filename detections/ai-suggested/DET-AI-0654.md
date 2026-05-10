---
detection_id: DET-AI-0654
title: AI Suggested Detection - T1649 Steal or Forge Authentication Certificates
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
  - TA0006
mitre_techniques:
  - T1649
mitre_detection_strategies:
  - DET0240
coverage_gaps: []
---

# [DET-AI-0654] AI Suggested Detection - T1649 Steal or Forge Authentication Certificates

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0654 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1649 - Steal or Forge Authentication Certificates |
| **MITRE Tactics** | TA0006 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0240 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1649 (Steal or Forge Authentication Certificates).

## Detection Hypothesis

Detect behavior consistent with technique T1649 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1649 - Steal or Forge Authentication Certificates
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1649](https://attack.mitre.org/techniques/T1649/)
- [MITRE Detection Strategy DET0240](https://attack.mitre.org/detectionstrategies/DET0240)
