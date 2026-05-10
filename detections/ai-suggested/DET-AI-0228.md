---
detection_id: DET-AI-0228
title: AI Suggested Detection - T1136.003 Cloud Account
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
  - T1136.003
mitre_detection_strategies:
  - DET0319
coverage_gaps: []
---

# [DET-AI-0228] AI Suggested Detection - T1136.003 Cloud Account

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0228 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1136.003 - Cloud Account |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0319 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1136.003 (Cloud Account).

## Detection Hypothesis

Detect behavior consistent with technique T1136.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1136.003 - Cloud Account
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1136.003](https://attack.mitre.org/techniques/T1136/003/)
- [MITRE Detection Strategy DET0319](https://attack.mitre.org/detectionstrategies/DET0319)
