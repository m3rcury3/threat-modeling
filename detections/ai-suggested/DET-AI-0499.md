---
detection_id: DET-AI-0499
title: AI Suggested Detection - T1567.002 Exfiltration to Cloud Storage
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
  - T1567.002
mitre_detection_strategies:
  - DET0570
coverage_gaps: []
---

# [DET-AI-0499] AI Suggested Detection - T1567.002 Exfiltration to Cloud Storage

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0499 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1567.002 - Exfiltration to Cloud Storage |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0570 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1567.002 (Exfiltration to Cloud Storage).

## Detection Hypothesis

Detect behavior consistent with technique T1567.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1567.002 - Exfiltration to Cloud Storage
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1567.002](https://attack.mitre.org/techniques/T1567/002/)
- [MITRE Detection Strategy DET0570](https://attack.mitre.org/detectionstrategies/DET0570)
