# [DET-I-001] Impossible Travel – Simultaneous Logons from Different Countries

| Field | Value |
|-------|-------|
| **Detection ID** | DET-I-001 |
| **Title** | Impossible Travel – Simultaneous Logons from Different Countries |
| **Category** | Identity |
| **Status** | Provisioned |
| **Created** | 2025-01-28 |
| **Last Updated** | 2025-04-15 |
| **Owner** | blue-team |

---

## Description

Detects when the same user account authenticates successfully from two geographically distant locations within a timeframe that is physically impossible given normal travel constraints (< 2 hours apart, > 500 km distance).

## Use Case

Account compromise or credential-sharing scenarios can be identified by correlating successful logon events from IP addresses that resolve to different countries within a short window. This is a classic identity anomaly detection use case.

- **MITRE Tactic:** TA0001 – Initial Access
- **MITRE Technique:** T1078 – Valid Accounts

## Data Sources

| Data Source | Platform | Notes |
|-------------|----------|-------|
| Azure AD Sign-In Logs | Azure / Entra ID | `SigninLogs` table in Log Analytics |
| Okta System Log | SaaS / IdP | `authentication.success` events |
| GeoIP enrichment | Threat Intel | MaxMind GeoLite2 or Azure built-in |

## Logic / Query

```kql
// Microsoft Sentinel – KQL (Azure AD Sign-In Logs)
SigninLogs
| where ResultType == 0  // Successful logon
| extend Country = tostring(LocationDetails.countryOrRegion)
| summarize
    Countries       = make_set(Country),
    IPs             = make_set(IPAddress),
    LogonCount      = count(),
    FirstSeen       = min(TimeGenerated),
    LastSeen        = max(TimeGenerated)
    by UserPrincipalName, bin(TimeGenerated, 2h)
| where array_length(Countries) > 1
| extend TimeDeltaHours = datetime_diff("hour", LastSeen, FirstSeen)
| where TimeDeltaHours < 2
```

### Tuning Notes

- Allowlist VPN exit nodes and known corporate proxy IP ranges.
- Exclude service accounts and automated integrations.
- Consider suppressing alerts for users who have previously travelled and generated benign impossible-travel alerts (add to per-user allowlist with time-bound expiry).

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Time window | 2 hours |
| Distance threshold | Any two different countries |
| Severity | High |
| Confidence | High |

## Response Actions

1. Contact the user via an out-of-band channel to verify the logons.
2. Force a password reset and MFA re-registration if account compromise is suspected.
3. Revoke all active sessions via Azure AD / Okta.
4. Review recent activity for data exfiltration indicators.

## References

- [MITRE ATT&CK – T1078](https://attack.mitre.org/techniques/T1078/)
- [Microsoft Sentinel – Impossible Travel analytic rule](https://learn.microsoft.com/en-us/azure/sentinel/detect-threats-built-in)
