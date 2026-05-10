---
detection_id: DET-AI-0088
title: AI Suggested Detection - T1048.003 Exfiltration Over Unencrypted Non-C2 Protocol
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
  - T1048.003
mitre_detection_strategies:
  - DET0149
coverage_gaps: []
---

# [DET-AI-0088] AI Suggested Detection - T1048.003 Exfiltration Over Unencrypted Non-C2 Protocol

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0088 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1048.003 - Exfiltration Over Unencrypted Non-C2 Protocol |
| **MITRE Tactics** | TA0010 |
| **MITRE Detection Strategies** | DET0149 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1048.003 (Exfiltration Over Unencrypted Non-C2 Protocol).

## Detection Hypothesis

Detect behavior consistent with technique T1048.003 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1048.003 - Exfiltration Over Unencrypted Non-C2 Protocol
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1048.003](https://attack.mitre.org/techniques/T1048/003/)
- [MITRE Detection Strategy DET0149](https://attack.mitre.org/detectionstrategies/DET0149)
