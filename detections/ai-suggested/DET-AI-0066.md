---
detection_id: DET-AI-0066
title: AI Suggested Detection - T1036.005 Match Legitimate Resource Name or Location
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
  - T1036.005
mitre_detection_strategies:
  - DET0347
coverage_gaps: []
---

# [DET-AI-0066] AI Suggested Detection - T1036.005 Match Legitimate Resource Name or Location

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0066 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1036.005 - Match Legitimate Resource Name or Location |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0347 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1036.005 (Match Legitimate Resource Name or Location).

## Detection Hypothesis

Detect behavior consistent with technique T1036.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1036.005 - Match Legitimate Resource Name or Location
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1036.005](https://attack.mitre.org/techniques/T1036/005/)
- [MITRE Detection Strategy DET0347](https://attack.mitre.org/detectionstrategies/DET0347)
