---
detection_id: DET-AI-0274
title: AI Suggested Detection - T1216 System Script Proxy Execution
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1216
mitre_detection_strategies:
  - DET0466
coverage_gaps: []
---

# [DET-AI-0274] AI Suggested Detection - T1216 System Script Proxy Execution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0274 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1216 - System Script Proxy Execution |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0466 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1216 (System Script Proxy Execution).

## Detection Hypothesis

Detect behavior consistent with technique T1216 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1216 - System Script Proxy Execution
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1216](https://attack.mitre.org/techniques/T1216/)
- [MITRE Detection Strategy DET0466](https://attack.mitre.org/detectionstrategies/DET0466)
