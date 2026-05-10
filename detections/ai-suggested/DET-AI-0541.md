---
detection_id: DET-AI-0541
title: AI Suggested Detection - T1583.005 Botnet
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0042
mitre_techniques:
  - T1583.005
mitre_detection_strategies:
  - DET0837
coverage_gaps: []
---

# [DET-AI-0541] AI Suggested Detection - T1583.005 Botnet

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0541 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1583.005 - Botnet |
| **MITRE Tactics** | TA0042 |
| **MITRE Detection Strategies** | DET0837 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1583.005 (Botnet).

## Detection Hypothesis

Detect behavior consistent with technique T1583.005 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1583.005 - Botnet
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1583.005](https://attack.mitre.org/techniques/T1583/005/)
- [MITRE Detection Strategy DET0837](https://attack.mitre.org/detectionstrategies/DET0837)
