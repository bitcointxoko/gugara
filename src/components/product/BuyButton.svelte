<script lang="ts">
	import { _ } from "../../services/i18n";
	import { Button } from "flowbite-svelte";

	export let product: {
		name: string;
		images: {
			alt: string;
			src: string;
		}[];
		description: string;
		action: string;
		choiceKey: string;
		price: string;
		currency: string;
		disabled: boolean;
	};
</script>

<form method="POST" action={product.action}>
	{#if product.disabled}
		<Button disabled>
			{$_("shop.soldOut")}
		</Button>
	{:else}
		<Button value={product.choiceKey}>
			<button name="choiceKey" value={product.choiceKey}>
				{$_("shop.buy")}
			</button>
		</Button>
	{/if}
</form>
