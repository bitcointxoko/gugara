<script>
	import { Button, Modal } from 'flowbite-svelte';
	import Login from './Login.svelte';
	import { NDKEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';

	let formModal = false;

	const rsvpResponse = new NDKEvent(ndk);
	rsvpResponse.kind = 31925;
	rsvpResponse.tags['#l'] = ['accepted', 'status'];
</script>

<Button on:click={() => (formModal = true)}>RSVP</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Are you coming?</h3>
		<Button type="submit" class="w-full1" color="green">Yes</Button>
		<Button type="submit" class="w-full1" color="alternative">Maybe</Button>
		<Button type="submit" class="w-full1" color="red">No</Button>
	</form>
	<Login />
</Modal>
