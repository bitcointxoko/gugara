<script lang="ts">
    import toast from "svelte-french-toast";
    import FileCopyOutline from "flowbite-svelte-icons/FileCopyOutline.svelte";
    import FileCopySolid from "flowbite-svelte-icons/FileCopySolid.svelte";

    export let textToCopy = ""; // The text that will be copied to the clipboard
    let isCopied: boolean = false;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy).then(() => {
                toast.success("¡Copiado!", {
                    position: "bottom-right",
                });
            });
            isCopied = true;
            setTimeout(() => (isCopied = false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };
</script>

<button
    class="flex p-3.5 text-white rounded-lg cursor-pointer copy-button bg-primary-600"
    on:click={copyToClipboard}
>
    {#if isCopied}
        <FileCopySolid />
    {:else}
        <FileCopyOutline />
    {/if}
</button>
