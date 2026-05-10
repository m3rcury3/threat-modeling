---
detection_id: DET-AI-0339
title: AI Suggested Detection - T1505.004 IIS Components
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
  - T1505.004
mitre_detection_strategies:
  - DET0068
coverage_gaps: []
---

# [DET-AI-0339] AI Suggested Detection - T1505.004 IIS Components

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0339 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1505.004 - IIS Components |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0068 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1505.004 (IIS Components).

## Detection Hypothesis

Detect behavior consistent with technique T1505.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1505.004 - IIS Components
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1505.004](https://attack.mitre.org/techniques/T1505/004/)
- [MITRE Detection Strategy DET0068](https://attack.mitre.org/detectionstrategies/DET0068)
