---
detection_id: DET-AI-0697
title: AI Suggested Detection - T1690 Prevent Command History Logging
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
  - T1690
mitre_detection_strategies:
  - DET0563
coverage_gaps: []
---

# [DET-AI-0697] AI Suggested Detection - T1690 Prevent Command History Logging

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0697 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1690 - Prevent Command History Logging |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0563 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1690 (Prevent Command History Logging).

## Detection Hypothesis

Detect behavior consistent with technique T1690 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1690 - Prevent Command History Logging
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1690](https://attack.mitre.org/techniques/T1690/)
- [MITRE Detection Strategy DET0563](https://attack.mitre.org/detectionstrategies/DET0563)
