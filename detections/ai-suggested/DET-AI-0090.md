---
detection_id: DET-AI-0090
title: AI Suggested Detection - T1052 Exfiltration Over Physical Medium
threat_actors: []
category: application
speed_framework:
  - application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1052
mitre_detection_strategies:
  - DET0123
coverage_gaps: []
---

# [DET-AI-0090] AI Suggested Detection - T1052 Exfiltration Over Physical Medium

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0090 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1052 - Exfiltration Over Physical Medium |
| **MITRE Tactics** | TA0010 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0123 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1052 (Exfiltration Over Physical Medium).

## Detection Hypothesis

Detect behavior consistent with technique T1052 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1052 - Exfiltration Over Physical Medium
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1052](https://attack.mitre.org/techniques/T1052/)
- [MITRE Detection Strategy DET0123](https://attack.mitre.org/detectionstrategies/DET0123)
