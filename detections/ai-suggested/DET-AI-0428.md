---
detection_id: DET-AI-0428
title: AI Suggested Detection - T1553.005 Mark-of-the-Web Bypass
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
  - T1553.005
mitre_detection_strategies:
  - DET0257
coverage_gaps: []
---

# [DET-AI-0428] AI Suggested Detection - T1553.005 Mark-of-the-Web Bypass

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0428 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1553.005 - Mark-of-the-Web Bypass |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0257 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1553.005 (Mark-of-the-Web Bypass).

## Detection Hypothesis

Detect behavior consistent with technique T1553.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1553.005 - Mark-of-the-Web Bypass
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1553.005](https://attack.mitre.org/techniques/T1553/005/)
- [MITRE Detection Strategy DET0257](https://attack.mitre.org/detectionstrategies/DET0257)
