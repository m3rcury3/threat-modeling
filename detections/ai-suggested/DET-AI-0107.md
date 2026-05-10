---
detection_id: DET-AI-0107
title: AI Suggested Detection - T1055.012 Process Hollowing
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
  - TA0005
mitre_techniques:
  - T1055.012
mitre_detection_strategies:
  - DET0382
coverage_gaps: []
---

# [DET-AI-0107] AI Suggested Detection - T1055.012 Process Hollowing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0107 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1055.012 - Process Hollowing |
| **MITRE Tactics** | TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0382 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1055.012 (Process Hollowing).

## Detection Hypothesis

Detect behavior consistent with technique T1055.012 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1055.012 - Process Hollowing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1055.012](https://attack.mitre.org/techniques/T1055/012/)
- [MITRE Detection Strategy DET0382](https://attack.mitre.org/detectionstrategies/DET0382)
