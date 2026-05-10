---
detection_id: DET-AI-0598
title: AI Suggested Detection - T1593.002 Search Engines
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0043
mitre_techniques:
  - T1593.002
mitre_detection_strategies:
  - DET0811
coverage_gaps: []
---

# [DET-AI-0598] AI Suggested Detection - T1593.002 Search Engines

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0598 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1593.002 - Search Engines |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0811 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1593.002 (Search Engines).

## Detection Hypothesis

Detect behavior consistent with technique T1593.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1593.002 - Search Engines
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1593.002](https://attack.mitre.org/techniques/T1593/002/)
- [MITRE Detection Strategy DET0811](https://attack.mitre.org/detectionstrategies/DET0811)
