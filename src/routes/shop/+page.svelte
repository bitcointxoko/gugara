<script lang="ts">
	import { _ } from "../../services/i18n";
	import products from "$lib/data/products.json";
	import ProductCard from "../../components/product/ProductCard.svelte";
</script>

<svelte:head>
	<title>Shop - Bitcoin Txoko</title>
	<meta
		name="description"
		content={`The shop of Bitcoin Txoko, buy our merch and other fun stuff.`}
	/>
</svelte:head>
<main class="flex flex-row flex-wrap justify-center items-center my-4 mx-4">
	<section
		class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
	>
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</section>
</main>
