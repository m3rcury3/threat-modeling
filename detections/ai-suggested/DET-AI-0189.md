---
detection_id: DET-AI-0189
title: AI Suggested Detection - T1105 Ingress Tool Transfer
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
  - T1105
mitre_detection_strategies:
  - DET0060
coverage_gaps: []
---

# [DET-AI-0189] AI Suggested Detection - T1105 Ingress Tool Transfer

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0189 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1105 - Ingress Tool Transfer |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0060 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1105 (Ingress Tool Transfer).

## Detection Hypothesis

Detect behavior consistent with technique T1105 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1105 - Ingress Tool Transfer
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1105](https://attack.mitre.org/techniques/T1105/)
- [MITRE Detection Strategy DET0060](https://attack.mitre.org/detectionstrategies/DET0060)
