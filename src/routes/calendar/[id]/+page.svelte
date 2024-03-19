<script lang="ts">
	import type { PageData } from './$types';
	import ndk from '$lib/stores/ndk';
	import { Button, Card } from 'flowbite-svelte';
	import { getTagValues } from '$lib/util';
	import { PUBLIC_NOSTR_CALENDAR_CLIENT } from '$env/static/public';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let data: PageData;

	const eventPromise = ndk.fetchEvent(data.event);
</script>

<div class="mx-4 flex flex-col items-center gap-4 pt-6">
	{#await eventPromise then event}
		<Card img={getTagValues(event.tags, 'image')}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{getTagValues(event.tags, 'name')}
			</h5>
			<div class="flex flex-row items-start">
				<div class="mr-auto">
					<div class="text-muted-bright mx-1 mt-1 border-b border-dotted text-sm font-light">
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
					</div>
					<div class="text-muted-bright mx-1 mb-3 mt-1 border-b border-dotted text-sm font-light">
						{#if getTagValues(event.tags, 'location')}
							📍 {getTagValues(event.tags, 'location')}
						{:else}
							📍 <div class="h-2 w-32 animate-pulse rounded-full bg-gray-300"></div>
						{/if}
					</div>
				</div>
				<div class="mr-2">
					<Button href="{PUBLIC_NOSTR_CALENDAR_CLIENT}{event.encode()}">
						RSVP <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
					</Button>
				</div>
			</div>
			<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
				{getTagValues(event.tags, 'about')}
			</p>
		</Card>
	{/await}
</div>
