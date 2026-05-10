---
detection_id: DET-AI-0587
title: AI Suggested Detection - T1591.001 Determine Physical Locations
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0043
mitre_techniques:
  - T1591.001
mitre_detection_strategies:
  - DET0806
coverage_gaps: []
---

# [DET-AI-0587] AI Suggested Detection - T1591.001 Determine Physical Locations

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0587 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1591.001 - Determine Physical Locations |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0806 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1591.001 (Determine Physical Locations).

## Detection Hypothesis

Detect behavior consistent with technique T1591.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1591.001 - Determine Physical Locations
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1591.001](https://attack.mitre.org/techniques/T1591/001/)
- [MITRE Detection Strategy DET0806](https://attack.mitre.org/detectionstrategies/DET0806)
