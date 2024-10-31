<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import ndk from "$lib/stores/ndk";
    import currentUser from "$lib/stores/currentUser";
    import { NDKEvent, NDKNip07Signer } from "@nostr-dev-kit/ndk";
    import type { NDKEventStore, ExtendedBaseType } from "@nostr-dev-kit/ndk-svelte";
    import HeartOutline from "flowbite-svelte-icons/HeartOutline.svelte";
    import HeartSolid from "flowbite-svelte-icons/HeartSolid.svelte";
    import toast from "svelte-french-toast";
    import { Button, RadioButton } from "flowbite-svelte";
    import Modal from "../Modal.svelte";
    import SigninAlert from "../signin/SigninAlert.svelte";

    export let event: NDKEvent;

    let reacts: NDKEventStore<ExtendedBaseType<NDKEvent>>;

    let alreadyReacted: boolean = false;
    let showReactModal: boolean = false;

    const openModal = () => {
        showReactModal = true;
    };
    const closeModal = () => {
        showReactModal = false;
    };

    let emoji: string = "";

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
                    showReactModal = false;
                    toast.success("Reacted!", {
                        position: "bottom-right",
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    reacts = $ndk.storeSubscribe({ kinds: [7], "#e": [event.id] }, { closeOnEose: true });

    onMount(() => {
        reacts = $ndk.storeSubscribe({ kinds: [7], "#e": [event.id] }, { closeOnEose: true });
    });

    $: $reacts.map((event) => {
        alreadyReacted = event.author.pubkey === $currentUser?.pubkey;
    });

    $: totalReacts = $reacts.length;

    onDestroy(() => reacts?.unsubscribe());
</script>

<button on:click={openModal} class="flex gap-1 items-center">
    {#if !alreadyReacted}
        <HeartOutline />
    {:else if alreadyReacted}
        <HeartSolid />
    {/if}
    {#if totalReacts > 0}
        {totalReacts}
    {/if}
</button>

<Modal isOpen={showReactModal} onClose={closeModal} title="React">
    <div class="flex flex-col gap-2 panel-contents">
        {#if $currentUser}
            <form on:submit|preventDefault={reactToComment} class="grid gap-2">
                <div class="flex gap-2 items-center">
                    <RadioButton
                        value={"👍"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
                        👍
                    </RadioButton>
                    <RadioButton
                        value={"👎"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
                        👎
                    </RadioButton>
                    <RadioButton
                        value={"🤙"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
                        🤙
                    </RadioButton>
                    <RadioButton
                        value={"💜"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
                        💜
                    </RadioButton>
                    <RadioButton
                        value={"😍"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
                        😍
                    </RadioButton>
                    <RadioButton
                        value={"🔥"}
                        bind:group={emoji}
                        color="alternative"
                        class="border-none"
                    >
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
