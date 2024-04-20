<script lang="ts">
	import { _ } from "../services/i18n";
	import ndk from "$lib/stores/ndk";
	import { onMount, onDestroy } from "svelte";
	import type { NDKEvent } from "@nostr-dev-kit/ndk";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";
	import { PUBLIC_PUBKEY } from "$env/static/public";
	import { Card, Skeleton } from "flowbite-svelte";
	import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
	import MeetupInfo from "./MeetupInfo.svelte";

	let events: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	events = $ndk.storeSubscribe(
		{
			kinds: [31923],
			authors: [PUBLIC_PUBKEY],
		},
		{ closeOnEose: true }
	);

	onMount(() => {
		events = $ndk.storeSubscribe(
			{
				kinds: [31923],
				authors: [PUBLIC_PUBKEY],
			},
			{ closeOnEose: true }
		);
	});

	onDestroy(() => events?.unsubscribe());
</script>

<Card>
	<h5
		class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
	>
		{$_("meetup.title")}
	</h5>
	<div>
		<!-- {#await $ndk.fetchEvents( { kinds: [31923], authors: [PUBLIC_PUBKEY] } )}
			<Skeleton size="sm" />
		{:then events}
			{#if events}
				<MeetupInfo event={events.values().next().value} />
			{/if}
		{/await} -->
		<MeetupInfo event={$events.values().next().value} />
		<a
			href="/calendar"
			class="mt-3 inline-flex items-center text-primary-600 hover:underline"
		>
			{$_("calendar.title").toLowerCase()}
			<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
		</a>
	</div>
</Card>
