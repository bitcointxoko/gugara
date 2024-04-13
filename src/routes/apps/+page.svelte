<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk from '$lib/stores/ndk';
	import LinkList from '../../components/LinkList.svelte';
	import { Card } from 'flowbite-svelte';
	import { PUBLIC_PUBKEY } from '$env/static/public';
</script>

<main class="mx-4 my-4 flex flex-row flex-wrap items-start justify-center gap-2">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#await $ndk.fetchEvent({ kinds: [30003], authors: [PUBLIC_PUBKEY] })}
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
		{:then event}
			{#if event}
				<LinkList tags={event.tags.filter((v) => v[0] === 'r')} />
			{/if}
		{/await}
	</div>
</main>
