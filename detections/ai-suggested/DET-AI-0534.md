---
detection_id: DET-AI-0534
title: AI Suggested Detection - T1578.005 Modify Cloud Compute Configurations
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
  - T1578.005
mitre_detection_strategies:
  - DET0492
coverage_gaps: []
---

# [DET-AI-0534] AI Suggested Detection - T1578.005 Modify Cloud Compute Configurations

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0534 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1578.005 - Modify Cloud Compute Configurations |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0492 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1578.005 (Modify Cloud Compute Configurations).

## Detection Hypothesis

Detect behavior consistent with technique T1578.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1578.005 - Modify Cloud Compute Configurations
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1578.005](https://attack.mitre.org/techniques/T1578/005/)
- [MITRE Detection Strategy DET0492](https://attack.mitre.org/detectionstrategies/DET0492)
