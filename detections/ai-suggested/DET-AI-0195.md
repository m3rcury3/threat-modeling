---
detection_id: DET-AI-0195
title: AI Suggested Detection - T1110.004 Credential Stuffing
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1110.004
mitre_detection_strategies:
  - DET0460
coverage_gaps: []
---

# [DET-AI-0195] AI Suggested Detection - T1110.004 Credential Stuffing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0195 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1110.004 - Credential Stuffing |
| **MITRE Tactics** | TA0006 |
| **MITRE Detection Strategies** | DET0460 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1110.004 (Credential Stuffing).

## Detection Hypothesis

Detect behavior consistent with technique T1110.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1110.004 - Credential Stuffing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1110.004](https://attack.mitre.org/techniques/T1110/004/)
- [MITRE Detection Strategy DET0460](https://attack.mitre.org/detectionstrategies/DET0460)
