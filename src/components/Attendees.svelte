<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { _ } from "../services/i18n";
	import ndk from "$lib/stores/ndk";
	import { Avatar, Popover } from "flowbite-svelte";
	import type { NDKEvent } from "@nostr-dev-kit/ndk";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";

	export let event: NDKEvent;

	let responses: NDKEventStore<ExtendedBaseType<NDKEvent>>;
	const filter = {
		kinds: [31925 as number],
		"#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
		"#l": ["accepted"],
	};

	responses = $ndk.storeSubscribe(
		{
			kinds: [31925 as number],
			"#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
			"#l": ["accepted"],
		},
		{ closeOnEose: false },
	);

	onMount(() => {
		responses = $ndk.storeSubscribe(
			{
				kinds: [31925 as number],
				"#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
				"#l": ["accepted"],
			},
			{ closeOnEose: false },
		);
	});

	$: totalresponses = $responses.length;

	onDestroy(() => responses?.unsubscribe());
</script>

<!-- {#await $ndk.fetchEvents(filter) then events}
	{#if events}
		<h5 class="font-semibold">{$_("meetup.attendees")}</h5>
		<div class="flex px-4 pb-2">
			{#each events as event, i}
				{#await event.author.fetchProfile() then profile}
					<Avatar id="popover-{i}" stacked src={profile?.image} />
					<Popover triggeredBy="#popover-{i}">
						{profile?.displayName ? profile?.displayName : "anon"}
					</Popover>
				{/await}
			{/each}
		</div>
	{/if}
{/await} -->

{#if totalresponses > 0}
	<h5 class="font-semibold">{$_("meetup.attendees")}</h5>
	<div class="flex px-4 pb-2">
		{#each $responses as response, i}
			{#await response.author.fetchProfile() then profile}
				<Avatar id="popover-{i}" stacked src={profile?.image} />

				<Popover triggeredBy="#popover-{i}">
					{profile?.displayName ? profile?.displayName : "anon"}
				</Popover>
			{/await}
		{/each}
	</div>
{/if}
