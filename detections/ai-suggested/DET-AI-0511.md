---
detection_id: DET-AI-0511
title: AI Suggested Detection - T1571 Non-Standard Port
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0011
mitre_techniques:
  - T1571
mitre_detection_strategies:
  - DET0227
coverage_gaps: []
---

# [DET-AI-0511] AI Suggested Detection - T1571 Non-Standard Port

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0511 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1571 - Non-Standard Port |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0227 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1571 (Non-Standard Port).

## Detection Hypothesis

Detect behavior consistent with technique T1571 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1571 - Non-Standard Port
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1571](https://attack.mitre.org/techniques/T1571/)
- [MITRE Detection Strategy DET0227](https://attack.mitre.org/detectionstrategies/DET0227)
