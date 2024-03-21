<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import { _ } from '../services/i18n';

	export let tags: string[] | string[][] = [];
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
	{#each tags as tag}
		<Card href={tag[1]}>
			<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{tag[2]}
			</h5>
			<a href={tag[1]} class="mt-3 inline-flex items-center text-primary-600 hover:underline">
				{$_('apps.visit')}
				<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
			</a>
		</Card>
	{/each}
</div>
