---
detection_id: DET-AI-0006
title: AI Suggested Detection - T1003.001 LSASS Memory
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1003.001
mitre_detection_strategies:
  - DET0363
coverage_gaps: []
---

# [DET-AI-0006] AI Suggested Detection - T1003.001 LSASS Memory

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0006 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1003.001 - LSASS Memory |
| **MITRE Tactics** | TA0006 |
| **MITRE Detection Strategies** | DET0363 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1003.001 (LSASS Memory).

## Detection Hypothesis

Detect behavior consistent with technique T1003.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1003.001 - LSASS Memory
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1003.001](https://attack.mitre.org/techniques/T1003/001/)
- [MITRE Detection Strategy DET0363](https://attack.mitre.org/detectionstrategies/DET0363)
