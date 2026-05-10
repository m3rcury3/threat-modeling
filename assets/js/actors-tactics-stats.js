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

  function statusBreakdown(detectionIds, byId) {
    const stats = { provisioned: 0, in_testing: 0, planned: 0, deprecated: 0, other: 0 };
    detectionIds.forEach((id) => {
      const status = (byId[id]?.status || "other").toLowerCase();
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
      ["Group ID", "Group Name", "Mapped Techniques", "Mapped Detections"],
      groups.map((g) => [
        link(g.group_id || "-", g.url || mitreUrlById(g.group_id)),
        link(g.name || "-", g.url || mitreUrlById(g.group_id)),
        buildTechniqueLinks(g.mapped_techniques || []),
        buildDetectionLinks(g.mapped_detections || [], detectionById),
      ])
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
      ],
      tactics.map((t) => {
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
        ];
      })
    );
  }

  function renderTacticsPage(mapping, index) {
    const meta = document.getElementById("tactics-meta");
    const tactics = mapping.mappings?.tactics || [];
    const detections = index.detections || [];
    const detectionById = Object.fromEntries(detections.map((d) => [d.detection_id, d]));

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
      ],
      tactics.map((t) => {
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
      if (isActorsPage) {
        renderActorsPage(mapping, index);
      }
      if (isTacticsPage) {
        renderTacticsPage(mapping, index);
      }
    } catch (err) {
      const targets = ["actors-meta", "actors-groups-table", "actors-tactic-stats-table", "tactics-meta", "tactics-stats-table"];
      targets.forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load MITRE stats: ${esc(err.message || err)}</p>`;
        }
      });
    }
  });
})();
