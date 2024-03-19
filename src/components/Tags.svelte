<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import { PUBLIC_NOSTR_LONG_FORM_CLIENT } from '$env/static/public';

	export let tags: string[] | string[][] = [];
	const isNostr = Array.isArray(tags[0]) && tags[0][0] === `t`;
</script>

<div class="mb-2 flex flex-wrap gap-2 font-mono">
	{#each tags as tag, i}
		<Badge href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}t/{tag[1]}" color="dark">
			#{isNostr ? tag[1] : tag}
		</Badge>
		{#if tags[i + 1]}
			<span class="text-muted-bright"> </span>
		{/if}
	{/each}
</div>
