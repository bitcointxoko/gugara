<script lang="ts">
	import { Button, Card, Tooltip } from 'flowbite-svelte';
	import {
		ArrowRightOutline,
		ArrowUpRightFromSquareOutline,
		QuestionCircleOutline
	} from 'flowbite-svelte-icons';
	import { _ } from '../services/i18n';
	import {
		PUBLIC_MINT,
		PUBLIC_NUTSTASH,
		PUBLIC_LNBITS_WALLET_API,
		PUBLIC_MINT_WALLET_API_KEY
	} from '$env/static/public';
	import { onMount } from 'svelte';
	let balance: number;

	onMount(async () => {
		const response = await fetch(PUBLIC_LNBITS_WALLET_API, {
			method: 'GET',
			headers: {
				'x-api-key': PUBLIC_MINT_WALLET_API_KEY
			}
		});
		const data = await response.json();
		balance = Math.trunc(data.balance / 1000);
	});
</script>

<Card class="flex flex-col justify-between">
	<div class="align-center flex">
		<h5 class="mb-2 mr-auto text-2xl font-bold text-gray-900 dark:text-white">
			{$_('mint.title')}
		</h5>
		<QuestionCircleOutline id="tooltip" />
		<Tooltip class="w-48 text-balance" triggeredBy="[id='tooltip']">{$_('mint.tooltip')}</Tooltip>
	</div>

	{#if balance}
		<div class="flex items-center">
			<div class="mr-auto flex pr-2 align-bottom font-normal text-gray-700 dark:text-gray-400">
				{$_('mint.balance')}: {balance}
				<svg
					data-v-52a72b4a=""
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-5"><path d="M7 7.91h10M12 5.455V3M12 21v-2.455M7 12h10M7 16.09h10"></path></svg
				>
			</div>
			<Button href={PUBLIC_NUTSTASH}>
				{$_('mint.nutstash')}
				<ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
			</Button>
		</div>
	{:else}
		<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-gray-300"></div>
	{/if}
	<a href={PUBLIC_MINT} class="mt-3 inline-flex items-center text-primary-600 hover:underline">
		{$_('mint.title').toLowerCase()}
		<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
	</a>
</Card>
