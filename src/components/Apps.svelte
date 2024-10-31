<script lang="ts">
    import { Card } from "flowbite-svelte";
    import ArrowUpRightFromSquareOutline from "flowbite-svelte-icons/ArrowUpRightFromSquareOutline.svelte";
    import { _ } from "../services/i18n";
</script>

<Card href="/apps" class="bg-warm-50 flex flex-col justify-between">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {$_("apps.title")}
    </h5>
    <div class="flex items-center">
        <p class="mr-auto font-normal leading-tight text-gray-700 dark:text-gray-400">
            {$_("apps.tooltip")}
        </p>
    </div>
    <a href="/apps" class="text-primary-600 mt-3 inline-flex items-center hover:underline">
        {$_("apps.title").toLowerCase()}
        <ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
    </a>
</Card>
