<script lang="ts">
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { Popover, Button, Avatar, Skeleton } from 'flowbite-svelte';
	// import { user } from '$lib/stores/ndk';
	import Following from './Following.svelte';
	import Followers from './Followers.svelte';
	import { PUBLIC_PUBKEY } from '$env/static/public';
	// const userProfilePromise = user.fetchProfile();
</script>

<Popover
	triggeredBy="#popover"
	class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
>
	{#await $ndk.getUser({ pubkey: PUBLIC_PUBKEY }).fetchProfile()}
		<Skeleton size="sm" class="my-8" />
	{:then profile}
		<div class="p-3">
			<div class="mb-2 flex items-center justify-between">
				<Avatar src={profile?.image} alt="profile pic" />
				<Button href="/profile" size="xs">{$_('profile.follow')}</Button>
			</div>
			<div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
				<a href="/profile">{profile?.displayName}</a>
			</div>
			<div class="mb-3 text-sm font-normal">
				<a href="/profile" class="hover:underline">{profile?.nip05}</a>
			</div>
			<div class="mb-4 text-sm font-light">
				{#if profile?.about}
					{profile?.about}
				{:else}
					Comunidad de Bitcoin y Nostr en Euskadi.
				{/if}
			</div>
			<ul class="flex text-sm font-light">
				<li class="me-2">
					<a href="/" class="hover:underline">
						<span class="font-semibold text-gray-900 dark:text-white"><Following /></span>
						<span>{$_('profile.following')}</span>
					</a>
				</li>
				<li>
					<a href="/" class="hover:underline">
						<span class="font-semibold text-gray-900 dark:text-white"><Followers /></span>
						<span>{$_('profile.followers')}</span>
					</a>
				</li>
			</ul>
		</div>
	{/await}
</Popover>
