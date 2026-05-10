---
detection_id: DET-AI-0042
title: AI Suggested Detection - T1027.003 Steganography
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
  - T1027.003
mitre_detection_strategies:
  - DET0119
coverage_gaps: []
---

# [DET-AI-0042] AI Suggested Detection - T1027.003 Steganography

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0042 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.003 - Steganography |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0119 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.003 (Steganography).

## Detection Hypothesis

Detect behavior consistent with technique T1027.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.003 - Steganography
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.003](https://attack.mitre.org/techniques/T1027/003/)
- [MITRE Detection Strategy DET0119](https://attack.mitre.org/detectionstrategies/DET0119)
