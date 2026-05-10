---
detection_id: DET-AI-0082
title: AI Suggested Detection - T1041 Exfiltration Over C2 Channel
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
  - T1041
mitre_detection_strategies:
  - DET0348
coverage_gaps: []
---

# [DET-AI-0082] AI Suggested Detection - T1041 Exfiltration Over C2 Channel

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0082 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1041 - Exfiltration Over C2 Channel |
| **MITRE Tactics** | TA0010 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0348 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1041 (Exfiltration Over C2 Channel).

## Detection Hypothesis

Detect behavior consistent with technique T1041 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1041 - Exfiltration Over C2 Channel
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1041](https://attack.mitre.org/techniques/T1041/)
- [MITRE Detection Strategy DET0348](https://attack.mitre.org/detectionstrategies/DET0348)
