<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk, { user } from '$lib/stores/ndk';
	import LinkList from '../../components/LinkList.svelte';
	import { Card } from 'flowbite-svelte';

	const eventsPromise = ndk.fetchEvents({
		kinds: [30003],
		authors: [user.pubkey]
	});
</script>

<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center gap-2">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#await eventsPromise}
			<Card size="xs">
				<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
			</Card>
			<Card size="xs">
				<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
			</Card>
			<Card size="xs">
				<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
			</Card>
			<Card size="xs">
				<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
			</Card>
			<Card size="xs">
				<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
				<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
			</Card>
		{:then events}
			{#each Array.from(events).slice(0, 1) as event}
				<LinkList tags={event.tags.filter((v) => v[0] === 'r')} />
			{/each}
		{/await}
	</div>
</main>
