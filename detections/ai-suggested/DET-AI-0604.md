---
detection_id: DET-AI-0604
title: AI Suggested Detection - T1595.003 Wordlist Scanning
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
  - TA0043
mitre_techniques:
  - T1595.003
mitre_detection_strategies:
  - DET0868
coverage_gaps: []
---

# [DET-AI-0604] AI Suggested Detection - T1595.003 Wordlist Scanning

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0604 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1595.003 - Wordlist Scanning |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0868 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1595.003 (Wordlist Scanning).

## Detection Hypothesis

Detect behavior consistent with technique T1595.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1595.003 - Wordlist Scanning
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1595.003](https://attack.mitre.org/techniques/T1595/003/)
- [MITRE Detection Strategy DET0868](https://attack.mitre.org/detectionstrategies/DET0868)
