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

	export let event: NDKEvent;

	let responses: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	responses = $ndk.storeSubscribe(
		{
			kinds: [31925 as number],
			"#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
			"#l": ["accepted"],
		},
		{ closeOnEose: true }
	);

	onMount(() => {
		responses = $ndk.storeSubscribe(
			{
				kinds: [31925 as number],
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
		{#each $responses as response}
			{#await response.author.fetchProfile() then profile}
				<Avatar stacked src={profile?.image} />
			{/await}
			<!-- {response.author.pubkey} -->
		{/each}
	</div>
{/if}
