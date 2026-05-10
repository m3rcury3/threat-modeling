---
detection_id: DET-AI-0182
title: AI Suggested Detection - T1098.006 Additional Container Cluster Roles
threat_actors: []
category: application
speed_framework:
  - application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0004
mitre_techniques:
  - T1098.006
mitre_detection_strategies:
  - DET0572
coverage_gaps: []
---

# [DET-AI-0182] AI Suggested Detection - T1098.006 Additional Container Cluster Roles

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0182 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1098.006 - Additional Container Cluster Roles |
| **MITRE Tactics** | TA0003, TA0004 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0572 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1098.006 (Additional Container Cluster Roles).

## Detection Hypothesis

Detect behavior consistent with technique T1098.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1098.006 - Additional Container Cluster Roles
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1098.006](https://attack.mitre.org/techniques/T1098/006/)
- [MITRE Detection Strategy DET0572](https://attack.mitre.org/detectionstrategies/DET0572)
