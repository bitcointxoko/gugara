<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ndk from '$lib/stores/ndk';
	import type { NDKUser } from '@nostr-dev-kit/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';

	export let user: NDKUser;

	let followers: NDKEventStore<ExtendedBaseType<NDKEvent>>;
	let totalFollowers = 0;

	const filter = {
		kinds: [3],
		'#p': [user.pubkey]
	};

	followers = $ndk.storeSubscribe(filter, { closeOnEose: true });

	onMount(() => {
		followers = $ndk.storeSubscribe(filter, { closeOnEose: true });
	});

	$: totalFollowers = $followers.length;

	onDestroy(() => followers?.unsubscribe());
</script>

{totalFollowers}
