import type { PageServerLoad } from './$types';

export const load = (async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age: 3600'
	});
	return {
		user: params.id
	};
}) satisfies PageServerLoad;
