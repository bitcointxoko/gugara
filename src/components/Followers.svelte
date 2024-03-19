<script lang="ts">
	import ndk, { user } from '$lib/stores/ndk';
	import { Spinner } from 'flowbite-svelte';

	const followersPromise = ndk.fetchEvents({
		kinds: [3],
		'#p': [user.pubkey]
	});
</script>

{#await followersPromise}
	<Spinner size={4} />
{:then eventSet}
	{eventSet.size}+
{/await}
