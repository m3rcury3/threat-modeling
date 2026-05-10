---
detection_id: DET-AI-0027
title: AI Suggested Detection - T1020 Automated Exfiltration
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
  - T1020
mitre_detection_strategies:
  - DET0397
coverage_gaps: []
---

# [DET-AI-0027] AI Suggested Detection - T1020 Automated Exfiltration

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0027 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1020 - Automated Exfiltration |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0397 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1020 (Automated Exfiltration).

## Detection Hypothesis

Detect behavior consistent with technique T1020 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1020 - Automated Exfiltration
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1020](https://attack.mitre.org/techniques/T1020/)
- [MITRE Detection Strategy DET0397](https://attack.mitre.org/detectionstrategies/DET0397)
