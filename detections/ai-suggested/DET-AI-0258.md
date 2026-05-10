---
detection_id: DET-AI-0258
title: AI Suggested Detection - T1204.004 Malicious Copy and Paste
threat_actors: []
category: application
speed_framework:
  - application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
mitre_techniques:
  - T1204.004
mitre_detection_strategies:
  - DET0340
coverage_gaps: []
---

# [DET-AI-0258] AI Suggested Detection - T1204.004 Malicious Copy and Paste

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0258 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1204.004 - Malicious Copy and Paste |
| **MITRE Tactics** | TA0002 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0340 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1204.004 (Malicious Copy and Paste).

## Detection Hypothesis

Detect behavior consistent with technique T1204.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1204.004 - Malicious Copy and Paste
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1204.004](https://attack.mitre.org/techniques/T1204/004/)
- [MITRE Detection Strategy DET0340](https://attack.mitre.org/detectionstrategies/DET0340)
