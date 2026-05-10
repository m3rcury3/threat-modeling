---
detection_id: DET-AI-0583
title: AI Suggested Detection - T1590.004 Network Topology
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0043
mitre_techniques:
  - T1590.004
mitre_detection_strategies:
  - DET0819
coverage_gaps: []
---

# [DET-AI-0583] AI Suggested Detection - T1590.004 Network Topology

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0583 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1590.004 - Network Topology |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0819 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1590.004 (Network Topology).

## Detection Hypothesis

Detect behavior consistent with technique T1590.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1590.004 - Network Topology
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1590.004](https://attack.mitre.org/techniques/T1590/004/)
- [MITRE Detection Strategy DET0819](https://attack.mitre.org/detectionstrategies/DET0819)
