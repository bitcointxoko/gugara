<script lang="ts">
	import { _ } from "../../services/i18n";
	import { Card } from "flowbite-svelte";
	import BuyButton from "./BuyButton.svelte";

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

<Card img={product.images[0].src} padding="none">
	<div class="mt-2 px-5 pb-5">
		<h5
			class="text-xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
		>
			<a href="/shop/{product.choiceKey}">
				{product.name}
			</a>
		</h5>
		<p
			class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
		>
			{product.description}
		</p>
		<div class="flex flex-wrap items-center justify-between">
			<span
				class="mr-auto text-3xl font-bold text-gray-900 dark:text-white"
			>
				{#if product.currency === "sats"}
					<div class="flex">
						{product.price}
						<svg
							data-v-52a72b4a=""
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-8 align-bottom"
							><path
								fill-rule="evenodd"
								d="M12.75 18.5V21h-1.5v-2.5h1.5zM17 16.75H7v-1.5h10v1.5zM17 12.75H7v-1.5h10v1.5zM17 8.75H7v-1.5h10v1.5zM12.75 3v2.5h-1.5V3h1.5z"
								clip-rule="evenodd"
							></path></svg
						>
					</div>
				{:else}
					{product.price}
					{product.currency}
				{/if}
			</span>
			<BuyButton {product} />
		</div>
	</div>
</Card>
