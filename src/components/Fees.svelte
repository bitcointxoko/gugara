<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_MEMPOOL_FEES } from "$env/static/public";
  import { onMount } from "svelte";
  let fees;
  onMount(async () => {
    const response = await fetch(PUBLIC_MEMPOOL_FEES);
    const data = await response.json();
    fees = data;
  });
</script>

<div>
  {#if fees}
    <div class="tech text-sm font-mono text-highlight">
      <span class="hover:text-red-400">{fees.fastestFee}</span>/<span
        class="hover:text-yellow-400">{fees.halfHourFee}</span
      >/<span class="hover:text-green-400">{fees.hourFee}</span>
      {$_("sats")}/vB
    </div>
  {:else}
    <h3 class="tech text-m font-mono text-highlight animate-pulse">
      <div class="mt-2 w-32 h-2 bg-button-bright rounded-full"></div>
    </h3>
  {/if}
</div>
