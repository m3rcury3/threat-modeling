---
detection_id: DET-AI-0526
title: AI Suggested Detection - T1574.012 COR_PROFILER
threat_actors: []
category: application
speed_framework:
  - application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0002
  - TA0005
mitre_techniques:
  - T1574.012
mitre_detection_strategies:
  - DET0479
coverage_gaps: []
---

# [DET-AI-0526] AI Suggested Detection - T1574.012 COR_PROFILER

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0526 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1574.012 - COR_PROFILER |
| **MITRE Tactics** | TA0002, TA0005 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0479 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1574.012 (COR_PROFILER).

## Detection Hypothesis

Detect behavior consistent with technique T1574.012 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1574.012 - COR_PROFILER
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1574.012](https://attack.mitre.org/techniques/T1574/012/)
- [MITRE Detection Strategy DET0479](https://attack.mitre.org/detectionstrategies/DET0479)
