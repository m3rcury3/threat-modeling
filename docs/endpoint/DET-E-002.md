# [DET-E-002] Suspicious PowerShell Encoded Command Execution

| Field | Value |
|-------|-------|
| **Detection ID** | DET-E-002 |
| **Category** | Endpoint |
| **Status** | 🟢 Provisioned |
| **MITRE Technique** | [T1059.001 – PowerShell](https://attack.mitre.org/techniques/T1059/001/) |

---

## Description

Detects PowerShell processes launched with `-EncodedCommand` (or its aliases) which is commonly used by threat actors to obfuscate malicious payloads and evade signature-based detection.

## Use Case

Attackers frequently use Base64-encoded PowerShell commands to bypass command-line logging, deliver payloads, or establish persistence.

## Data Sources

| Data Source | Platform | Notes |
|-------------|----------|-------|
| Sysmon Event ID 1 (Process Create) | Windows Endpoint | Requires Sysmon v13+ |
| Windows Security Event ID 4688 | Windows Endpoint | Requires command-line auditing enabled |
| Microsoft Defender for Endpoint | Windows Endpoint | DeviceProcessEvents table |

## Logic / Query

```kql
// Microsoft Sentinel – KQL (Microsoft Defender for Endpoint)
DeviceProcessEvents
| where FileName in~ ("powershell.exe", "pwsh.exe")
| where ProcessCommandLine matches regex @"(?i)-e(nc(odedcommand)?)?\s+[A-Za-z0-9+/=]{20,}"
| project
    Timestamp,
    DeviceName,
    InitiatingProcessAccountName,
    ProcessCommandLine,
    InitiatingProcessFileName,
    InitiatingProcessCommandLine
```

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | Any occurrence (single-event trigger) |
| Severity | High |
| Confidence | Medium |

## Response Actions

1. Decode the Base64 payload and analyse its content.
2. Check for child processes spawned by the PowerShell instance.
3. Review network connections established during or after execution.
4. Quarantine the endpoint if malicious payload confirmed.

## References

- [MITRE ATT&CK – T1059.001](https://attack.mitre.org/techniques/T1059/001/)
- [Microsoft – PowerShell logging](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging)
- [Full detection file on GitHub](https://github.com/m3rcury3/threat-modeling/blob/main/detections/endpoint/DET-E-002.md)
