---
detection_id: DET-AI-0497
title: AI Suggested Detection - T1567 Exfiltration Over Web Service
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1567
mitre_detection_strategies:
  - DET0548
coverage_gaps: []
---

# [DET-AI-0497] AI Suggested Detection - T1567 Exfiltration Over Web Service

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0497 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1567 - Exfiltration Over Web Service |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0548 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1567 (Exfiltration Over Web Service).

## Detection Hypothesis

Detect behavior consistent with technique T1567 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1567 - Exfiltration Over Web Service
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1567](https://attack.mitre.org/techniques/T1567/)
- [MITRE Detection Strategy DET0548](https://attack.mitre.org/detectionstrategies/DET0548)
