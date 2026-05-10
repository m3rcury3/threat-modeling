---
detection_id: DET-AI-0207
title: AI Suggested Detection - T1124 System Time Discovery
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0007
mitre_techniques:
  - T1124
mitre_detection_strategies:
  - DET0151
coverage_gaps: []
---

# [DET-AI-0207] AI Suggested Detection - T1124 System Time Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0207 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1124 - System Time Discovery |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0151 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1124 (System Time Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1124 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1124 - System Time Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1124](https://attack.mitre.org/techniques/T1124/)
- [MITRE Detection Strategy DET0151](https://attack.mitre.org/detectionstrategies/DET0151)
