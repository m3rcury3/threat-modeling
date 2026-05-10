---
detection_id: DET-AI-0651
title: AI Suggested Detection - T1622 Debugger Evasion
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0005
  - TA0007
mitre_techniques:
  - T1622
mitre_detection_strategies:
  - DET0371
coverage_gaps: []
---

# [DET-AI-0651] AI Suggested Detection - T1622 Debugger Evasion

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0651 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1622 - Debugger Evasion |
| **MITRE Tactics** | TA0005, TA0007 |
| **MITRE Detection Strategies** | DET0371 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1622 (Debugger Evasion).

## Detection Hypothesis

Detect behavior consistent with technique T1622 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1622 - Debugger Evasion
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1622](https://attack.mitre.org/techniques/T1622/)
- [MITRE Detection Strategy DET0371](https://attack.mitre.org/detectionstrategies/DET0371)
