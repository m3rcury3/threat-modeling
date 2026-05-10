---
detection_id: DET-AI-0238
title: AI Suggested Detection - T1176.001 Browser Extensions
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
  - T1176.001
mitre_detection_strategies:
  - DET0044
coverage_gaps: []
---

# [DET-AI-0238] AI Suggested Detection - T1176.001 Browser Extensions

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0238 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1176.001 - Browser Extensions |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0044 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1176.001 (Browser Extensions).

## Detection Hypothesis

Detect behavior consistent with technique T1176.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1176.001 - Browser Extensions
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1176.001](https://attack.mitre.org/techniques/T1176/001/)
- [MITRE Detection Strategy DET0044](https://attack.mitre.org/detectionstrategies/DET0044)
