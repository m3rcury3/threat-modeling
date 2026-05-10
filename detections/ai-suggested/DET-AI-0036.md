---
detection_id: DET-AI-0036
title: AI Suggested Detection - T1021.007 Cloud Services
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0008
mitre_techniques:
  - T1021.007
mitre_detection_strategies:
  - DET0008
coverage_gaps: []
---

# [DET-AI-0036] AI Suggested Detection - T1021.007 Cloud Services

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0036 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1021.007 - Cloud Services |
| **MITRE Tactics** | TA0008 |
| **MITRE Detection Strategies** | DET0008 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1021.007 (Cloud Services).

## Detection Hypothesis

Detect behavior consistent with technique T1021.007 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1021.007 - Cloud Services
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1021.007](https://attack.mitre.org/techniques/T1021/007/)
- [MITRE Detection Strategy DET0008](https://attack.mitre.org/detectionstrategies/DET0008)
