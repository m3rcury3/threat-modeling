---
detection_id: DET-AI-0643
title: AI Suggested Detection - T1612 Build Image on Host
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
  - T1612
mitre_detection_strategies:
  - DET0459
coverage_gaps: []
---

# [DET-AI-0643] AI Suggested Detection - T1612 Build Image on Host

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0643 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1612 - Build Image on Host |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0459 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1612 (Build Image on Host).

## Detection Hypothesis

Detect behavior consistent with technique T1612 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1612 - Build Image on Host
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1612](https://attack.mitre.org/techniques/T1612/)
- [MITRE Detection Strategy DET0459](https://attack.mitre.org/detectionstrategies/DET0459)
