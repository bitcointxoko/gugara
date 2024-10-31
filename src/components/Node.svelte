<script lang="ts">
    import { Card, Tooltip } from "flowbite-svelte";
    import ArrowUpRightFromSquareOutline from "flowbite-svelte-icons/ArrowUpRightFromSquareOutline.svelte";
    import QuestionCircleOutline from "flowbite-svelte-icons/QuestionCircleOutline.svelte";
    import { _ } from "../services/i18n";
    import {
        PUBLIC_LIGHTNING_EXPLORER,
        PUBLIC_MEMPOOL_LIGHTNING,
        PUBLIC_NODE_PUBKEY,
    } from "$env/static/public";
    import { onMount } from "svelte";

    let node;

    onMount(async () => {
        const response = await fetch(PUBLIC_MEMPOOL_LIGHTNING + PUBLIC_NODE_PUBKEY);
        const data = await response.json();
        node = data;
    });
</script>

<Card class="bg-warm-50">
    {#if node}
        <div class="flex align-center">
            <h5
                class="mr-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
                {node.alias}
            </h5>
            <QuestionCircleOutline id="node" />
            <Tooltip class="w-48 text-balance" triggeredBy="[id='node']"
                >{$_("nodes.tooltip")}</Tooltip
            >
        </div>
        <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
            {$_("nodes.channels")}{node.active_channel_count}
        </p>
        <div class="flex font-normal leading-tight text-gray-700 dark:text-gray-400">
            {$_("nodes.capacity")}{node.capacity / 1000000}M
            <svg
                data-v-52a72b4a=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5"
                ><path d="M7 7.91h10M12 5.455V3M12 21v-2.455M7 12h10M7 16.09h10"></path></svg
            >
        </div>
        <a
            href="{PUBLIC_LIGHTNING_EXPLORER}{PUBLIC_NODE_PUBKEY}"
            class="inline-flex items-center mt-3 hover:underline text-primary-600"
        >
            amboss.space
            <ArrowUpRightFromSquareOutline class="w-3 h-3 ms-2.5" />
        </a>
    {:else}
        <div class="mb-2.5 w-24 h-2.5 bg-emerald-500 rounded-full"></div>
        <div class="mt-2 w-32 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div class="mt-2 w-32 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
    {/if}
</Card>
