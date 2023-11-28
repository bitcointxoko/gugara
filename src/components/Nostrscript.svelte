<script>
    import { _ } from '../services/i18n';
	import { PUBLIC_NOSTRSCRIPT } from "$env/static/public";
</script>

<div class="p-2 sm:p-4 md:p-6 my-6 gap-4 rounded-lg border border-solid bg-purple-500 hover:border-amber-500 hover:text-yellow-300 hover:bg-purple-700 text-white font-mono max-w-lg">
    <a href={PUBLIC_NOSTRSCRIPT}>
        <div><h2 class="text-xl">{$_('damus.title')}</h2></div>
        <div class="mt-2">
            <p>{$_('damus.description')}</p>
        </div>
    </a>
</div>