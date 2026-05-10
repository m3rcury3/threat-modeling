---
detection_id: DET-AI-0181
title: AI Suggested Detection - T1098.005 Device Registration
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
  - T1098.005
mitre_detection_strategies:
  - DET0036
coverage_gaps: []
---

# [DET-AI-0181] AI Suggested Detection - T1098.005 Device Registration

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0181 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1098.005 - Device Registration |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0036 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1098.005 (Device Registration).

## Detection Hypothesis

Detect behavior consistent with technique T1098.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1098.005 - Device Registration
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1098.005](https://attack.mitre.org/techniques/T1098/005/)
- [MITRE Detection Strategy DET0036](https://attack.mitre.org/detectionstrategies/DET0036)
