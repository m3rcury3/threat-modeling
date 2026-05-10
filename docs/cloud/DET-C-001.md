# [DET-C-001] AWS S3 Bucket Made Public

| Field | Value |
|-------|-------|
| **Detection ID** | DET-C-001 |
| **Category** | Cloud |
| **Status** | 🟢 Provisioned |
| **MITRE Technique** | [T1567 – Exfiltration Over Web Service](https://attack.mitre.org/techniques/T1567/) |

---

## Description

Detects when an AWS S3 bucket ACL or bucket policy is modified to allow public access, which may indicate a misconfiguration or intentional data exposure by an insider threat or compromised credential.

## Use Case

Public S3 bucket exposure is one of the most common causes of cloud data breaches. Monitoring `PutBucketAcl` and `PutBucketPolicy` API calls that grant public access provides early warning.

## Data Sources

| Data Source | Platform | Notes |
|-------------|----------|-------|
| AWS CloudTrail | AWS | Management events; `s3.amazonaws.com` event source |
| AWS Config | AWS | Configuration change history for S3 resources |

## Logic / Query

```kql
// Microsoft Sentinel – KQL (AWS CloudTrail via AWSCloudTrail table)
AWSCloudTrail
| where EventSource == "s3.amazonaws.com"
| where EventName in ("PutBucketAcl", "PutBucketPolicy")
| where RequestParameters has_any ("AllUsers", "AuthenticatedUsers", "\"Effect\":\"Allow\"")
| project
    TimeGenerated,
    UserIdentityArn,
    SourceIPAddress,
    AWSRegion,
    RequestParameters,
    EventName,
    Resources
```

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | Any single occurrence |
| Severity | Critical |
| Confidence | High |

## Response Actions

1. Immediately re-apply block-public-access settings at the bucket and account level.
2. Identify which IAM principal made the change and review recent API activity.
3. Check CloudTrail `GetObject` logs to determine if data was accessed while public.
4. Notify the data owner and initiate a data breach assessment if sensitive data was exposed.
5. Rotate the compromised IAM credentials if an external actor is suspected.

## References

- [MITRE ATT&CK – T1567](https://attack.mitre.org/techniques/T1567/)
- [AWS – Blocking public access to S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [Full detection file on GitHub](https://github.com/m3rcury3/threat-modeling/blob/main/detections/cloud/DET-C-001.md)
