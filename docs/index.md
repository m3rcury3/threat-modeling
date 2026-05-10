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

## Detection Grouping

This site is intentionally grouped by adversary behavior, not by platform silo.

| Grouping | Description |
|----------|-------------|
| [Detections](detections/index.md) | Complete inventory of detections with deployment status and metadata |
| [Threat Actors](actors/index.md) | Coverage by intrusion sets/groups mapped from live MITRE ATT&CK data |
| [Tactics](tactics/index.md) | Coverage by MITRE ATT&CK tactic and attack phase |
| [Live ATT&CK Mapping](dashboards/live-mapping.md) | Technique-to-group/software/detection mapping with refresh controls |

Use actor pages to answer "what do we detect for this adversary?" and tactic pages to answer "which attack phases are covered or missing?"

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
3. Fill in all fields, including threat actor and ATT&CK tactic metadata.
4. Ensure frontmatter includes ATT&CK IDs (`mitre_tactics`, `mitre_techniques`) and actor tags.
5. Run the **Refresh MITRE ATT&CK Data** workflow to refresh group/software mappings from MITRE.
6. Open a Pull Request — the site rebuilds automatically on merge.

See the project [README](https://github.com/m3rcury3/threat-modeling#readme) for full contribution guidelines.
