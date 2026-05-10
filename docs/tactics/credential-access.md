# Credential Access (TA0006)

## Active Detections

| Detection | Status | Category Source |
|---|---|---|
| [DET-E-001 Brute Force Attack - Local Windows Account](../endpoint/DET-E-001.md) | Provisioned | Endpoint |

## Related Supporting Detection

| Detection | Status | ATT&CK Mapping |
|---|---|---|
| [DET-I-001 Impossible Travel - Simultaneous Logons](../identity/DET-I-001.md) | Provisioned | T1078 Valid Accounts |

## Covered Techniques

- T1110.001 Brute Force: Password Guessing
- T1078 Valid Accounts (supporting identity signal)

## Priority Gaps

- T1003.001 LSASS credential dumping
- T1003.002 SAM credential dumping
- T1110.004 Credential stuffing
