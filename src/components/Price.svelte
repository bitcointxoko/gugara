<script>
    import { _ } from '../services/i18n';
	import { PUBLIC_PRICE_API, PUBLIC_PRICE_CURRENCY, PUBLIC_PRICE_CURRENCY_SYMBOL } from '$env/static/public';
    import { onMount } from 'svelte';
    let price;
    let moscowTime;
    onMount(async () => {
        const response = await fetch(
            PUBLIC_PRICE_API + PUBLIC_PRICE_CURRENCY);
        const data = await response.json();
        price = Math.trunc(data.result.XXBTZEUR.l[0]);
        moscowTime = Math.floor(100000000 / price);
        // console.log(price)
    });

</script>

{#if price}
<div class="text-sm font-mono text-amber-500">
    <a href="https://sats.trading/">
        <p class="hover:text-gray-200">{moscowTime} {$_('sats')}/{PUBLIC_PRICE_CURRENCY_SYMBOL}</p>
    </a>
</div>

{:else}
    <h1 class="text-sm font-mono text-amber-500">{$_('loading')}</h1>
{/if}