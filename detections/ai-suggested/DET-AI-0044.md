---
detection_id: DET-AI-0044
title: AI Suggested Detection - T1027.005 Indicator Removal from Tools
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
  - T1027.005
mitre_detection_strategies:
  - DET0189
coverage_gaps: []
---

# [DET-AI-0044] AI Suggested Detection - T1027.005 Indicator Removal from Tools

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0044 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.005 - Indicator Removal from Tools |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0189 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.005 (Indicator Removal from Tools).

## Detection Hypothesis

Detect behavior consistent with technique T1027.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.005 - Indicator Removal from Tools
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.005](https://attack.mitre.org/techniques/T1027/005/)
- [MITRE Detection Strategy DET0189](https://attack.mitre.org/detectionstrategies/DET0189)
