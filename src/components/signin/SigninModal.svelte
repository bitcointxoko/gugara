<script lang="ts">
    import { _ } from "svelte-i18n";
    import { Button, Label, Input, Spinner } from "flowbite-svelte";
    import Modal from "../Modal.svelte";
    import ArrowLeftToBracketOutline from "flowbite-svelte-icons/ArrowLeftToBracketOutline.svelte";
    import { SigninMethod, signin } from "$lib/utils/auth";
    import ndk, { bunkerNdk } from "$lib/stores/ndk";

    export let signinVisible: boolean = false;
    const closeModal = () => {
        signinVisible = false;
    };

    let attemptingConnection: boolean = false;
    let token: string = "";

    async function connectNsecBunker() {
        attemptingConnection = true;
        const user = await signin($ndk, $bunkerNdk!, SigninMethod.Nip46, token);
        if (user) {
            signinVisible = false;
        }
        attemptingConnection = false;
    }
</script>

{#if signinVisible}
    <!-- <Modal -->
    <!--     title={$_("signin.signin")} -->
    <!--     bind:open={signinVisible} -->
    <!--     class="bg-warm-50" -->
    <!--     classHeader="bg-warm-50" -->
    <!-- > -->
    <Modal isOpen={signinVisible} onClose={closeModal} title={$_("signin.signin")}>
        <h5 class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {$_("signin.extension")}
        </h5>
        <p>{$_("signin.extensionHelp")}</p>
        <Button
            on:click={() =>
                signin($ndk, undefined, SigninMethod.Nip07).then(() => (signinVisible = false))}
            on:touchend={() =>
                signin($ndk, undefined, SigninMethod.Nip07).then(() => (signinVisible = false))}
            class="w-full text-center"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
        >
            {$_("signin.signin")}<ArrowLeftToBracketOutline class="ml-1" />
        </Button>
        <h5 class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {$_("signin.nostrConnect")}
        </h5>
        <p>
            {$_("signin.nostrConnectHelp")}
        </p>
        <form
            class="flex flex-col gap-6 items-start my-6 w-full"
            on:submit|preventDefault={connectNsecBunker}
        >
            <Label class="w-full">
                {$_("signin.token")}
                <Input
                    type="text"
                    bind:value={token}
                    name="token"
                    label="token"
                    placeholder="npub1...#secret"
                />
            </Label>
            <Button type="submit" class="w-full text-center">
                {$_("signin.submit")}
                {#if attemptingConnection}
                    <Spinner size={4} class="ml-2" />
                {/if}
            </Button>
        </form>
    </Modal>
{/if}
