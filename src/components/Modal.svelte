<script lang="ts">
    export let isOpen = false;
    export let onClose = () => {};
    export let title: string = "";

    const closeModal = () => {
        onClose();
    };

    // Close modal when clicking outside of it
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };
</script>

{#if isOpen}
    <div role="backdrop" class="backdrop" on:click={handleBackdropClick}>
        <div class="text-gray-900 dark:text-white dark:bg-gray-800 bg-warm-50 modal">
            <div class="modal-header">
                <h3 class="text-xl font-bold">{title}</h3>
                <button class="ml-auto" on:click={closeModal}>&times;</button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        padding: 2rem;
        border-radius: 8px;
        max-width: 500px;
    }

    .modal-header,
    .modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-body {
        margin: 1rem 0;
    }
</style>
