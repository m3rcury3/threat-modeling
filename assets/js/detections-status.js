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

  function detectionDocUrl(detection) {
    const id = detection?.detection_id || "";
    const category = detection?.category || "";
    if (!id || !category) return "";
    return `../${encodeURIComponent(category)}/${encodeURIComponent(id)}/`;
  }

  function statusBadge(status) {
    const normalized = String(status || "unknown").toLowerCase();
    const map = {
      provisioned: "🟢 Provisioned",
      in_testing: "🟡 In Testing",
      planned: "🔵 Planned",
      deprecated: "⚫ Deprecated",
      unknown: "⚪ Unknown",
    };
    return map[normalized] || `⚪ ${esc(status)}`;
  }

  function renderMeta(index) {
    const root = document.getElementById("detections-meta");
    if (!root) return;

    const byStatus = index.by_status || {};
    root.innerHTML = `
      <ul>
        <li>Generated at: ${esc(index.generated_at || "unknown")}</li>
        <li>Total detections: ${esc(index.total_detections || 0)}</li>
        <li>Provisioned: ${esc(byStatus.provisioned || 0)}</li>
        <li>In Testing: ${esc(byStatus.in_testing || 0)}</li>
        <li>Planned: ${esc(byStatus.planned || 0)}</li>
        <li>Deprecated: ${esc(byStatus.deprecated || 0)}</li>
      </ul>
    `;
  }

  function renderTable(index) {
    const root = document.getElementById("detections-status-table");
    if (!root) return;

    const rows = (index.detections || [])
      .slice()
      .sort((a, b) => String(a.detection_id || "").localeCompare(String(b.detection_id || "")))
      .map((d) => {
        const href = detectionDocUrl(d);
        const idTitle = `${d.detection_id || "-"} ${d.title || ""}`.trim();
        const linked = href
          ? `<a href="${esc(href)}">${esc(idTitle)}</a>`
          : esc(idTitle);
        const network = (Array.isArray(d.network_applicability) ? d.network_applicability : [d.network_applicability])
          .filter(Boolean)
          .map((n) => esc(n))
          .join(", ");

        return `
          <tr>
            <td>${linked}</td>
            <td>${esc(d.category || "-")}</td>
            <td>${statusBadge(d.status)}</td>
            <td>${network || "-"}</td>
            <td>${esc(d.owner || "-")}</td>
            <td>${esc(d.last_updated || "-")}</td>
          </tr>
        `;
      })
      .join("");

    root.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Detection</th>
            <th>Category</th>
            <th>Deployment Status</th>
            <th>Network Applicability</th>
            <th>Owner</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  async function loadDetectionIndex() {
    const url = new URL("../data/detection_index.json", window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load detection index: HTTP ${response.status}`);
    }
    return response.json();
  }

  document.addEventListener("DOMContentLoaded", async function () {
    const active = document.getElementById("detections-status-table");
    if (!active) return;

    try {
      const index = await loadDetectionIndex();
      renderMeta(index);
      renderTable(index);
    } catch (error) {
      ["detections-meta", "detections-status-table"].forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load detections data: ${esc(error.message || error)}</p>`;
        }
      });
    }
  });
})();
