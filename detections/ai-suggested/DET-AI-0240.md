---
detection_id: DET-AI-0240
title: AI Suggested Detection - T1185 Browser Session Hijacking
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1185
mitre_detection_strategies:
  - DET0507
coverage_gaps: []
---

# [DET-AI-0240] AI Suggested Detection - T1185 Browser Session Hijacking

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0240 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1185 - Browser Session Hijacking |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0507 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1185 (Browser Session Hijacking).

## Detection Hypothesis

Detect behavior consistent with technique T1185 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1185 - Browser Session Hijacking
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1185](https://attack.mitre.org/techniques/T1185/)
- [MITRE Detection Strategy DET0507](https://attack.mitre.org/detectionstrategies/DET0507)
