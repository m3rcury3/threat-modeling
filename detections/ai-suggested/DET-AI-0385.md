---
detection_id: DET-AI-0385
title: AI Suggested Detection - T1546.017 Udev Rules
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0004
mitre_techniques:
  - T1546.017
mitre_detection_strategies:
  - DET0375
coverage_gaps: []
---

# [DET-AI-0385] AI Suggested Detection - T1546.017 Udev Rules

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0385 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1546.017 - Udev Rules |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0375 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1546.017 (Udev Rules).

## Detection Hypothesis

Detect behavior consistent with technique T1546.017 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1546.017 - Udev Rules
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1546.017](https://attack.mitre.org/techniques/T1546/017/)
- [MITRE Detection Strategy DET0375](https://attack.mitre.org/detectionstrategies/DET0375)
