---
detection_id: DET-AI-0246
title: AI Suggested Detection - T1195.002 Compromise Software Supply Chain
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0001
mitre_techniques:
  - T1195.002
mitre_detection_strategies:
  - DET0309
coverage_gaps: []
---

# [DET-AI-0246] AI Suggested Detection - T1195.002 Compromise Software Supply Chain

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0246 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1195.002 - Compromise Software Supply Chain |
| **MITRE Tactics** | TA0001 |
| **MITRE Detection Strategies** | DET0309 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1195.002 (Compromise Software Supply Chain).

## Detection Hypothesis

Detect behavior consistent with technique T1195.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1195.002 - Compromise Software Supply Chain
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1195.002](https://attack.mitre.org/techniques/T1195/002/)
- [MITRE Detection Strategy DET0309](https://attack.mitre.org/detectionstrategies/DET0309)
