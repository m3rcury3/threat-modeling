---
detection_id: DET-AI-0028
title: AI Suggested Detection - T1020.001 Traffic Duplication
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
  - TA0010
mitre_techniques:
  - T1020.001
mitre_detection_strategies:
  - DET0403
coverage_gaps: []
---

# [DET-AI-0028] AI Suggested Detection - T1020.001 Traffic Duplication

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0028 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1020.001 - Traffic Duplication |
| **MITRE Tactics** | TA0010 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0403 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1020.001 (Traffic Duplication).

## Detection Hypothesis

Detect behavior consistent with technique T1020.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1020.001 - Traffic Duplication
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1020.001](https://attack.mitre.org/techniques/T1020/001/)
- [MITRE Detection Strategy DET0403](https://attack.mitre.org/detectionstrategies/DET0403)
