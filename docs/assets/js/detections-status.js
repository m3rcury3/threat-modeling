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
    const sourceFile = detection?.source_file || "";
    if (sourceFile) {
      return `https://github.com/m3rcury3/threat-modeling/blob/main/${encodeURI(sourceFile)}`;
    }
    const id = detection?.detection_id || "";
    const category = detection?.category || "";
    if (!id || !category) return "";
    return `../${encodeURIComponent(category)}/${encodeURIComponent(id)}/`;
  }

  function statusBadge(status) {
    const normalized = String(status || "unknown")
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("-", "_");
    const map = {
      provisioned: "🟢 Provisioned",
      in_testing: "🟡 In Testing",
      planned: "🔵 Planned",
      deprecated: "⚫ Deprecated",
      ai_suggested: "🟣 AI Suggested",
      unknown: "⚪ Unknown",
    };
    return map[normalized] || `⚪ ${esc(status)}`;
  }

  function normalizeStatus(status) {
    return String(status || "unknown")
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("-", "_");
  }

  function strategyLinksForDetection(detectionId, crosswalk) {
    const entries = crosswalk?.[detectionId] || [];
    if (!entries.length) return "-";
    return entries
      .map((s) => {
        const id = s.strategy_id || "-";
        const name = s.name || "";
        const label = `${id} ${name}`.trim();
        const url = s.url || `https://attack.mitre.org/detectionstrategies/${encodeURIComponent(id)}`;
        return `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`;
      })
      .join("<br>");
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
        <li>AI Suggested: ${esc(byStatus["AI Suggested"] || 0)}</li>
      </ul>
    `;
  }

  function applyFilters(detections, crosswalk, filters) {
    const techniqueNeedle = String(filters.technique || "")
      .trim()
      .toUpperCase();

    return detections.filter((d) => {
      const category = String(d.category || "").toLowerCase();
      const status = normalizeStatus(d.status);

      if (filters.category && category !== String(filters.category).toLowerCase()) {
        return false;
      }

      if (filters.status && status !== normalizeStatus(filters.status)) {
        return false;
      }

      if (filters.aiSuggestedOnly && normalizeStatus(d.status) !== "ai_suggested") {
        return false;
      }

      if (filters.hasStrategyOnly) {
        const entries = crosswalk?.[d.detection_id] || [];
        if (!entries.length) {
          return false;
        }
      }

      if (techniqueNeedle) {
        const techniques = Array.isArray(d.mitre_techniques) ? d.mitre_techniques : [];
        const hasMatch = techniques.some((t) => String(t || "").toUpperCase().includes(techniqueNeedle));
        if (!hasMatch) {
          return false;
        }
      }

      return true;
    });
  }

  function renderSummary(filteredCount, totalCount) {
    const summary = document.getElementById("detections-filter-summary");
    if (!summary) return;
    summary.innerHTML = `<p>Showing <strong>${esc(filteredCount)}</strong> of <strong>${esc(totalCount)}</strong> detections.</p>`;
  }

  function renderTable(index, mapping, filters) {
    const root = document.getElementById("detections-status-table");
    if (!root) return;
    const crosswalk = mapping?.mappings?.detection_strategy_crosswalk || {};
    const detections = index.detections || [];
    const filtered = applyFilters(detections, crosswalk, filters);
    renderSummary(filtered.length, detections.length);

    const rows = filtered
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
            <td>${strategyLinksForDetection(d.detection_id, crosswalk)}</td>
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
            <th>MITRE Detection Strategies</th>
            <th>Network Applicability</th>
            <th>Owner</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function readFilters() {
    const ai = document.getElementById("filter-ai-suggested");
    const hasStrategy = document.getElementById("filter-has-strategy");
    const category = document.getElementById("filter-category");
    const status = document.getElementById("filter-status");
    const technique = document.getElementById("filter-technique-id");
    return {
      aiSuggestedOnly: Boolean(ai?.checked),
      hasStrategyOnly: Boolean(hasStrategy?.checked),
      category: category?.value || "",
      status: status?.value || "",
      technique: technique?.value || "",
    };
  }

  function fillSelect(selectId, values) {
    const select = document.getElementById(selectId);
    if (!select) return;
    const current = select.value;

    select.innerHTML = `<option value="">All</option>`;
    values.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });

    if (current && values.includes(current)) {
      select.value = current;
    }
  }

  function populateFilterOptions(index) {
    const detections = index?.detections || [];
    const categories = Array.from(
      new Set(
        detections
          .map((d) => String(d.category || "").trim())
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b));

    const statuses = Array.from(
      new Set(
        detections
          .map((d) => String(d.status || "").trim())
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b));

    fillSelect("filter-category", categories);
    fillSelect("filter-status", statuses);
  }

  function bindFilterEvents(onChange) {
    const ai = document.getElementById("filter-ai-suggested");
    const hasStrategy = document.getElementById("filter-has-strategy");
    const category = document.getElementById("filter-category");
    const status = document.getElementById("filter-status");
    const technique = document.getElementById("filter-technique-id");
    const clear = document.getElementById("filter-clear");

    if (ai) ai.addEventListener("change", onChange);
    if (hasStrategy) hasStrategy.addEventListener("change", onChange);
    if (category) category.addEventListener("change", onChange);
    if (status) status.addEventListener("change", onChange);
    if (technique) technique.addEventListener("input", onChange);
    if (clear) {
      clear.addEventListener("click", function () {
        if (ai) ai.checked = false;
        if (hasStrategy) hasStrategy.checked = false;
        if (category) category.value = "";
        if (status) status.value = "";
        if (technique) technique.value = "";
        onChange();
      });
    }
  }

  async function loadDetectionIndex() {
    const url = new URL("../data/detection_index.json", window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load detection index: HTTP ${response.status}`);
    }
    return response.json();
  }

  async function loadMapping() {
    const url = new URL("../data/mitre_live_mapping.json", window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load MITRE mapping: HTTP ${response.status}`);
    }
    return response.json();
  }

  document.addEventListener("DOMContentLoaded", async function () {
    const active = document.getElementById("detections-status-table");
    if (!active) return;

    try {
      const [index, mapping] = await Promise.all([loadDetectionIndex(), loadMapping()]);
      populateFilterOptions(index);
      renderMeta(index);
      const rerender = function () {
        renderTable(index, mapping, readFilters());
      };
      bindFilterEvents(rerender);
      rerender();
    } catch (error) {
      ["detections-meta", "detections-filter-summary", "detections-status-table"].forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load detections data: ${esc(error.message || error)}</p>`;
        }
      });
    }
  });
})();
