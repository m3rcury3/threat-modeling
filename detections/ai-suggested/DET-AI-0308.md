---
detection_id: DET-AI-0308
title: AI Suggested Detection - T1484.002 Trust Modification
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
  - TA0004
  - TA0112
mitre_techniques:
  - T1484.002
mitre_detection_strategies:
  - DET0458
coverage_gaps: []
---

# [DET-AI-0308] AI Suggested Detection - T1484.002 Trust Modification

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0308 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1484.002 - Trust Modification |
| **MITRE Tactics** | TA0004, TA0112 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0458 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1484.002 (Trust Modification).

## Detection Hypothesis

Detect behavior consistent with technique T1484.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1484.002 - Trust Modification
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1484.002](https://attack.mitre.org/techniques/T1484/002/)
- [MITRE Detection Strategy DET0458](https://attack.mitre.org/detectionstrategies/DET0458)
