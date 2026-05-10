---
detection_id: DET-AI-0144
title: AI Suggested Detection - T1070.010 Relocate Malware
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
  - T1070.010
mitre_detection_strategies:
  - DET0439
coverage_gaps: []
---

# [DET-AI-0144] AI Suggested Detection - T1070.010 Relocate Malware

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0144 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1070.010 - Relocate Malware |
| **MITRE Tactics** | TA0005 |
| **MITRE Detection Strategies** | DET0439 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1070.010 (Relocate Malware).

## Detection Hypothesis

Detect behavior consistent with technique T1070.010 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1070.010 - Relocate Malware
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1070.010](https://attack.mitre.org/techniques/T1070/010/)
- [MITRE Detection Strategy DET0439](https://attack.mitre.org/detectionstrategies/DET0439)
