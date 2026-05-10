---
detection_id: DET-AI-0400
title: AI Suggested Detection - T1547.014 Active Setup
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0004
mitre_techniques:
  - T1547.014
mitre_detection_strategies:
  - DET0312
coverage_gaps: []
---

# [DET-AI-0400] AI Suggested Detection - T1547.014 Active Setup

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0400 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1547.014 - Active Setup |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0312 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1547.014 (Active Setup).

## Detection Hypothesis

Detect behavior consistent with technique T1547.014 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1547.014 - Active Setup
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1547.014](https://attack.mitre.org/techniques/T1547/014/)
- [MITRE Detection Strategy DET0312](https://attack.mitre.org/detectionstrategies/DET0312)
