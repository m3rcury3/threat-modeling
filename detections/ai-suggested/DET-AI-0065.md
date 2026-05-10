---
detection_id: DET-AI-0065
title: AI Suggested Detection - T1036.004 Masquerade Task or Service
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
  - T1036.004
mitre_detection_strategies:
  - DET0117
coverage_gaps: []
---

# [DET-AI-0065] AI Suggested Detection - T1036.004 Masquerade Task or Service

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0065 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1036.004 - Masquerade Task or Service |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0117 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1036.004 (Masquerade Task or Service).

## Detection Hypothesis

Detect behavior consistent with technique T1036.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1036.004 - Masquerade Task or Service
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1036.004](https://attack.mitre.org/techniques/T1036/004/)
- [MITRE Detection Strategy DET0117](https://attack.mitre.org/detectionstrategies/DET0117)
