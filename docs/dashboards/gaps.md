# Coverage Gaps & Roadmap

**Last Updated:** 2025-05-10  
**Owner:** Blue Team  
**Target Review:** Quarterly

---

## 🚨 Critical Gaps

These gaps represent the highest-impact missing detections:

### 1. **Initial Access – Email Phishing** ⚠️ CRITICAL

**Missing Techniques:**
- T1566.001 – Phishing: Spearphishing Attachment
- T1566.002 – Phishing: Spearphishing Link
- T1566.003 – Phishing: Spearphishing via Service

**Impact:**
- ALL threat actors begin with email-based delivery
- Muddywater actively uses spear-phishing (known campaigns)
- 80% of breaches start with user-executed malicious links/attachments

**Roadmap:**
- [ ] Email gateway sandbox integration (detonation results)
- [ ] URL reputation scoring (DNS + HTTP)
- [ ] Attachment name/extension anomalies (double extension, spoofed Office)
- [ ] User interaction patterns (unusual click-through on external links)

**Estimated Effort:** Medium (2-3 sprints)  
**Data Sources Needed:** Email gateway logs, URL filtering, DNS logs, web proxy

---

### 2. **Post-Compromise – Credential Theft** ⚠️ CRITICAL

**Missing Techniques:**
- T1003.001 – OS Credential Dumping: LSASS Memory
- T1003.002 – OS Credential Dumping: Security Account Manager
- T1003.005 – OS Credential Dumping: Cached Domain Credentials
- T1110.004 – Brute Force: Credential Stuffing

**Impact:**
- Post-compromise phase for all APTs
- Enables lateral movement and persistence
- Current detection only covers pre-compromise brute force

**Roadmap:**
- [ ] LSASS access patterns (MiniDump, process handle opening)
- [ ] SAM registry hive access (rare outside normal admin activity)
- [ ] mimikatz or secretsdump signature detection
- [ ] Suspicious NTDS.dit file operations

**Estimated Effort:** Medium (2 sprints)  
**Data Sources Needed:** Sysmon (process access, registry events), EDR telemetry

---

### 3. **Persistence – Scheduled Tasks & Registry** ⚠️ HIGH

**Missing Techniques:**
- T1053.005 – Scheduled Task/Job: Scheduled Task
- T1547.009 – Boot or Logon Initialization Scripts
- T1547.001 – Registry Run Keys / Startup Folder
- T1037 – Boot or Logon Initialization Scripts

**Impact:**
- Muddywater actively uses scheduled tasks for persistence
- Enables re-infection after system reboot
- Very common across all malware families

**Roadmap:**
- [ ] Anomalous scheduled task creation (non-admin account, suspicious executable, network execution)
- [ ] Registry run key modifications (non-standard paths, double extensions)
- [ ] Startup folder file additions
- [ ] Services installation by non-service accounts

**Estimated Effort:** Low-Medium (1-2 sprints)  
**Data Sources Needed:** Sysmon (registry/file events), Windows Event Log (task scheduler)

---

### 4. **Lateral Movement – Multi-Hop Network Activity** ⚠️ HIGH

**Missing Techniques:**
- T1021.002 – Remote Services: SMB/Windows Admin Shares
- T1021.006 – Remote Services: Windows Remote Management
- T1570 – Lateral Tool Transfer
- T1570 – Pass-the-Hash via SMB

**Impact:**
- Post-compromise phase for internal threat actors
- Very common in ransomware/lateral movement phases
- Air-gapped and internet-connected networks affected

**Roadmap:**
- [ ] Multi-hop SMB connection patterns (A → B → C chains)
- [ ] Unusual admin share access from non-admin accounts
- [ ] WMI-based lateral execution
- [ ] Lateral tool transfer (executables over SMB)
- [ ] Pass-the-hash indicators (NTLM over SMB)

**Estimated Effort:** Medium-High (3 sprints)  
**Data Sources Needed:** Network telemetry (Zeek, Suricata), Sysmon (network connections), EDR

---

## ⚠️ High-Priority Gaps

These gaps affect specific threat actors or critical attack phases:

### Exfiltration Channels

**Missing Techniques:**
- T1020.001 – Automated Exfiltration: Exfiltration Over Alternative Protocol
- T1041 – Exfiltration Over C2 Channel
- T1537 – Exfiltration Over Alternative Protocol (DNS tunneling, DNS exfil)

**Current Coverage:** Only AWS S3 bucket misconfiguration (static misconfiguration)  
**Gap:** No detection of actual data movement post-compromise

**Roadmap:**
- [ ] Large bulk downloads from file servers
- [ ] DNS query volume anomalies (exfil over DNS)
- [ ] Unusual data upload to cloud services
- [ ] Email mass forwarding rules
- [ ] Mailbox delegation by non-IT accounts

**Estimated Effort:** Medium (2-3 sprints)

---

### Command & Control Evasion

**Missing Techniques:**
- T1071.001 – Application Layer Protocol: HTTP/HTTPS (encrypted C2)
- T1008 – Fallback Channels (C2 rotation)
- T1571 – Non-Standard Port (C2 on uncommon ports)
- T1572 – Protocol Tunneling (C2 over VPN/proxy)

**Current Coverage:** DNS beaconing (in testing, not encrypted)  
**Gap:** Cannot detect encrypted C2 channels

**Roadmap:**
- [ ] TLS/SSL certificate pinning evasion indicators
- [ ] DoH (DNS over HTTPS) traffic patterns
- [ ] Unusual port scanning followed by connections
- [ ] Repeated connections to single IP on uncommon ports
- [ ] CNAME-based DNS redirection

**Estimated Effort:** High (3-4 sprints)

---

### Defense Evasion – Process Injection

**Missing Techniques:**
- T1055 – Process Injection (general)
- T1055.001 – Process Injection: DLL Injection
- T1055.002 – Process Injection: Portable Executable Injection
- T1055.004 – Process Injection: Asynchronous Procedure Call
- T1036 – Masquerading

**Current Coverage:** PowerShell obfuscation only  
**Gap:** No fileless malware delivery, no process hollowing

**Roadmap:**
- [ ] Suspicious process memory access patterns (Handle operations)
- [ ] VirtualAlloc + WriteProcessMemory patterns
- [ ] Process impersonification (SYSTEM-to-user or reverse)
- [ ] Unsigned PE injection
- [ ] Process name/version mismatches

**Estimated Effort:** High (3-4 sprints)  
**Data Sources Needed:** Sysmon (process access), EDR (memory indicators)

---

## 📋 Threat Actor-Specific Gaps

### Muddywater (Current: 1/12 techniques covered)

**Covered:**
- ✅ T1059.001 – PowerShell execution

**Gaps (Priority Order):**
1. **T1566.001** – Spear-phishing attachment (Initial Access) — **CRITICAL**
2. **T1203** – Exploitation for Client Execution (Defense Evasion) — **HIGH**
3. **T1053.005** – Scheduled Task persistence (Persistence) — **HIGH**
4. **T1547.009** – Boot Logon Init Scripts (Persistence) — **MEDIUM**
5. **T1087** – Account Discovery (Discovery) — **MEDIUM**
6. **T1570** – Lateral Tool Transfer (Lateral Movement) — **MEDIUM**
7. **T1115** – Clipboard Data Exfiltration (Collection) — **LOW**
8. **T1020** – Automated Exfiltration (Exfiltration) — **MEDIUM**
9. **T1020.001** – Exfil Over Alternative Protocol (Exfil) — **MEDIUM**
10. **T1071.001** – HTTP/HTTPS C2 (C&C) — **HIGH**

**Roadmap for Muddywater:**
- [ ] Q2 2025: T1566.001 (email phishing)
- [ ] Q3 2025: T1053.005 (scheduled tasks) + T1071.001 (HTTP C2)
- [ ] Q4 2025: T1203, T1087, T1570
- [ ] Q1 2026: Remaining techniques

---

## 📊 Coverage Gap Matrix

| Attack Phase | Coverage | Effort to Close | Priority |
|--------------|----------|------------------|----------|
| **Initial Access** | ❌ 0% | Medium | 🔴 CRITICAL |
| **Execution** | 🟢 50% | Low | 🟡 Medium |
| **Persistence** | ❌ 0% | Low | 🔴 CRITICAL |
| **Privilege Escalation** | ❌ 0% | High | 🟡 Medium |
| **Defense Evasion** | 🟡 25% | High | 🟡 Medium |
| **Credential Access** | 🟢 50% | Medium | 🟡 High |
| **Discovery** | ❌ 0% | Medium | 🟢 Low |
| **Lateral Movement** | ❌ 0% | High | 🔴 CRITICAL |
| **Collection** | ❌ 0% | High | 🟡 Medium |
| **Exfiltration** | 🟡 25% | Medium | 🟡 High |
| **Command & Control** | 🟡 50% | High | 🔴 CRITICAL |
| **Impact** | ❌ 0% | N/A | 🟢 Low |

---

## 📈 Roadmap – 12-Month Plan

### Q2 2025 (Apr-Jun) – Foundation Phase

🎯 **Goal:** Land 3 new detections; achieve 50% Initial Access coverage

- [ ] DET-E-003: Suspicious Email Attachment Detection
- [ ] DET-E-004: Spear-phishing Link Click Detection (from URL filtering)
- [ ] DET-N-002: HTTP/HTTPS C2 Beacon Pattern Detection
- [ ] Update Muddywater coverage: 2/12 techniques (from 1/12)

**Effort:** 5 sprints

---

### Q3 2025 (Jul-Sep) – Persistence & Lateral Movement

🎯 **Goal:** Land 4 new detections; achieve 25% Persistence coverage

- [ ] DET-E-005: Scheduled Task Creation (anomalous)
- [ ] DET-E-006: Registry Run Key Modification
- [ ] DET-N-003: Lateral SMB Multi-Hop Detection
- [ ] DET-N-004: WMI Lateral Execution
- [ ] Update Muddywater coverage: 4/12 techniques

**Effort:** 6 sprints

---

### Q4 2025 (Oct-Dec) – Confidentiality Phase (Exfiltration & C2)

🎯 **Goal:** Land 3 new detections; achieve 50% Exfiltration coverage

- [ ] DET-C-002: Bulk Cloud Data Download Pattern
- [ ] DET-N-005: DNS Tunneling Exfiltration (enhancement to DET-N-001)
- [ ] DET-C-003: Mailbox Delegation by Non-IT Account
- [ ] Promote DET-N-001 from "In Testing" to "Provisioned"
- [ ] Update Muddywater coverage: 5/12 techniques

**Effort:** 5 sprints

---

### Q1 2026 (Jan-Mar) – Credential & Defense Evasion

🎯 **Goal:** Land 3 new detections; achieve 50% Credential Access coverage

- [ ] DET-E-007: LSASS Access Pattern Detection
- [ ] DET-E-008: mimikatz/secretsdump Signature Detection
- [ ] DET-E-009: Process Injection Indicators (general)
- [ ] Update Muddywater coverage: 6/12 techniques

**Effort:** 6 sprints

---

## 🎯 Metrics & Success Criteria

### Quarterly OKRs

| Objective | Key Result | Q2 | Q3 | Q4 | Q1 |
|-----------|-----------|----|----|----|----|
| Improve coverage breadth | % of MITRE tactics with ≥1 detection | 50% | 58% | 67% | 75% |
| Improve Muddywater focus | Techniques detected (out of 12) | 1 | 2 | 3 | 4 |
| Increase detection maturity | % of detections in "Provisioned" status | 80% | 85% | 88% | 90% |
| Support network diversity | % detections supporting air-gapped networks | 40% | 40% | 45% | 50% |

---

## 🔔 How to Request Coverage

To request a detection for a specific technique or threat actor:

1. **Search existing detections:** Check [By Threat Actor](../actors/index.md) tab
2. **File an issue:** [GitHub Issues](https://github.com/m3rcury3/threat-modeling/issues) with:
   - MITRE technique(s) you want detected
   - Threat actor(s) or campaign name
   - Observable behavior or IOCs
   - Available log sources in your environment
3. **Vote on issues:** Upvote issues to signal priority
4. **Contribute:** Submit a PR with a new detection (see [template](../../templates/detection-template.md))
    - Detection filled using the [detection template](https://github.com/m3rcury3/threat-modeling/blob/main/templates/detection-template.md)

---

## 📚 References

- [MITRE ATT&CK Matrix](https://attack.mitre.org/)
- [Pyramid of Pain](https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework/)
- [Gartner – Detection & Response](https://www.gartner.com/)

---

## Change Log

| Date | Change | Owner |
|------|--------|-------|
| 2025-05-10 | Initial roadmap created; Phase 1 (actor registry) completed | Blue Team |
