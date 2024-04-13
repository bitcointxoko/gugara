<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { PUBLIC_PUBKEY } from '$env/static/public';

	let followers: NDKEventStore<ExtendedBaseType<NDKEvent>>;
	let totalFollowers = 0;

	const filter = {
		kinds: [3],
		'#p': [PUBLIC_PUBKEY]
	};

	followers = $ndk.storeSubscribe(filter, { closeOnEose: true });

	onMount(() => {
		followers = $ndk.storeSubscribe(filter, { closeOnEose: true });
	});

	$: totalFollowers = $followers.length;

	onDestroy(() => followers?.unsubscribe());
</script>

{totalFollowers}
