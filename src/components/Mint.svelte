<script>
  import { _ } from "../services/i18n";
  import {
    PUBLIC_MINT,
    PUBLIC_LNBITS_WALLET_API,
    PUBLIC_MINT_WALLET_API_KEY,
  } from "$env/static/public";
  import { onMount } from "svelte";
  let balance;
  onMount(async () => {
    const response = await fetch(PUBLIC_LNBITS_WALLET_API, {
      method: "GET",
      headers: {
        "x-api-key": PUBLIC_MINT_WALLET_API_KEY,
      },
    });
    const data = await response.json();
    balance = Math.trunc(data.balance / 1000);
  });
</script>

<div
  class="relative mt-6 p-2 sm:p-4 md:p-6 h-30 gap-4 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-h-28 max-w-lg text-title-bright hover:text-highlight"
>
  <a href={PUBLIC_MINT}>
    <h2 class="ml mt text-xl">{$_("mint.title")}</h2>
    <i class="absolute top-3 right-3 fa-solid fa-up-right-from-square"></i>
    <div class="text-muted-bright my-2">
      {#if balance}
        <p class="ml-3">
          {$_("mint.balance")}<span
            class="hover:text-highlight hover:underline hover:decoration-dashed"
            >{balance}</span
          >
          {$_("sats")}
        </p>
      {:else}
        <p class="animate-pulse">{$_("loading")}</p>
      {/if}
    </div>
  </a>
</div>
