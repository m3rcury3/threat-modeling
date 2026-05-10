---
detection_id: DET-AI-0492
title: AI Suggested Detection - T1566 Phishing
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0001
mitre_techniques:
  - T1566
mitre_detection_strategies:
  - DET0070
coverage_gaps: []
---

# [DET-AI-0492] AI Suggested Detection - T1566 Phishing

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0492 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1566 - Phishing |
| **MITRE Tactics** | TA0001 |
| **MITRE Detection Strategies** | DET0070 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1566 (Phishing).

## Detection Hypothesis

Detect behavior consistent with technique T1566 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1566 - Phishing
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1566](https://attack.mitre.org/techniques/T1566/)
- [MITRE Detection Strategy DET0070](https://attack.mitre.org/detectionstrategies/DET0070)
