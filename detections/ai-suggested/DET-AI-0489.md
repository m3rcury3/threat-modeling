---
detection_id: DET-AI-0489
title: AI Suggested Detection - T1565.001 Stored Data Manipulation
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0040
mitre_techniques:
  - T1565.001
mitre_detection_strategies:
  - DET0193
coverage_gaps: []
---

# [DET-AI-0489] AI Suggested Detection - T1565.001 Stored Data Manipulation

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0489 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1565.001 - Stored Data Manipulation |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0193 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1565.001 (Stored Data Manipulation).

## Detection Hypothesis

Detect behavior consistent with technique T1565.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1565.001 - Stored Data Manipulation
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1565.001](https://attack.mitre.org/techniques/T1565/001/)
- [MITRE Detection Strategy DET0193](https://attack.mitre.org/detectionstrategies/DET0193)
