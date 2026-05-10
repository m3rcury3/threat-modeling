---
detection_id: DET-AI-0313
title: AI Suggested Detection - T1490 Inhibit System Recovery
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
  - T1490
mitre_detection_strategies:
  - DET0329
coverage_gaps: []
---

# [DET-AI-0313] AI Suggested Detection - T1490 Inhibit System Recovery

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0313 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1490 - Inhibit System Recovery |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0329 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1490 (Inhibit System Recovery).

## Detection Hypothesis

Detect behavior consistent with technique T1490 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1490 - Inhibit System Recovery
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1490](https://attack.mitre.org/techniques/T1490/)
- [MITRE Detection Strategy DET0329](https://attack.mitre.org/detectionstrategies/DET0329)
