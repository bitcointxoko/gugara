<script lang="ts">
	import About from "../components/About.svelte";
	import Apps from "../components/Apps.svelte";
	import Meetups from "../components/Meetups.svelte";
	import Mint from "../components/Mint.svelte";
	import Node from "../components/Node.svelte";
	import Onboarding from "../components/Onboarding.svelte";
</script>

<svelte:head>
	<title>Bitcoin Txoko</title>
	<meta
		name="description"
		content={`Bitcoin Txoko, a bitcoin and nostr community in Euskadi.`}
	/>
</svelte:head>
<main>
	<div class="flex flex-col gap-4 items-center mx-4 mt-4 mb-4">
		<About />
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Meetups />
			<Mint />
			<Node />
			<Apps />
		</div>
		<Onboarding />
	</div>
</main>
