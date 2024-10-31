<script lang="ts">
    import { NDKEvent } from "@nostr-dev-kit/ndk";
    import { Rating } from "flowbite-svelte";

    export let review: NDKEvent;

    function testRegex(str: string) {
        const regex = /^\[.\/5\]$/;
        const result = regex.test(str);
        return result;
    }
</script>

{#if review.content}
    {#if testRegex(review.content.slice(0, 5))}
        <Rating total={5} size={25} rating={parseInt(review.content[1])} />
    {/if}
{/if}
