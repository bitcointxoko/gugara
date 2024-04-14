<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { onMount, onDestroy } from 'svelte';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { PUBLIC_PUBKEY } from '$env/static/public';
	import { Card } from 'flowbite-svelte';
	import { getTagValues } from '$lib/util';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import Attendees from '../../components/Attendees.svelte';
	import MeetupInfo from '../../components/MeetupInfo.svelte';

	let events: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	events = $ndk.storeSubscribe(
		{
			kinds: [31923],
			authors: [PUBLIC_PUBKEY]
		},
		{ closeOnEose: true }
	);

	onMount(() => {
		events = $ndk.storeSubscribe(
			{
				kinds: [31923],
				authors: [PUBLIC_PUBKEY]
			},
			{ closeOnEose: true }
		);
	});

	onDestroy(() => events?.unsubscribe());
</script>

<svelte:head>
	<title>Calendar - Bitcoin Txoko</title>
	<meta
		name="description"
		content={`Event calendar of Bitcoin Txoko, where you can find our past and future meetups and workshops.`}
	/>
</svelte:head>
<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="gap-6">
		{#each $events as event}
			<div class="my-4 space-y-4">
				<Card img={String(getTagValues(event.tags, 'image'))}>
					<h5
						class=" mr-auto text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
					>
						<a href="/calendar/{event.encode()}"> {getTagValues(event.tags, 'name')}</a>
					</h5>
					<MeetupInfo {event} />
					<Attendees {event} />
					<p
						class="mb-3 max-h-[125px] overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400"
					>
						<EventContent ndk={$ndk} {event} />
					</p>
				</Card>
			</div>
		{/each}
	</section>
</main>
