<script lang="ts">
	import { PUBLIC_PUBKEY } from '$env/static/public';
	import ndk from '$lib/stores/ndk';
	import { Spinner } from 'flowbite-svelte';
</script>

{#await $ndk.fetchEvent({ kinds: [3], authors: [PUBLIC_PUBKEY] })}
	<Spinner size={4} />
{:then event}
	{event?.tags.length}
{/await}
