---
detection_id: DET-AI-0342
title: AI Suggested Detection - T1518 Software Discovery
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
  - T1518
mitre_detection_strategies:
  - DET0392
coverage_gaps: []
---

# [DET-AI-0342] AI Suggested Detection - T1518 Software Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0342 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1518 - Software Discovery |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0392 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1518 (Software Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1518 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1518 - Software Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1518](https://attack.mitre.org/techniques/T1518/)
- [MITRE Detection Strategy DET0392](https://attack.mitre.org/detectionstrategies/DET0392)
