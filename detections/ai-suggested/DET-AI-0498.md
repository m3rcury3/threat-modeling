---
detection_id: DET-AI-0498
title: AI Suggested Detection - T1567.001 Exfiltration to Code Repository
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1567.001
mitre_detection_strategies:
  - DET0318
coverage_gaps: []
---

# [DET-AI-0498] AI Suggested Detection - T1567.001 Exfiltration to Code Repository

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0498 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1567.001 - Exfiltration to Code Repository |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0318 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1567.001 (Exfiltration to Code Repository).

## Detection Hypothesis

Detect behavior consistent with technique T1567.001 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1567.001 - Exfiltration to Code Repository
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1567.001](https://attack.mitre.org/techniques/T1567/001/)
- [MITRE Detection Strategy DET0318](https://attack.mitre.org/detectionstrategies/DET0318)
