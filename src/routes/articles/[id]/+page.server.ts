import type { PageServerLoad } from './$types';

export const load = (async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age: 3600'
	});
	return {
		article: params.id
	};
}) satisfies PageServerLoad;
