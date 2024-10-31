<script lang="ts">
    import { _ } from "../../services/i18n";
    import ndk from "$lib/stores/ndk";
    import currentUser from "$lib/stores/currentUser";
    import Modal from "../Modal.svelte";
    import { Button, RadioButton } from "flowbite-svelte";
    import ArrowRightOutline from "flowbite-svelte-icons/ArrowRightOutline.svelte";
    import { NDKEvent } from "@nostr-dev-kit/ndk";
    import toast from "svelte-french-toast";
    import { goto } from "$app/navigation";
    import SigninSelector from "../signin/SigninSelector.svelte";

    export let event: NDKEvent;
    export let showRsvpModal: boolean = false;
    const closeModal = () => {
        showRsvpModal = false;
    };

    let response: string;

    const rsvp = async (event: NDKEvent) => {
        const kind31925 = new NDKEvent($ndk);
        kind31925.kind = 31925;

        kind31925.tags = [
            ["L", "status"],
            ["l", response as string, "status"],
            ["a", `${event.kind}:${event.author.pubkey}:${event.dTag}`],
        ];

        await kind31925
            .publish()
            .then(() => {
                toast.success("Published", {
                    position: "bottom-right",
                });
                goto(`/calendar/${event.encode()}`);
            })
            .catch((error) =>
                toast.error("Not published\n" + error, {
                    position: "bottom-right",
                })
            );
    };
</script>

<!-- <Modal title="RSVP" bind:open={showRsvpModal} class="bg-warm-50" classHeader="bg-warm-50"> -->
<Modal title="RSVP" isOpen={showRsvpModal} onClose={closeModal}>
    {#if $currentUser}
        <!-- <h5
			class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
		>
			{$_("meetup.rsvp")}
		</h5> -->
        <p>{$_("meetup.areYouComing")}</p>
        <form on:submit|preventDefault={() => rsvp(event)} class="flex flex-col gap-4 w-full">
            <div class="grid grid-cols-3 gap-2">
                <RadioButton bind:group={response} value="accepted" color="green"
                    >{$_("meetup.yes")}
                </RadioButton>
                <RadioButton bind:group={response} value="tentative" color="alternative"
                    >{$_("meetup.maybe")}
                </RadioButton>
                <RadioButton bind:group={response} value="declined" color="red"
                    >{$_("meetup.no")}
                </RadioButton>
            </div>
            {#if response}
                <Button color="light" type="submit">{$_("meetup.confirm")}</Button>
            {/if}
        </form>
    {:else}
        <div class="flex flex-col gap-2">
            <h5
                class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
                {$_("signin.signin")}
            </h5>
            <p>{$_("signin.haveKeys")}</p>
            <SigninSelector />
        </div>
        <div class="flex flex-col gap-2">
            <h5
                class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
                {$_("signin.noKeys")}
            </h5>
            <p>{$_("signin.signupHelp")}</p>
            <!-- <Button on:click={onSignupClick}>Sign up</Button> -->
            <Button href="https://flockstr.com/event/{event.encode()}"
                >{$_("signin.flockstr")}
                <ArrowRightOutline class="ml-1" />
            </Button>
        </div>
    {/if}
</Modal>
