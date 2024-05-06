<script lang="ts">
	import type { PageData } from "./$types";
	import { _ } from "../../../services/i18n";
	import products from "$lib/data/products.json";
	import { Gallery } from "flowbite-svelte";
	import BuyButton from "../../../components/product/BuyButton.svelte";

	export let data: PageData;

	const product = products.find(
		(product) => product.choiceKey === data.product
	);
</script>

<svelte:head>
	<title>{product?.name} - Bitcoin Txoko</title>
	<meta name="description" content={`${product?.description}`} />
</svelte:head>
<main class="my-4 flex flex-row flex-wrap items-start justify-center">
	{#if product}
		<div class="max-w-4xl">
			<div class="mt-4 px-5 pb-5">
				<h5
					class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
				>
					{product.name}
				</h5>
				<p
					class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
				>
					{product.description}
				</p>
				<div class="flex items-center justify-between">
					<span
						class="text-3xl font-bold text-gray-900 dark:text-white"
					>
						{#if product.currency === "sats"}
							<div class="flex">
								{product.price}
								<svg
									data-v-52a72b4a=""
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="h-8"
									><path
										fill-rule="evenodd"
										d="M12.75 18.5V21h-1.5v-2.5h1.5zM17 16.75H7v-1.5h10v1.5zM17 12.75H7v-1.5h10v1.5zM17 8.75H7v-1.5h10v1.5zM12.75 3v2.5h-1.5V3h1.5z"
										clip-rule="evenodd"
									></path></svg
								>
							</div>
						{:else}
							{product.price}{product.currency}
						{/if}
					</span>
					<BuyButton {product} />
				</div>
			</div>
			<Gallery
				items={product.images}
				class="grid-cols-1 gap-2 px-4 md:grid-cols-2 lg:grid-cols-3"
			/>
		</div>
	{/if}
</main>
