# [DET-N-001] DNS Beaconing to Suspicious Domain

| Field | Value |
|-------|-------|
| **Detection ID** | DET-N-001 |
| **Title** | DNS Beaconing to Suspicious Domain |
| **Category** | Network |
| **Status** | In Testing |
| **Created** | 2025-03-10 |
| **Last Updated** | 2025-05-01 |
| **Owner** | blue-team |

---

## Description

Detects internal hosts making highly regular DNS queries to the same external domain at a consistent interval, which is characteristic of C2 beacon check-ins using DNS as the transport channel.

## Use Case

Command-and-control frameworks (e.g., Cobalt Strike DNS listener, DNScat2) use periodic DNS queries to maintain a covert channel. Regular beaconing produces a distinct time-series signature — high query frequency, low jitter, single target domain — that differs from normal user-driven DNS traffic.

- **MITRE Tactic:** TA0011 – Command and Control
- **MITRE Technique:** T1071.004 – Application Layer Protocol: DNS

## Data Sources

| Data Source | Platform | Notes |
|-------------|----------|-------|
| DNS Query Logs | Infra / Network | Recursive resolver or DNS firewall logs |
| Zeek dns.log | Network Sensor | Fields: `id.orig_h`, `query`, `rcode_name` |
| Azure DNS Analytics | Cloud | DNS query logs forwarded to Log Analytics |

## Logic / Query

```splunk-spl
// Splunk SPL – DNS beaconing via consistent query intervals
index=dns sourcetype=zeek_dns
| bucket _time span=1h
| stats count as QueryCount, dc(query) as UniqDomains by src_ip, _time
| where QueryCount > 60 AND UniqDomains == 1
| eval BeaconRate = QueryCount / 60
| where BeaconRate >= 0.8
| table _time, src_ip, QueryCount, UniqDomains, BeaconRate
```

### Tuning Notes

- Exclude known update services (Windows Update, antivirus cloud lookups) and CDN health checks.
- Tune the `QueryCount` and jitter tolerance thresholds based on your environment baseline.

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | ≥ 60 queries/hour to a single domain |
| Severity | High |
| Confidence | Medium |

## Response Actions

1. Identify the queried domain and check reputation (VirusTotal, PassiveDNS).
2. Block the domain at the DNS firewall and perimeter.
3. Capture a full packet trace from the source host.
4. Isolate the host if C2 communication is confirmed.

## References

- [MITRE ATT&CK – T1071.004](https://attack.mitre.org/techniques/T1071/004/)
- [Zeek DNS log reference](https://docs.zeek.org/en/master/scripts/base/protocols/dns/main.zeek.html)
