<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import { currentUserProfile, login } from '$lib/stores/currentUser';
	let formModal = false;
</script>

{#if !currentUserProfile}
	<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
		Not signed in?
		<Button on:click={() => (formModal = true)}>Login</Button>
		<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
			<form class="flex flex-col space-y-6" action="#">
				<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Login</h3>
				<Button on:click={login} class="w-full1" color="primary">Connect with Extension</Button>
			</form>
		</Modal>
	</div>
{/if}
