---
detection_id: DET-AI-0484
title: AI Suggested Detection - T1564.011 Ignore Process Interrupts
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
  - T1564.011
mitre_detection_strategies:
  - DET0067
coverage_gaps: []
---

# [DET-AI-0484] AI Suggested Detection - T1564.011 Ignore Process Interrupts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0484 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1564.011 - Ignore Process Interrupts |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0067 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1564.011 (Ignore Process Interrupts).

## Detection Hypothesis

Detect behavior consistent with technique T1564.011 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1564.011 - Ignore Process Interrupts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1564.011](https://attack.mitre.org/techniques/T1564/011/)
- [MITRE Detection Strategy DET0067](https://attack.mitre.org/detectionstrategies/DET0067)
