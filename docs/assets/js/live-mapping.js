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

  function buildList(items, keyId, keyName) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items
      .map((item) => {
        const id = item[keyId] || "";
        const name = item[keyName] || "";
        return `${esc(id)} ${esc(name)}`.trim();
      })
      .join("<br>");
  }

  function buildIdList(items) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items.map((x) => esc(x)).join("<br>");
  }

  function renderTable(containerId, headers, rows) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const thead = headers.map((h) => `<th>${esc(h)}</th>`).join("");
    const tbody = rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    root.innerHTML = `
      <table>
        <thead><tr>${thead}</tr></thead>
        <tbody>${tbody}</tbody>
      </table>
    `;
  }

  async function loadMapping(forceRefresh) {
    const suffix = forceRefresh ? `?t=${Date.now()}` : "";
    const url = new URL(`../../data/mitre_live_mapping.json${suffix}`, window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load mapping data: HTTP ${response.status}`);
    }
    return response.json();
  }

  function renderMeta(data) {
    const meta = document.getElementById("live-meta");
    if (!meta) return;
    meta.innerHTML = `
      <ul>
        <li>Generated at: ${esc(data.generated_at || "unknown")}</li>
        <li>Local detections: ${esc(data.counts?.local_detections ?? 0)}</li>
        <li>Mapped tactics: ${esc(data.counts?.mapped_tactics ?? 0)}</li>
        <li>Mapped techniques: ${esc(data.counts?.mapped_techniques ?? 0)}</li>
        <li>Mapped groups: ${esc(data.counts?.mapped_groups ?? 0)}</li>
        <li>Mapped software: ${esc(data.counts?.mapped_software ?? 0)}</li>
        <li>MITRE source: <a href="${esc(data.source?.mitre_stix_url || "#")}" target="_blank" rel="noopener">${esc(data.source?.mitre_stix_url || "n/a")}</a></li>
      </ul>
    `;
  }

  function renderAll(data) {
    renderMeta(data);

    const tactics = data.mappings?.tactics || [];
    renderTable(
      "tactic-table",
      ["Tactic", "Name", "Mapped Techniques", "Mapped Detections"],
      tactics.map((t) => [
        esc(t.tactic_id || "-"),
        esc(t.name || "-"),
        buildIdList(t.mapped_techniques || []),
        buildIdList(t.mapped_detections || []),
      ])
    );

    const techniques = data.mappings?.techniques || [];
    renderTable(
      "technique-table",
      ["Technique", "Name", "Tactics", "Groups", "Software", "Detections"],
      techniques.map((t) => [
        esc(t.technique_id || "-"),
        esc(t.name || "-"),
        buildList(t.tactics || [], "tactic_id", "name"),
        buildList(t.groups || [], "group_id", "name"),
        buildList(t.software || [], "software_id", "name"),
        buildList(t.detections || [], "detection_id", "title"),
      ])
    );

    const groups = data.mappings?.groups || [];
    renderTable(
      "group-table",
      ["Group", "Name", "Mapped Techniques", "Mapped Detections"],
      groups.map((g) => [
        esc(g.group_id || "-"),
        esc(g.name || "-"),
        buildIdList(g.mapped_techniques || []),
        buildIdList(g.mapped_detections || []),
      ])
    );

    const software = data.mappings?.software || [];
    renderTable(
      "software-table",
      ["Software", "Name", "Type", "Mapped Techniques", "Mapped Detections"],
      software.map((s) => [
        esc(s.software_id || "-"),
        esc(s.name || "-"),
        esc(s.type || "-"),
        buildIdList(s.mapped_techniques || []),
        buildIdList(s.mapped_detections || []),
      ])
    );
  }

  async function refresh(forceRefresh) {
    try {
      const data = await loadMapping(forceRefresh);
      renderAll(data);
    } catch (error) {
      const ids = ["live-meta", "tactic-table", "technique-table", "group-table", "software-table"];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load mapping data: ${esc(error.message)}</p>`;
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("refresh-view-btn");
    if (button) {
      button.addEventListener("click", function () {
        refresh(true);
      });
    }
    refresh(false);
  });
})();
