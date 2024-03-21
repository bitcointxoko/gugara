<script>
	import { _ } from '../services/i18n';
	import { Button } from 'flowbite-svelte';
	import { PUBLIC_GITHUB } from '$env/static/public';
	import { MessagesSolid, GithubSolid } from 'flowbite-svelte-icons';
</script>

<section class="mx-6 mb-2 flex justify-center gap-4 pt-4">
	<Button href="https://simplex.bitcointxoko.com" color="blue" size="lg"
		><MessagesSolid class="mr-1" size="lg" />{$_('footer.simplex')}</Button
	>
	<Button href={PUBLIC_GITHUB} color="dark" size="lg">
		<GithubSolid class="mr-1" size="lg" />{$_('footer.github')}
	</Button>
</section>
<section class="mx-6 mb-6 flex justify-center gap-4 p-2 text-sm dark:text-gray-400">
	<p>{$_('footer.made')}</p>
</section>
