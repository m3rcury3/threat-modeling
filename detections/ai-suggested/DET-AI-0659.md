---
detection_id: DET-AI-0659
title: AI Suggested Detection - T1654 Log Enumeration
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
  - T1654
mitre_detection_strategies:
  - DET0255
coverage_gaps: []
---

# [DET-AI-0659] AI Suggested Detection - T1654 Log Enumeration

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0659 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1654 - Log Enumeration |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0255 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1654 (Log Enumeration).

## Detection Hypothesis

Detect behavior consistent with technique T1654 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1654 - Log Enumeration
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1654](https://attack.mitre.org/techniques/T1654/)
- [MITRE Detection Strategy DET0255](https://attack.mitre.org/detectionstrategies/DET0255)
