import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		product: params.id
	};
}) satisfies PageServerLoad;
