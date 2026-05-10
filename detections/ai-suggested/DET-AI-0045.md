---
detection_id: DET-AI-0045
title: AI Suggested Detection - T1027.006 HTML Smuggling
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
  - TA0005
mitre_techniques:
  - T1027.006
mitre_detection_strategies:
  - DET0313
coverage_gaps: []
---

# [DET-AI-0045] AI Suggested Detection - T1027.006 HTML Smuggling

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0045 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.006 - HTML Smuggling |
| **MITRE Tactics** | TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0313 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.006 (HTML Smuggling).

## Detection Hypothesis

Detect behavior consistent with technique T1027.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.006 - HTML Smuggling
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.006](https://attack.mitre.org/techniques/T1027/006/)
- [MITRE Detection Strategy DET0313](https://attack.mitre.org/detectionstrategies/DET0313)
