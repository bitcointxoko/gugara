<script lang="ts">
	import type { PageData } from './$types';

	import { _ } from '../../../services/i18n';
	import products from '$lib/data/products.json';
	import { Button, Card, Carousel } from 'flowbite-svelte';

	export let data: PageData;

	const product = products.find((product) => product.choiceKey === data.product);

	export const images = [
		{
			alt: 'socks1',
			src: 'https://cdn.satellite.earth/6f5f418ac2dc5b67b00d2c19a829bfd77d5eda23240d87f9b35d4489e7cdec85.webp',
			title: 'socks1'
		},
		{
			alt: 'socks2',
			src: 'https://cdn.satellite.earth/5ff548bdbf323bd56846775a5f86c9892197e867b3e4f545602d55217bcb293f.webp',
			title: 'socks2'
		},
		{
			alt: 'socks3',
			src: 'https://cdn.satellite.earth/e8424ad97d9c2e852b5438fdc5dac6d38a0091d672da173fc96f1c75870ceabd.webp',
			title: 'socks3'
		},
		{
			alt: 'socks4',
			src: 'https://cdn.satellite.earth/f1b028dfc2365f81a8fa3c3d3169bc3b532a61b759949279f66776363b3fcc66.webp',
			title: 'socks4'
		}
	];
</script>

<main class="my-4 flex flex-row flex-wrap items-start justify-center">
	{#if product}
		<!-- <div class="max-w-4xl">
			<Carousel images={product.images} let:Controls>
				<Controls />
			</Carousel>
		</div> -->
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
	{/if}
</main>
