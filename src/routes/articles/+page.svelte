<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk, { user } from '$lib/stores/ndk';
	import { PUBLIC_NOSTR_LONG_FORM_CLIENT } from '$env/static/public';
	import Tags from '../../components/Tags.svelte';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { readingTime, getTagValues } from '$lib/util';

	const eventsPromise = ndk.fetchEvents({
		kinds: [30023],
		authors: [user.pubkey]
	});
</script>

<main class="my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#await eventsPromise then events}
			{#each Array.from(events) as event}
				<Card img={getTagValues(event.tags, 'image')}>
					<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{getTagValues(event.tags, 'title')}
					</h5>
					<div class="mx-1 mb-2 border-b border-dotted text-sm font-light">
						{new Date(Number(getTagValues(event.tags, 'published_at')) * 1000).toLocaleDateString()}
						//
						<span>
							{readingTime(event.content)}
							{$_('articles.minRead')}
						</span>
					</div>
					<Tags tags={event.tags.filter((v) => v[0] === 't')} />
					<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
						{getTagValues(event.tags, 'summary')}
					</p>
					<Button href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}a/{event.encode()}" class="mr-1">
						Habla.news <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
					</Button>
					<!-- <Button href="/articles/{event.encode()}" color="alternative">Leer</Button> -->
				</Card>
			{/each}
		{/await}
	</section>
</main>
