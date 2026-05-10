---
detection_id: DET-AI-0234
title: AI Suggested Detection - T1137.005 Outlook Rules
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
mitre_techniques:
  - T1137.005
mitre_detection_strategies:
  - DET0095
coverage_gaps: []
---

# [DET-AI-0234] AI Suggested Detection - T1137.005 Outlook Rules

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0234 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1137.005 - Outlook Rules |
| **MITRE Tactics** | TA0003 |
| **MITRE Detection Strategies** | DET0095 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1137.005 (Outlook Rules).

## Detection Hypothesis

Detect behavior consistent with technique T1137.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1137.005 - Outlook Rules
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1137.005](https://attack.mitre.org/techniques/T1137/005/)
- [MITRE Detection Strategy DET0095](https://attack.mitre.org/detectionstrategies/DET0095)
