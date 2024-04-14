<script lang="ts">
	import type { PageData } from './$types';
	import ndk from '$lib/stores/ndk';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';
	import { Card } from 'flowbite-svelte';
	import Tags from '../../../components/Tags.svelte';

	export let data: PageData;
</script>

<svelte:head>
	{#await $ndk.fetchEvent(data.article) then event}
		{#if event}
			<title>{event.tagValue('title')} - Bitcoin Txoko</title>
			<meta name="description" content={`${event.tagValue('summary')}`} />
		{/if}
	{/await}
</svelte:head>
<div class="mx-4 flex flex-col items-center gap-4 pt-6">
	{#await $ndk.fetchEvent(data.article) then event}
		{#if event}
			<Card padding="xl" size="md" img={event.tagValue('image')}>
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{event.tagValue('title')}
				</h5>

				<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					{event.tagValue('summary')}
				</p>
				<Tags tags={event.tags.filter((v) => v[0] === 't')} />
				<p class="mb-3 overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400">
					<EventContent ndk={$ndk} {event} />
				</p>
			</Card>
		{/if}
	{/await}
</div>
