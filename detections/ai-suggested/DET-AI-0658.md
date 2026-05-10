---
detection_id: DET-AI-0658
title: AI Suggested Detection - T1653 Power Settings
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
mitre_techniques:
  - T1653
mitre_detection_strategies:
  - DET0417
coverage_gaps: []
---

# [DET-AI-0658] AI Suggested Detection - T1653 Power Settings

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0658 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1653 - Power Settings |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0417 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1653 (Power Settings).

## Detection Hypothesis

Detect behavior consistent with technique T1653 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1653 - Power Settings
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1653](https://attack.mitre.org/techniques/T1653/)
- [MITRE Detection Strategy DET0417](https://attack.mitre.org/detectionstrategies/DET0417)
