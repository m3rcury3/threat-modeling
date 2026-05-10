---
detection_id: DET-AI-0019
title: AI Suggested Detection - T1011 Exfiltration Over Other Network Medium
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1011
mitre_detection_strategies:
  - DET0077
coverage_gaps: []
---

# [DET-AI-0019] AI Suggested Detection - T1011 Exfiltration Over Other Network Medium

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0019 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1011 - Exfiltration Over Other Network Medium |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0077 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1011 (Exfiltration Over Other Network Medium).

## Detection Hypothesis

Detect behavior consistent with technique T1011 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1011 - Exfiltration Over Other Network Medium
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1011](https://attack.mitre.org/techniques/T1011/)
- [MITRE Detection Strategy DET0077](https://attack.mitre.org/detectionstrategies/DET0077)
