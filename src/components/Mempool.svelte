<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_MEMPOOL_TIP } from "$env/static/public";
  import { onMount } from "svelte";
  let blockHeight;
  onMount(async () => {
    const response = await fetch(PUBLIC_MEMPOOL_TIP);
    const data = await response.json();
    blockHeight = data;
  });
</script>

<div>
  {#if blockHeight}
    <h1 class="tech text-3xl font-mono text-highlight hover:text-gray-100">
      {blockHeight}
    </h1>
  {:else}
    <h1 class="tech text-3xl font-mono text-highlight animate-pulse">
      {$_("loading")}
    </h1>
  {/if}
</div>
