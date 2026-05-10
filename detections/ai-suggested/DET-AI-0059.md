---
detection_id: DET-AI-0059
title: AI Suggested Detection - T1030 Data Transfer Size Limits
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1030
mitre_detection_strategies:
  - DET0213
coverage_gaps: []
---

# [DET-AI-0059] AI Suggested Detection - T1030 Data Transfer Size Limits

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0059 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1030 - Data Transfer Size Limits |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0213 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1030 (Data Transfer Size Limits).

## Detection Hypothesis

Detect behavior consistent with technique T1030 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1030 - Data Transfer Size Limits
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1030](https://attack.mitre.org/techniques/T1030/)
- [MITRE Detection Strategy DET0213](https://attack.mitre.org/detectionstrategies/DET0213)
