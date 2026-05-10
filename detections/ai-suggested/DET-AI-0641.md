---
detection_id: DET-AI-0641
title: AI Suggested Detection - T1610 Deploy Container
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
mitre_techniques:
  - T1610
mitre_detection_strategies:
  - DET0249
coverage_gaps: []
---

# [DET-AI-0641] AI Suggested Detection - T1610 Deploy Container

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0641 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1610 - Deploy Container |
| **MITRE Tactics** | TA0002 |
| **MITRE Detection Strategies** | DET0249 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1610 (Deploy Container).

## Detection Hypothesis

Detect behavior consistent with technique T1610 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1610 - Deploy Container
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1610](https://attack.mitre.org/techniques/T1610/)
- [MITRE Detection Strategy DET0249](https://attack.mitre.org/detectionstrategies/DET0249)
