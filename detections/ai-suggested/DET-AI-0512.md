---
detection_id: DET-AI-0512
title: AI Suggested Detection - T1572 Protocol Tunneling
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
  - T1572
mitre_detection_strategies:
  - DET0538
coverage_gaps: []
---

# [DET-AI-0512] AI Suggested Detection - T1572 Protocol Tunneling

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0512 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1572 - Protocol Tunneling |
| **MITRE Tactics** | TA0011 |
| **MITRE Detection Strategies** | DET0538 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1572 (Protocol Tunneling).

## Detection Hypothesis

Detect behavior consistent with technique T1572 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1572 - Protocol Tunneling
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1572](https://attack.mitre.org/techniques/T1572/)
- [MITRE Detection Strategy DET0538](https://attack.mitre.org/detectionstrategies/DET0538)
