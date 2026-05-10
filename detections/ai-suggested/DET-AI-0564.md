---
detection_id: DET-AI-0564
title: AI Suggested Detection - T1587.002 Code Signing Certificates
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
  - TA0042
mitre_techniques:
  - T1587.002
mitre_detection_strategies:
  - DET0833
coverage_gaps: []
---

# [DET-AI-0564] AI Suggested Detection - T1587.002 Code Signing Certificates

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0564 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1587.002 - Code Signing Certificates |
| **MITRE Tactics** | TA0042 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0833 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1587.002 (Code Signing Certificates).

## Detection Hypothesis

Detect behavior consistent with technique T1587.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1587.002 - Code Signing Certificates
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1587.002](https://attack.mitre.org/techniques/T1587/002/)
- [MITRE Detection Strategy DET0833](https://attack.mitre.org/detectionstrategies/DET0833)
