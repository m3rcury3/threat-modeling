# SOC Detection Requirements

Welcome to the **Blue Team Detection Requirements** documentation site.

This site is the single source of truth for all detection engineering requirements tracked by the Security Operations Centre (SOC). Every detection is version-controlled in the repository and published here automatically on each merge to `main`.

---

## 🎯 What Is This Site?

Each page in this site corresponds to a **detection requirement** — a structured document that captures:

- **What** behaviour we want to detect
- **Why** it matters (threat scenario and MITRE ATT&CK mapping)
- **How** to detect it (data sources and query logic)
- **Current status** of the detection (Planned → In Testing → Provisioned)

---

## 📂 Detection Categories

| Category | Description |
|----------|-------------|
| [Endpoint](endpoint/index.md) | Host-based detections for Windows, Linux, and macOS endpoints |
| [Network](network/index.md) | Network traffic and protocol-level detections |
| [Identity](identity/index.md) | Authentication, authorisation, and identity anomaly detections |
| [Cloud](cloud/index.md) | Cloud platform detections for AWS, Azure, and GCP |

---

## 📊 Detection Status Legend

| Badge | Meaning |
|-------|---------|
| 🟢 **Provisioned** | Detection is active and tuned in the SIEM / EDR |
| 🟡 **In Testing** | Detection deployed but undergoing validation and tuning |
| 🔵 **Planned** | Requirement identified; detection not yet built |

---

## ➕ Adding a New Detection

1. Copy `templates/detection-template.md` from the repository.
2. Create a new file in `detections/<category>/DET-X-NNN.md`.
3. Fill in all fields.
4. Add a corresponding page under `docs/<category>/` and update `mkdocs.yml`.
5. Open a Pull Request — the site rebuilds automatically on merge.

See the project [README](https://github.com/m3rcury3/threat-modeling#readme) for full contribution guidelines.
