---
detection_id: DET-AI-0190
title: AI Suggested Detection - T1106 Native API
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
  - T1106
mitre_detection_strategies:
  - DET0529
coverage_gaps: []
---

# [DET-AI-0190] AI Suggested Detection - T1106 Native API

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0190 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1106 - Native API |
| **MITRE Tactics** | TA0002 |
| **MITRE Detection Strategies** | DET0529 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1106 (Native API).

## Detection Hypothesis

Detect behavior consistent with technique T1106 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1106 - Native API
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1106](https://attack.mitre.org/techniques/T1106/)
- [MITRE Detection Strategy DET0529](https://attack.mitre.org/detectionstrategies/DET0529)
