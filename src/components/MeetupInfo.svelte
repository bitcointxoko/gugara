<script lang="ts">
    import { _ } from "../services/i18n";
    import { Button } from "flowbite-svelte";
    import type { NDKEvent } from "@nostr-dev-kit/ndk";
    import RsvpModal from "./rsvp/RsvpModal.svelte";

    export let event: NDKEvent;

    let showRsvpModal: boolean = false;

    function toggleRsvpModal() {
        showRsvpModal = !showRsvpModal;
    }

    function canRsvp(event: NDKEvent) {
        const date = (new Date().getTime() / 1000).toFixed(0);
        if (Number(event.tagValue("end")) > Number(date)) return true;
        else return false;
    }

    export function getTagValue(
        tags: string[][],
        name: string,
        position: number = 0
    ): string | null {
        const found = tags.find((v) => v[0] === name);
        if (!found) return null;
        const [, ...values] = found;
        return values[position];
    }
</script>

{#if event}
    <div class="flex items-start w-full">
        <div class="mr-auto divide-y divide-dashed">
            <div class="mx-1 text-sm text-muted-bright">
                🗓️ {new Date(Number(event.tagValue("start")) * 1000).toLocaleDateString(
                    $_("locale.long"),
                    {
                        weekday: "short",
                        day: "numeric",
                        month: "2-digit",
                        year: "2-digit",
                    }
                )}
            </div>
            <div class="mx-1 text-sm text-muted-bright">
                🕓 {new Date(Number(event.tagValue("start")) * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}-{new Date(Number(event.tagValue("end")) * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
            <div class="mx-1 mb-3 text-sm text-muted-bright max-w-52 text-wrap text-balance">
                {#if event.tagValue("location")}
                    📍 {getTagValue(event.tags, "location", 1)
                        ? getTagValue(event.tags, "location", 1)
                        : getTagValue(event.tags, "location")}
                {:else}
                    📍 <div class="w-32 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                {/if}
            </div>
        </div>
        <div class="flex flex-col gap-2 mr-2">
            <!-- <Button on:click={() => toggleRsvpModal()}>
				{$_('meetup.rsvp')}
			</Button> -->
            <!-- Disabled for dev mode -->

            {#if canRsvp(event)}
                <Button on:click={toggleRsvpModal}>
                    {$_("meetup.rsvp")}
                </Button>
            {:else}
                <Button disabled>{$_("meetup.ended")}</Button>
            {/if}
        </div>
    </div>
    <RsvpModal {event} {showRsvpModal} />
{/if}
