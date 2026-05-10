---
detection_id: DET-AI-0253
title: AI Suggested Detection - T1203 Exploitation for Client Execution
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
mitre_techniques:
  - T1203
mitre_detection_strategies:
  - DET0287
coverage_gaps: []
---

# [DET-AI-0253] AI Suggested Detection - T1203 Exploitation for Client Execution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0253 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1203 - Exploitation for Client Execution |
| **MITRE Tactics** | TA0002 |
| **MITRE Detection Strategies** | DET0287 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1203 (Exploitation for Client Execution).

## Detection Hypothesis

Detect behavior consistent with technique T1203 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1203 - Exploitation for Client Execution
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1203](https://attack.mitre.org/techniques/T1203/)
- [MITRE Detection Strategy DET0287](https://attack.mitre.org/detectionstrategies/DET0287)
