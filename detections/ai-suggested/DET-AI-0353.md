---
detection_id: DET-AI-0353
title: AI Suggested Detection - T1537 Transfer Data to Cloud Account
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
  - T1537
mitre_detection_strategies:
  - DET0573
coverage_gaps: []
---

# [DET-AI-0353] AI Suggested Detection - T1537 Transfer Data to Cloud Account

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0353 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1537 - Transfer Data to Cloud Account |
| **MITRE Tactics** | TA0010 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0573 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1537 (Transfer Data to Cloud Account).

## Detection Hypothesis

Detect behavior consistent with technique T1537 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1537 - Transfer Data to Cloud Account
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1537](https://attack.mitre.org/techniques/T1537/)
- [MITRE Detection Strategy DET0573](https://attack.mitre.org/detectionstrategies/DET0573)
