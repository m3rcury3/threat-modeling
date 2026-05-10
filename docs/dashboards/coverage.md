# Detection Coverage Dashboard

**Last Updated:** 2025-05-10  
**Data Source:** [data/detection_index.json](../../data/detection_index.json)

---

## 📊 Overall Statistics

| Metric | Value | Trend |
|--------|-------|-------|
| **Total Detections** | 5 | ➕ Growing |
| **Provisioned (Live)** | 4 | 80% |
| **In Testing** | 1 | 20% |
| **Planned** | 0 | — |
| **Deprecated** | 0 | — |

---

## 📈 Coverage by Status

```
Provisioned (4)  ████████████████████ 80%
In Testing (1)   ████                   20%
Planned (0)      
Deprecated (0)   
```

### Status Definitions

| Status | Definition | Operational Use |
|--------|-----------|-----------------|
| **Provisioned** | Detection is tested, tuned, and deployed to production | Active monitoring |
| **In Testing** | Detection is deployed to staging; high false positive rate expected | Pilot users only |
| **Planned** | Detection concept is identified but not yet built | Roadmap only |
| **Deprecated** | Detection is no longer maintained or has been superseded | Decommissioned |

---

## 📍 Coverage by Domain

| Domain | Detections | Provisioned | In Testing | Planned |
|--------|-----------|------------|-----------|---------|
| **Endpoint** | 2 | 2 | 0 | 0 |
| **Network** | 1 | 0 | 1 | 0 |
| **Identity** | 1 | 1 | 0 | 0 |
| **Cloud** | 1 | 1 | 0 | 0 |
| **Email** | 0 | 0 | 0 | 0 |
| **Application** | 0 | 0 | 0 | 0 |
| **TOTAL** | **5** | **4** | **1** | **0** |

### Domain Analysis

🟢 **Endpoint (2 detections)**
- Good coverage for credential abuse (local brute force)
- Execution detection (PowerShell obfuscation)
- **Gap:** No persistence, no lateral movement, no collection

🟡 **Network (1 detection, In Testing)**
- DNS beaconing detection (C2 communication)
- **Gap:** No HTTP/HTTPS C2, no DNS tunneling, no unusual protocol usage

🟢 **Identity (1 detection)**
- Impossible travel (account compromise)
- **Gap:** No privilege escalation, no anomalous access patterns

🟢 **Cloud (1 detection)**
- S3 bucket misconfiguration
- **Gap:** No Azure/GCS coverage, no credential theft, no bulk data patterns

⚫ **Email, Application** (0 detections)
- **Critical gap:** No initial access detection (phishing, malicious links)
- **Not started:** Application layer attacks, supply chain

---

## 🎯 Coverage by Threat Actor

### Official APT Groups (MITRE ATT&CK)

| Actor | ID | Detections | Coverage |
|-------|----|-----------  |----------|
| **Muddywater** | G0069 | 1 | 8.3% (1 of 12 known techniques) |

### Generic Threat Categories

| Category | Detections | Notes |
|----------|-----------|-------|
| **Generic Credential Abuse** | 2 | Multi-actor (all threats using password spray) |
| **Generic Code Execution** | 2 | Multi-actor (all threats using command execution) |
| **Generic Data Exfiltration** | 1 | Multi-actor (insider threats, cloud misconfig) |

### Actor Coverage Summary

```
Muddywater (1 detection):
  ✅ PowerShell execution (T1059.001)
  ⚠️  DNS C2 (T1071.004) — In Testing
  ❌ Email phishing (T1566)
  ❌ Scheduled task persistence (T1053.005)
  ❌ Lateral movement patterns
  ... and 7 more gaps

Generic Threats (2 detections each):
  ✅ Credential abuse: brute force + impossible travel
  ✅ Code execution: PowerShell + DNS beaconing
  ✅ Data exfil: S3 bucket public access
```

---

## 🌐 Coverage by Network Context

| Network Type | Detections | Applicability |
|-------------|-----------|---------|
| **Internet-Connected** | 3 | S3 bucket (cloud), PowerShell (endpoint), DNS beaconing (network) |
| **Air-Gapped** | 2 | Brute force (endpoint), Impossible travel (identity) |
| **Hybrid / VPN** | 2 | Same as air-gapped; VPN bypass patterns not detected |

### Network Context Analysis

🟢 **Internet-Connected Networks**
- Good coverage for cloud and C2 detection
- **Gap:** No encrypted C2 (TLS, DoH)

⚠️ **Air-Gapped Networks**
- Limited to identity and local credential abuse
- **Gap:** No local C2 channel detection (SMB, named pipes, WMI)

❌ **Hybrid / VPN Environments**
- **Gap:** No VPN bypass detection
- **Gap:** No cross-segment lateral movement patterns

---

## 📋 MITRE ATT&CK Coverage Matrix

### By Tactic

| Tactic | Detections | Techniques Covered | Gap |
|--------|-----------|-------------------|-----|
| **TA0001 – Initial Access** | 0 | — | ❌ Critical gap: no phishing/malicious link detection |
| **TA0002 – Execution** | 2 | T1059.001 | ⚠️ Missing: WMI, COM, process injection |
| **TA0003 – Persistence** | 0 | — | ❌ No scheduled tasks, registry, or startup folder |
| **TA0004 – Privilege Escalation** | 0 | — | ❌ No UAC bypass or token impersonation |
| **TA0005 – Defense Evasion** | 1 | T1140 (partial) | ⚠️ Covered via obfuscation detection |
| **TA0006 – Credential Access** | 2 | T1110.001, T1078 | ⚠️ Missing: credential dumping, keylogging |
| **TA0007 – Discovery** | 0 | — | ❌ No reconnaissance detection |
| **TA0008 – Lateral Movement** | 0 | — | ❌ No multi-hop or pass-the-hash patterns |
| **TA0009 – Collection** | 0 | — | ❌ No data staging or screen capture |
| **TA0010 – Exfiltration** | 1 | T1567.001 | ⚠️ Only cloud bucket misconfiguration |
| **TA0011 – Command & Control** | 2 | T1071.004, partial T1071.001 | ⚠️ Missing: encrypted C2, uncommon ports |
| **TA0012 – Impact** | 0 | — | ❌ No defacement, encryption, or DoS |

### Coverage Heatmap

```
Initial Access       ⚫ None
Execution            🟢 2 detections
Persistence          ⚫ None
Privilege Escalation ⚫ None
Defense Evasion      🟡 1 detection
Credential Access    🟢 2 detections
Discovery            ⚫ None
Lateral Movement     ⚫ None
Collection           ⚫ None
Exfiltration         🟡 1 detection
Command & Control    🟢 2 detections
Impact               ⚫ None
```

---

## 🎯 Top Priorities for Next Phase

### Highest Impact (Cover most threat actors)

1. **Email-Based Initial Access** (Credential: T1566.001, T1566.002)
   - Affects: All threat actors, phishing campaigns, ransomware
   - Estimated Gap Impact: 30% of Pyramid of Pain

2. **Persistence & Lateral Movement** (Credential: T1053, T1570, T1021)
   - Affects: Post-compromise operations for all APTs
   - Estimated Gap Impact: 25% of Pyramid of Pain

3. **Credential Dumping** (Credential: T1003, T1110.004)
   - Affects: All threat actors post-compromise
   - Estimated Gap Impact: 20% of Pyramid of Pain

### Quick Wins (Low effort, high value)

- [ ] DNS tunneling detection (T1071.004 enhancement)
- [ ] HTTP C2 beacon patterns (T1071.001)
- [ ] Process injection indicators (T1055)
- [ ] SMB lateral movement (T1021.002)

### Long-term (Requires significant investment)

- [ ] Malware family identification (YARA rules)
- [ ] Application layer attacks
- [ ] Supply chain compromise detection
- [ ] Cloud-native threats (Kubernetes, serverless)

---

## 📊 Detection Maturity Trend

```
Provisioned: ▓▓▓▓▓▓▓▓░░ 80% (4/5)
In Testing:  ▓▓░░░░░░░░ 20% (1/5)
Planned:     ░░░░░░░░░░  0% (0/5)

Target (Q3 2025):
Provisioned: ▓▓▓▓▓▓▓▓▓░ 90% (9/10)
In Testing:  ▓░░░░░░░░░  10% (1/10)
```

---

## 🔄 Coverage Evolution

| Quarter | Provisioned | In Testing | Total |
|---------|------------|-----------|-------|
| **Q1 2025** | 3 | 1 | 4 |
| **Q2 2025** | 4 | 1 | 5 |
| **Q3 2025** | 8 | 1 | 9 |
| **Q4 2025** | 13 | 1 | 14 |

---

## Notes

 Data is generated from [data/detection_index.json](https://github.com/m3rcury3/threat-modeling/blob/main/data/detection_index.json) and frontmatter in detection files
 - Metrics data also available at [data/metrics.json](metrics.json)
 - Coverage percentages are calculated per threat actor (detections / known techniques)
 - Network applicability is per-detection (some detections work in both contexts)
 - To update this dashboard, run `scripts/generate_metrics.py` (under development)
