---
detection_id: DET-AI-0626
title: AI Suggested Detection - T1601.002 Downgrade System Image
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0112
mitre_techniques:
  - T1601.002
mitre_detection_strategies:
  - DET0569
coverage_gaps: []
---

# [DET-AI-0626] AI Suggested Detection - T1601.002 Downgrade System Image

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0626 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1601.002 - Downgrade System Image |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0569 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1601.002 (Downgrade System Image).

## Detection Hypothesis

Detect behavior consistent with technique T1601.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1601.002 - Downgrade System Image
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1601.002](https://attack.mitre.org/techniques/T1601/002/)
- [MITRE Detection Strategy DET0569](https://attack.mitre.org/detectionstrategies/DET0569)
