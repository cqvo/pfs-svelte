<script lang="ts">
	// import type { PageData } from './$types';
	// export let data: PageData;
	let { data } = $props();
	const clients = data.clients;
  // Datatable
	import { Datatable, TableHandler, ThSort, ThFilter } from '@vincjo/datatables';
	const table = new TableHandler(clients, { rowsPerPage: 20 });
</script>


<main>
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<!-- Native Table Element -->
		{#if !data.clients || data.clients.length === 0}
			<p>Loading...</p>
		{:else}
			<Datatable basic {table}>
				<table>
					<thead>
					<tr>
						<ThSort {table} field="taxdomeId">ID</ThSort>
						<ThSort {table} field="companyName">Name</ThSort>
						<ThSort {table} field="emailAddress">Email</ThSort>
					</tr>
					<tr>
						<ThFilter {table} field="taxdomeId" />
						<ThFilter {table} field="companyName" />
						<ThFilter {table} field="emailAddress" />
					</tr>
					</thead>
					<tbody>
					{#each table.rows as row}
						<tr>
							<td>{row.taxdomeId}</td>
							<td>{row.companyName}</td>
							<td>{row.emailAddress}</td>
						</tr>
						{/each}
					</tbody>
				</table>
			</Datatable>
			{/if}
	</div>
</main>