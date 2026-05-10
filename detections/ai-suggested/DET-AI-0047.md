---
detection_id: DET-AI-0047
title: AI Suggested Detection - T1027.008 Stripped Payloads
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
  - T1027.008
mitre_detection_strategies:
  - DET0019
coverage_gaps: []
---

# [DET-AI-0047] AI Suggested Detection - T1027.008 Stripped Payloads

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0047 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.008 - Stripped Payloads |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0019 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.008 (Stripped Payloads).

## Detection Hypothesis

Detect behavior consistent with technique T1027.008 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.008 - Stripped Payloads
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.008](https://attack.mitre.org/techniques/T1027/008/)
- [MITRE Detection Strategy DET0019](https://attack.mitre.org/detectionstrategies/DET0019)
