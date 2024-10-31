<script lang="ts">
    import type { PageData } from "./$types";
    import { _ } from "../../../services/i18n";
    import CopyButton from "../../../components/CopyButton.svelte";
    import { Card, CardPlaceholder } from "flowbite-svelte";
    import ndk from "$lib/stores/ndk";
    import MintReviews from "../../../components/MintReviews.svelte";
    import MintReviewsTotal from "../../../components/MintReviewsTotal.svelte";
    import MintAddReview from "../../../components/MintAddReview.svelte";

    export let data: PageData;

    async function fetchMintInfo(url: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
</script>

<svelte:head>
    {#await $ndk.fetchEvent(data.event) then event}
        {#if event}
            {#await fetchMintInfo(`${event.tagValue("u")}/v1/info`) then mint}
                <title>{mint.name}</title>
                <meta name="description" content={mint.description} />
            {/await}
        {/if}
    {/await}
</svelte:head>
<main class="flex flex-col gap-4 items-center my-4 mx-4">
    {#await $ndk.fetchEvent(data.event)}
        <CardPlaceholder size="xxl" />
    {:then event}
        {#if event}
            {#await fetchMintInfo(`${event.tagValue("u")}/v1/info`) then mint}
                <Card size="lg" class="bg-warm-50">
                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {mint.name}
                    </h5>
                    <div class="flex items-center mb-3">
                        <div class="flex flex-col gap-1">
                            {#if mint.pubkey}
                                <p
                                    class="text-base font-normal leading-tight text-gray-700 dark:text-gray-400"
                                >
                                    {mint.pubkey.slice(0, 6)}...{mint.pubkey.slice(-6)}
                                </p>
                            {/if}
                            <p
                                class="text-base font-normal leading-tight text-gray-700 dark:text-gray-400"
                            >
                                {mint.version}
                            </p>
                        </div>
                        <MintReviewsTotal pubkey={event.dTag} />
                    </div>
                    <div
                        class="flex gap-2 items-center mb-3 w-full font-normal leading-tight text-gray-700 dark:text-gray-400"
                    >
                        <input
                            class="p-3 w-full h-12 bg-gray-200 rounded-lg dark:bg-cool-50"
                            placeholder={event.tagValue("u")}
                            disabled
                        />
                        <CopyButton textToCopy={event.tagValue("u")} />
                    </div>
                    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
                        {#if mint.description}
                            {mint.description_long ? mint.description_long : mint.description}
                        {:else}
                            {$_("mint.noDescription")}
                        {/if}
                    </p>
                    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
                        Nuts: {event.tagValue("nuts")}
                    </p>
                    {#if mint.contact}
                        {#each mint.contact as contact}
                            {#if contact.info || contact[1]}
                                <p
                                    class="mb-3 font-normal leading-tight text-gray-700 break-words dark:text-gray-400 text-wrap"
                                >
                                    {contact.method ? contact.method : contact[0]}: {contact.info
                                        ? contact.info
                                        : contact[1]}
                                </p>
                            {/if}
                        {/each}
                    {/if}
                </Card>
                <MintAddReview mintPubkey={mint.pubkey} {event} />
                <MintReviews pubkey={event.dTag} />
            {/await}
        {:else}
            {$_("mint.eventNotFound")}
        {/if}
    {/await}
</main>
