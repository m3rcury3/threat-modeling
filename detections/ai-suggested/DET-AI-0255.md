---
detection_id: DET-AI-0255
title: AI Suggested Detection - T1204.001 Malicious Link
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
mitre_techniques:
  - T1204.001
mitre_detection_strategies:
  - DET0066
coverage_gaps: []
---

# [DET-AI-0255] AI Suggested Detection - T1204.001 Malicious Link

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0255 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1204.001 - Malicious Link |
| **MITRE Tactics** | TA0002 |
| **MITRE Detection Strategies** | DET0066 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1204.001 (Malicious Link).

## Detection Hypothesis

Detect behavior consistent with technique T1204.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1204.001 - Malicious Link
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1204.001](https://attack.mitre.org/techniques/T1204/001/)
- [MITRE Detection Strategy DET0066](https://attack.mitre.org/detectionstrategies/DET0066)
