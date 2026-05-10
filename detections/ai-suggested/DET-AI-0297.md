---
detection_id: DET-AI-0297
title: AI Suggested Detection - T1220 XSL Script Processing
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
  - T1220
mitre_detection_strategies:
  - DET0205
coverage_gaps: []
---

# [DET-AI-0297] AI Suggested Detection - T1220 XSL Script Processing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0297 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1220 - XSL Script Processing |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0205 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1220 (XSL Script Processing).

## Detection Hypothesis

Detect behavior consistent with technique T1220 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1220 - XSL Script Processing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1220](https://attack.mitre.org/techniques/T1220/)
- [MITRE Detection Strategy DET0205](https://attack.mitre.org/detectionstrategies/DET0205)
