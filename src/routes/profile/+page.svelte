<script lang="ts">
	import { Card, Button, Avatar, Skeleton } from 'flowbite-svelte';

	import { PUBLIC_NOSTR_SHORT_NOTE_CLIENT, PUBLIC_PUBKEY } from '$env/static/public';
	import ndk, { user } from '$lib/stores/ndk';

	import Following from '../../components/Following.svelte';
	import Followers from '../../components/Followers.svelte';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';

	const userProfilePromise = user.fetchProfile();
	const notesPromise = ndk.fetchEvents({
		kinds: [1],
		authors: [user.pubkey]
	});
</script>

<div class="mx-4 flex flex-col items-center gap-4 pt-6">
	{#await userProfilePromise then profile}
		<Card padding="md">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src={profile?.image} alt="profile pic" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{profile?.displayName}
				</h5>
				<div class="mb-3 text-sm font-normal">
					<a href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{PUBLIC_PUBKEY}" class="hover:underline"
						>{profile?.nip05}</a
					>
				</div>
				<div class="mb-4 text-sm font-light">
					{#if profile?.about}
						<span class="text-sm text-gray-500 dark:text-gray-400">{profile?.about}</span>
					{:else}
						<span class="text-sm text-gray-500 dark:text-gray-400"
							>Comunidad de Bitcoin y Nostr en Euskadi.</span
						>
					{/if}
				</div>
				<ul class="flex text-sm font-light">
					<li class="me-2">
						<a href="/" class="hover:underline">
							<span class="font-semibold text-gray-900 dark:text-white"><Following /></span>
							<span>Siguiendo</span>
						</a>
					</li>
					<li>
						<a href="/" class="hover:underline">
							<span class="font-semibold text-gray-900 dark:text-white"><Followers /></span>
							<span>Seguidores</span>
						</a>
					</li>
				</ul>
				<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
					<Button href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{PUBLIC_PUBKEY}">Abrir en cliente</Button>
					<Button
						href="https://nostrudel.bitcointxoko.com/#/u/{PUBLIC_PUBKEY}"
						color="light"
						class="dark:text-white">noStrudel</Button
					>
				</div>
			</div>
		</Card>
	{/await}

	{#await notesPromise then notes}
		{#each Array.from(notes) as note}
			<Card horizontal padding="xl" size="md">
				<p class="mb-3 overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400">
					<EventContent {ndk} event={note} />
				</p>
			</Card>
		{/each}
	{/await}
</div>
