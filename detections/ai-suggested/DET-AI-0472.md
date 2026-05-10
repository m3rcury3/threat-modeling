---
detection_id: DET-AI-0472
title: AI Suggested Detection - T1563.002 RDP Hijacking
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0008
mitre_techniques:
  - T1563.002
mitre_detection_strategies:
  - DET0588
coverage_gaps: []
---

# [DET-AI-0472] AI Suggested Detection - T1563.002 RDP Hijacking

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0472 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1563.002 - RDP Hijacking |
| **MITRE Tactics** | TA0008 |
| **MITRE Detection Strategies** | DET0588 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1563.002 (RDP Hijacking).

## Detection Hypothesis

Detect behavior consistent with technique T1563.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1563.002 - RDP Hijacking
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1563.002](https://attack.mitre.org/techniques/T1563/002/)
- [MITRE Detection Strategy DET0588](https://attack.mitre.org/detectionstrategies/DET0588)
