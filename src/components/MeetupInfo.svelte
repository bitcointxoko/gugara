<script lang="ts">
	import { _ } from "../services/i18n";
	import { Button } from "flowbite-svelte";
	import type { NDKEvent } from "@nostr-dev-kit/ndk";
	import RsvpModal from "./rsvp/RsvpModal.svelte";

	export let event: NDKEvent;

	let modalVisible = false;

	function toggleRsvpModal() {
		modalVisible = !modalVisible;
	}

	function canRsvp(event: NDKEvent) {
		const date = (new Date().getTime() / 1000).toFixed(0);
		if (Number(event.tagValue("end")) > Number(date)) return true;
		else return false;
	}

	export function getTagValue(
		tags: string[][],
		name: string
	): string | null {
		const found = tags.find((v) => v[0] === name);
		if (!found) return null;
		const [, ...values] = found;
		return values[0];
	}
</script>

{#if event}
	<div class="flex w-full items-start">
		<div class="mr-auto divide-y divide-dashed">
			<div class="text-muted-bright mx-1 text-sm font-light">
				🗓️ {new Date(
					Number(event.tagValue("start")) * 1000
				).toLocaleDateString($_("locale.long"), {
					weekday: "short",
					day: "numeric",
					month: "2-digit",
					year: "2-digit",
				})}
			</div>
			<div class="text-muted-bright mx-1 text-sm font-light">
				🕓 {new Date(
					Number(event.tagValue("start")) * 1000
				).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})}-{new Date(
					Number(event.tagValue("end")) * 1000
				).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</div>
			<div
				class="text-muted-bright mx-1 mb-3 text-sm font-light max-w-52 text-wrap text-balance"
			>
				{#if event.tagValue("location")}
					📍 {getTagValue(event.tags, "location")}
				{:else}
					📍 <div
						class="h-2 w-32 animate-pulse rounded-full bg-gray-300"
					></div>
				{/if}
			</div>
		</div>
		<div class="mr-2">
			<!-- <Button on:click={() => toggleRsvpModal()}>
				{$_('meetup.rsvp')}
			</Button> -->
			<!-- Disabled for dev mode -->
			{#if canRsvp(event)}
				<Button on:click={() => toggleRsvpModal()}>
					{$_("meetup.rsvp")}
				</Button>
			{:else}
				<Button disabled>{$_("meetup.ended")}</Button>
			{/if}
		</div>
	</div>
	<RsvpModal {event} {modalVisible} />
{/if}
