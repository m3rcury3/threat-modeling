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

  function buildList(items, keyId, keyName) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items
      .map((item) => {
        const id = item[keyId] || "";
        const name = item[keyName] || "";
        const href = item.url || mitreUrlById(id);
        const label = `${id} ${name}`.trim();
        return link(label, href);
      })
      .join("<br>");
  }

  function buildIdList(items) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items.map((x) => link(x, mitreUrlById(x))).join("<br>");
  }

  function buildDetectionList(items, detectionById) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items
      .map((id) => {
        const det = detectionById[id] || { detection_id: id, title: id };
        const href = detectionDocUrl(det);
        const label = `${det.detection_id} ${det.title || ""}`.trim();
        return link(label, href);
      })
      .join("<br>");
  }

  function buildDetectionObjectList(items) {
    if (!items || items.length === 0) {
      return "-";
    }
    return items
      .map((d) => {
        const href = detectionDocUrl(d);
        const label = `${d.detection_id || ""} ${d.title || ""}`.trim();
        return link(label, href);
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

  async function loadDetectionIndex(forceRefresh) {
    const suffix = forceRefresh ? `?t=${Date.now()}` : "";
    const url = new URL(`../../data/detection_index.json${suffix}`, window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load detection index: HTTP ${response.status}`);
    }
    return response.json();
  }

  function renderAll(data, detectionIndex) {
    renderMeta(data);
    const detectionById = Object.fromEntries((detectionIndex.detections || []).map((d) => [d.detection_id, d]));

    const tactics = data.mappings?.tactics || [];
    renderTable(
      "tactic-table",
      ["Tactic", "Name", "Mapped Techniques", "Mapped Detections"],
      tactics.map((t) => [
        link(t.tactic_id || "-", t.url || mitreUrlById(t.tactic_id)),
        link(t.name || "-", t.url || mitreUrlById(t.tactic_id)),
        buildIdList(t.mapped_techniques || []),
        buildDetectionList(t.mapped_detections || [], detectionById),
      ])
    );

    const techniques = data.mappings?.techniques || [];
    renderTable(
      "technique-table",
      ["Technique", "Name", "Tactics", "Groups", "Software", "Detections"],
      techniques.map((t) => [
        link(t.technique_id || "-", t.url || mitreUrlById(t.technique_id)),
        link(t.name || "-", t.url || mitreUrlById(t.technique_id)),
        buildList(t.tactics || [], "tactic_id", "name"),
        buildList(t.groups || [], "group_id", "name"),
        buildList(t.software || [], "software_id", "name"),
        buildDetectionObjectList(t.detections || []),
      ])
    );

    const groups = data.mappings?.groups || [];
    renderTable(
      "group-table",
      ["Group", "Name", "Mapped Techniques", "Mapped Detections"],
      groups.map((g) => [
        link(g.group_id || "-", g.url || mitreUrlById(g.group_id)),
        link(g.name || "-", g.url || mitreUrlById(g.group_id)),
        buildIdList(g.mapped_techniques || []),
        buildDetectionList(g.mapped_detections || [], detectionById),
      ])
    );

    const software = data.mappings?.software || [];
    renderTable(
      "software-table",
      ["Software", "Name", "Type", "Mapped Techniques", "Mapped Detections"],
      software.map((s) => [
        link(s.software_id || "-", s.url || mitreUrlById(s.software_id)),
        link(s.name || "-", s.url || mitreUrlById(s.software_id)),
        esc(s.type || "-"),
        buildIdList(s.mapped_techniques || []),
        buildDetectionList(s.mapped_detections || [], detectionById),
      ])
    );
  }

  async function refresh(forceRefresh) {
    try {
      const [data, detectionIndex] = await Promise.all([
        loadMapping(forceRefresh),
        loadDetectionIndex(forceRefresh),
      ]);
      renderAll(data, detectionIndex);
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
