<script lang="ts">
    // Define props
    export let text: string = "Default Banner Text";
    export let backgroundColor: string = "#007bff";
    export let textColor: string = "white";

    let visible: boolean = true;
    function closeBanner() {
        visible = false;
    }
</script>

{#if visible}
    <div
        class="flex absolute justify-center items-center p-3 w-full align-center banner"
        style="background-color: {backgroundColor}; color: {textColor};"
    >
        <p class="mx-auto">{text}</p>
        <button class="relative right-0" on:click={closeBanner}>×</button>
    </div>
{/if}

<style>
    .banner {
        box-sizing: border-box;
    }

    p {
        margin: 0;
    }

    button {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
    }
</style>
