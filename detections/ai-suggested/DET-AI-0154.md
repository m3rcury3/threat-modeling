---
detection_id: DET-AI-0154
title: AI Suggested Detection - T1074.002 Remote Data Staging
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1074.002
mitre_detection_strategies:
  - DET0071
coverage_gaps: []
---

# [DET-AI-0154] AI Suggested Detection - T1074.002 Remote Data Staging

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0154 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1074.002 - Remote Data Staging |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0071 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1074.002 (Remote Data Staging).

## Detection Hypothesis

Detect behavior consistent with technique T1074.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1074.002 - Remote Data Staging
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1074.002](https://attack.mitre.org/techniques/T1074/002/)
- [MITRE Detection Strategy DET0071](https://attack.mitre.org/detectionstrategies/DET0071)
