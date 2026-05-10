---
detection_id: DET-AI-0547
title: AI Suggested Detection - T1584.002 DNS Server
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
  - TA0042
mitre_techniques:
  - T1584.002
mitre_detection_strategies:
  - DET0891
coverage_gaps: []
---

# [DET-AI-0547] AI Suggested Detection - T1584.002 DNS Server

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0547 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1584.002 - DNS Server |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0891 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1584.002 (DNS Server).

## Detection Hypothesis

Detect behavior consistent with technique T1584.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1584.002 - DNS Server
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1584.002](https://attack.mitre.org/techniques/T1584/002/)
- [MITRE Detection Strategy DET0891](https://attack.mitre.org/detectionstrategies/DET0891)
