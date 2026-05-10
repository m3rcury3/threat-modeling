---
detection_id: DET-AI-0286
title: AI Suggested Detection - T1218.009 Regsvcs/Regasm
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
  - T1218.009
mitre_detection_strategies:
  - DET0361
coverage_gaps: []
---

# [DET-AI-0286] AI Suggested Detection - T1218.009 Regsvcs/Regasm

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0286 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1218.009 - Regsvcs/Regasm |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0361 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1218.009 (Regsvcs/Regasm).

## Detection Hypothesis

Detect behavior consistent with technique T1218.009 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1218.009 - Regsvcs/Regasm
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1218.009](https://attack.mitre.org/techniques/T1218/009/)
- [MITRE Detection Strategy DET0361](https://attack.mitre.org/detectionstrategies/DET0361)
