<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { _ } from "svelte-i18n";
    import ndk from "$lib/stores/ndk";
    import type { NDKEventStore, ExtendedBaseType } from "@nostr-dev-kit/ndk-svelte";
    import type { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";
    import { Rating } from "flowbite-svelte";

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

    $: totalRatings = $reviews
        .filter((event: NDKEvent) => testRegex(event.content.slice(0, 5)))
        .map((event) => parseInt(event.content[1]));

    $: averageRating =
        totalRatings.length > 0
            ? totalRatings.reduce((subtotal, value) => subtotal + value, 0) / totalRatings.length
            : 0;
</script>

{#if totalReviews > 0}
    <div class="ml-auto text-right">
        <Rating total={5} size={25} rating={averageRating} />
        <span class="mr-1 text-base">
            {totalRatings.length}
            {totalRatings.length == 1 ? $_("mint.rating") : $_("mint.r")}
        </span>
    </div>
{/if}
