---
detection_id: DET-AI-0062
title: AI Suggested Detection - T1036.001 Invalid Code Signature
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
  - T1036.001
mitre_detection_strategies:
  - DET0031
coverage_gaps: []
---

# [DET-AI-0062] AI Suggested Detection - T1036.001 Invalid Code Signature

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0062 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1036.001 - Invalid Code Signature |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0031 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1036.001 (Invalid Code Signature).

## Detection Hypothesis

Detect behavior consistent with technique T1036.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1036.001 - Invalid Code Signature
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1036.001](https://attack.mitre.org/techniques/T1036/001/)
- [MITRE Detection Strategy DET0031](https://attack.mitre.org/detectionstrategies/DET0031)
