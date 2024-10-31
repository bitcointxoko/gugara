<script lang="ts">
    import { NDKEvent } from "@nostr-dev-kit/ndk";
    import { Input } from "flowbite-svelte";
    import Modal from "../Modal.svelte";
    import CopyButton from "../CopyButton.svelte";
    import { _ } from "svelte-i18n";

    export let event: NDKEvent;

    export let showShareModal: boolean = false;

    const closeModal = () => {
        showShareModal = false;
    };

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

<Modal isOpen={showShareModal} onClose={closeModal} title={$_("share.share")}>
    <div class="flex flex-col gap-2 panel-contents">
        {#each items as item}
            <h5
                class="mt-2 mr-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
                {item.title}
            </h5>
            <p>{item.description}</p>
            <div class="flex gap-2">
                <Input disabled placeholder={item.link + event.encode()} />
                <CopyButton textToCopy={item.link + event.encode()} />
            </div>
        {/each}
    </div>
</Modal>
