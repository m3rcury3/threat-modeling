---
detection_id: DET-AI-0616
title: AI Suggested Detection - T1598.002 Spearphishing Attachment
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
  - T1598.002
mitre_detection_strategies:
  - DET0865
coverage_gaps: []
---

# [DET-AI-0616] AI Suggested Detection - T1598.002 Spearphishing Attachment

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0616 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1598.002 - Spearphishing Attachment |
| **MITRE Tactics** | TA0043 |
| **MITRE Detection Strategies** | DET0865 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1598.002 (Spearphishing Attachment).

## Detection Hypothesis

Detect behavior consistent with technique T1598.002 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1598.002 - Spearphishing Attachment
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1598.002](https://attack.mitre.org/techniques/T1598/002/)
- [MITRE Detection Strategy DET0865](https://attack.mitre.org/detectionstrategies/DET0865)
