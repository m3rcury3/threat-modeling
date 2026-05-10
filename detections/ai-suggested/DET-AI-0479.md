---
detection_id: DET-AI-0479
title: AI Suggested Detection - T1564.006 Run Virtual Instance
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
mitre_techniques:
  - T1564.006
mitre_detection_strategies:
  - DET0321
coverage_gaps: []
---

# [DET-AI-0479] AI Suggested Detection - T1564.006 Run Virtual Instance

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0479 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1564.006 - Run Virtual Instance |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0321 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1564.006 (Run Virtual Instance).

## Detection Hypothesis

Detect behavior consistent with technique T1564.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1564.006 - Run Virtual Instance
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1564.006](https://attack.mitre.org/techniques/T1564/006/)
- [MITRE Detection Strategy DET0321](https://attack.mitre.org/detectionstrategies/DET0321)
