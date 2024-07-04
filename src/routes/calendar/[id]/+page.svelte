<script lang="ts">
	import type { PageData } from "./$types";
	import { _ } from "../../../services/i18n";
	import { Card, CardPlaceholder } from "flowbite-svelte";
	import ndk from "$lib/stores/ndk";
	import { EventContent } from "@nostr-dev-kit/ndk-svelte-components";
	import Attendees from "../../../components/Attendees.svelte";
	import MeetupInfo from "../../../components/MeetupInfo.svelte";
	import { Avatar } from "flowbite-svelte";

	export let data: PageData;

	/* const filter =
	{
		      kinds: [31925 as number],
		      "#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
		      "#l": ["accepted"],
	} */
</script>

<svelte:head>
	{#await $ndk.fetchEvent(data.event) then event}
		{#if event}
			<title
				>{event.tagValue("name")
					? event.tagValue("name")
					: event.tagValue("title")} - Bitcoin Txoko</title
			>
			<meta name="description" content={event.content} />
		{/if}
	{/await}
</svelte:head>
<main class="mx-4 my-4 flex flex-col items-center gap-4">
	{#await $ndk.fetchEvent(data.event)}
		<CardPlaceholder size="xxl" />
	{:then event}
		{#if event}
			<Card size="lg" img={event.tagValue("image")} class="bg-warm-50">
				<h5
					class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{event.tagValue("name")
						? event.tagValue("name")
						: event.tagValue("title")}
				</h5>
				<MeetupInfo {event} />
				<Attendees {event} />

				<!-- {#await $ndk.fetchEvents(
						{
						    kinds: [31925],
						    "#a": [`${event.kind}:${event.author.pubkey}:${event.dTag}`],
						    "#l": ["accepted"],
						}
					    ) then events}
					      {#if events}
						<h5 class="font-semibold">{$_("meetup.attendees")}</h5>
						<div class="flex px-4 pb-2">
						  {#each events as event}
						    {#await event.author.fetchProfile() then profile}
						      <Avatar stacked src={profile?.image} />
						    {/await}
						  {/each}
						</div>
					      {/if}
					    {/await} -->
				<p
					class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
				>
					<EventContent ndk={$ndk} {event} />
				</p>
			</Card>
		{/if}
	{/await}
</main>
