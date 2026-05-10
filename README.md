# SOC Detection Requirements

A version-controlled repository serving as the **source of truth** for Blue Team detection requirements. Browse, search, and track detection coverage via GitHub Pages, while keeping everything auditable in Git.

## 📖 Documentation Site

The documentation is automatically published to **GitHub Pages** on every push to `main`.

> **Live site:** `https://<org>.github.io/threat-modeling/`

## 📂 Repository Structure

```
threat-modeling/
├── README.md                   # This file
├── mkdocs.yml                  # MkDocs site configuration
├── detections/                 # One Markdown file per detection requirement
│   ├── endpoint/
│   ├── network/
│   ├── identity/
│   └── cloud/
├── docs/                       # MkDocs source pages
│   ├── index.md                # Site introduction
│   ├── endpoint/
│   ├── network/
│   ├── identity/
│   └── cloud/
└── templates/
    └── detection-template.md   # Template for new detections
```

## 🚀 Getting Started

### Adding a New Detection

1. Copy `templates/detection-template.md` into the appropriate category folder under `detections/`.
2. Name the file using the detection ID (e.g., `DET-E-001.md`).
3. Fill in all fields — Description, Use Case, Data Sources, Logic/Query, Status, and References.
4. Create a corresponding page under `docs/<category>/` and add it to the `nav` section of `mkdocs.yml`.
5. Open a Pull Request; once merged to `main`, the site will rebuild automatically.

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

## 🛠️ Local Development

```bash
# Install dependencies
pip install mkdocs-material

# Serve locally with live reload
mkdocs serve

# Build static site
mkdocs build
```

## 🤝 Contributing

Please use the template in `templates/detection-template.md` for all new detections and follow the ID convention above. All changes go through Pull Request review before merging to `main`.
