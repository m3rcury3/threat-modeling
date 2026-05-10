---
detection_id: DET-AI-0325
title: AI Suggested Detection - T1497.002 User Activity Based Checks
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
  - TA0007
mitre_techniques:
  - T1497.002
mitre_detection_strategies:
  - DET0420
coverage_gaps: []
---

# [DET-AI-0325] AI Suggested Detection - T1497.002 User Activity Based Checks

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0325 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1497.002 - User Activity Based Checks |
| **MITRE Tactics** | TA0005, TA0007 |
| **MITRE Detection Strategies** | DET0420 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1497.002 (User Activity Based Checks).

## Detection Hypothesis

Detect behavior consistent with technique T1497.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1497.002 - User Activity Based Checks
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1497.002](https://attack.mitre.org/techniques/T1497/002/)
- [MITRE Detection Strategy DET0420](https://attack.mitre.org/detectionstrategies/DET0420)
