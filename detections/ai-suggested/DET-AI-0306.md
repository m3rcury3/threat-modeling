---
detection_id: DET-AI-0306
title: AI Suggested Detection - T1484 Domain or Tenant Policy Modification
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
  - TA0112
mitre_techniques:
  - T1484
mitre_detection_strategies:
  - DET0270
coverage_gaps: []
---

# [DET-AI-0306] AI Suggested Detection - T1484 Domain or Tenant Policy Modification

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0306 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1484 - Domain or Tenant Policy Modification |
| **MITRE Tactics** | TA0004, TA0112 |
| **MITRE Detection Strategies** | DET0270 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1484 (Domain or Tenant Policy Modification).

## Detection Hypothesis

Detect behavior consistent with technique T1484 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1484 - Domain or Tenant Policy Modification
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1484](https://attack.mitre.org/techniques/T1484/)
- [MITRE Detection Strategy DET0270](https://attack.mitre.org/detectionstrategies/DET0270)
