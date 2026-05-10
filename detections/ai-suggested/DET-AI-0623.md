---
detection_id: DET-AI-0623
title: AI Suggested Detection - T1600.002 Disable Crypto Hardware
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
  - T1600.002
mitre_detection_strategies:
  - DET0494
coverage_gaps: []
---

# [DET-AI-0623] AI Suggested Detection - T1600.002 Disable Crypto Hardware

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0623 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1600.002 - Disable Crypto Hardware |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0494 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1600.002 (Disable Crypto Hardware).

## Detection Hypothesis

Detect behavior consistent with technique T1600.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1600.002 - Disable Crypto Hardware
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1600.002](https://attack.mitre.org/techniques/T1600/002/)
- [MITRE Detection Strategy DET0494](https://attack.mitre.org/detectionstrategies/DET0494)
