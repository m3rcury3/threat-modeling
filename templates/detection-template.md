# [DET-X-XXX] Detection Title

| Field | Value |
|-------|-------|
| **Detection ID** | DET-X-XXX |
| **Title** | Short descriptive title |
| **Category** | Endpoint \| Network \| Identity \| Cloud |
| **Status** | Planned \| In Testing \| Provisioned |
| **Created** | YYYY-MM-DD |
| **Last Updated** | YYYY-MM-DD |
| **Owner** | analyst-github-handle |

---

## Description

_What does this detection identify? Describe the threat behaviour in plain language._

## Use Case

_Why is this detection valuable? What attacker technique or threat scenario does it cover?
Reference relevant MITRE ATT&CK tactics / techniques where applicable._

- **MITRE Tactic:** TA00XX – Tactic Name
- **MITRE Technique:** T00XX.000 – Technique Name

## Data Sources

List the log sources or data feeds required for this detection to function.

| Data Source | Platform | Notes |
|-------------|----------|-------|
| Windows Security Event Log | On-Prem / Azure | Event IDs 4624, 4625 |
| Sysmon | Endpoint | Channel: Microsoft-Windows-Sysmon/Operational |

## Logic / Query

Provide the detection logic. Use a fenced code block with the appropriate language tag
(e.g., `kql`, `sql`, `splunk-spl`, `sigma`).

```kql
// Example KQL (Microsoft Sentinel)
SecurityEvent
| where EventID == 4625
| summarize FailedLogons = count() by Account, IpAddress, bin(TimeGenerated, 5m)
| where FailedLogons > 10
```

### Tuning Notes

_Document known false-positive sources and any tuning steps applied._

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | > 10 events within 5 minutes |
| Severity | Medium |
| Confidence | High |

## Response Actions

1. Investigate the source IP and account involved.
2. Check for correlated alerts (e.g., successful logon following failures).
3. Escalate to Tier 2 if suspicious activity confirmed.

## References

- [MITRE ATT&CK – T1110 Brute Force](https://attack.mitre.org/techniques/T1110/)
- Internal wiki link or Confluence page
