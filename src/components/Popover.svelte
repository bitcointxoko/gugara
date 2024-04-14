<script lang="ts">
	import { _ } from '../services/i18n';
	import { Popover, Button, Avatar, Skeleton } from 'flowbite-svelte';
	import Following from './Following.svelte';
	import Followers from './Followers.svelte';
	import type { NDKUser } from '@nostr-dev-kit/ndk';
	import FollowButton from './actions/FollowButton.svelte';

	export let user: NDKUser;
	export let i: number = 0;
</script>

<Popover
	triggeredBy="#popover-{i}"
	class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
>
	{#await user.fetchProfile()}
		<Skeleton size="sm" class="my-8" />
	{:then profile}
		<div class="p-3">
			<div class="mb-2 flex items-center justify-between">
				<Avatar src={profile?.image} alt="profile pic" />
				<FollowButton {user} />
			</div>
			<div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
				<a href="/u/{user.npub}">{profile?.name}</a>
			</div>
			<div class="mb-3 text-sm font-normal">
				<a href="/u/{user.npub}" class="hover:underline">{profile?.nip05}</a>
			</div>
			<div class="text-sm font-light">
				{#if profile?.about}
					{profile?.about}
				{/if}
			</div>
			<!-- <ul class="flex text-sm font-light">
				<li class="me-2">
					<a href="/" class="hover:underline">
						<span class="font-semibold text-gray-900 dark:text-white"><Following {user} /></span>
						<span>{$_('user.following')}</span>
					</a>
				</li>
				<li>
					<a href="/" class="hover:underline">
						<span class="font-semibold text-gray-900 dark:text-white"><Followers {user} /></span>
						<span>{$_('user.followers')}</span>
					</a>
				</li>
			</ul> -->
		</div>
	{/await}
</Popover>
