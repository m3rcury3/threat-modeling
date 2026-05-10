---
detection_id: DET-AI-0578
title: AI Suggested Detection - T1589.003 Employee Names
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
  - T1589.003
mitre_detection_strategies:
  - DET0857
coverage_gaps: []
---

# [DET-AI-0578] AI Suggested Detection - T1589.003 Employee Names

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0578 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1589.003 - Employee Names |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0857 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1589.003 (Employee Names).

## Detection Hypothesis

Detect behavior consistent with technique T1589.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1589.003 - Employee Names
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1589.003](https://attack.mitre.org/techniques/T1589/003/)
- [MITRE Detection Strategy DET0857](https://attack.mitre.org/detectionstrategies/DET0857)
