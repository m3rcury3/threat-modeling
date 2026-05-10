---
detection_id: DET-AI-0003
title: AI Suggested Detection - T1001.002 Steganography
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
  - T1001.002
mitre_detection_strategies:
  - DET0235
coverage_gaps: []
---

# [DET-AI-0003] AI Suggested Detection - T1001.002 Steganography

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0003 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1001.002 - Steganography |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0235 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1001.002 (Steganography).

## Detection Hypothesis

Detect behavior consistent with technique T1001.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1001.002 - Steganography
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1001.002](https://attack.mitre.org/techniques/T1001/002/)
- [MITRE Detection Strategy DET0235](https://attack.mitre.org/detectionstrategies/DET0235)
