<script lang="ts">
	import ndk, { user } from '$lib/stores/ndk';
	import { Spinner } from 'flowbite-svelte';

	const eventsPromise = ndk.fetchEvent({
		kinds: [3],
		authors: [user.pubkey]
	});
</script>

{#await eventsPromise}
	<Spinner size={4} />
{:then event}
	{event?.tags.length}
{/await}
