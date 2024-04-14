<script lang="ts">
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { PUBLIC_PUBKEY } from '$env/static/public';
	import { Card, Skeleton } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import MeetupInfo from './MeetupInfo.svelte';
</script>

<Card>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{$_('meetup.title')}
	</h5>
	<div>
		{#await $ndk.fetchEvent({ kinds: [31923], authors: [PUBLIC_PUBKEY] })}
			<Skeleton size="sm" />
		{:then event}
			{#if event}
				<MeetupInfo {event} />
				<!-- <Attendees {event} /> -->
			{/if}
		{/await}
		<a href="/calendar" class="mt-3 inline-flex items-center text-primary-600 hover:underline">
			{$_('calendar.title').toLowerCase()}
			<ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
		</a>
	</div>
</Card>
