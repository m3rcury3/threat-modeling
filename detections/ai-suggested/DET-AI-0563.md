---
detection_id: DET-AI-0563
title: AI Suggested Detection - T1587.001 Malware
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
  - TA0042
mitre_techniques:
  - T1587.001
mitre_detection_strategies:
  - DET0872
coverage_gaps: []
---

# [DET-AI-0563] AI Suggested Detection - T1587.001 Malware

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0563 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1587.001 - Malware |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0872 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1587.001 (Malware).

## Detection Hypothesis

Detect behavior consistent with technique T1587.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1587.001 - Malware
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1587.001](https://attack.mitre.org/techniques/T1587/001/)
- [MITRE Detection Strategy DET0872](https://attack.mitre.org/detectionstrategies/DET0872)
