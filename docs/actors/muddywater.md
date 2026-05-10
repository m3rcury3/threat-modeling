# Muddywater (G0069)

![MITRE ATT&CK Group](https://img.shields.io/badge/MITRE-G0069-blue)

**Group Names:** Static Kitten, COBALT LILAC, Earth Vetala

**Origin:** Iran (suspected)

**Active Since:** 2017

**Primary Targets:** Government, energy, telecommunications, IT sectors in Middle East, North Africa, Central Asia

---

## Threat Profile

Muddywater is a suspected Iranian state-sponsored APT group known for conducting espionage campaigns against critical infrastructure and government entities across the Middle East and Central Asia. The group is characterized by:

- **Multi-stage infection chains** with custom malware variants
- **Living-off-the-land techniques** leveraging built-in OS tools (PowerShell, WMI, scheduled tasks)
- **Email-based initial access** using spear-phishing with malicious attachments or links
- **Extensive command-and-control infrastructure** using both HTTP and DNS channels
- **Rapid malware iteration** leading to multiple Meterpreter and PowerShell-based variants

### Known Malware Families

- **Powerstager** — PowerShell-based first-stage payload downloader
- **Meterpreter variants** — Metasploit framework-based second-stage implant
- **Custom backdoors** — Various malware families tied to specific campaigns

### Known Campaigns

| Campaign | Period | Notes |
|----------|--------|-------|
| Operation EmailThief | 2023 | Credential harvesting via email-based delivery |
| TerraMalware | 2024 | Infrastructure targeting |

---

## MITRE ATT&CK Coverage

### Tactics & Techniques

| Tactic | Technique | Detection ID | Coverage |
|--------|-----------|--------------|----------|
| **TA0001 – Initial Access** | T1566.001 (Phishing: Spearphishing Attachment) | ❌ Planned | Not yet detected |
| **TA0001 – Initial Access** | T1566.002 (Phishing: Spearphishing Link) | ❌ Planned | Not yet detected |
| **TA0002 – Execution** | T1059.001 (PowerShell) | ✅ [DET-E-002](../endpoint/DET-E-002.md) | Provisioned |
| **TA0002 – Execution** | T1203 (Exploitation for Client Execution) | ❌ Not Planned | Limited vendor support |
| **TA0003 – Persistence** | T1547.009 (Boot or Logon Initialization Scripts) | ❌ Planned | Not yet detected |
| **TA0005 – Defense Evasion** | T1140 (Deobfuscate/Decode Files or Information) | ❌ Covered via DET-E-002 | Partially detected |
| **TA0007 – Discovery** | T1087 (Account Discovery) | ❌ Planned | Not yet detected |
| **TA0008 – Lateral Movement** | T1570 (Lateral Tool Transfer) | ❌ Planned | Not yet detected |
| **TA0009 – Collection** | T1115 (Clipboard Data) | ❌ Planned | Not yet detected |
| **TA0010 – Exfiltration** | T1020 (Automated Exfiltration) | ❌ Planned | Not yet detected |
| **TA0011 – Command & Control** | T1071.004 (DNS) | ✅ [DET-N-001](../network/DET-N-001.md) | In Testing |
| **TA0011 – Command & Control** | T1071.001 (HTTP/HTTPS) | ❌ Planned | Not yet detected |

---

## Detection Coverage Summary

```
Detections for Muddywater:    1 (Provisioned) + 0 (In Testing) = 1 Active
Coverage:                     1 / 12 known techniques = 8.3%

Enabled Tactics:              Execution (via PowerShell)
Partial Coverage:             Command & Control (DNS only)
Gaps:                         Initial Access, Persistence, Discovery, 
                              Lateral Movement, Exfiltration
```

### Coverage by Domain

| Domain | Detections | Status |
|--------|-----------|--------|
| **Endpoint** | 1 | Provisioned |
| **Network** | 1 | In Testing |
| **Identity** | 0 | — |
| **Cloud** | 0 | — |

---

## Roadmap – Planned Detections

### Phase 1 (Q2 2025) – Initial Access & Persistence
- [ ] Email attachment detonation patterns (T1193)
- [ ] Scheduled task persistence creation (T1053.005)
- [ ] Registry modification for persistence (T1112)

### Phase 2 (Q3 2025) – Lateral Movement & Collection
- [ ] Lateral tool transfer detection (T1570)
- [ ] Process hollowing or injection (T1055)
- [ ] Screen capture activity (T1113)

### Phase 3 (Q4 2025) – Exfiltration & C2
- [ ] Bulk data download patterns (T1020.001)
- [ ] HTTP C2 beacon detection (T1071.001)
- [ ] Uncommon port usage for C2 (T1571)

---

## References

- [MITRE ATT&CK Group G0069 – Muddywater](https://attack.mitre.org/groups/G0069/)
- [Recorded Future – Muddywater APT](https://www.recordedfuture.com/research/)
- [Mandiant – Muddywater Activity](https://www.mandiant.com/)
- [Dragos – Industrial Control System Threats](https://www.dragos.com/)

---

## How to Contribute

To request additional detections for Muddywater:

1. **Report a gap:** Open an [issue on GitHub](https://github.com/m3rcury3/threat-modeling/issues) with:
   - The MITRE technique ID (e.g., T1053.005)
   - Observable behavior or artifact
   - Log sources available in your environment
   
2. **Propose a detection:** Submit a PR with:
    - Detection filled using the [detection template](https://github.com/m3rcury3/threat-modeling/blob/main/templates/detection-template.md)
   - YAML frontmatter including `threat_actors: [muddywater]`
   - Validation logic or KQL/Sigma rule

3. **Share threat intelligence:** Contribute IOCs, malware samples, or campaign indicators via [GitHub Discussions](https://github.com/m3rcury3/threat-modeling/discussions)
