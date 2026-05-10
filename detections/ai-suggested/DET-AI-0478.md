---
detection_id: DET-AI-0478
title: AI Suggested Detection - T1564.005 Hidden File System
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1564.005
mitre_detection_strategies:
  - DET0461
coverage_gaps: []
---

# [DET-AI-0478] AI Suggested Detection - T1564.005 Hidden File System

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0478 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1564.005 - Hidden File System |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0461 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1564.005 (Hidden File System).

## Detection Hypothesis

Detect behavior consistent with technique T1564.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1564.005 - Hidden File System
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1564.005](https://attack.mitre.org/techniques/T1564/005/)
- [MITRE Detection Strategy DET0461](https://attack.mitre.org/detectionstrategies/DET0461)
