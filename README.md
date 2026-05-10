# SOC Detection Requirements

A version-controlled repository serving as the **source of truth** for Blue Team detection requirements. Browse, search, and track detection coverage via GitHub Pages, while keeping everything auditable in Git.

## Documentation Site

The documentation is automatically published to GitHub Pages on every push to `main`.

> **Live site:** `https://<org>.github.io/threat-modeling/`

## Repository Structure

```
threat-modeling/
├── README.md                   # This file
├── mkdocs.yml                  # MkDocs site configuration
├── detections/                 # Detection requirements (source of local detection metadata)
├── docs/                       # MkDocs source pages (actors, tactics, dashboards)
│   └── data/                   # Generated JSON consumed by the live dashboard
├── data/                       # Generated MITRE mapping artifacts (repo-level)
├── scripts/
│   └── refresh_mitre_mapping.py
├── .github/workflows/
│   ├── deploy-docs.yml
│   └── refresh-mitre-data.yml
└── templates/
    └── detection-template.md   # Template for new detections
```

## Live MITRE Mapping

The repository includes a live ATT&CK mapping that correlates:

- ATT&CK tactics
- ATT&CK techniques
- ATT&CK groups
- ATT&CK software
- local detections in this repository

The mapping is sourced from MITRE enterprise ATT&CK STIX:

- `https://raw.githubusercontent.com/mitre-attack/attack-stix-data/master/enterprise-attack/enterprise-attack.json`

Generated artifacts:

- `data/mitre_live_mapping.json`
- `docs/data/mitre_live_mapping.json`
- `data/detection_index.json`
- `docs/data/detection_index.json`

### Refresh from MITRE

Use the workflow below and click Run workflow:

- `Refresh MITRE ATT&CK Data` (`.github/workflows/refresh-mitre-data.yml`)

This refreshes mappings from MITRE and commits updated JSON back to the repository.

## 🚀 Getting Started

### Adding a New Detection

1. Copy `templates/detection-template.md` into the appropriate category folder under `detections/`.
2. Name the file using the detection ID (e.g., `DET-E-001.md`).
3. Fill in all fields — Description, Use Case, Data Sources, Logic/Query, Status, and References.
4. Include ATT&CK metadata and SPEED framework mapping in frontmatter (`mitre_tactics`, `mitre_techniques`, `threat_actors`, `speed_framework`).
5. Open a Pull Request; once merged to `main`, the site rebuilds automatically.

### Detection ID Convention

| Prefix | Category |
|--------|----------|
| `DET-E-XXX` | Endpoint |
| `DET-N-XXX` | Network |
| `DET-I-XXX` | Identity |
| `DET-C-XXX` | Cloud |

### Status Values

| Status | Meaning |
|--------|---------|
| `Planned` | Requirement identified, not yet built |
| `Provisioned` | Detection is live in the SIEM/EDR |
| `In Testing` | Detection deployed but undergoing validation |

## Local Development

```bash
# Install dependencies
pip install mkdocs-material

# Serve locally with live reload
mkdocs serve

# Build static site
mkdocs build

# Refresh ATT&CK mapping from MITRE
python scripts/refresh_mitre_mapping.py
```

## 🤝 Contributing

Please use the template in `templates/detection-template.md` for all new detections and follow the ID convention above. All changes go through Pull Request review before merging to `main`.
