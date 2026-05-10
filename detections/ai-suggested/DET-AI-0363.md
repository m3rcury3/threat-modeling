---
detection_id: DET-AI-0363
title: AI Suggested Detection - T1543.001 Launch Agent
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
  - T1543.001
mitre_detection_strategies:
  - DET0434
coverage_gaps: []
---

# [DET-AI-0363] AI Suggested Detection - T1543.001 Launch Agent

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0363 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1543.001 - Launch Agent |
| **MITRE Tactics** | TA0003, TA0004 |
| **MITRE Detection Strategies** | DET0434 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1543.001 (Launch Agent).

## Detection Hypothesis

Detect behavior consistent with technique T1543.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1543.001 - Launch Agent
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1543.001](https://attack.mitre.org/techniques/T1543/001/)
- [MITRE Detection Strategy DET0434](https://attack.mitre.org/detectionstrategies/DET0434)
