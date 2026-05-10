---
detection_id: DET-AI-0467
title: AI Suggested Detection - T1561 Disk Wipe
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0040
mitre_techniques:
  - T1561
mitre_detection_strategies:
  - DET0137
coverage_gaps: []
---

# [DET-AI-0467] AI Suggested Detection - T1561 Disk Wipe

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0467 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1561 - Disk Wipe |
| **MITRE Tactics** | TA0040 |
| **MITRE Detection Strategies** | DET0137 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1561 (Disk Wipe).

## Detection Hypothesis

Detect behavior consistent with technique T1561 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1561 - Disk Wipe
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1561](https://attack.mitre.org/techniques/T1561/)
- [MITRE Detection Strategy DET0137](https://attack.mitre.org/detectionstrategies/DET0137)
