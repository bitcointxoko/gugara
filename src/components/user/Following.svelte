<script lang="ts">
	import type { NDKUser } from '@nostr-dev-kit/ndk';
	import { Spinner } from 'flowbite-svelte';

	export let user: NDKUser;

	let follows = user.follows();
</script>

{#await follows}
	<Spinner size={4} />
{:then users}
	{users.size}
{/await}
