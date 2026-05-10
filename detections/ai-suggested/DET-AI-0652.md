---
detection_id: DET-AI-0652
title: AI Suggested Detection - T1647 Plist File Modification
threat_actors: []
category: application
status: AI Suggested
network_applicability: both
created: 2026-05-10
last_updated: 2026-05-10
owner: ai-assistant
mitre_tactics:
  - TA0112
mitre_techniques:
  - T1647
mitre_detection_strategies:
  - DET0109
coverage_gaps: []
---

# [DET-AI-0652] AI Suggested Detection - T1647 Plist File Modification

| Field | Value |
|-------|-------|
| **Detection ID** | DET-AI-0652 |
| **Status** | AI Suggested |
| **MITRE Technique** | T1647 - Plist File Modification |
| **MITRE Tactics** | TA0112 |
| **MITRE Detection Strategies** | DET0109 |

---

## Description

AI-generated starter detection requirement for MITRE ATT&CK technique T1647 (Plist File Modification).

## Detection Hypothesis

Detect behavior consistent with technique T1647 by monitoring relevant host, identity, cloud, and network telemetry based on implementation context.

## Suggested Data Sources

- Endpoint process and command telemetry
- Authentication and identity logs
- Network flow and protocol telemetry
- Cloud control-plane audit logs

## Suggested Logic Placeholder

```kql
// AI Suggested placeholder for T1647 - Plist File Modification
// Replace with environment-specific logic.
```

## References

- [MITRE ATT&CK Technique T1647](https://attack.mitre.org/techniques/T1647/)
- [MITRE Detection Strategy DET0109](https://attack.mitre.org/detectionstrategies/DET0109)
