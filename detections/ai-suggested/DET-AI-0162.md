---
detection_id: DET-AI-0162
title: AI Suggested Detection - T1083 File and Directory Discovery
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
  - T1083
mitre_detection_strategies:
  - DET0370
coverage_gaps: []
---

# [DET-AI-0162] AI Suggested Detection - T1083 File and Directory Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0162 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1083 - File and Directory Discovery |
| **MITRE Tactics** | TA0007 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0370 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1083 (File and Directory Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1083 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1083 - File and Directory Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1083](https://attack.mitre.org/techniques/T1083/)
- [MITRE Detection Strategy DET0370](https://attack.mitre.org/detectionstrategies/DET0370)
