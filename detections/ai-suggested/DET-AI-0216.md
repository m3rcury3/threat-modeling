---
detection_id: DET-AI-0216
title: AI Suggested Detection - T1132.002 Non-Standard Encoding
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0011
mitre_techniques:
  - T1132.002
mitre_detection_strategies:
  - DET0326
coverage_gaps: []
---

# [DET-AI-0216] AI Suggested Detection - T1132.002 Non-Standard Encoding

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0216 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1132.002 - Non-Standard Encoding |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0326 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1132.002 (Non-Standard Encoding).

## Detection Hypothesis

Detect behavior consistent with technique T1132.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1132.002 - Non-Standard Encoding
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1132.002](https://attack.mitre.org/techniques/T1132/002/)
- [MITRE Detection Strategy DET0326](https://attack.mitre.org/detectionstrategies/DET0326)
