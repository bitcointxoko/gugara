<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ndk from '$lib/stores/ndk';
	import currentUser from '$lib/stores/currentUser';
	import { NDKEvent, NDKNip07Signer } from '@nostr-dev-kit/ndk';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { HeartOutline, HeartSolid } from 'flowbite-svelte-icons';
	import toast from 'svelte-french-toast';
	import { Button, Modal, RadioButton } from 'flowbite-svelte';
	import SigninAlert from '../signin/SigninAlert.svelte';

	export let event: NDKEvent;

	let reacts: NDKEventStore<ExtendedBaseType<NDKEvent>>;

	let alreadyReacted: boolean = false;
	let modalOpen: boolean = false;

	let emoji: string = '';

	function reactToComment() {
		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}

			event
				.react(emoji)
				// .react('+') // only allow reacting with '+' for now
				.then(() => {
					alreadyReacted = true;
					modalOpen = false;
					toast.success('Reacted!', {
						position: 'bottom-right'
					});
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}

	reacts = $ndk.storeSubscribe({ kinds: [7], '#e': [event.id] }, { closeOnEose: true });

	onMount(() => {
		reacts = $ndk.storeSubscribe({ kinds: [7], '#e': [event.id] }, { closeOnEose: true });
	});

	$: $reacts.map((event) => {
		alreadyReacted = event.author.pubkey === $currentUser?.pubkey;
	});

	$: totalReacts = $reacts.length;

	onDestroy(() => reacts?.unsubscribe());
</script>

<button on:click={() => (modalOpen = !modalOpen)} class="flex items-center gap-1">
	{#if !alreadyReacted}
		<HeartOutline />
	{:else if alreadyReacted}
		<HeartSolid />
	{/if}
	{#if totalReacts > 0}
		{totalReacts}
	{/if}
</button>

<Modal title="React" bind:open={modalOpen} class="z-30" size="xs">
	<div class="panel-contents flex flex-col gap-2">
		{#if $currentUser}
			<form on:submit|preventDefault={reactToComment} class="grid gap-2">
				<div class="flex items-center gap-2">
					<RadioButton value={'👍'} bind:group={emoji} color="alternative" class="border-none">
						👍
					</RadioButton>
					<RadioButton value={'👎'} bind:group={emoji} color="alternative" class="border-none">
						👎
					</RadioButton>
					<RadioButton value={'🤙'} bind:group={emoji} color="alternative" class="border-none">
						🤙
					</RadioButton>
					<RadioButton value={'💜'} bind:group={emoji} color="alternative" class="border-none">
						💜
					</RadioButton>
					<RadioButton value={'😍'} bind:group={emoji} color="alternative" class="border-none">
						😍
					</RadioButton>
					<RadioButton value={'🔥'} bind:group={emoji} color="alternative" class="border-none">
						🔥
					</RadioButton>
				</div>
				<Button type="submit">React</Button>
			</form>
		{:else}
			<SigninAlert />
		{/if}
	</div>
</Modal>
