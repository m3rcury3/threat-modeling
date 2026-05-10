---
detection_id: DET-AI-0337
title: AI Suggested Detection - T1505.002 Transport Agent
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
mitre_techniques:
  - T1505.002
mitre_detection_strategies:
  - DET0166
coverage_gaps: []
---

# [DET-AI-0337] AI Suggested Detection - T1505.002 Transport Agent

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0337 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1505.002 - Transport Agent |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0166 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1505.002 (Transport Agent).

## Detection Hypothesis

Detect behavior consistent with technique T1505.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1505.002 - Transport Agent
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1505.002](https://attack.mitre.org/techniques/T1505/002/)
- [MITRE Detection Strategy DET0166](https://attack.mitre.org/detectionstrategies/DET0166)
