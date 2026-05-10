---
detection_id: DET-AI-0352
title: AI Suggested Detection - T1535 Unused/Unsupported Cloud Regions
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
  - T1535
mitre_detection_strategies:
  - DET0247
coverage_gaps: []
---

# [DET-AI-0352] AI Suggested Detection - T1535 Unused/Unsupported Cloud Regions

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0352 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1535 - Unused/Unsupported Cloud Regions |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0247 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1535 (Unused/Unsupported Cloud Regions).

## Detection Hypothesis

Detect behavior consistent with technique T1535 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1535 - Unused/Unsupported Cloud Regions
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1535](https://attack.mitre.org/techniques/T1535/)
- [MITRE Detection Strategy DET0247](https://attack.mitre.org/detectionstrategies/DET0247)
