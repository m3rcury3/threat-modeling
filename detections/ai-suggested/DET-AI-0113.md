---
detection_id: DET-AI-0113
title: AI Suggested Detection - T1056.002 GUI Input Capture
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
  - TA0009
mitre_techniques:
  - T1056.002
mitre_detection_strategies:
  - DET0521
coverage_gaps: []
---

# [DET-AI-0113] AI Suggested Detection - T1056.002 GUI Input Capture

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0113 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1056.002 - GUI Input Capture |
| **MITRE Tactics** | TA0006, TA0009 |
| **MITRE Detection Strategies** | DET0521 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1056.002 (GUI Input Capture).

## Detection Hypothesis

Detect behavior consistent with technique T1056.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1056.002 - GUI Input Capture
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1056.002](https://attack.mitre.org/techniques/T1056/002/)
- [MITRE Detection Strategy DET0521](https://attack.mitre.org/detectionstrategies/DET0521)
