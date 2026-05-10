---
detection_id: DET-AI-0186
title: AI Suggested Detection - T1102.002 Bidirectional Communication
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
  - T1102.002
mitre_detection_strategies:
  - DET0035
coverage_gaps: []
---

# [DET-AI-0186] AI Suggested Detection - T1102.002 Bidirectional Communication

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0186 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1102.002 - Bidirectional Communication |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0035 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1102.002 (Bidirectional Communication).

## Detection Hypothesis

Detect behavior consistent with technique T1102.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1102.002 - Bidirectional Communication
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1102.002](https://attack.mitre.org/techniques/T1102/002/)
- [MITRE Detection Strategy DET0035](https://attack.mitre.org/detectionstrategies/DET0035)
