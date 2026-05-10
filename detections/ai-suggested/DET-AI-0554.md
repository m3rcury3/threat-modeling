---
detection_id: DET-AI-0554
title: AI Suggested Detection - T1585 Establish Accounts
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0042
mitre_techniques:
  - T1585
mitre_detection_strategies:
  - DET0873
coverage_gaps: []
---

# [DET-AI-0554] AI Suggested Detection - T1585 Establish Accounts

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0554 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1585 - Establish Accounts |
| **MITRE Tactics** | TA0042 |
| **MITRE Detection Strategies** | DET0873 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1585 (Establish Accounts).

## Detection Hypothesis

Detect behavior consistent with technique T1585 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1585 - Establish Accounts
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1585](https://attack.mitre.org/techniques/T1585/)
- [MITRE Detection Strategy DET0873](https://attack.mitre.org/detectionstrategies/DET0873)
