---
detection_id: DET-AI-0683
title: AI Suggested Detection - T1685 Disable or Modify Tools
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0112
mitre_techniques:
  - T1685
mitre_detection_strategies:
  - DET0497
coverage_gaps: []
---

# [DET-AI-0683] AI Suggested Detection - T1685 Disable or Modify Tools

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0683 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1685 - Disable or Modify Tools |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0497 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1685 (Disable or Modify Tools).

## Detection Hypothesis

Detect behavior consistent with technique T1685 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1685 - Disable or Modify Tools
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1685](https://attack.mitre.org/techniques/T1685/)
- [MITRE Detection Strategy DET0497](https://attack.mitre.org/detectionstrategies/DET0497)
