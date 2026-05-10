---
detection_id: DET-AI-0648
title: AI Suggested Detection - T1619 Cloud Storage Object Discovery
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
  - TA0007
mitre_techniques:
  - T1619
mitre_detection_strategies:
  - DET0578
coverage_gaps: []
---

# [DET-AI-0648] AI Suggested Detection - T1619 Cloud Storage Object Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0648 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1619 - Cloud Storage Object Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0578 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1619 (Cloud Storage Object Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1619 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1619 - Cloud Storage Object Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1619](https://attack.mitre.org/techniques/T1619/)
- [MITRE Detection Strategy DET0578](https://attack.mitre.org/detectionstrategies/DET0578)
