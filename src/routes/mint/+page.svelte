<script lang="ts">
    import ndk from "$lib/stores/ndk";
    import { onMount, onDestroy } from "svelte";
    import type { NDKEventStore, ExtendedBaseType } from "@nostr-dev-kit/ndk-svelte";
    import { Card } from "flowbite-svelte";
    import type { NDKEvent } from "@nostr-dev-kit/ndk";
    import MintReviewsTotal from "../../components/MintReviewsTotal.svelte";
    import MintListMint from "../../components/MintListMint.svelte";

    let mints: NDKEventStore<ExtendedBaseType<NDKEvent>>;

    mints = $ndk.storeSubscribe(
        {
            kinds: [38172 as number],
        },
        { closeOnEose: true }
    );

    onMount(() => {
        mints = $ndk.storeSubscribe(
            {
                kinds: [38172 as number],
            },
            { closeOnEose: true }
        );
    });

    onDestroy(() => mints?.unsubscribe());

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
    <title>Cashu Mints - Bitcoin Txoko</title>
    <meta name="description" content={`Discover Cashu Mints over Nostr.`} />
</svelte:head>
<main class="flex flex-row flex-wrap justify-center items-start my-4 mx-4">
    <section class="gap-6">
        <MintListMint />
        {#each $mints as mint}
            {#await fetchMintInfo(`${mint.tagValue("u")}/v1/info`) then info}
                {#if info.name}
                    <div class="my-4 space-y-4">
                        <Card size="lg" class="bg-warm-50">
                            <h5
                                class="mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <a href="/mint/{mint.encode()}">
                                    {info.name}
                                </a>
                            </h5>
                            <div class="flex items-center">
                                <div class="flex flex-col gap-1">
                                    {#if info.pubkey}
                                        <p
                                            class="overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400 max-h-[125px]"
                                        >
                                            {`${info.pubkey.slice(0, 6)}...${info.pubkey.slice(-6)}`}
                                        </p>
                                    {/if}
                                    <p
                                        class="text-base font-normal leading-tight text-gray-700 dark:text-gray-400"
                                    >
                                        {info.version}
                                    </p>
                                </div>
                                <MintReviewsTotal pubkey={mint.dTag} />
                            </div>
                            <div class="flex items-center mb-3">
                                {#if mint.tagValue("n")}
                                    <p
                                        class="overflow-hidden mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400 max-h-[125px]"
                                    >
                                        {mint.tagValue("n")}
                                    </p>
                                {/if}
                            </div></Card
                        >
                    </div>
                {/if}
            {/await}
        {/each}
    </section>
</main>
