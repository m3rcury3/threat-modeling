---
detection_id: DET-AI-0405
title: AI Suggested Detection - T1548.003 Sudo and Sudo Caching
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
mitre_techniques:
  - T1548.003
mitre_detection_strategies:
  - DET0052
coverage_gaps: []
---

# [DET-AI-0405] AI Suggested Detection - T1548.003 Sudo and Sudo Caching

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0405 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1548.003 - Sudo and Sudo Caching |
| **MITRE Tactics** | TA0004 |
| **MITRE Detection Strategies** | DET0052 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1548.003 (Sudo and Sudo Caching).

## Detection Hypothesis

Detect behavior consistent with technique T1548.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1548.003 - Sudo and Sudo Caching
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1548.003](https://attack.mitre.org/techniques/T1548/003/)
- [MITRE Detection Strategy DET0052](https://attack.mitre.org/detectionstrategies/DET0052)
