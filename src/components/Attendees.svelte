<script lang="ts">
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { Avatar } from 'flowbite-svelte';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import Popover from './user/Popover.svelte';

	export let event: NDKEvent;
</script>

{#await $ndk.fetchEvents( { kinds: [31925], '#a': [`${event.kind}:${event.author.pubkey}:${event.dTag}`], '#l': ['accepted'] } ) then responses}
	{#if responses.size > 0}
		<h5 class="font-semibold">{$_('meetup.attendees')}</h5>
		<div class="flex px-4 pb-2">
			{#each responses as response, i}
				{#await $ndk.getUser(response.author).fetchProfile() then profile}
					<Avatar id="popover-{i}" stacked src={profile?.image} />
					<Popover user={response.author} {i} />
				{/await}
			{/each}
		</div>
	{/if}
{/await}
