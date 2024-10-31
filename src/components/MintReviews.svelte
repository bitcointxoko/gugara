<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { Avatar, Card } from "flowbite-svelte";
    import MintRating from "./MintRating.svelte";
    import ndk from "$lib/stores/ndk";
    import type { NDKEventStore, ExtendedBaseType } from "@nostr-dev-kit/ndk-svelte";
    import type { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";

    export let pubkey: string | undefined;

    let filter: NDKFilter = {
        kinds: [38000 as number],
        "#a": [`38172:cashu-mint-pubkey:${pubkey}`],
    };

    let reviews: NDKEventStore<ExtendedBaseType<NDKEvent>> = $ndk.storeSubscribe(filter, {
        closeOnEose: true,
    });

    onMount(() => {
        reviews = $ndk.storeSubscribe(filter, { closeOnEose: true });
    });

    onDestroy(() => reviews?.unsubscribe());
    $: totalReviews = $reviews.length;

    function testRegex(str: string) {
        const regex = /^\[.\/5\]$/;
        const result = regex.test(str);
        return result;
    }
</script>

{#if totalReviews > 0}
    {#each $reviews as review}
        {#if review.content}
            {#await review.author.fetchProfile() then profile}
                <Card
                    size="lg"
                    class="bg-warm-50"
                    href={`https://next.nostrudel.ninja/#/l/${review.encode()}`}
                >
                    <div class="flex gap-2 items-center mb-2 font-bold">
                        <Avatar src={profile?.image} />
                        <div>
                            <span class="ml-1">
                                {profile?.displayName ? profile?.displayName : profile?.name}
                            </span>
                            <MintRating {review} />
                        </div>
                    </div>
                    {testRegex(review.content.slice(0, 5))
                        ? review.content.slice(5)
                        : review.content}
                </Card>
            {/await}
        {/if}
    {/each}
{/if}
