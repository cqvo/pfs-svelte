<script>
  import { clients } from '$lib/stores/clients';
  export let fetchedClients;

  if (fetchedClients && Array.isArray(fetchedClients)) {
    clients.set(fetchedClients);
  } else {
    console.error("fetchedClients is not an array or is undefined:", fetchedClients);
  }
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Position</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each $clients as client, i}
				<tr>
					<td>{client.companyName || "N/A"}</td>
					<td>{client.emailAddress || "N/A"}</td>
				</tr>
			{/each}
		</tbody>
		<!-- <tfoot>
		</tfoot> -->
	</table>
</div>
