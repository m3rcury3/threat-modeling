# Detections

This page lists all detections tracked in the repository and their current deployment status.
It also maps each local detection to MITRE ATT&CK official Detection Strategies when available.

## Priority Queue

If you want the implementation order for detections protecting internal and air-gapped networks, open the [Priority Queue](../dashboards/internal-air-gapped-priority.md).

## Snapshot

<div id="detections-meta">Loading...</div>

## All Detections and Deployment Status

<div id="detections-filters">
	<label><input type="checkbox" id="filter-ai-suggested"> AI Suggested only</label>
	<label><input type="checkbox" id="filter-has-strategy"> Has MITRE Detection Strategy</label>
	<label>Category:
		<select id="filter-category">
			<option value="">All</option>
		</select>
	</label>
	<label>Status:
		<select id="filter-status">
			<option value="">All</option>
		</select>
	</label>
	<label>Technique ID: <input type="text" id="filter-technique-id" placeholder="e.g., T1059.001"></label>
	<button class="md-button" id="filter-clear" type="button">Clear Filters</button>
</div>

<div id="detections-filter-summary">Loading...</div>

<div id="detections-status-table">Loading...</div>
