<script>
	import { PUBLIC_LOGO } from "$env/static/public";
	import Fees from "./Fees.svelte";
    import Mempool from "./Mempool.svelte";
	import Price from "./Price.svelte";
	import Time from "./Time.svelte";
</script>

<header class="relative py-6 mb-6 gap-3 items-center justify-between rounded-full">
    <div class="flex items-center pl-4 font-mono text-lg font-bold text-gray-200">
        <img src={PUBLIC_LOGO} class="h-12 mr-3" alt="logo" />
        <div class="sm:flex items-center gap-4 hidden">
            <Time/>
        </div>
    </div>
    <a href="https://mempool.space/">
        <div class="absolute top-0 right-0 px-6 py-6 text-right">
            <Mempool/>
            <Fees/>
            <Price/>
        </div>
    </a>
</header>