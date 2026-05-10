---
detection_id: DET-AI-0600
title: AI Suggested Detection - T1594 Search Victim-Owned Websites
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
  - TA0043
mitre_techniques:
  - T1594
mitre_detection_strategies:
  - DET0810
coverage_gaps: []
---

# [DET-AI-0600] AI Suggested Detection - T1594 Search Victim-Owned Websites

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0600 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1594 - Search Victim-Owned Websites |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0810 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1594 (Search Victim-Owned Websites).

## Detection Hypothesis

Detect behavior consistent with technique T1594 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1594 - Search Victim-Owned Websites
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1594](https://attack.mitre.org/techniques/T1594/)
- [MITRE Detection Strategy DET0810](https://attack.mitre.org/detectionstrategies/DET0810)
