<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk, { user } from '$lib/stores/ndk';
	import { PUBLIC_NOSTR_CALENDAR_CLIENT } from '$env/static/public';
	import { Card, CardPlaceholder, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { getTagValues } from '$lib/util';

	const eventsPromise = ndk.fetchEvents({
		kinds: [31923],
		authors: [user.pubkey]
	});
</script>

<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="gap-6">
		{#await eventsPromise}
			<CardPlaceholder size="lg" class="my-4" />
			<CardPlaceholder size="lg" class="my-4" />
			<CardPlaceholder size="lg" class="my-4" />
		{:then events}
			{#each Array.from(events) as event}
				<div class="my-4 space-y-4">
					<Card img={getTagValues(event.tags, 'image')}>
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
							{getTagValues(event.tags, 'about')}
						</p>
						<Button href="/calendar/{event.encode()}" color="alternative">
							{$_('details')}
						</Button>
					</Card>
				</div>
			{/each}
		{/await}
	</section>
</main>
