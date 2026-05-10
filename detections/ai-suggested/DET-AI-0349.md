---
detection_id: DET-AI-0349
title: AI Suggested Detection - T1530 Data from Cloud Storage
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
  - T1530
mitre_detection_strategies:
  - DET0484
coverage_gaps: []
---

# [DET-AI-0349] AI Suggested Detection - T1530 Data from Cloud Storage

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0349 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1530 - Data from Cloud Storage |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0484 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1530 (Data from Cloud Storage).

## Detection Hypothesis

Detect behavior consistent with technique T1530 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1530 - Data from Cloud Storage
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1530](https://attack.mitre.org/techniques/T1530/)
- [MITRE Detection Strategy DET0484](https://attack.mitre.org/detectionstrategies/DET0484)
