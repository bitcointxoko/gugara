<script lang="ts">
	import { _ } from "svelte-i18n";
	import { onMount, onDestroy, beforeUpdate } from "svelte";
	import { afterNavigate } from "$app/navigation";
	import { Zap } from "lucide-svelte";
	import ndk from "$lib/stores/ndk";
	import currentUser from "$lib/stores/currentUser";
	import {
		NDKEvent,
		NDKNip07Signer,
		zapInvoiceFromEvent,
		type NDKFilter,
	} from "@nostr-dev-kit/ndk";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";
	import { Button, Label, Input, Modal } from "flowbite-svelte";
	import toast from "svelte-french-toast";
	import SigninAlert from "../signin/SigninAlert.svelte";

	export let event: NDKEvent;

	let zaps: NDKEventStore<ExtendedBaseType<NDKEvent>>;
	let totalZaps: number = 0;

	let alreadyZapped: boolean = false;
	let modalOpen: boolean = false;

	let amount: number = 21;
	let comment: string | undefined;

	async function zap() {
		const bc = await import("@getalby/bitcoin-connect");

		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}
			let zapRequest = await event?.zap(amount * 1000, comment);

			if (!zapRequest) {
				console.log("No payment request");
				return;
			}

			try {
				const webln = await bc.requestProvider();
				webln.sendPayment(zapRequest)
					.then(() => {
						toast.success("Zap successful!", {
							position: "bottom-right",
						});
						modalOpen = false;
						alreadyZapped = true;
					})
					.catch((err: any) => {
						console.error(err);
						toast.error("Zap failed. \n" + err, {
							position: "bottom-right",
						});
					});
			} catch (error: any) {
				console.log(error);
				toast.error("Zap failed. \n" + error, {
					position: "bottom-right",
				});
			}
		}
	}

	let filter: NDKFilter = { kinds: [9735], "#e": [event.id] };

	if (event.kind === 30023)
		filter = {
			kinds: [9735],
			"#a": [`30023:${event.author.pubkey}:${event.dTag}`],
		};

	zaps = $ndk.storeSubscribe(filter);

	onMount(() => {
		zaps = $ndk.storeSubscribe(filter);
	});

	onDestroy(() => zaps?.unsubscribe());
	beforeUpdate(() => zaps?.unsubscribe());

	afterNavigate(() => {
		alreadyZapped = false;
		zaps = $ndk.storeSubscribe(filter);
	});

	$: totalZaps = $zaps
		.map((event) => {
			const zapInvoice = zapInvoiceFromEvent(event as NDKEvent);
			// console.log(zapInvoice);
			alreadyZapped = zapInvoice?.zappee === $currentUser?.pubkey;
			return (zapInvoice?.amount || 0) / 1000;
		})
		.reduce((subTotal, value) => subTotal + value, 0);
</script>

<button on:click={() => (modalOpen = true)} class="flex items-center">
	{#if !alreadyZapped}
		<Zap
			strokeWidth="2"
			class="mr-1 h-4 w-4 stroke-yellow-500 hover:fill-yellow-500 lg:h-5 lg:w-4"
		/>
	{:else if alreadyZapped}
		<Zap
			strokeWidth="2"
			class="mr-1 h-4 w-4 fill-yellow-500 stroke-yellow-500 hover:fill-yellow-500 lg:h-5 lg:w-4"
		/>
	{/if}
	{#if totalZaps > 0}
		{totalZaps}
	{/if}
</button>
<Modal title={$_("zap.title")} bind:open={modalOpen} class="z-30" size="xs">
	<div class="panel-contents flex flex-col gap-2">
		{#if $currentUser}
			<form on:submit|preventDefault={zap} class="grid gap-2">
				<Label for="amount"
					>{$_("zap.amount")}
					<Input
						type="text"
						bind:value={amount}
						name="amount"
						required
					/>
				</Label>
				<Label for="comment"
					>{$_("zap.comment")}
					<Input
						type="text"
						bind:value={comment}
						name="comment"
						placeholder={$_("zap.commentPlaceholder")}
					/>
				</Label>
				<Button type="submit" class="mt-1 w-full">
					<Zap
						strokeWidth="2"
						class="mr-2 h-4 w-4 fill-yellow-500 stroke-yellow-500 lg:h-5 lg:w-5"
					/>
					{$_("zap.action")}
				</Button>
			</form>
		{:else}
			<SigninAlert />
		{/if}
	</div>
</Modal>
