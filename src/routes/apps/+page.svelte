<script lang="ts">
	import { _ } from '../../services/i18n';
	import ndk, { user } from '$lib/stores/ndk';
	import LinkList from '../../components/LinkList.svelte';

	const eventsPromise = ndk.fetchEvents({
		kinds: [30003],
		authors: [user.pubkey]
	});
</script>

<main class=" mx-4 my-4 flex flex-row flex-wrap items-start justify-center">
	{#await eventsPromise then events}
		{#each Array.from(events).slice(0, 1) as event}
			<LinkList tags={event.tags.filter((v) => v[0] === 'r')} />
		{/each}
	{/await}
</main>
