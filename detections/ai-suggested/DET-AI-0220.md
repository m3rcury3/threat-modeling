---
detection_id: DET-AI-0220
title: AI Suggested Detection - T1134.002 Create Process with Token
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0004
  - TA0005
mitre_techniques:
  - T1134.002
mitre_detection_strategies:
  - DET0456
coverage_gaps: []
---

# [DET-AI-0220] AI Suggested Detection - T1134.002 Create Process with Token

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0220 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1134.002 - Create Process with Token |
| **MITRE Tactics** | TA0004, TA0005 |
| **MITRE Detection Strategies** | DET0456 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1134.002 (Create Process with Token).

## Detection Hypothesis

Detect behavior consistent with technique T1134.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1134.002 - Create Process with Token
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1134.002](https://attack.mitre.org/techniques/T1134/002/)
- [MITRE Detection Strategy DET0456](https://attack.mitre.org/detectionstrategies/DET0456)
