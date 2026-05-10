---
detection_id: DET-AI-0030
title: AI Suggested Detection - T1021.001 Remote Desktop Protocol
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
  - T1021.001
mitre_detection_strategies:
  - DET0327
coverage_gaps: []
---

# [DET-AI-0030] AI Suggested Detection - T1021.001 Remote Desktop Protocol

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0030 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1021.001 - Remote Desktop Protocol |
| **MITRE Tactics** | TA0008 |
| **MITRE Detection Strategies** | DET0327 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1021.001 (Remote Desktop Protocol).

## Detection Hypothesis

Detect behavior consistent with technique T1021.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1021.001 - Remote Desktop Protocol
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1021.001](https://attack.mitre.org/techniques/T1021/001/)
- [MITRE Detection Strategy DET0327](https://attack.mitre.org/detectionstrategies/DET0327)
