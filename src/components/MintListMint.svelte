<script lang="ts">
    import ndk from "$lib/stores/ndk";
    import { _ } from "../services/i18n";
    import currentUser from "$lib/stores/currentUser";
    import { NDKEvent, NDKNip07Signer } from "@nostr-dev-kit/ndk";
    import toast from "svelte-french-toast";
    import { goto } from "$app/navigation";
    import Modal from "./Modal.svelte";

    let showListMintModal: boolean = false;
    const closeModal = () => {
        showListMintModal = false;
    };

    let url: string = "";

    let mint: {
        d: string;
        u: string;
        nuts: string;
    } = {
        d: "",
        u: "",
        nuts: "",
    };

    async function fetchMintInfo() {
        try {
            const response = await fetch(`${url}/v1/info`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            mint.d = data.pubkey;
            mint.u = url;
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }

    const create = async () => {
        if ($currentUser) {
            if (!$ndk.signer) {
                const signer = new NDKNip07Signer();
                $ndk.signer = signer;
            }

            const kind38172 = new NDKEvent($ndk);
            kind38172.kind = 38172;
            kind38172.tags = [
                ["d", `${mint.d}`],
                ["u", `${mint.u}`],
            ];

            await kind38172
                .publish()
                .then(() => {
                    toast.success("Published", {
                        position: "bottom-right",
                    });
                    goto(`/mint/${kind38172.encode()}`);
                })
                .catch((error) =>
                    toast.error("Not published\n" + error, {
                        position: "bottom-right",
                    })
                );
        }
    };

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        fetchMintInfo();
    };
</script>

<button on:click={() => (showListMintModal = true)}>List mint</button>
<Modal isOpen={showListMintModal} onClose={closeModal} title="List mint">
    <form on:submit={create} class="flex flex-col gap-2">
        <div class="flex flex-col gap-4 items-center">
            <h3>Mint URL</h3>
            <form on:submit={handleSubmit}>
                <input bind:value={url} placeholder="https://mint.example.com" required />
                <button type="submit" class="p-2 text-white rounded-lg bg-primary-600"
                    >Fetch mint info</button
                >
            </form>
            <span>{mint.d}</span>
            <span>{mint.u}</span>
        </div>
        <button type="submit" class="p-2 text-white rounded-lg bg-primary-600">Publish</button>
    </form>
</Modal>
