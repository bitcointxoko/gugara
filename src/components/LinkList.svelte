<script lang="ts">
    import { Card } from "flowbite-svelte";
    import ArrowUpRightFromSquareOutline from "flowbite-svelte-icons/ArrowUpRightFromSquareOutline.svelte";
    import { _ } from "../services/i18n";

    export let tags: string[] | string[][] = [];
</script>

{#each tags as tag}
    <Card href={tag[1]}>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tag[2]}
        </h5>
        <a href={tag[1]} class="inline-flex items-center mt-3 hover:underline text-primary-600">
            {$_("apps.visit")}
            <ArrowUpRightFromSquareOutline class="w-3 h-3 ms-2.5" />
        </a>
    </Card>
{/each}
