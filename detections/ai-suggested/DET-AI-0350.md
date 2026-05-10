---
detection_id: DET-AI-0350
title: AI Suggested Detection - T1531 Account Access Removal
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0040
mitre_techniques:
  - T1531
mitre_detection_strategies:
  - DET0120
coverage_gaps: []
---

# [DET-AI-0350] AI Suggested Detection - T1531 Account Access Removal

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0350 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1531 - Account Access Removal |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0120 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1531 (Account Access Removal).

## Detection Hypothesis

Detect behavior consistent with technique T1531 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1531 - Account Access Removal
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1531](https://attack.mitre.org/techniques/T1531/)
- [MITRE Detection Strategy DET0120](https://attack.mitre.org/detectionstrategies/DET0120)
