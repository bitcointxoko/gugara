<script lang="ts">
	import { _ } from '../../services/i18n';
	import products from '$lib/data/products.json';
	import { Button, Card } from 'flowbite-svelte';
</script>

<main class="my-4 flex flex-row flex-wrap items-start justify-center">
	<section class="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each products as product}
			<Card img={product.images[0].src} padding="none">
				<div class="mt-2 px-5 pb-5">
					<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{product.name}
					</h5>
					<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
						{product.description}
					</p>
					<div class="flex items-center justify-between">
						<span class="text-3xl font-bold text-gray-900 dark:text-white">
							{product.price}
							{product.currency}
						</span>
						<Button color="alternative" href="/shop/{product.choiceKey}">
							<button name="details"> Detalles </button>
						</Button>
						<form method="POST" action={product.action}>
							<Button>
								<button name="choiceKey" value={product.choiceKey}>
									{$_('shop.buy')}
								</button>
							</Button>
						</form>
					</div>
				</div>
			</Card>
		{/each}
	</section>
</main>
