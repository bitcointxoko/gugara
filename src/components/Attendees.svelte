<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { _ } from "../services/i18n";
	import ndk from "$lib/stores/ndk";
	import { Avatar } from "flowbite-svelte";
	import type { NDKEvent } from "@nostr-dev-kit/ndk";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";
	import Popover from "./user/Popover.svelte";

	export let event: NDKEvent;

	let responses: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	responses = $ndk.storeSubscribe(
		{
			kinds: [31925],
			"#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
			"#l": ["accepted"],
		},
		{ closeOnEose: true }
	);

	onMount(() => {
		responses = $ndk.storeSubscribe(
			{
				kinds: [31925],
				"#a": [
					`${event.kind}:${event.author.pubkey}:${event.dTag}`,
				],
				"#l": ["accepted"],
			},
			{ closeOnEose: true }
		);
	});

	$: totalresponses = $responses.length;

	onDestroy(() => responses?.unsubscribe());
</script>

{#if totalresponses > 0}
	<h5 class="font-semibold">{$_("meetup.attendees")}</h5>
	<div class="flex px-4 pb-2">
		{#each $responses as response, i}
			{#await response.author.fetchProfile() then profile}
				<Avatar id="popover-{i}" stacked src={profile?.image} />
				<!-- <Popover user={response.author} {i} /> -->
			{/await}
		{/each}
	</div>
{/if}
