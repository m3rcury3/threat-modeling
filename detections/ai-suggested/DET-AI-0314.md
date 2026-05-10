---
detection_id: DET-AI-0314
title: AI Suggested Detection - T1491 Defacement
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0040
mitre_techniques:
  - T1491
mitre_detection_strategies:
  - DET0238
coverage_gaps: []
---

# [DET-AI-0314] AI Suggested Detection - T1491 Defacement

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0314 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1491 - Defacement |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0238 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1491 (Defacement).

## Detection Hypothesis

Detect behavior consistent with technique T1491 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1491 - Defacement
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1491](https://attack.mitre.org/techniques/T1491/)
- [MITRE Detection Strategy DET0238](https://attack.mitre.org/detectionstrategies/DET0238)
