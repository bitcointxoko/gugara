<script>
    import { _ } from '../services/i18n';
	import { PUBLIC_NEW_WALLET } from "$env/static/public";
</script>

<div class="p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-amber-500 bg-amber-500 hover:bg-amber-600 text-black font-mono max-w-lg max-h-28 text-center align-center">
    <a href={PUBLIC_NEW_WALLET}>
        <div>
            <h2 class="text-2xl">{$_('wallet.title')}</h2>
            <p class="p-2">{$_('wallet.description')}</p>
        </div>
    </a>
</div>