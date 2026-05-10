---
detection_id: DET-AI-0053
title: AI Suggested Detection - T1027.014 Polymorphic Code
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1027.014
mitre_detection_strategies:
  - DET0324
coverage_gaps: []
---

# [DET-AI-0053] AI Suggested Detection - T1027.014 Polymorphic Code

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0053 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.014 - Polymorphic Code |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0324 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.014 (Polymorphic Code).

## Detection Hypothesis

Detect behavior consistent with technique T1027.014 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.014 - Polymorphic Code
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.014](https://attack.mitre.org/techniques/T1027/014/)
- [MITRE Detection Strategy DET0324](https://attack.mitre.org/detectionstrategies/DET0324)
