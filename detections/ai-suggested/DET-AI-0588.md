---
detection_id: DET-AI-0588
title: AI Suggested Detection - T1591.002 Business Relationships
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
  - T1591.002
mitre_detection_strategies:
  - DET0855
coverage_gaps: []
---

# [DET-AI-0588] AI Suggested Detection - T1591.002 Business Relationships

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0588 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1591.002 - Business Relationships |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0855 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1591.002 (Business Relationships).

## Detection Hypothesis

Detect behavior consistent with technique T1591.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1591.002 - Business Relationships
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1591.002](https://attack.mitre.org/techniques/T1591/002/)
- [MITRE Detection Strategy DET0855](https://attack.mitre.org/detectionstrategies/DET0855)
