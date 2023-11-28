<script>
    import { _ } from '../services/i18n';
	import { PUBLIC_GROUPCHAT } from "$env/static/public";
</script>

<div class="my-6 p-2 sm:p-4 md:p-6 h-30 gap-4 rounded-lg border border-solid hover:border-amber-500 bg-sky-400 hover:bg-sky-600 text-black font-mono max-w-lg max-h-28 text-center align-center">
    <a href={PUBLIC_GROUPCHAT}>
        <h2 class="text-2xl">{$_('simplex.title')}</h2>
        <p class="p-2">{$_('simplex.description')}</p>
    </a>
</div>