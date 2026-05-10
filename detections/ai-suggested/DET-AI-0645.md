---
detection_id: DET-AI-0645
title: AI Suggested Detection - T1614 System Location Discovery
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0007
mitre_techniques:
  - T1614
mitre_detection_strategies:
  - DET0043
coverage_gaps: []
---

# [DET-AI-0645] AI Suggested Detection - T1614 System Location Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0645 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1614 - System Location Discovery |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0043 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1614 (System Location Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1614 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1614 - System Location Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1614](https://attack.mitre.org/techniques/T1614/)
- [MITRE Detection Strategy DET0043](https://attack.mitre.org/detectionstrategies/DET0043)
