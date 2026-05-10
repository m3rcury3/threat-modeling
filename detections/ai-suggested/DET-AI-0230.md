---
detection_id: DET-AI-0230
title: AI Suggested Detection - T1137.001 Office Template Macros
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
mitre_techniques:
  - T1137.001
mitre_detection_strategies:
  - DET0519
coverage_gaps: []
---

# [DET-AI-0230] AI Suggested Detection - T1137.001 Office Template Macros

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0230 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1137.001 - Office Template Macros |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0519 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1137.001 (Office Template Macros).

## Detection Hypothesis

Detect behavior consistent with technique T1137.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1137.001 - Office Template Macros
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1137.001](https://attack.mitre.org/techniques/T1137/001/)
- [MITRE Detection Strategy DET0519](https://attack.mitre.org/detectionstrategies/DET0519)
