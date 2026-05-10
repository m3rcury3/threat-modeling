---
detection_id: DET-AI-0022
title: AI Suggested Detection - T1014 Rootkit
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
  - T1014
mitre_detection_strategies:
  - DET0377
coverage_gaps: []
---

# [DET-AI-0022] AI Suggested Detection - T1014 Rootkit

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0022 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1014 - Rootkit |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0377 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1014 (Rootkit).

## Detection Hypothesis

Detect behavior consistent with technique T1014 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1014 - Rootkit
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1014](https://attack.mitre.org/techniques/T1014/)
- [MITRE Detection Strategy DET0377](https://attack.mitre.org/detectionstrategies/DET0377)
