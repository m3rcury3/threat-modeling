---
detection_id: DET-AI-0427
title: AI Suggested Detection - T1553.004 Install Root Certificate
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
  - TA0112
mitre_techniques:
  - T1553.004
mitre_detection_strategies:
  - DET0056
coverage_gaps: []
---

# [DET-AI-0427] AI Suggested Detection - T1553.004 Install Root Certificate

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0427 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1553.004 - Install Root Certificate |
| **MITRE Tactics** | TA0112 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0056 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1553.004 (Install Root Certificate).

## Detection Hypothesis

Detect behavior consistent with technique T1553.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1553.004 - Install Root Certificate
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1553.004](https://attack.mitre.org/techniques/T1553/004/)
- [MITRE Detection Strategy DET0056](https://attack.mitre.org/detectionstrategies/DET0056)
