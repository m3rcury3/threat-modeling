---
detection_id: DET-C-001
title: AWS S3 Bucket Made Public
threat_actors:
  - generic_data_exfiltration
category: cloud
status: provisioned
network_applicability: internet_connected
created: 2025-02-14
last_updated: 2025-05-10
owner: blue-team
mitre_tactics:
  - TA0010
mitre_techniques:
  - T1567.001
coverage_gaps:
  - "Does not detect server-side encryption configuration changes"
  - "Does not detect bucket versioning abuse patterns"
---

# [DET-C-001] AWS S3 Bucket Made Public

| Field | Value |
|-------|-------|
| **Detection ID** | DET-C-001 |
| **Title** | AWS S3 Bucket Made Public |
| **Category** | Cloud |
| **Status** | Provisioned |
| **Created** | 2025-02-14 |
| **Last Updated** | 2025-05-10 |
| **Owner** | blue-team |

---

## Description

Detects when an AWS S3 bucket ACL or bucket policy is modified to allow public (`AllUsers` or `AuthenticatedUsers`) access, which may indicate a misconfiguration or intentional data exposure by an insider threat or compromised credential.

## Use Case

Public S3 bucket exposure is one of the most common causes of cloud data breaches. Monitoring for `PutBucketAcl` and `PutBucketPolicy` API calls that grant public access provides early warning before data is exfiltrated.

- **MITRE Tactic:** TA0010 – Exfiltration
- **MITRE Technique:** T1567 – Exfiltration Over Web Service

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

### Tuning Notes

- Exclude changes made by the designated S3 administration role documented in the CMDB.
- Correlate with AWS Config evaluation `S3_BUCKET_PUBLIC_READ_PROHIBITED` or `S3_BUCKET_PUBLIC_WRITE_PROHIBITED` findings.

## Alert Thresholds

| Parameter | Value |
|-----------|-------|
| Threshold | Any single occurrence |
| Severity | Critical |
| Confidence | High |

## Response Actions

1. Immediately re-apply block-public-access settings at the bucket and account level.
2. Identify which IAM principal made the change and review recent API activity.
3. Check CloudTrail `GetObject` logs to determine if any data was accessed while public.
4. Notify the data owner and initiate a data breach assessment if sensitive data was exposed.
5. Rotate the compromised IAM credentials if an external actor is suspected.

## References

- [MITRE ATT&CK – T1567](https://attack.mitre.org/techniques/T1567/)
- [AWS – Blocking public access to S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [AWS CloudTrail – S3 data events](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging.html)
