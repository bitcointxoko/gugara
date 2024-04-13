<script lang="ts">
	import { InfoCircleSolid } from "flowbite-svelte-icons";
	import SigninSelector from "./SigninSelector.svelte";
</script>

<div class="flex items-center gap-3">
	<InfoCircleSolid slot="icon" class="h-4 w-4" />
	<div class="text-lg font-medium">
		<SigninSelector /> to continue
	</div>
</div>
