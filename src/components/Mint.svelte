<script>
    import { _ } from '../services/i18n';
	import { PUBLIC_MINT, PUBLIC_MINT_WALLET_API, PUBLIC_MINT_WALLET_API_KEY } from '$env/static/public';
    import { onMount } from 'svelte';
    let balance;
    onMount(async () => {
        const response = await fetch(
            PUBLIC_MINT_WALLET_API,
            {
                method: 'GET',
                headers: {
                    'x-api-key': PUBLIC_MINT_WALLET_API_KEY,
                },
            },
        );
        const data = await response.json();
        balance = Math.trunc((data.balance) / 1000);
    });
</script>


<div class="relative p-2 sm:p-4 md:p-6 h-30 gap-4 rounded-lg border border-solid hover:border-amber-500 bg-white text-black font-mono max-h-28 max-w-lg">
    <a href={PUBLIC_MINT}>
        <h2 class="text-xl">{$_('mint.title')}</h2><i class="absolute top-3 right-3 hover:text-amber-500 fa-solid fa-up-right-from-square"></i>
        <div class="text-gray-600 mt-2">
            {#if balance}
                <p>{$_('mint.balance')}<span class="hover:text-amber-400 hover:underline hover:decoration-dashed">{balance}</span> {$_('sats')}</p>
            {:else}
                <p>{$_('loading')}</p>
            {/if}
        </div>
    </a>
</div>