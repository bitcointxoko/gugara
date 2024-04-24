<script lang="ts">
	import { _ } from "svelte-i18n";
	import SigninModal from "./SigninModal.svelte";
	import { Button } from "flowbite-svelte";
	import { ArrowLeftToBracketOutline } from "flowbite-svelte-icons";

	let signinVisible: boolean = false;

	function toggleSigninMenu() {
		signinVisible = !signinVisible;
	}
</script>

<Button on:click={toggleSigninMenu}>
	{$_("signin.signin")}
	<ArrowLeftToBracketOutline class="ml-1" />
</Button>
<SigninModal {signinVisible} />
