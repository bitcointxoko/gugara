<script lang="ts">
	import { Card, Tooltip } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline, QuestionCircleOutline } from 'flowbite-svelte-icons';
	import { _ } from '../services/i18n';
	import {
		PUBLIC_LIGHTNING_EXPLORER,
		PUBLIC_MEMPOOL_LIGHTNING,
		PUBLIC_NODE_PUBKEY
	} from '$env/static/public';
	import { onMount } from 'svelte';

	let node;

	onMount(async () => {
		const response = await fetch(PUBLIC_MEMPOOL_LIGHTNING + PUBLIC_NODE_PUBKEY);
		const data = await response.json();
		node = data;
	});
</script>

<Card>
	{#if node}
		<div class="align-center flex">
			<h5 class="mb-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{node.alias}
			</h5>
			<QuestionCircleOutline id="node" />
			<Tooltip class="w-48 text-balance" triggeredBy="[id='node']"
				>Este es nuestro nodo en la red Lightning
			</Tooltip>
		</div>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			{$_('nodes.channels')}{node.active_channel_count}
		</p>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			{$_('nodes.capacity')}{node.capacity / 1000000}M
			{$_('sats')}
		</p>
		<a
			href="{PUBLIC_LIGHTNING_EXPLORER}{PUBLIC_NODE_PUBKEY}"
			class="mt-3 inline-flex items-center text-primary-600 hover:underline"
		>
			amboss.space
			<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
		</a>
	{:else}
		<div class="mb-2.5 h-2.5 w-24 rounded-full bg-emerald-500"></div>
		<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
		<div class="mt-2 h-2 w-32 animate-pulse rounded-full bg-emerald-500"></div>
	{/if}
</Card>
