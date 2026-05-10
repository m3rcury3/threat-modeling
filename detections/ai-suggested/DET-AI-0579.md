---
detection_id: DET-AI-0579
title: AI Suggested Detection - T1590 Gather Victim Network Information
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0043
mitre_techniques:
  - T1590
mitre_detection_strategies:
  - DET0869
coverage_gaps: []
---

# [DET-AI-0579] AI Suggested Detection - T1590 Gather Victim Network Information

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0579 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1590 - Gather Victim Network Information |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0869 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1590 (Gather Victim Network Information).

## Detection Hypothesis

Detect behavior consistent with technique T1590 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1590 - Gather Victim Network Information
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1590](https://attack.mitre.org/techniques/T1590/)
- [MITRE Detection Strategy DET0869](https://attack.mitre.org/detectionstrategies/DET0869)
