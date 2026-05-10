---
detection_id: DET-AI-0063
title: AI Suggested Detection - T1036.002 Right-to-Left Override
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1036.002
mitre_detection_strategies:
  - DET0527
coverage_gaps: []
---

# [DET-AI-0063] AI Suggested Detection - T1036.002 Right-to-Left Override

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0063 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1036.002 - Right-to-Left Override |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0527 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1036.002 (Right-to-Left Override).

## Detection Hypothesis

Detect behavior consistent with technique T1036.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1036.002 - Right-to-Left Override
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1036.002](https://attack.mitre.org/techniques/T1036/002/)
- [MITRE Detection Strategy DET0527](https://attack.mitre.org/detectionstrategies/DET0527)
