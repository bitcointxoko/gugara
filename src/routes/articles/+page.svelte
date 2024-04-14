<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { onMount, onDestroy } from 'svelte';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import { PUBLIC_NOSTR_LONG_FORM_CLIENT, PUBLIC_PUBKEY } from '$env/static/public';
	import Tags from '../../components/Tags.svelte';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { readingTime } from '$lib/util';

	let events: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	events = $ndk.storeSubscribe(
		{
			kinds: [30023],
			authors: [PUBLIC_PUBKEY]
		},
		{ closeOnEose: true }
	);

	onMount(() => {
		events = $ndk.storeSubscribe(
			{
				kinds: [30023],
				authors: [PUBLIC_PUBKEY]
			},
			{ closeOnEose: true }
		);
	});

	onDestroy(() => events?.unsubscribe());
</script>

<svelte:head>
	<title>Articles - Bitcoin Txoko</title>
	<meta
		name="description"
		content={`The library of Bitcoin Txoko, where you can find our guides and explainers.`}
	/>
</svelte:head>

<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each $events as event}
			<Card img={event.tagValue('image')}>
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{event.tagValue('title')}
				</h5>
				<div class="mx-1 mb-2 border-b border-dotted text-sm font-light">
					{new Date(Number(event.tagValue('published_at')) * 1000).toLocaleDateString()}
					//
					<span>
						{readingTime(event.content)}
						{$_('articles.minRead')}
					</span>
				</div>
				<Tags tags={event.tags.filter((v) => v[0] === 't')} />
				<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					{event.tagValue('summary')}
				</p>
				<Button href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}a/{event.encode()}" class="mr-1">
					Habla.news <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
				</Button>
				<!-- <Button href="/articles/{event.encode()}" color="alternative">Leer</Button> -->
			</Card>
		{/each}
	</section>
</main>
