# MITRE ATT&CK Tactics

This view organizes detections by ATT&CK tactic instead of infrastructure domain, so one detection can be reused across endpoint, identity, cloud, and network contexts.

## Why Tactic-First

- A single detection can support multiple categories
- Coverage decisions align to adversary behavior
- Gaps are visible by attack phase, not platform silo

## Current Tactic Coverage

| Tactic | ID | Coverage | Detections |
|---|---|---:|---|
| Initial Access | TA0001 | 0 | 0 |
| Execution | TA0002 | 1 | 1 |
| Credential Access | TA0006 | 1 | 1 |
| Command and Control | TA0011 | 1 | 1 |
| Exfiltration | TA0010 | 1 | 1 |

## Navigate

- [Initial Access (TA0001)](initial-access.md)
- [Execution (TA0002)](execution.md)
- [Credential Access (TA0006)](credential-access.md)
- [Command and Control (TA0011)](command-and-control.md)
- [Exfiltration (TA0010)](exfiltration.md)
