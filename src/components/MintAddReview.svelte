<script lang="ts">
    import ndk from "$lib/stores/ndk";
    import { _ } from "../services/i18n";
    import currentUser from "$lib/stores/currentUser";
    import { NDKEvent, NDKNip07Signer } from "@nostr-dev-kit/ndk";
    import toast from "svelte-french-toast";
    import { goto } from "$app/navigation";
    import Modal from "./Modal.svelte";

    export let event: NDKEvent;
    export let mintPubkey: string;

    let showAddReviewModal: boolean = false;
    const closeModal = () => {
        showAddReviewModal = false;
    };

    let review: {
        content: string;
        rating: number;
    } = {
        content: "",
        rating: 0,
    };

    const maxRating = 5;
    function handleRatingClick(rating: number) {
        review.rating = rating;
    }
    const create = async () => {
        if (event) {
            if ($currentUser) {
                if (!$ndk.signer) {
                    const signer = new NDKNip07Signer();
                    $ndk.signer = signer;
                }

                const kind38000 = new NDKEvent($ndk);
                kind38000.kind = 38000;
                kind38000.content = `[${review.rating}/5]${review.content ? " " + review.content : ""}`;
                console.log(mintPubkey);
                kind38000.tags = [
                    ["k", "38172"],
                    ["u", event.tagValue("u") as string, "cashu"],
                ];

                if (mintPubkey) {
                    kind38000.tags.push(["a", `38172:cashu-mint-pubkey:${mintPubkey}`]);
                } else {
                    kind38000.tags.push(["a", `38172:cashu-mint-pubkey:${event.dTag}`]);
                }

                await kind38000
                    .publish()
                    .then(() => {
                        toast.success("Published", {
                            position: "bottom-right",
                        });
                        goto(`/mint/${event.encode()}`);
                    })
                    .catch((error) =>
                        toast.error("Not published\n" + error, {
                            position: "bottom-right",
                        })
                    );
            }
        }
    };
</script>

<button on:click={() => (showAddReviewModal = true)}>Add review</button>
<Modal isOpen={showAddReviewModal} onClose={closeModal} title="Review mint">
    <form on:submit={create} class="flex flex-col gap-2">
        <div class="flex flex-col gap-4 items-center">
            <h3>Rate your experience:</h3>
            <div class="flex space-x-1 cursor-pointer">
                {#each Array(maxRating) as _, i}
                    <svg
                        on:click={() => handleRatingClick(i + 1)}
                        class="w-6 h-6 text-yellow-500"
                        fill={i < review.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        ></path>
                    </svg>
                {/each}
            </div>
            <p>Selected rating: {review.rating}</p>
        </div>
        <p>Review</p>
        <textarea bind:value={review.content} />
        <button type="submit" class="p-2 text-white rounded-lg bg-primary-600">Publish</button>
    </form>
</Modal>
