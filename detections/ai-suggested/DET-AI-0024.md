---
detection_id: DET-AI-0024
title: AI Suggested Detection - T1016.001 Internet Connection Discovery
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
  - T1016.001
mitre_detection_strategies:
  - DET0357
coverage_gaps: []
---

# [DET-AI-0024] AI Suggested Detection - T1016.001 Internet Connection Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0024 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1016.001 - Internet Connection Discovery |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0357 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1016.001 (Internet Connection Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1016.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1016.001 - Internet Connection Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1016.001](https://attack.mitre.org/techniques/T1016/001/)
- [MITRE Detection Strategy DET0357](https://attack.mitre.org/detectionstrategies/DET0357)
