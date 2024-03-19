<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import { _ } from '../services/i18n';
</script>

<Card href="/apps" class="flex flex-col justify-between">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apps</h5>
	<div class="flex items-center">
		<p class="mr-auto font-normal leading-tight text-gray-700 dark:text-gray-400">
			Consulta todas las aplicaciones alojadas en Bitcoin Txoko
		</p>
	</div>
	<a href="/apps" class="mt-3 inline-flex items-center text-primary-600 hover:underline">
		apps
		<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
	</a>
</Card>
