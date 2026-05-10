---
detection_id: DET-AI-0356
title: AI Suggested Detection - T1542 Pre-OS Boot
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0005
mitre_techniques:
  - T1542
mitre_detection_strategies:
  - DET0278
coverage_gaps: []
---

# [DET-AI-0356] AI Suggested Detection - T1542 Pre-OS Boot

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0356 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1542 - Pre-OS Boot |
| **MITRE Tactics** | TA0003, TA0005 |
| **MITRE Detection Strategies** | DET0278 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1542 (Pre-OS Boot).

## Detection Hypothesis

Detect behavior consistent with technique T1542 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1542 - Pre-OS Boot
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1542](https://attack.mitre.org/techniques/T1542/)
- [MITRE Detection Strategy DET0278](https://attack.mitre.org/detectionstrategies/DET0278)
