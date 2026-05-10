---
detection_id: DET-AI-0140
title: AI Suggested Detection - T1070.006 Timestomp
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
  - T1070.006
mitre_detection_strategies:
  - DET0591
coverage_gaps: []
---

# [DET-AI-0140] AI Suggested Detection - T1070.006 Timestomp

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0140 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1070.006 - Timestomp |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0591 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1070.006 (Timestomp).

## Detection Hypothesis

Detect behavior consistent with technique T1070.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1070.006 - Timestomp
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1070.006](https://attack.mitre.org/techniques/T1070/006/)
- [MITRE Detection Strategy DET0591](https://attack.mitre.org/detectionstrategies/DET0591)
