---
detection_id: DET-AI-0444
title: AI Suggested Detection - T1556.006 Multi-Factor Authentication
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0003
  - TA0006
  - TA0112
mitre_techniques:
  - T1556.006
mitre_detection_strategies:
  - DET0190
coverage_gaps: []
---

# [DET-AI-0444] AI Suggested Detection - T1556.006 Multi-Factor Authentication

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0444 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1556.006 - Multi-Factor Authentication |
| **MITRE Tactics** | TA0003, TA0006, TA0112 |
| **MITRE Detection Strategies** | DET0190 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1556.006 (Multi-Factor Authentication).

## Detection Hypothesis

Detect behavior consistent with technique T1556.006 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1556.006 - Multi-Factor Authentication
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1556.006](https://attack.mitre.org/techniques/T1556/006/)
- [MITRE Detection Strategy DET0190](https://attack.mitre.org/detectionstrategies/DET0190)
