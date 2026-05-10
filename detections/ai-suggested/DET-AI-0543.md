---
detection_id: DET-AI-0543
title: AI Suggested Detection - T1583.007 Serverless
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0042
mitre_techniques:
  - T1583.007
mitre_detection_strategies:
  - DET0829
coverage_gaps: []
---

# [DET-AI-0543] AI Suggested Detection - T1583.007 Serverless

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0543 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1583.007 - Serverless |
| **MITRE Tactics** | TA0042 |
| **MITRE Detection Strategies** | DET0829 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1583.007 (Serverless).

## Detection Hypothesis

Detect behavior consistent with technique T1583.007 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1583.007 - Serverless
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1583.007](https://attack.mitre.org/techniques/T1583/007/)
- [MITRE Detection Strategy DET0829](https://attack.mitre.org/detectionstrategies/DET0829)
