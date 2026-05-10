---
detection_id: DET-AI-0351
title: AI Suggested Detection - T1534 Internal Spearphishing
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
  - TA0008
mitre_techniques:
  - T1534
mitre_detection_strategies:
  - DET0054
coverage_gaps: []
---

# [DET-AI-0351] AI Suggested Detection - T1534 Internal Spearphishing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0351 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1534 - Internal Spearphishing |
| **MITRE Tactics** | TA0008 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0054 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1534 (Internal Spearphishing).

## Detection Hypothesis

Detect behavior consistent with technique T1534 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1534 - Internal Spearphishing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1534](https://attack.mitre.org/techniques/T1534/)
- [MITRE Detection Strategy DET0054](https://attack.mitre.org/detectionstrategies/DET0054)
