<script lang="ts">
	import { _ } from '../services/i18n';
	import { Navbar, NavBrand, DarkMode } from 'flowbite-svelte';
	import { Drawer, Button, CloseButton } from 'flowbite-svelte';
	import { BarsSolid } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	import Sidebar from './Sidebar.svelte';

	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<Navbar let:NavContainer color="default">
	<NavContainer class="px-5 py-2">
		<div class="text-center">
			<Button color="none" on:click={() => (hidden1 = false)}><BarsSolid /></Button>
		</div>
		<NavBrand href="/">
			<img src="/logo.webp" class="me-3 h-10 sm:h-12" alt="Bitcoin Txoko Logo" />
		</NavBrand>
		<DarkMode />
	</NavContainer>
</Navbar>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
	<div class="flex flex-col items-center">
		<CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
	</div>
	<Sidebar />
</Drawer>
