---
detection_id: DET-AI-0138
title: AI Suggested Detection - T1070.004 File Deletion
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
  - T1070.004
mitre_detection_strategies:
  - DET0140
coverage_gaps: []
---

# [DET-AI-0138] AI Suggested Detection - T1070.004 File Deletion

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0138 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1070.004 - File Deletion |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0140 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1070.004 (File Deletion).

## Detection Hypothesis

Detect behavior consistent with technique T1070.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1070.004 - File Deletion
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1070.004](https://attack.mitre.org/techniques/T1070/004/)
- [MITRE Detection Strategy DET0140](https://attack.mitre.org/detectionstrategies/DET0140)
