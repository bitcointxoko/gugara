<script lang="ts">
	import { _ } from '../../services/i18n';
	import { onMount } from 'svelte';
	import { Card, Label, Input } from 'flowbite-svelte';

	let euro = 1;
	let sats: number;
	let price: number;
	let moscowTime: number;

	const priceAPI = 'https://api.kraken.com/0/public/Ticker?pair=XBT';
	const priceCurrency = 'EUR';

	onMount(async () => {
		const response = await fetch(priceAPI + priceCurrency);
		const data = await response.json();
		price = Math.trunc(data.result.XXBTZEUR.l[0]);
		moscowTime = Math.floor(100000000 / price);
		sats = euro * moscowTime;
	});

	function euroToSats() {
		return (sats = euro * moscowTime);
	}

	function satsToEuro() {
		return (euro = Number((sats / moscowTime).toFixed(2)));
	}
</script>

<div class="mx-4 flex flex-col items-center gap-4 py-6">
	<Card class="bg-warm-50">
		<Label>{$_('convert.price')}</Label>
		<Input disabled bind:value={price} />

		<div class="mt-4 grid grid-cols-2">
			<div class="mr-4">
				<Label>{$_('convert.euro')}</Label>
				<Input bind:value={euro} on:change={euroToSats}></Input>
			</div>

			<div>
				<Label>{$_('convert.sats')}</Label>
				<Input bind:value={sats} on:change={satsToEuro}></Input>
			</div>
		</div>
	</Card>
</div>
