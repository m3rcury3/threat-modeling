# Generic Threats

These are cross-cutting detection categories that apply to threat behaviors used by many different threat actors, malware families, and attack campaigns. Rather than being specific to a single adversary, these detections address fundamental attack patterns on the lower tiers of the [Pyramid of Pain](https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html).

---

## Generic Credential Abuse

**Threat Category:** Multi-actor, opportunistic attacks, insider threats

**Description:** Common password guessing, credential spray attacks, and account compromise patterns used by:
- Script kiddies and opportunistic attackers
- Botnet operators
- Newly compromised threat actors with limited infrastructure
- Insider threats
- Lateral movement post-compromise

### Detections

| Detection ID | Title | Category | Status | Network Applicability |
|------------|-------|----------|--------|----------------------|
| [DET-E-001](../endpoint/DET-E-001.md) | Brute Force Attack – Local Windows Account | Endpoint | Provisioned | Both |
| [DET-I-001](../identity/DET-I-001.md) | Impossible Travel – Simultaneous Logons from Different Countries | Identity | Provisioned | Both |

### MITRE Techniques

- **T1110.001** — Brute Force: Password Guessing
- **T1110.002** — Brute Force: Password Spray
- **T1110.003** — Brute Force: Password Cracking
- **T1110.004** — Brute Force: Credential Stuffing
- **T1078** — Valid Accounts (compromised or shared)

### Coverage Analysis

✅ **Strengths:**
- Both internet-connected and air-gapped networks covered
- Identity and endpoint visibility
- High-confidence indicators (low false positive rate)

⚠️ **Limitations:**
- Generic detections don't differentiate attacker sophistication
- May miss slow-rate spray attacks (time-based thresholds)
- Requires baseline tuning per environment

❌ **Gaps:**
- No detection of credential harvesting (pre-attack)
- No detection of credential dumping (post-compromise memory access)
- Limited visibility into VPN/proxy-based attacks

---

## Generic Code Execution

**Threat Category:** Multi-actor, malware delivery, post-compromise communication

**Description:** Command-line execution, scripting language abuse, and malware delivery patterns used by:
- APT groups (Muddywater, FIN7, Lazarus, etc.)
- Malware-as-a-Service operators
- Ransomware gangs
- Cryptominers and botnets

### Detections

| Detection ID | Title | Category | Status | Network Applicability |
|------------|-------|----------|--------|----------------------|
| [DET-E-002](../endpoint/DET-E-002.md) | Suspicious PowerShell Encoded Command Execution | Endpoint | Provisioned | Internet Connected |
| [DET-N-001](../network/DET-N-001.md) | DNS Beaconing to Suspicious Domain | Network | In Testing | Internet Connected |

### MITRE Techniques

- **T1059.001** — Command and Scripting Interpreter: PowerShell
- **T1059.003** — Command and Scripting Interpreter: Windows Command Shell
- **T1086** — PowerShell (deprecated, use T1059.001)
- **T1140** — Deobfuscate/Decode Files or Information
- **T1071.001** — Application Layer Protocol: HTTP/HTTPS (C2)
- **T1071.004** — Application Layer Protocol: DNS (C2)

### Coverage Analysis

✅ **Strengths:**
- Catches obfuscated PowerShell (very common in malware)
- Network-level visibility for C2 detection
- Low barrier to detection (behavioral signatures)

⚠️ **Limitations:**
- PowerShell detection limited to internet-connected environments
- DNS beaconing still in testing phase (high false positive risk)
- Doesn't cover process injection or fileless techniques

❌ **Gaps:**
- No detection of WMI-based command execution
- No detection of COM object-based execution
- No YARA/SIGMA rules for common malware families
- No detection of C2 over encrypted channels (TLS/DoH)
- Limited visibility for air-gapped networks (WMI, registry hives)

---

## Generic Data Exfiltration

**Threat Category:** Multi-actor, insider threats, misconfiguration exploitation

**Description:** Unauthorized data access, cloud infrastructure misconfiguration, and bulk data transfer patterns used by:
- APT groups seeking intellectual property
- Insider threats and corporate espionage
- Ransomware gangs
- Opportunistic attackers finding exposed S3 buckets
- Compromised cloud service accounts

### Detections

| Detection ID | Title | Category | Status | Network Applicability |
|------------|-------|----------|--------|----------------------|
| [DET-C-001](../cloud/DET-C-001.md) | AWS S3 Bucket Made Public | Cloud | Provisioned | Internet Connected |

### MITRE Techniques

- **T1567.001** — Exfiltration Over Web Service: Exfiltration to Cloud Storage
- **T1020** — Automated Exfiltration
- **T1537** — Transfer Data to Cloud Account
- **T1041** — Exfiltration Over C2 Channel
- **T1133** — External Remote Services (lateral access for exfil)

### Coverage Analysis

✅ **Strengths:**
- Critical cloud security issue (high-impact if triggered)
- Single-event detection (no aggregation needed)
- High-confidence indicator (low false positive)

⚠️ **Limitations:**
- Only covers AWS S3; no Azure Blob or GCS detection
- Only detects permission changes; doesn't detect actual data movement
- No cross-service correlation (e.g., large downloads then S3 upload)

❌ **Gaps:**
- No detection of cloud credential theft
- No detection of mass file download patterns
- No detection of unusual bulk API calls
- No detection of exfiltration to personal cloud accounts
- No mailbox delegation or forwarding rule changes
- No detection of data staging for exfil
- Limited visibility on air-gapped networks (no public cloud uploads)

---

## Cross-Threat Actor Trends

### By Attack Phase

| Phase | Coverage | Notes |
|-------|----------|-------|
| **Initial Access** | ❌ Minimal | Email delivery not yet detected |
| **Execution** | ✅ Medium | PowerShell and general command execution covered |
| **Persistence** | ❌ Minimal | No scheduled task or registry persistence yet |
| **Privilege Escalation** | ❌ None | No detection for UAC bypass or token impersonation |
| **Defense Evasion** | ⚠️ Partial | Code obfuscation (PowerShell encoding) detected |
| **Credential Access** | ⚠️ Partial | Brute force detected; credential theft not yet |
| **Discovery** | ❌ None | No lateral reconnaissance detection |
| **Lateral Movement** | ❌ Minimal | No multi-hop connection patterns |
| **Collection** | ❌ None | No data stage-and-exfil patterns |
| **Command & Control** | ✅ Medium | DNS beaconing in testing; HTTP/HTTPS C2 not yet |
| **Exfiltration** | ⚠️ Partial | Cloud misconfiguration only; no bulk transfer patterns |

### By Network Context

| Network Type | Coverage | Notes |
|--------------|----------|-------|
| **Internet-Connected** | ✅ 4 detections | Most coverage for traditional enterprise |
| **Air-Gapped** | ⚠️ 2 detections | Limited to credential abuse and identity-based detections |
| **Hybrid / VPN** | ⚠️ 2 detections | VPN bypass patterns not yet detected |

---

## Detection Maturity Framework

The generic threat detections follow this maturity progression:

1. **Planned** → Detection concept identified but not yet built
2. **In Development** → Detection logic is being tuned
3. **In Testing** → Deployed to staging/test environment; high false positive rate expected
4. **Provisioned** → Deployed to production; tuned for operational environment
5. **Deprecated** → Superseded by newer detection or disabled due to sustainability issues

---

## Contributing Generic Detections

To propose new generic threat detections or gap closures:

1. **Identify a behavior:** Describe the attack pattern in plain language (e.g., "bulk SMB file copies from server to workstation")
2. **Map to MITRE:** Reference the technique(s) in the matrix
3. **Reference threat intel:** Cite reports or campaigns using this behavior
4. **Propose detection logic:** Include sample KQL, Sigma, or YARA if possible
5. **Specify network applicability:** Will it work in air-gapped networks?

Submit via [GitHub Issues](https://github.com/m3rcury3/threat-modeling/issues) or [Pull Requests](https://github.com/m3rcury3/threat-modeling/pulls).
