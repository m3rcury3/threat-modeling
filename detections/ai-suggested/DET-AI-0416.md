---
detection_id: DET-AI-0416
title: AI Suggested Detection - T1552.002 Credentials in Registry
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1552.002
mitre_detection_strategies:
  - DET0250
coverage_gaps: []
---

# [DET-AI-0416] AI Suggested Detection - T1552.002 Credentials in Registry

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0416 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1552.002 - Credentials in Registry |
| **MITRE Tactics** | TA0006 |
| **MITRE Detection Strategies** | DET0250 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1552.002 (Credentials in Registry).

## Detection Hypothesis

Detect behavior consistent with technique T1552.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1552.002 - Credentials in Registry
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1552.002](https://attack.mitre.org/techniques/T1552/002/)
- [MITRE Detection Strategy DET0250](https://attack.mitre.org/detectionstrategies/DET0250)
