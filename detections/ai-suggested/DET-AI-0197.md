---
detection_id: DET-AI-0197
title: AI Suggested Detection - T1112 Modify Registry
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0112
mitre_techniques:
  - T1112
mitre_detection_strategies:
  - DET0280
coverage_gaps: []
---

# [DET-AI-0197] AI Suggested Detection - T1112 Modify Registry

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0197 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1112 - Modify Registry |
| **MITRE Tactics** | TA0003, TA0112 |
| **MITRE Detection Strategies** | DET0280 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1112 (Modify Registry).

## Detection Hypothesis

Detect behavior consistent with technique T1112 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1112 - Modify Registry
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1112](https://attack.mitre.org/techniques/T1112/)
- [MITRE Detection Strategy DET0280](https://attack.mitre.org/detectionstrategies/DET0280)
