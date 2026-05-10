---
detection_id: DET-AI-0640
title: AI Suggested Detection - T1609 Container Administration Command
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
  - T1609
mitre_detection_strategies:
  - DET0065
coverage_gaps: []
---

# [DET-AI-0640] AI Suggested Detection - T1609 Container Administration Command

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0640 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1609 - Container Administration Command |
| **MITRE Tactics** | TA0002 |
| **MITRE Detection Strategies** | DET0065 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1609 (Container Administration Command).

## Detection Hypothesis

Detect behavior consistent with technique T1609 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1609 - Container Administration Command
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1609](https://attack.mitre.org/techniques/T1609/)
- [MITRE Detection Strategy DET0065](https://attack.mitre.org/detectionstrategies/DET0065)
