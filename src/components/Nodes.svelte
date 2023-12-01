<script>
  import { _ } from "../services/i18n";
  import {
    PUBLIC_LIGHTNING_EXPLORER,
    PUBLIC_MEMPOOL_LIGHTNING,
    PUBLIC_NODE_PUBKEY_1,
    PUBLIC_NODE_PUBKEY_2,
  } from "$env/static/public";
  import { onMount } from "svelte";

  let node1;
  let node2;

  onMount(async () => {
    const response = await fetch(
      PUBLIC_MEMPOOL_LIGHTNING + PUBLIC_NODE_PUBKEY_1
    );
    const data = await response.json();
    node1 = data;
  });

  onMount(async () => {
    const response = await fetch(
      PUBLIC_MEMPOOL_LIGHTNING + PUBLIC_NODE_PUBKEY_2
    );
    const data = await response.json();
    node2 = data;
  });
</script>

<div
  class="mt-6 h-30 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-w-lg max-h-58"
>
  <h2 class="ml mt px-2 sm:px-4 md:px-6 py-2 text-xl text-title-bright">
    {$_("nodes.title")}
  </h2>
  <div class="grid grid-cols-2 align-bottom">
    <a href="{PUBLIC_LIGHTNING_EXPLORER}{PUBLIC_NODE_PUBKEY_1}">
      {#if node1}
        <div
          class="p-10 text-emerald-500 bg-amber-400 hover:bg-amber-600 hover:text-emerald-300 hover:drop-shadow-lg shadow rounded-l-lg align-bottom"
        >
          <h3 class="font-bold">{node1.alias}</h3>
          <p>{$_("nodes.channels")}{node1.active_channel_count}</p>
          <p>{$_("nodes.capacity")}{node1.capacity} {$_("sats")}</p>
        </div>
      {:else}
        <h3
          class="p-10 font-bold text-emerald-500 bg-amber-400 hover:bg-amber-600 hover:text-emerald-300 hover:drop-shadow-lg shadow rounded-l-lg align-bottom animate-pulse"
        >
          {$_("loading")}
        </h3>
      {/if}
    </a>
    <a href="{PUBLIC_LIGHTNING_EXPLORER}{PUBLIC_NODE_PUBKEY_2}">
      {#if node2}
        <div
          class="p-10 text-amber-300 bg-emerald-500 hover:bg-emerald-600 hover:text-amber-300 hover:drop-shadow-lg shadow rounded-r-lg align-bottom"
        >
          <h3 class="font-bold">{node2.alias}</h3>
          <p>{$_("nodes.channels")}{node2.active_channel_count}</p>
          <p>{$_("nodes.capacity")}{node2.capacity} {$_("sats")}</p>
        </div>
      {:else}
        <h3
          class="p-10 font-bold text-amber-300 bg-emerald-400 hover:bg-emerald-600 hover:text-amber-300 hover:drop-shadow-lg shadow rounded-r-lg align-bottom animate-pulse"
        >
          {$_("loading")}
        </h3>
      {/if}
    </a>
  </div>
</div>
