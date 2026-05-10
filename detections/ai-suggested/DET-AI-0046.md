---
detection_id: DET-AI-0046
title: AI Suggested Detection - T1027.007 Dynamic API Resolution
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
  - T1027.007
mitre_detection_strategies:
  - DET0091
coverage_gaps: []
---

# [DET-AI-0046] AI Suggested Detection - T1027.007 Dynamic API Resolution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0046 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.007 - Dynamic API Resolution |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0091 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.007 (Dynamic API Resolution).

## Detection Hypothesis

Detect behavior consistent with technique T1027.007 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.007 - Dynamic API Resolution
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.007](https://attack.mitre.org/techniques/T1027/007/)
- [MITRE Detection Strategy DET0091](https://attack.mitre.org/detectionstrategies/DET0091)
