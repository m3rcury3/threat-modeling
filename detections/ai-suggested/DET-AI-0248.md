---
detection_id: DET-AI-0248
title: AI Suggested Detection - T1197 BITS Jobs
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
  - TA0003
  - TA0005
mitre_techniques:
  - T1197
mitre_detection_strategies:
  - DET0098
coverage_gaps: []
---

# [DET-AI-0248] AI Suggested Detection - T1197 BITS Jobs

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0248 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1197 - BITS Jobs |
| **MITRE Tactics** | TA0002, TA0003, TA0005 |
| **MITRE Detection Strategies** | DET0098 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1197 (BITS Jobs).

## Detection Hypothesis

Detect behavior consistent with technique T1197 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1197 - BITS Jobs
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1197](https://attack.mitre.org/techniques/T1197/)
- [MITRE Detection Strategy DET0098](https://attack.mitre.org/detectionstrategies/DET0098)
