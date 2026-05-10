---
detection_id: DET-AI-0618
title: AI Suggested Detection - T1598.004 Spearphishing Voice
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
  - TA0043
mitre_techniques:
  - T1598.004
mitre_detection_strategies:
  - DET0886
coverage_gaps: []
---

# [DET-AI-0618] AI Suggested Detection - T1598.004 Spearphishing Voice

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0618 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1598.004 - Spearphishing Voice |
| **MITRE Tactics** | TA0043 |
| **SPEED Framework** | application |
| **MITRE Detection Strategies** | DET0886 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1598.004 (Spearphishing Voice).

## Detection Hypothesis

Detect behavior consistent with technique T1598.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1598.004 - Spearphishing Voice
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1598.004](https://attack.mitre.org/techniques/T1598/004/)
- [MITRE Detection Strategy DET0886](https://attack.mitre.org/detectionstrategies/DET0886)
