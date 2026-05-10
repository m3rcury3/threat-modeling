---
detection_id: DET-X-XXX
title: Threat Actor Detection Title
threat_actors:
  - actor_id_1
  - actor_id_2
category: endpoint  # endpoint, network, identity, cloud, email, application
speed_framework:
  - host  # access-control, application, attack-pattern, cloud, compliance, host, internal-network, mobile, perimeter, physical, policy, self-monitoring, threat-intelligence, threat-modeling, wireless-network
status: planned     # planned, in_testing, provisioned, deprecated, AI Suggested
network_applicability: both  # internet_connected, air_gapped, both
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
owner: analyst-github-handle
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1110.001
coverage_gaps: []
---

# [DET-X-XXX] Threat Actor Detection Title

| Field | Value |
|-------|-------|
| **Detection ID** | DET-X-XXX |
| **Title** | Short descriptive title tied to a specific threat actor, intrusion set, or campaign |
| **Threat Actors** | References to `actor_id` from `data/actors.json` |
| **Category** | Endpoint \| Network \| Identity \| Cloud \| Email \| Application |
| **SPEED Framework** | access-control \| application \| attack-pattern \| cloud \| compliance \| host \| internal-network \| mobile \| perimeter \| physical \| policy \| self-monitoring \| threat-intelligence \| threat-modeling \| wireless-network |
| **Status** | Planned \| In Testing \| Provisioned \| Deprecated \| AI Suggested |
| **Network Applicability** | Internet Connected \| Air-Gapped \| Both |
| **Created** | YYYY-MM-DD |
| **Last Updated** | YYYY-MM-DD |
| **Owner** | analyst-github-handle |

---

## Description

_What actor behaviour does this detection identify? Describe the threat activity in plain language and explain how it maps to a known threat actor tradecraft pattern, malware family, infrastructure pattern, or campaign technique._

## Threat Context

_Why is this detection relevant for this specific threat actor? Summarize the actor's typical objectives, targeting, tooling, and tradecraft relevant to this detection._

- **Threat Actor / Cluster:** APTXX – Actor Name
- **Campaign / Malware Family:** Example Malware / Operation Name
- **Targeting Profile:** Industry, geography, or victim profile
- **ATT&CK Tactic:** TA00XX – Tactic Name
- **ATT&CK Technique:** T00XX.000 – Technique Name

## Detection Hypothesis

_What observable behaviour, artifact, or pattern associated with the threat actor should trigger this detection?_

Examples:
- Known malware file characteristics used by the actor
- Command-line or process execution patterns associated with actor tooling
- Infrastructure or network indicators aligned to the campaign
- Registry, persistence, or scheduled task artefacts
- Email or lure artefacts tied to the actor's delivery method

## Data Sources

List the log sources, telemetry, or packet/content inspection sources required for this detection.

| Data Source | Platform | Notes |
|-------------|----------|-------|
| Windows Security Event Log | On-Prem / Azure | Authentication and account activity |
| Sysmon | Endpoint | Process, network, file, and registry visibility |
| EDR Telemetry | Endpoint | Vendor-specific enriched process and alert data |
| Zeek / Suricata / PCAP | Network | DNS, HTTP, TLS, and connection metadata |
| Email Gateway Logs | Email | Sender, attachment, URL, and delivery telemetry |

## Detection Logic

Provide one or more open-source-friendly detection logic placeholders below. Keep only the sections relevant to the detection.

### Sigma Placeholder

```yaml
# Example Sigma rule placeholder
# Replace values with actor-specific logic

title: Threat Actor Activity Placeholder
id: 00000000-0000-0000-0000-000000000000
status: experimental
description: Detects behavior associated with [Threat Actor / Malware Family]
references:
  - https://attack.mitre.org/
author: analyst-github-handle
date: YYYY-MM-DD
logsource:
  product: windows
  category: process_creation
detection:
  selection:
    Image|endswith: '\\example.exe'
    CommandLine|contains:
      - 'actor-specific-string'
      - 'malware-argument'
  condition: selection
falsepositives:
  - Legitimate administrative activity
level: medium
tags:
  - attack.execution
  - attack.t1059
  - threat.actor.placeholder
```

### YARA Placeholder

```yara
rule THREAT_ACTOR_MALWARE_PLACEHOLDER
{
    meta:
        description = "Detects malware or file artifacts associated with [Threat Actor]"
        author = "analyst-github-handle"
        date = "YYYY-MM-DD"
        reference = "https://example.com/report"
        threat_actor = "Actor Name"
        malware_family = "ExampleFamily"
    strings:
        $s1 = "actor_specific_string_1" ascii wide
        $s2 = "actor_specific_string_2" ascii wide
        $hex1 = { 90 90 68 ?? ?? ?? ?? }
    condition:
        uint16(0) == 0x5A4D and 1 of ($s*)
}
```

### Snort / Suricata Placeholder

```snort
alert http $HOME_NET any -> $EXTERNAL_NET any (
    msg:"Threat Actor C2 / Delivery Pattern Placeholder";
    flow:established,to_server;
    http.uri; content:"/example-path";
    http.header; content:"actor-specific-user-agent";
    classtype:trojan-activity;
    sid:1000001;
    rev:1;
    metadata:attack_target Client_Endpoint, deployment Perimeter, created_at YYYY_MM_DD;
)
```

### Generic KQL / SIEM Placeholder

```kql
// Example KQL placeholder for actor-specific behavior
DeviceProcessEvents
| where FileName =~ "example.exe" or ProcessCommandLine has_any ("actor-specific-string", "malware-argument")
| project Timestamp, DeviceName, AccountName, FileName, ProcessCommandLine, InitiatingProcessFileName
```

### Tuning Notes

_Document known false-positive sources, environmental exceptions, and how the rule should be tuned for actor-specific fidelity._

Consider:
- Internal tools that resemble the actor behavior
- Threat intel confidence and indicator expiration
- Infrastructure churn or reused public tooling
- Region- or business-unit-specific allowlists

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | Define actor-specific trigger logic |
| Severity | Low \| Medium \| High \| Critical |
| Confidence | Low \| Medium \| High |
| Enrichment | Threat intel match \| Asset criticality \| User risk |

## Response Actions

1. Validate whether the matched artifact or behavior aligns to the specified threat actor or campaign.
2. Enrich with threat intelligence, malware sandboxing, passive DNS, and historical telemetry.
3. Scope related activity across hosts, users, identities, mailboxes, and network connections.
4. Contain affected systems or accounts if malicious activity is confirmed.
5. Preserve forensic evidence and escalate according to incident severity.

## Validation

_Describe how this detection should be tested before production deployment._

- Atomic or benign simulation steps
- Replay of sanitized telemetry
- Validation against known-good and known-bad samples
- Peer review by detection engineering / threat hunting

## References

- [MITRE ATT&CK](https://attack.mitre.org/)
- Public threat intelligence report for the actor or campaign
- Malware analysis write-up
- Internal wiki link or case history
