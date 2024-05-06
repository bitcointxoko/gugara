<script lang="ts">
	import { NDKEvent } from "@nostr-dev-kit/ndk";
	import { Modal } from "flowbite-svelte";
	import { Button, Input } from "flowbite-svelte";
	import toast from "svelte-french-toast";
	import { FileCopyOutline, FileCopySolid } from "flowbite-svelte-icons";
	import { _ } from "svelte-i18n";

	export let event: NDKEvent;

	export let modalOpen: boolean = false;

	let items = [
		{
			title: $_("share.embed"),
			link: "nostr:",
			description: $_("share.embedHelp"),
			copied: false,
		},
		{
			title: $_("share.njump"),
			link: "https://njump.me/",
			description: $_("share.njumpHelp"),
			copied: false,
		},
		{
			title: $_("share.page"),
			link: "https://gugara.bitcointxoko.com/calendar/",
			description: $_("share.pageHelp"),
			copied: false,
		},
	];
</script>

<Modal bind:open={modalOpen} title={$_("share.share")} class="pb-6">
	<div class="panel-contents flex flex-col gap-2">
		{#each items as item}
			<h5
				class="mr-auto mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{item.title}
			</h5>
			<p>{item.description}</p>
			<div class="flex gap-2">
				<Input
					disabled
					placeholder={item.link + event.encode()}
				/>
				<Button
					on:click={() =>
						navigator.clipboard
							.writeText(item.link + event.encode())
							.then(() => {
								toast.success("Copied!", {
									position: "bottom-right",
								});
								item.copied = !item.copied;
							})}
				>
					{#if !item.copied}
						<FileCopyOutline />
					{:else}
						<FileCopySolid />
					{/if}
				</Button>
			</div>
		{/each}
	</div>
</Modal>
