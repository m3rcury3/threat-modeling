---
detection_id: DET-AI-0085
title: AI Suggested Detection - T1048 Exfiltration Over Alternative Protocol
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
  - T1048
mitre_detection_strategies:
  - DET0131
coverage_gaps: []
---

# [DET-AI-0085] AI Suggested Detection - T1048 Exfiltration Over Alternative Protocol

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0085 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1048 - Exfiltration Over Alternative Protocol |
| **MITRE Tactics** | TA0010 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0131 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1048 (Exfiltration Over Alternative Protocol).

## Detection Hypothesis

Detect behavior consistent with technique T1048 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1048 - Exfiltration Over Alternative Protocol
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1048](https://attack.mitre.org/techniques/T1048/)
- [MITRE Detection Strategy DET0131](https://attack.mitre.org/detectionstrategies/DET0131)
