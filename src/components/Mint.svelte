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
		<Tooltip class="w-48 text-balance" triggeredBy="[id='tooltip']"
			>Un mint es como un banco para ecash, que ofrece transacciones instantáneas y privadas por
			cero comisiones.
		</Tooltip>
	</div>

	{#if balance}
		<div class="flex items-center">
			<p class="mr-auto font-normal text-gray-700 dark:text-gray-400">
				{$_('mint.balance')}<span>{balance}</span>
				{$_('sats')}
			</p>
			<Button href={PUBLIC_NUTSTASH}>
				{$_('mint.nutstash')}
				<ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
			</Button>
		</div>
	{:else}
		<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-gray-300"></div>
	{/if}
	<a href={PUBLIC_MINT} class="mt-3 inline-flex items-center text-primary-600 hover:underline">
		mint
		<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
	</a>
</Card>
