import type { PageServerLoad } from './$types';

import db from '$lib/server/database';
import { dimClients } from '$lib/server/database/schema';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('http://service-staging.pfs360llc.com/v1/clients');
	const clients = await res.json();
	return { clients };
}

// export const load: PageServerLoad = async () => {
// 	try {
// 		const query = await db.select()
// 			.from(dimClients)
// 			.leftJoin(factLinkRequests, eq(dimClients.id, factLinkRequests.clientId));
// 		return {
// 			clients: query
// 		};
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			clients: []
// 		}
// 	}
// };