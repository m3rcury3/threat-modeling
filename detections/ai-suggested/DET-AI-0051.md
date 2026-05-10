---
detection_id: DET-AI-0051
title: AI Suggested Detection - T1027.012 LNK Icon Smuggling
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
  - T1027.012
mitre_detection_strategies:
  - DET0405
coverage_gaps: []
---

# [DET-AI-0051] AI Suggested Detection - T1027.012 LNK Icon Smuggling

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0051 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1027.012 - LNK Icon Smuggling |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0405 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1027.012 (LNK Icon Smuggling).

## Detection Hypothesis

Detect behavior consistent with technique T1027.012 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1027.012 - LNK Icon Smuggling
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1027.012](https://attack.mitre.org/techniques/T1027/012/)
- [MITRE Detection Strategy DET0405](https://attack.mitre.org/detectionstrategies/DET0405)
