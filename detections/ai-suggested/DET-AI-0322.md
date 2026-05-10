---
detection_id: DET-AI-0322
title: AI Suggested Detection - T1496.004 Cloud Service Hijacking
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
  - TA0040
mitre_techniques:
  - T1496.004
mitre_detection_strategies:
  - DET0147
coverage_gaps: []
---

# [DET-AI-0322] AI Suggested Detection - T1496.004 Cloud Service Hijacking

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0322 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1496.004 - Cloud Service Hijacking |
| **MITRE Tactics** | TA0040 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0147 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1496.004 (Cloud Service Hijacking).

## Detection Hypothesis

Detect behavior consistent with technique T1496.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1496.004 - Cloud Service Hijacking
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1496.004](https://attack.mitre.org/techniques/T1496/004/)
- [MITRE Detection Strategy DET0147](https://attack.mitre.org/detectionstrategies/DET0147)
