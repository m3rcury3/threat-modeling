---
detection_id: DET-AI-0637
title: AI Suggested Detection - T1608.004 Drive-by Target
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0042
mitre_techniques:
  - T1608.004
mitre_detection_strategies:
  - DET0825
coverage_gaps: []
---

# [DET-AI-0637] AI Suggested Detection - T1608.004 Drive-by Target

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0637 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1608.004 - Drive-by Target |
| **MITRE Tactics** | TA0042 |
| **MITRE Detection Strategies** | DET0825 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1608.004 (Drive-by Target).

## Detection Hypothesis

Detect behavior consistent with technique T1608.004 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1608.004 - Drive-by Target
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1608.004](https://attack.mitre.org/techniques/T1608/004/)
- [MITRE Detection Strategy DET0825](https://attack.mitre.org/detectionstrategies/DET0825)
