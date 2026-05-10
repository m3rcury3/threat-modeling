---
detection_id: DET-AI-0411
title: AI Suggested Detection - T1550.002 Pass the Hash
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0008
mitre_techniques:
  - T1550.002
mitre_detection_strategies:
  - DET0409
coverage_gaps: []
---

# [DET-AI-0411] AI Suggested Detection - T1550.002 Pass the Hash

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0411 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1550.002 - Pass the Hash |
| **MITRE Tactics** | TA0008 |
| **MITRE Detection Strategies** | DET0409 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1550.002 (Pass the Hash).

## Detection Hypothesis

Detect behavior consistent with technique T1550.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1550.002 - Pass the Hash
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1550.002](https://attack.mitre.org/techniques/T1550/002/)
- [MITRE Detection Strategy DET0409](https://attack.mitre.org/detectionstrategies/DET0409)
