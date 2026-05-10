---
detection_id: DET-AI-0229
title: AI Suggested Detection - T1137 Office Application Startup
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
  - T1137
mitre_detection_strategies:
  - DET0398
coverage_gaps: []
---

# [DET-AI-0229] AI Suggested Detection - T1137 Office Application Startup

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0229 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1137 - Office Application Startup |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0398 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1137 (Office Application Startup).

## Detection Hypothesis

Detect behavior consistent with technique T1137 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1137 - Office Application Startup
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1137](https://attack.mitre.org/techniques/T1137/)
- [MITRE Detection Strategy DET0398](https://attack.mitre.org/detectionstrategies/DET0398)
