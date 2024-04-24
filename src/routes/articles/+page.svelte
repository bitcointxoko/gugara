<script lang="ts">
	import { _ } from "../../services/i18n";
	import ndk from "$lib/stores/ndk";
	import { onMount, onDestroy } from "svelte";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";
	import type { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";
	import { PUBLIC_PUBKEY } from "$env/static/public";
	import ArticleCard from "../../components/ArticleCard.svelte";

	let events: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	let filter: NDKFilter = {
		kinds: [30023],
		authors: [PUBLIC_PUBKEY],
	};

	events = $ndk.storeSubscribe(filter);

	onMount(() => {
		events = $ndk.storeSubscribe(filter);
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
	<section
		class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
	>
		{#each $events as event}
			<ArticleCard {event} />
		{/each}
	</section>
</main>
