(function () {
  "use strict";

  function esc(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function mitreUrlById(attackId) {
    const id = String(attackId || "").toUpperCase();
    if (id.startsWith("TA")) return `https://attack.mitre.org/tactics/${encodeURIComponent(id)}/`;
    if (id.startsWith("G")) return `https://attack.mitre.org/groups/${encodeURIComponent(id)}/`;
    if (id.startsWith("S")) return `https://attack.mitre.org/software/${encodeURIComponent(id)}/`;
    if (id.startsWith("T")) {
      if (id.includes(".")) {
        const [base, sub] = id.split(".");
        return `https://attack.mitre.org/techniques/${encodeURIComponent(base)}/${encodeURIComponent(sub)}/`;
      }
      return `https://attack.mitre.org/techniques/${encodeURIComponent(id)}/`;
    }
    return "";
  }

  function detectionDocUrl(detection) {
    const sourceFile = detection?.source_file || "";
    if (sourceFile) {
      return `https://github.com/m3rcury3/threat-modeling/blob/main/${encodeURI(sourceFile)}`;
    }
    const id = detection?.detection_id || "";
    const category = detection?.category || "";
    if (!id || !category) return "";
    return `../${encodeURIComponent(category)}/${encodeURIComponent(id)}/`;
  }

  function link(text, href) {
    if (!href) return esc(text);
    return `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)}</a>`;
  }

  function buildTechniqueLinks(techniqueIds) {
    if (!techniqueIds || techniqueIds.length === 0) return "-";
    return techniqueIds.map((id) => link(id, mitreUrlById(id))).join("<br>");
  }

  function buildDetectionLinks(detectionIds, detectionById) {
    if (!detectionIds || detectionIds.length === 0) return "-";
    return detectionIds
      .map((id) => {
        const det = detectionById[id] || { detection_id: id, title: id };
        const label = `${det.detection_id} ${det.title || ""}`.trim();
        return link(label, detectionDocUrl(det));
      })
      .join("<br>");
  }

  function renderTable(containerId, headers, rows) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const thead = headers.map((h) => `<th>${esc(h)}</th>`).join("");
    const tbody = rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    root.innerHTML = `<table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>`;
  }

  function normalizeStatus(status) {
    return String(status || "unknown")
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("-", "_");
  }

  function formatStatusLabel(status) {
    const raw = String(status || "");
    if (!raw) return "Unknown";
    return raw
      .replaceAll("_", " ")
      .split(" ")
      .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
      .join(" ");
  }

  function populateStatusFilter(selectId, detections) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const statuses = Array.from(
      new Set((detections || []).map((d) => String(d.status || "")).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b));

    const previous = select.value;
    select.innerHTML = `<option value="">All statuses</option>`;
    statuses.forEach((s) => {
      const option = document.createElement("option");
      option.value = normalizeStatus(s);
      option.textContent = formatStatusLabel(s);
      select.appendChild(option);
    });
    if (previous && Array.from(select.options).some((o) => o.value === previous)) {
      select.value = previous;
    }
  }

  function hasMappedDetectionStatus(detectionIds, detectionById, selectedStatus) {
    if (!selectedStatus) return true;
    return (detectionIds || []).some((id) => normalizeStatus(detectionById[id]?.status) === selectedStatus);
  }

  function hasGroupSearchMatch(group, query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return true;
    const haystack = [
      String(group.group_id || ""),
      String(group.name || ""),
      ...(Array.isArray(group.aliases) ? group.aliases : []),
      ...(Array.isArray(group.keywords) ? group.keywords : []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  }

  function setFilterSummary(elementId, filteredCount, totalCount) {
    const node = document.getElementById(elementId);
    if (!node) return;
    node.innerHTML = `<p>Showing <strong>${esc(filteredCount)}</strong> of <strong>${esc(totalCount)}</strong> rows.</p>`;
  }

  function statusBreakdown(detectionIds, byId) {
    const stats = { provisioned: 0, in_testing: 0, planned: 0, deprecated: 0, ai_suggested: 0, other: 0 };
    detectionIds.forEach((id) => {
      const status = normalizeStatus(byId[id]?.status || "other");
      if (status in stats) {
        stats[status] += 1;
      } else {
        stats.other += 1;
      }
    });
    return stats;
  }

  async function loadData() {
    const mappingUrl = new URL("../data/mitre_live_mapping.json", window.location.href);
    const indexUrl = new URL("../data/detection_index.json", window.location.href);
    const [mappingRes, indexRes] = await Promise.all([
      fetch(mappingUrl.toString(), { cache: "no-store" }),
      fetch(indexUrl.toString(), { cache: "no-store" }),
    ]);
    if (!mappingRes.ok || !indexRes.ok) {
      throw new Error("Failed to load mapping/index JSON");
    }
    const [mapping, index] = await Promise.all([mappingRes.json(), indexRes.json()]);
    return { mapping, index };
  }

  function renderActorsPage(mapping, index) {
    const meta = document.getElementById("actors-meta");
    const groups = mapping.mappings?.groups || [];
    const tactics = mapping.mappings?.tactics || [];
    const detections = index.detections || [];
    const detectionById = Object.fromEntries(detections.map((d) => [d.detection_id, d]));
    const groupSearch = document.getElementById("actors-group-search");
    const query = groupSearch?.value || "";
    const filteredGroups = groups.filter((g) => hasGroupSearchMatch(g, query));
    const filteredTactics = tactics;

    setFilterSummary("actors-filter-summary", filteredGroups.length, groups.length);

    if (meta) {
      meta.innerHTML = `
        <ul>
          <li>Generated at: ${esc(mapping.generated_at || "unknown")}</li>
          <li>Total MITRE groups: ${esc(groups.length)}</li>
          <li>Total MITRE tactics: ${esc(tactics.length)}</li>
          <li>Total local detections: ${esc(detections.length)}</li>
        </ul>
      `;
    }

    renderTable(
      "actors-groups-table",
      [
        "Group ID",
        "Group Name",
        "Aliases",
        "Keywords",
        "Mapped Techniques",
        "Mapped Detections",
        "AI Suggested",
        "In Testing",
        "Planned",
        "Provisioned",
        "Deprecated",
      ],
      filteredGroups.map((g) => {
        const s = statusBreakdown(g.mapped_detections || [], detectionById);
        return [
          link(g.group_id || "-", g.url || mitreUrlById(g.group_id)),
          link(g.name || "-", g.url || mitreUrlById(g.group_id)),
          (g.aliases || []).length ? esc(g.aliases.join(", ")) : "-",
          (g.keywords || []).length ? esc(g.keywords.join(", ")) : "-",
          buildTechniqueLinks(g.mapped_techniques || []),
          buildDetectionLinks(g.mapped_detections || [], detectionById),
          esc(s.ai_suggested),
          esc(s.in_testing),
          esc(s.planned),
          esc(s.provisioned),
          esc(s.deprecated),
        ];
      })
    );

    renderTable(
      "actors-tactic-stats-table",
      [
        "Tactic ID",
        "Tactic Name",
        "Techniques",
        "Detections",
        "Provisioned",
        "In Testing",
        "Planned",
        "Deprecated",
        "AI Suggested",
      ],
      filteredTactics.map((t) => {
        const detIds = t.mapped_detections || [];
        const s = statusBreakdown(detIds, detectionById);
        return [
          link(t.tactic_id || "-", t.url || mitreUrlById(t.tactic_id)),
          link(t.name || "-", t.url || mitreUrlById(t.tactic_id)),
          buildTechniqueLinks(t.mapped_techniques || []),
          buildDetectionLinks(detIds, detectionById),
          esc(s.provisioned),
          esc(s.in_testing),
          esc(s.planned),
          esc(s.deprecated),
          esc(s.ai_suggested),
        ];
      })
    );
  }

  function renderTacticsPage(mapping, index) {
    const meta = document.getElementById("tactics-meta");
    const tactics = mapping.mappings?.tactics || [];
    const detections = index.detections || [];
    const detectionById = Object.fromEntries(detections.map((d) => [d.detection_id, d]));
    const statusSelect = document.getElementById("tactics-mapped-status-filter");

    populateStatusFilter("tactics-mapped-status-filter", detections);

    const selectedStatus = statusSelect?.value || "";
    const filteredTactics = tactics.filter((t) =>
      hasMappedDetectionStatus(t.mapped_detections || [], detectionById, selectedStatus)
    );

    setFilterSummary("tactics-filter-summary", filteredTactics.length, tactics.length);

    if (meta) {
      meta.innerHTML = `
        <ul>
          <li>Generated at: ${esc(mapping.generated_at || "unknown")}</li>
          <li>Total MITRE tactics: ${esc(tactics.length)}</li>
          <li>Total local detections: ${esc(detections.length)}</li>
        </ul>
      `;
    }

    renderTable(
      "tactics-stats-table",
      [
        "Tactic ID",
        "Tactic Name",
        "Mapped Techniques",
        "Mapped Detections",
        "Provisioned",
        "In Testing",
        "Planned",
        "Deprecated",
        "AI Suggested",
      ],
      filteredTactics.map((t) => {
        const detIds = t.mapped_detections || [];
        const s = statusBreakdown(detIds, detectionById);
        return [
          link(t.tactic_id || "-", t.url || mitreUrlById(t.tactic_id)),
          link(t.name || "-", t.url || mitreUrlById(t.tactic_id)),
          buildTechniqueLinks(t.mapped_techniques || []),
          buildDetectionLinks(detIds, detectionById),
          esc(s.provisioned),
          esc(s.in_testing),
          esc(s.planned),
          esc(s.deprecated),
          esc(s.ai_suggested),
        ];
      })
    );
  }

  document.addEventListener("DOMContentLoaded", async function () {
    const isActorsPage = Boolean(document.getElementById("actors-groups-table"));
    const isTacticsPage = Boolean(document.getElementById("tactics-stats-table"));
    if (!isActorsPage && !isTacticsPage) {
      return;
    }

    try {
      const { mapping, index } = await loadData();

      const rerender = function () {
        if (isActorsPage) {
          renderActorsPage(mapping, index);
        }
        if (isTacticsPage) {
          renderTacticsPage(mapping, index);
        }
      };

      const actorsFilter = document.getElementById("actors-group-search");
      const tacticsFilter = document.getElementById("tactics-mapped-status-filter");
      if (actorsFilter) actorsFilter.addEventListener("input", rerender);
      if (tacticsFilter) tacticsFilter.addEventListener("change", rerender);

      rerender();
    } catch (err) {
      const targets = [
        "actors-meta",
        "actors-filter-summary",
        "actors-groups-table",
        "actors-tactic-stats-table",
        "tactics-meta",
        "tactics-filter-summary",
        "tactics-stats-table",
      ];
      targets.forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load MITRE stats: ${esc(err.message || err)}</p>`;
        }
      });
    }
  });
})();
