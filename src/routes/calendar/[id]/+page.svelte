<script lang="ts">
	import type { PageData } from './$types';
	import { _ } from '../../../services/i18n';
	import { Card, CardPlaceholder } from 'flowbite-svelte';
	import ndk from '$lib/stores/ndk';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';
	import Attendees from '../../../components/Attendees.svelte';
	import MeetupInfo from '../../../components/MeetupInfo.svelte';

	export let data: PageData;
</script>

<svelte:head>
	{#await $ndk.fetchEvent(data.event) then event}
		{#if event}
			<title>{event.tagValue('name')} - Bitcoin Txoko</title>
			<meta name="description" content={`${event.tagValue('name')} - ${event.content}`} />
		{/if}
	{/await}
</svelte:head>
<main class="mx-4 my-4 flex flex-col items-center gap-4">
	{#await $ndk.fetchEvent(data.event)}
		<CardPlaceholder size="xxl" />
	{:then event}
		{#if event}
			<Card size="lg" img={event.tagValue('image')}>
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{event.tagValue('name')}
				</h5>
				<MeetupInfo {event} />
				<Attendees {event} />
				<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					<EventContent ndk={$ndk} {event} />
				</p>
			</Card>
		{/if}
	{/await}
</main>
