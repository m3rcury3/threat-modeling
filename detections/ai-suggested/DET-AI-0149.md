---
detection_id: DET-AI-0149
title: AI Suggested Detection - T1071.004 DNS
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0011
mitre_techniques:
  - T1071.004
mitre_detection_strategies:
  - DET0400
coverage_gaps: []
---

# [DET-AI-0149] AI Suggested Detection - T1071.004 DNS

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0149 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1071.004 - DNS |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0400 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1071.004 (DNS).

## Detection Hypothesis

Detect behavior consistent with technique T1071.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1071.004 - DNS
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1071.004](https://attack.mitre.org/techniques/T1071/004/)
- [MITRE Detection Strategy DET0400](https://attack.mitre.org/detectionstrategies/DET0400)
