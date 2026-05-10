---
detection_id: DET-AI-0466
title: AI Suggested Detection - T1560.003 Archive via Custom Method
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1560.003
mitre_detection_strategies:
  - DET0438
coverage_gaps: []
---

# [DET-AI-0466] AI Suggested Detection - T1560.003 Archive via Custom Method

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0466 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1560.003 - Archive via Custom Method |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0438 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1560.003 (Archive via Custom Method).

## Detection Hypothesis

Detect behavior consistent with technique T1560.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1560.003 - Archive via Custom Method
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1560.003](https://attack.mitre.org/techniques/T1560/003/)
- [MITRE Detection Strategy DET0438](https://attack.mitre.org/detectionstrategies/DET0438)
