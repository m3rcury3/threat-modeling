---
detection_id: DET-E-001
title: Brute Force Attack – Local Windows Account
threat_actors:
  - generic_credential_abuse
category: endpoint
status: provisioned
network_applicability: both
speed_framework:
  - host
created: 2025-01-15
last_updated: 2025-05-10
owner: blue-team
mitre_tactics:
  - TA0006
mitre_techniques:
  - T1110.001
coverage_gaps: []
---

# [DET-E-001] Brute Force Attack – Local Windows Account

| Field | Value |
|-------|-------|
| **Detection ID** | DET-E-001 |
| **Title** | Brute Force Attack – Local Windows Account |
| **Category** | Endpoint |
| **SPEED Framework** | host |
| **Status** | Provisioned |
| **Created** | 2025-01-15 |
| **Last Updated** | 2025-05-10 |
| **Owner** | blue-team |

---

## Description

Detects repeated failed logon attempts against a local Windows account within a short time window, indicative of an online brute-force or password-spray attack against endpoints.

## Use Case

Adversaries attempting to gain access to an endpoint may systematically try common passwords or user-name/password combinations. This detection fires when there are more than 10 failed interactive or network logons for a single account within a 5-minute window.

- **MITRE Tactic:** TA0006 – Credential Access
- **MITRE Technique:** T1110.001 – Brute Force: Password Guessing

## Data Sources

| Data Source | Platform | Notes |
|-------------|----------|-------|
| Windows Security Event Log | Windows Endpoint | Event ID 4625 (Failed Logon) |
| Windows Security Event Log | Windows Endpoint | Event ID 4624 (Successful Logon – for correlation) |

## Logic / Query

```kql
// Microsoft Sentinel – KQL
SecurityEvent
| where EventID == 4625
| where LogonType in (2, 3, 10)          // Interactive, Network, RemoteInteractive
| summarize
    FailedLogons = count(),
    DistinctIPs  = dcount(IpAddress)
    by Account, Computer, bin(TimeGenerated, 5m)
| where FailedLogons > 10
| extend Severity = "Medium"
```

### Tuning Notes

- Exclude service accounts and known IT automation accounts that perform scheduled tasks.
- Exclude domain controller log sources; a dedicated DET-I-XXX rule covers domain-level brute force.

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | > 10 failed logons within 5 minutes per account/host |
| Severity | Medium |
| Confidence | High |

## Response Actions

1. Identify the source IP from Event ID 4625 and check for geo-anomalies.
2. Check for a successful logon (Event ID 4624) shortly after the failures.
3. Isolate the endpoint if active compromise is suspected.
4. Reset the targeted account password if brute force succeeded.

## References

- [MITRE ATT&CK – T1110.001](https://attack.mitre.org/techniques/T1110/001/)
- [Microsoft – Event ID 4625](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4625)
