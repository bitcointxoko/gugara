<script lang="ts">
	import type { PageData } from './$types';
	import { _ } from '../../../services/i18n';
	import { onMount, onDestroy } from 'svelte';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import { Avatar, Button, Card, CardPlaceholder } from 'flowbite-svelte';
	import Following from '../../../components/Following.svelte';
	import Followers from '../../../components/Followers.svelte';
	import { EventContent } from '@nostr-dev-kit/ndk-svelte-components';
	import { PUBLIC_NOSTR_SHORT_NOTE_CLIENT } from '$env/static/public';
	import LikeActions from '../../../components/actions/LikeActions.svelte';

	export let data: PageData;

	const user = $ndk.getUser({ npub: data.user });

	let notes: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	notes = $ndk.storeSubscribe({ kinds: [1], authors: [user.pubkey] }, { closeOnEose: true });

	onMount(() => {
		notes = $ndk.storeSubscribe({ kinds: [1], authors: [user.pubkey] }, { closeOnEose: true });
	});

	onDestroy(() => notes?.unsubscribe());
</script>

<svelte:head>
	{#await user.fetchProfile() then profile}
		<title>{profile?.name} - Bitcoin Txoko</title>
		<meta name="description" content={`${user.profile?.name} on Bitcoin Txoko.`} />
	{/await}
</svelte:head>

<div class="mx-4 flex flex-col items-center gap-4 pt-6">
	{#await user.fetchProfile()}
		<CardPlaceholder size="md" />
	{:then profile}
		<Card padding="md">
			<div class="flex flex-col items-center gap-1 pb-4">
				<Avatar size="lg" src={profile?.image} alt="profile pic" />
				<h5 class="text-xl font-medium text-gray-900 dark:text-white">
					{profile?.name}
				</h5>
				<div class="text-sm font-normal">
					<a href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{user.npub}" class="hover:underline">
						{profile?.nip05}
					</a>
				</div>
				<div class="mb-4 w-4/5 text-sm font-light">
					{#if profile?.about}
						<span class="text-sm text-gray-500 dark:text-gray-400">{profile?.about}</span>
					{/if}
				</div>
				<ul class="flex text-sm font-light">
					<li class="me-2">
						<span class="font-semibold text-gray-900 dark:text-white"><Following {user} /></span>
						<span>{$_('user.following')}</span>
					</li>
					<li>
						<span class="font-semibold text-gray-900 dark:text-white"><Followers {user} /></span>
						<span>{$_('user.followers')}</span>
					</li>
				</ul>
				<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
					<Button href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{user.npub}">
						{$_('user.openInClient')}
					</Button>
					<Button
						href="https://nostrudel.bitcointxoko.com/#/u/{user.npub}"
						color="light"
						class="dark:text-white"
						>noStrudel
					</Button>
				</div>
			</div>
		</Card>
	{/await}
	{#each $notes as note}
		<Card padding="lg" size="md" class="flex flex-col">
			<p class="mb-3 overflow-hidden font-normal leading-tight text-gray-700 dark:text-gray-400">
				<EventContent ndk={$ndk} event={note} />
			</p>
			<LikeActions event={note} />
		</Card>
	{/each}
</div>
