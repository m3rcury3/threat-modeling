---
detection_id: DET-AI-0513
title: AI Suggested Detection - T1573 Encrypted Channel
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
  - T1573
mitre_detection_strategies:
  - DET0273
coverage_gaps: []
---

# [DET-AI-0513] AI Suggested Detection - T1573 Encrypted Channel

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0513 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1573 - Encrypted Channel |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0273 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1573 (Encrypted Channel).

## Detection Hypothesis

Detect behavior consistent with technique T1573 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1573 - Encrypted Channel
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1573](https://attack.mitre.org/techniques/T1573/)
- [MITRE Detection Strategy DET0273](https://attack.mitre.org/detectionstrategies/DET0273)
