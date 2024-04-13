<script lang="ts">
	import { _ } from "svelte-i18n";
	import SigninModal from "./SigninModal.svelte";

	let signinVisible: boolean = false;

	function toggleSigninMenu() {
		signinVisible = !signinVisible;
	}
</script>

<button on:click={toggleSigninMenu} class="underline decoration-dotted">
	{$_("signin.signin")}
</button>
<SigninModal {signinVisible} />
