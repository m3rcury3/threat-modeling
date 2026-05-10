# Threat Actors

This section organizes detections by attributed threat actor or intrusion set, enabling blue teams to understand which adversaries are covered by the current detection portfolio and which knowledge gaps remain.

## About This View

Detections are tagged with one or more threat actors to indicate which adversaries they are designed to detect:

- **Official Groups (MITRE ATT&CK)**: Detected threat actors with established MITRE ATT&CK Group IDs (e.g., APT29, Muddywater)
- **Generic Threat Categories**: Broad attack pattern categories (e.g., "Generic Credential Abuse") that apply across multiple threat actors
- **Custom / Proprietary**: Internal threat actor clusters or campaigns not yet mapped to official MITRE groups

## Navigation

- [Muddywater](#muddywater) — Iranian APT group targeting Middle East & North Africa
- [Generic Threats](#generic-threats) — Cross-cutting attack patterns

---

## Muddywater

**MITRE ATT&CK Group ID:** [G0069](https://attack.mitre.org/groups/G0069/)

**Aliases:** Static Kitten, COBALT LILAC, Earth Vetala

**Primary Targeting:** Government, energy, telecommunications, IT sectors in Middle East, North Africa, Central Asia

**Known Campaigns:** Operation EmailThief (2023), TerraMalware Campaign (2024)

### Detection Coverage

| Detection | Category | Status | Network Applicability |
|-----------|----------|--------|----------------------|
| [DET-E-002 – Suspicious PowerShell Encoded Command Execution](../endpoint/DET-E-002.md) | Endpoint | Provisioned | Internet Connected |

**Coverage Analysis:**
- ✅ **Covered Tactics:** Execution (T1002)
- ⚠️ **Partial Coverage:** Command & Control (one generic C2 indicator only)
- ❌ **Gaps:** 
  - No initial access detections (spear-phishing, T1566)
  - No persistence via scheduled tasks (T1053)
  - No lateral movement patterns specific to Muddywater tradecraft
  - No exfiltration channel monitoring

### Known Techniques

Muddywater is known for:
- Multi-stage infection chains with custom malware
- Living-off-the-land techniques (LOLBins)
- Email-based delivery (spear-phishing)
- PowerShell-based payload delivery
- C2 communication via HTTP/DNS

### Next Steps

Planned detections for Muddywater:
- [ ] Email attachment detonation patterns (T1193, T1566.001)
- [ ] Scheduled task persistence (T1053.005)
- [ ] WMI event subscription persistence (T1547.020)
- [ ] Custom malware family signatures (Powerstager, Meterpreter variants)

---

## Generic Threats

These detections apply across multiple threat actors and attack patterns:

### Generic Credential Abuse

Detects common password guessing, spray attacks, and account compromise patterns.

| Detection | Category | Status | Network Applicability |
|-----------|----------|--------|----------------------|
| [DET-E-001 – Brute Force Attack – Local Windows Account](../endpoint/DET-E-001.md) | Endpoint | Provisioned | Both |
| [DET-I-001 – Impossible Travel – Simultaneous Logons from Different Countries](../identity/DET-I-001.md) | Identity | Provisioned | Both |

**Applies To:** All threat actors leveraging credential abuse (opportunistic attacks, insider threats, credential theft campaigns)

### Generic Code Execution

Detects command-line execution, scripting language abuse, and malware delivery patterns.

| Detection | Category | Status | Network Applicability |
|-----------|----------|--------|----------------------|
| [DET-E-002 – Suspicious PowerShell Encoded Command Execution](../endpoint/DET-E-002.md) | Endpoint | Provisioned | Internet Connected |
| [DET-N-001 – DNS Beaconing to Suspicious Domain](../network/DET-N-001.md) | Network | In Testing | Internet Connected |

**Applies To:** All threat actors using command execution, live-off-the-land techniques, C2 communication

### Generic Data Exfiltration

Detects unauthorized data access, misconfiguration exploitation, and bulk data transfer patterns.

| Detection | Category | Status | Network Applicability |
|-----------|----------|--------|----------------------|
| [DET-C-001 – AWS S3 Bucket Made Public](../cloud/DET-C-001.md) | Cloud | Provisioned | Internet Connected |

**Applies To:** Insider threats, compromised cloud credentials, misconfiguration exploitation

---

## Detection Summary by Threat Actor

```
Muddywater:            1 detection (12.5% of portfolio)
Generic Credential:    2 detections
Generic Execution:     2 detections
Generic Exfiltration:  1 detection
```

## Coverage Requests

To request threat actor coverage or add custom threat actor profiles:
1. Open an issue on GitHub with threat actor details (aliases, targeting, known techniques)
2. Reference MITRE ATT&CK Group ID if available
3. Provide sample IOCs or behavioral indicators for validation
