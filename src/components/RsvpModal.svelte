<script lang="ts">
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import currentUser from '$lib/stores/currentUser';
	import { getTagValues } from '$lib/util';
	import { PUBLIC_PUBKEY } from '$env/static/public';
	import { Card, Button, Skeleton, Modal, RadioButton, Input, Label } from 'flowbite-svelte';
	import {
		ArrowRightSolid,
		ArrowUpRightFromSquareOutline,
		PapperPlaneSolid
	} from 'flowbite-svelte-icons';
	import { NDKEvent, NDKNip07Signer } from '@nostr-dev-kit/ndk';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	import SigninSelector from './signin/SigninSelector.svelte';

	export let event: NDKEvent;
	export let modalVisible = false;

	// function toggleRsvpModal() {
	// 	modalVisible = !modalVisible;
	// }

	let response: string;

	let L = ['L', 'status'];
	let l = [];
	let a = [];

	const rsvp = async (event: NDKEvent) => {
		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}

			const kind31925 = new NDKEvent($ndk);
			kind31925.kind = 31925;

			l = ['l', response as string, 'status'];
			a = ['a', `${event.kind}:${event.author.pubkey}:${event.dTag}`];

			kind31925.tags = [a, L, l];

			await kind31925
				.publish()
				.then(() => {
					toast.success('Published', {
						position: 'bottom-right'
					});
					goto(`/e/${kind31925.encode()}`);
				})
				.catch((error) =>
					toast.error('Not published\n' + error, {
						position: 'bottom-right'
					})
				);
		}
	};
	// import { init as initNostrLogin } from 'nostr-login';
	// import { launch as launchNostrLoginDialog } from 'nostr-login';

	// import { bunkerNdk } from '$lib/stores/ndk';
	// import { SigninMethod, signin } from '$lib/utils/auth';

	// let token: string = '';

	// on your signup button click
	// async function onSignupClick() {
	// 	const nostrLogin = await import('nostr-login');
	// 	const login = await nostrLogin.init({ darkMode: false });
	// 	// launch signup screen
	// 	nostrLogin.launch({
	// 		startScreen: 'signup'
	// 	});

	// 	const user = await signin($ndk, $bunkerNdk!, SigninMethod.Nip46, token);
	// }
</script>

<Modal title="RSVP" bind:open={modalVisible}>
	{#if $currentUser}
		<h5 class="mr-auto mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{$_('meetup.rsvp')}
		</h5>
		<p>{$_('meetup.areYouComing')}</p>
		<form on:submit|preventDefault={() => rsvp(event)} class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-3 gap-2">
				<RadioButton bind:group={response} value="accepted" color="green"
					>{$_('meetup.yes')}</RadioButton
				>
				<RadioButton bind:group={response} value="tentative" color="alternative"
					>{$_('meetup.maybe')}</RadioButton
				>
				<RadioButton bind:group={response} value="declined" color="red"
					>{$_('meetup.no')}</RadioButton
				>
			</div>
			<Button type="submit">{$_('meetup.confirm')} <PapperPlaneSolid class="ml-1 h-3 w-3" /></Button
			>
		</form>
	{:else}
		<div class="flex flex-col gap-2">
			<h5 class="mr-auto mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{$_('signin.signin')}
			</h5>
			<p>{$_('signin.haveKeys')}</p>
			<SigninSelector />
		</div>
		<div class="flex flex-col gap-2">
			<h5 class="mr-auto mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{$_('signin.signup')}
			</h5>
			<p>{$_('signin.signupHelp')}</p>
			<Button href="https://flockstr.com/event/{event.encode()}"
				>{$_('signin.flockstr')} <ArrowRightSolid class="ml-1" /></Button
			>
		</div>
	{/if}
</Modal>
