---
detection_id: DET-AI-0608
title: AI Suggested Detection - T1596.003 Digital Certificates
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
  - T1596.003
mitre_detection_strategies:
  - DET0831
coverage_gaps: []
---

# [DET-AI-0608] AI Suggested Detection - T1596.003 Digital Certificates

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0608 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1596.003 - Digital Certificates |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0831 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1596.003 (Digital Certificates).

## Detection Hypothesis

Detect behavior consistent with technique T1596.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1596.003 - Digital Certificates
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1596.003](https://attack.mitre.org/techniques/T1596/003/)
- [MITRE Detection Strategy DET0831](https://attack.mitre.org/detectionstrategies/DET0831)
