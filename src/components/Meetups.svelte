<script lang="ts">
	import { _ } from "../services/i18n";
	import ndk from "$lib/stores/ndk";
	// import { onMount, onDestroy } from 'svelte';
	import type { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";
	// import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { PUBLIC_PUBKEY } from "$env/static/public";
	import { Card } from "flowbite-svelte";
	import {
		ArrowUpRightFromSquareOutline,
		ShareNodesOutline,
	} from "flowbite-svelte-icons";
	import MeetupInfo from "./MeetupInfo.svelte";
	import ShareModal from "./actions/ShareModal.svelte";

	let filter: NDKFilter = {
		kinds: [31923 as number],
		authors: [PUBLIC_PUBKEY],
	};

	// let events: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	// events = $ndk.storeSubscribe(filter);

	// onMount(() => {
	// 	events = $ndk.storeSubscribe(filter);
	// });

	// onDestroy(() => events?.unsubscribe());

	let modalOpen: boolean = false;
</script>

<Card class="bg-warm-50">
	<h5
		class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
	>
		{$_("meetup.title")}
	</h5>
	<div>
		{#await $ndk.fetchEvent(filter)}
			<div
				class="mt-2 h-2 w-32 animate-pulse rounded-full bg-gray-300"
			></div>
			<div
				class="mt-2 h-2 w-48 animate-pulse rounded-full bg-gray-300"
			></div>
			<div
				class="mt-2 h-2 w-32 animate-pulse rounded-full bg-gray-300"
			></div>
		{:then event}
			{#if event}
				<MeetupInfo {event} />
			{/if}
		{/await}
		<div class="text-primary-600 mt-3 flex gap-3">
			<a
				href="/calendar"
				class="inline-flex items-center hover:underline"
			>
				{$_("calendar.title").toLowerCase()}
				<ArrowUpRightFromSquareOutline class="ms-1 h-3 w-3" />
			</a>
			<button
				class="inline-flex items-center hover:underline"
				on:click={() => (modalOpen = true)}
			>
				{$_("share.share").toLowerCase()}
				<ShareNodesOutline class="ms-1 h-3 w-3" />
			</button>
		</div>
	</div>
</Card>
{#await $ndk.fetchEvent(filter) then event}
	{#if event}
		<ShareModal {event} {modalOpen} />
	{/if}
{/await}
