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

  function statusScore(status) {
    const normalized = String(status || "unknown")
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("-", "_");
    const scores = {
      planned: 400,
      ai_suggested: 300,
      in_testing: 200,
      provisioned: 100,
      deprecated: 0,
      unknown: 50,
    };
    return scores[normalized] ?? 50;
  }

  function normalizeStatus(status) {
    return String(status || "unknown")
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("-", "_");
  }

  function formatStatusLabel(status) {
    return String(status || "unknown")
      .toLowerCase()
      .replaceAll("_", " ")
      .split(" ")
      .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
      .join(" ");
  }

  function networkScore(networkApplicability) {
    const values = Array.isArray(networkApplicability) ? networkApplicability : [networkApplicability];
    if (values.includes("air_gapped")) return 80;
    if (values.includes("both")) return 60;
    return 0;
  }

  function frameworkScore(speedFramework) {
    const values = Array.isArray(speedFramework) ? speedFramework : [speedFramework];
    const weights = {
      "host": 40,
      "internal-network": 35,
      "access-control": 30,
      "self-monitoring": 25,
      "policy": 20,
      "application": 15,
      "attack-pattern": 12,
      "threat-intelligence": 10,
      "cloud": 8,
      "compliance": 6,
      "physical": 4,
      "mobile": 3,
      "wireless-network": 2,
      "threat-modeling": 1,
    };
    return values.reduce((highest, value) => Math.max(highest, weights[String(value || "").toLowerCase()] || 0), 0);
  }

  function tacticScore(mitreTactics) {
    const values = Array.isArray(mitreTactics) ? mitreTactics : [mitreTactics];
    // Reversed kill chain: prioritizes detecting threats already in the network (exfiltration first)
    const weights = {
      TA0040: 50, // Exfiltration - already stealing data (highest priority)
      TA0011: 48, // Collection - actively collecting data
      TA0010: 46, // Lateral Movement - moving through the network
      TA0009: 44, // Discovery - mapping/enumerating the network
      TA0008: 42, // Credential Access - stealing credentials
      TA0007: 40, // Defense Evasion - hiding their presence
      TA0006: 38, // Privilege Escalation - escalating within network
      TA0005: 36, // Persistence - maintaining presence
      TA0004: 34, // Execution - executing code/commands
      TA0003: 32, // Initial Access - first entry point
      TA0002: 20, // Resource Development - early prep (lower priority)
      TA0001: 10, // Reconnaissance - external reconnaissance (lowest priority)
    };
    return values.reduce((highest, value) => Math.max(highest, weights[String(value || "").toUpperCase()] || 0), 0);
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

  function renderMeta(index, detections) {
    const node = document.getElementById("priority-meta");
    if (!node) return;
    const statusCounts = detections.reduce((acc, det) => {
      const key = normalizeStatus(det.status);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    node.innerHTML = `
      <ul>
        <li>Generated at: ${esc(index.generated_at || "unknown")}</li>
        <li>Relevant detections: ${esc(detections.length)}</li>
        <li>Planned: ${esc(statusCounts.planned || 0)}</li>
        <li>AI Suggested: ${esc(statusCounts.ai_suggested || 0)}</li>
        <li>In Testing: ${esc(statusCounts.in_testing || 0)}</li>
        <li>Provisioned: ${esc(statusCounts.provisioned || 0)}</li>
        <li>Priority basis: status, network applicability, SPEED framework, and ATT&amp;CK tactic</li>
      </ul>
    `;
  }

  function renderTable(detections) {
    const root = document.getElementById("priority-table");
    if (!root) return;

    const rows = detections
      .slice()
      .sort((a, b) => {
        const scoreDiff = (b.priority_score || 0) - (a.priority_score || 0);
        if (scoreDiff !== 0) return scoreDiff;
        return String(a.detection_id || "").localeCompare(String(b.detection_id || ""));
      })
      .map((d, index) => {
        const href = detectionDocUrl(d);
        const label = `${d.detection_id || "-"} ${d.title || ""}`.trim();
        const frameworks = Array.isArray(d.speed_framework) ? d.speed_framework.join(", ") : String(d.speed_framework || "-");
        const networks = Array.isArray(d.network_applicability) ? d.network_applicability.join(", ") : String(d.network_applicability || "-");

        return `
          <tr>
            <td>${esc(index + 1)}</td>
            <td>${esc(d.priority_score || 0)}</td>
            <td>${link(label, href)}</td>
            <td>${esc(formatStatusLabel(d.status))}</td>
            <td>${esc(d.category || "-")}</td>
            <td>${esc(networks)}</td>
            <td>${esc(frameworks)}</td>
            <td>${esc((d.mitre_techniques || []).join(", ") || "-")}</td>
          </tr>
        `;
      })
      .join("");

    root.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Priority Score</th>
            <th>Detection</th>
            <th>Status</th>
            <th>Category</th>
            <th>Network Applicability</th>
            <th>SPEED Framework</th>
            <th>MITRE Techniques</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  async function loadDetectionIndex() {
    const url = new URL("../../data/detection_index.json", window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load detection index: HTTP ${response.status}`);
    }
    return response.json();
  }

  function scoreDetection(detection) {
    const networks = Array.isArray(detection.network_applicability) ? detection.network_applicability : [detection.network_applicability];
    const relevant = networks.some((value) => value === "both" || value === "air_gapped");
    if (!relevant) return null;

    const score =
      statusScore(detection.status) +
      networkScore(networks) +
      frameworkScore(detection.speed_framework) +
      tacticScore(detection.mitre_tactics);
    return {
      ...detection,
      priority_score: score,
    };
  }

  async function refresh() {
    try {
      const index = await loadDetectionIndex();
      const detections = (index.detections || [])
        .map(scoreDetection)
        .filter(Boolean);

      renderMeta(index, detections);
      renderTable(detections);
    } catch (error) {
      ["priority-meta", "priority-table"].forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
          node.innerHTML = `<p>Failed to load priority data: ${esc(error.message || error)}</p>`;
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("refresh-priority-view-btn");
    if (button) {
      button.addEventListener("click", function () {
        refresh();
      });
    }
    refresh();
  });
})();