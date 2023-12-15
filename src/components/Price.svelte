<script>
  import { _ } from "../services/i18n";
  import {
    PUBLIC_PRICE_API,
    PUBLIC_PRICE_CURRENCY,
    PUBLIC_PRICE_CURRENCY_SYMBOL,
  } from "$env/static/public";
  import { onMount } from "svelte";
  let price;
  let moscowTime;
  onMount(async () => {
    const response = await fetch(PUBLIC_PRICE_API + PUBLIC_PRICE_CURRENCY);
    const data = await response.json();
    price = Math.trunc(data.result.XXBTZEUR.l[0]);
    moscowTime = Math.floor(100000000 / price);
    // console.log(price)
  });
</script>

{#if price}
  <div class="tech text-sm font-mono text-highlight">
    <a href="https://sats.trading/">
      <p class="hover:text-gray-200">
        {moscowTime}
        {$_("sats")}/{PUBLIC_PRICE_CURRENCY_SYMBOL}
      </p>
    </a>
  </div>
{:else}
  <h1 class="tech text-sm font-mono text-highlight animate-pulse">
    <div class="mt-2 w-32 h-2 bg-button-bright rounded-full"></div>
  </h1>
{/if}
