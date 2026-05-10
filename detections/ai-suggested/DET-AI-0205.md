---
detection_id: DET-AI-0205
title: AI Suggested Detection - T1120 Peripheral Device Discovery
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0007
mitre_techniques:
  - T1120
mitre_detection_strategies:
  - DET0491
coverage_gaps: []
---

# [DET-AI-0205] AI Suggested Detection - T1120 Peripheral Device Discovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0205 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1120 - Peripheral Device Discovery |
| **MITRE Tactics** | TA0007 |
| **MITRE Detection Strategies** | DET0491 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1120 (Peripheral Device Discovery).

## Detection Hypothesis

Detect behavior consistent with technique T1120 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1120 - Peripheral Device Discovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1120](https://attack.mitre.org/techniques/T1120/)
- [MITRE Detection Strategy DET0491](https://attack.mitre.org/detectionstrategies/DET0491)
