---
detection_id: DET-AI-0601
title: AI Suggested Detection - T1595 Active Scanning
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0043
mitre_techniques:
  - T1595
mitre_detection_strategies:
  - DET0830
coverage_gaps: []
---

# [DET-AI-0601] AI Suggested Detection - T1595 Active Scanning

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0601 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1595 - Active Scanning |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0830 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1595 (Active Scanning).

## Detection Hypothesis

Detect behavior consistent with technique T1595 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1595 - Active Scanning
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1595](https://attack.mitre.org/techniques/T1595/)
- [MITRE Detection Strategy DET0830](https://attack.mitre.org/detectionstrategies/DET0830)
