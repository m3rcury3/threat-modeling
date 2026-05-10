---
detection_id: DET-AI-0366
title: AI Suggested Detection - T1543.004 Launch Daemon
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
  - T1543.004
mitre_detection_strategies:
  - DET0401
coverage_gaps: []
---

# [DET-AI-0366] AI Suggested Detection - T1543.004 Launch Daemon

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0366 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1543.004 - Launch Daemon |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0401 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1543.004 (Launch Daemon).

## Detection Hypothesis

Detect behavior consistent with technique T1543.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1543.004 - Launch Daemon
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1543.004](https://attack.mitre.org/techniques/T1543/004/)
- [MITRE Detection Strategy DET0401](https://attack.mitre.org/detectionstrategies/DET0401)
