---
detection_id: DET-AI-0680
title: AI Suggested Detection - T1684 Social Engineering
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
  - T1684
mitre_detection_strategies:
  - DET0899
coverage_gaps: []
---

# [DET-AI-0680] AI Suggested Detection - T1684 Social Engineering

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0680 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1684 - Social Engineering |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0899 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1684 (Social Engineering).

## Detection Hypothesis

Detect behavior consistent with technique T1684 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1684 - Social Engineering
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1684](https://attack.mitre.org/techniques/T1684/)
- [MITRE Detection Strategy DET0899](https://attack.mitre.org/detectionstrategies/DET0899)
