# [DET-E-001] Brute Force Attack – Local Windows Account

| Field | Value |
|-------|-------|
| **Detection ID** | DET-E-001 |
| **Category** | Endpoint |
| **Status** | 🟢 Provisioned |
| **MITRE Technique** | [T1110.001 – Brute Force: Password Guessing](https://attack.mitre.org/techniques/T1110/001/) |

---

## Description

Detects repeated failed logon attempts against a local Windows account within a short time window, indicative of an online brute-force or password-spray attack against endpoints.

## Use Case

Adversaries attempting to gain access to an endpoint may systematically try common passwords or user-name/password combinations. This detection fires when there are more than 10 failed interactive or network logons for a single account within a 5-minute window.

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

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | > 10 failed logons within 5 minutes per account/host |
| Severity | Medium |
| Confidence | High |

## Response Actions

1. Identify the source IP and check for geo-anomalies.
2. Check for a successful logon (Event ID 4624) shortly after the failures.
3. Isolate the endpoint if active compromise is suspected.
4. Reset the targeted account password if brute force succeeded.

## References

- [MITRE ATT&CK – T1110.001](https://attack.mitre.org/techniques/T1110/001/)
- [Microsoft – Event ID 4625](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4625)
- [Full detection file on GitHub](https://github.com/m3rcury3/threat-modeling/blob/main/detections/endpoint/DET-E-001.md)
