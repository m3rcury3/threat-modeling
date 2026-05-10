---
detection_id: DET-AI-0175
title: AI Suggested Detection - T1095 Non-Application Layer Protocol
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
  - TA0011
mitre_techniques:
  - T1095
mitre_detection_strategies:
  - DET0457
coverage_gaps: []
---

# [DET-AI-0175] AI Suggested Detection - T1095 Non-Application Layer Protocol

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0175 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1095 - Non-Application Layer Protocol |
| **MITRE Tactics** | TA0011 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0457 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1095 (Non-Application Layer Protocol).

## Detection Hypothesis

Detect behavior consistent with technique T1095 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1095 - Non-Application Layer Protocol
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1095](https://attack.mitre.org/techniques/T1095/)
- [MITRE Detection Strategy DET0457](https://attack.mitre.org/detectionstrategies/DET0457)
