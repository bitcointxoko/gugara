<script lang="ts">
    import { Card, Tooltip } from "flowbite-svelte";
    import CopyButton from "./CopyButton.svelte";
    import Modal from "./Modal.svelte";
    import FileCopyOutline from "flowbite-svelte-icons/FileCopyOutline.svelte";
    import QuestionCircleOutline from "flowbite-svelte-icons/QuestionCircleOutline.svelte";
    import { _ } from "../services/i18n";
    import { PUBLIC_LNBITS_WALLET_API, PUBLIC_MINT_WALLET_API_KEY } from "$env/static/public";
    import { onMount } from "svelte";
    let balance: number;
    const oldApiKey: string = "e640a6cf45c841c88b7feb5f1ce7a9d6";
    let retiredBalance: number;

    let showMintModal: boolean = false;

    const openModal = () => {
        showMintModal = true;
    };
    const closeModal = () => {
        showMintModal = false;
    };

    onMount(async () => {
        const response = await fetch(PUBLIC_LNBITS_WALLET_API, {
            method: "GET",
            headers: {
                "x-api-key": PUBLIC_MINT_WALLET_API_KEY,
            },
        });
        const data = await response.json();
        balance = Math.trunc(data.balance / 1000);
    });
    onMount(async () => {
        const response = await fetch(PUBLIC_LNBITS_WALLET_API, {
            method: "GET",
            headers: {
                "x-api-key": oldApiKey,
            },
        });
        const data = await response.json();
        retiredBalance = Math.trunc(data.balance / 1000);
    });
</script>

<Card class="flex flex-col justify-between bg-warm-50">
    <div class="flex align-center">
        <h5 class="mr-auto mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {$_("mint.title")}
        </h5>
        <QuestionCircleOutline id="tooltip" />
        <Tooltip class="w-48 text-balance" triggeredBy="[id='tooltip']"
            >{$_("mint.tooltip")}</Tooltip
        >
    </div>

    {#if balance}
        <div class="flex items-center">
            <div
                class="flex pr-2 mr-auto font-normal text-gray-700 align-bottom dark:text-gray-400"
            >
                {$_("mint.balance")}: {balance}
                <svg
                    data-v-52a72b4a=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-5"
                    ><path d="M7 7.91h10M12 5.455V3M12 21v-2.455M7 12h10M7 16.09h10"></path></svg
                >
            </div>
            <!--  <Button href={PUBLIC_NUTSTASH}>
                {$_("mint.nutstash")}
                <ArrowRightOutline class="w-3.5 h-3.5 text-white ms-2" />
            </Button> -->
        </div>
        <div
            class="flex pr-2 mt-2 mr-auto font-normal text-gray-500 align-bottom dark:text-gray-600"
        >
            {$_("mint.obsolete")}: {retiredBalance}
            <svg
                data-v-52a72b4a=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5"
                ><path d="M7 7.91h10M12 5.455V3M12 21v-2.455M7 12h10M7 16.09h10"></path></svg
            >
        </div>
    {:else}
        <div class="mt-2 w-32 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div class="mt-2 w-32 h-2 bg-gray-300 rounded-full animate-pulse"></div>
    {/if}
    <div>
        <button on:click={openModal} class="flex items-center text-primary-600"
            >mint url
            <FileCopyOutline class="w-3 h-3 ms-2.5" />
        </button>
        <Modal isOpen={showMintModal} onClose={closeModal} title="Mint url">
            <div class="flex gap-2 items-center">
                <div class="mr-auto bg-gray-300 rounded-md">
                    <p class="p-3 text-gray-800">mint.bitcointxoko.com</p>
                </div>
                <CopyButton textToCopy={"mint.bitcointxoko.com"} />
            </div>
        </Modal>
    </div>
</Card>
