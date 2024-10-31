<script lang="ts">
    import { _ } from "../services/i18n";
    import ndk from "$lib/stores/ndk";
    import type { NDKFilter } from "@nostr-dev-kit/ndk";
    import { PUBLIC_PUBKEY } from "$env/static/public";
    import { Card } from "flowbite-svelte";
    import ArrowUpRightFromSquareOutline from "flowbite-svelte-icons/ArrowUpRightFromSquareOutline.svelte";
    import ShareNodesOutline from "flowbite-svelte-icons/ShareNodesOutline.svelte";
    import MeetupInfo from "./MeetupInfo.svelte";
    import ShareModal from "./actions/ShareModal.svelte";

    let filter: NDKFilter = {
        kinds: [31923 as number],
        authors: [PUBLIC_PUBKEY],
    };

    let showShareModal: boolean = false;

    const openModal = () => {
        showShareModal = true;
    };

    const toggleShareModal = () => {
        showShareModal = !showShareModal;
    };
</script>

<Card class="bg-warm-50">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {$_("meetup.title")}
    </h5>
    <div>
        {#await $ndk.fetchEvent(filter)}
            <div class="mt-2 w-32 h-2 bg-gray-300 rounded-full animate-pulse"></div>
            <div class="mt-2 w-48 h-2 bg-gray-300 rounded-full animate-pulse"></div>
            <div class="mt-2 w-32 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        {:then event}
            {#if event}
                <MeetupInfo {event} />
                <ShareModal {event} {showShareModal} />
            {/if}
        {/await}
        <div class="flex gap-3 mt-3 text-primary-600">
            <a href="/calendar" class="inline-flex items-center hover:underline">
                {$_("calendar.title").toLowerCase()}
                <ArrowUpRightFromSquareOutline class="w-3 h-3 ms-1" />
            </a>
            <button class="inline-flex items-center hover:underline" on:click={toggleShareModal}>
                {$_("share.share").toLowerCase()}
                <ShareNodesOutline class="w-3 h-3 ms-1" />
            </button>
        </div>
    </div>
</Card>
