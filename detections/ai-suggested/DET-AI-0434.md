---
detection_id: DET-AI-0434
title: AI Suggested Detection - T1555.003 Credentials from Web Browsers
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1555.003
mitre_detection_strategies:
  - DET0037
coverage_gaps: []
---

# [DET-AI-0434] AI Suggested Detection - T1555.003 Credentials from Web Browsers

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0434 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1555.003 - Credentials from Web Browsers |
| **MITRE Tactics** | TA0006 |
| **MITRE Detection Strategies** | DET0037 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1555.003 (Credentials from Web Browsers).

## Detection Hypothesis

Detect behavior consistent with technique T1555.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1555.003 - Credentials from Web Browsers
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1555.003](https://attack.mitre.org/techniques/T1555/003/)
- [MITRE Detection Strategy DET0037](https://attack.mitre.org/detectionstrategies/DET0037)
