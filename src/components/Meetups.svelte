<script lang="ts">
	import { _ } from '../services/i18n';
	import ndk, { user } from '$lib/stores/ndk';
	import { getTagValues } from '$lib/util';
	import { PUBLIC_NOSTR_CALENDAR_CLIENT } from '$env/static/public';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import Rsvp from './RSVP.svelte';

	const eventsPromise = ndk.fetchEvents({
		kinds: [31923],
		authors: [user.pubkey]
	});
</script>

<Card>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{$_('meetup.title')}
	</h5>
	<div>
		{#await eventsPromise then events}
			{#each Array.from(events).slice(0, 1) as event}
				<div class="flex">
					<div class="text-muted-bright ml-3 mr-auto border-gray-300 py-2">
						<p class="pb-1 font-normal leading-tight text-gray-700 dark:text-gray-400">
							🗓️ {new Date(Number(getTagValues(event.tags, 'start')) * 1000).toLocaleDateString(
								'es-ES',
								{
									weekday: 'short',
									day: 'numeric',
									month: '2-digit',
									year: '2-digit'
								}
							)}
							{new Date(Number(getTagValues(event.tags, 'start')) * 1000).toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit'
							})}-{new Date(Number(getTagValues(event.tags, 'end')) * 1000).toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit'
							})}
						</p>
						<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
							{#if getTagValues(event.tags, 'location') != null}
								📍 {getTagValues(event.tags, 'location')}
							{:else}
								📍 TBD
							{/if}
						</p>
					</div>
					<Button href="{PUBLIC_NOSTR_CALENDAR_CLIENT}{event.encode()}">RSVP</Button>
					<!-- <Rsvp /> -->
				</div>
			{/each}
		{/await}
		<a href="/calendar" class="mt-3 inline-flex items-center text-primary-600 hover:underline">
			calendario
			<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
		</a>
	</div>
</Card>
