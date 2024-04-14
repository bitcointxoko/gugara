<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { onMount, onDestroy } from 'svelte';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { PUBLIC_NOSTR_CALENDAR_CLIENT, PUBLIC_PUBKEY } from '$env/static/public';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { getTagValues } from '$lib/util';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';

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

<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="gap-6">
		{#each $events as event}
			<div class="my-4 space-y-4">
				<Card img={String(getTagValues(event.tags, 'image'))}>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{getTagValues(event.tags, 'name')}
					</h5>
					<div class="flex flex-row items-start">
						<div class="mr-auto divide-y divide-dashed">
							<div class="text-muted-bright text-sm font-light">
								🗓️ {new Date(Number(getTagValues(event.tags, 'start')) * 1000).toLocaleDateString(
									$_('locale.long'),
									{
										weekday: 'short',
										day: 'numeric',
										month: '2-digit',
										year: '2-digit'
									}
								)}
							</div>
							<div class="text-muted-bright text-sm font-light">
								🕓 {new Date(Number(getTagValues(event.tags, 'start')) * 1000).toLocaleTimeString(
									[],
									{
										hour: '2-digit',
										minute: '2-digit'
									}
								)}-{new Date(Number(getTagValues(event.tags, 'end')) * 1000).toLocaleTimeString(
									[],
									{
										hour: '2-digit',
										minute: '2-digit'
									}
								)}
							</div>
							<div class="text-muted-bright mb-3 text-sm font-light">
								{#if getTagValues(event.tags, 'location')}
									📍 {getTagValues(event.tags, 'location')}
								{:else}
									📍 <div class="h-2 w-32 animate-pulse rounded-full bg-gray-300"></div>
								{/if}
							</div>
						</div>
						<div class="mr-2">
							<Button href="{PUBLIC_NOSTR_CALENDAR_CLIENT}{event.encode()}">
								{$_('meetup.rsvp')}
								<ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
							</Button>
						</div>
					</div>
					<p
						class="mb-3 max-h-[125px] overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400"
					>
						<EventContent ndk={$ndk} {event} />
					</p>
					<Button href="/calendar/{event.encode()}" color="alternative">
						{$_('details')}
					</Button>
				</Card>
			</div>
		{/each}
	</section>
</main>
