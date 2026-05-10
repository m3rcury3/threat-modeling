---
detection_id: DET-AI-0269
title: AI Suggested Detection - T1213.002 Sharepoint
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0009
mitre_techniques:
  - T1213.002
mitre_detection_strategies:
  - DET0500
coverage_gaps: []
---

# [DET-AI-0269] AI Suggested Detection - T1213.002 Sharepoint

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0269 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1213.002 - Sharepoint |
| **MITRE Tactics** | TA0009 |
| **MITRE Detection Strategies** | DET0500 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1213.002 (Sharepoint).

## Detection Hypothesis

Detect behavior consistent with technique T1213.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1213.002 - Sharepoint
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1213.002](https://attack.mitre.org/techniques/T1213/002/)
- [MITRE Detection Strategy DET0500](https://attack.mitre.org/detectionstrategies/DET0500)
