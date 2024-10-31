<script lang="ts">
    import { _ } from "svelte-i18n";
    import currentUser from "$lib/stores/currentUser";
    import { currentUserFollows } from "$lib/stores/currentUser";
    import ndk from "$lib/stores/ndk";
    import type { NDKUser } from "@nostr-dev-kit/ndk";
    import toast from "svelte-french-toast";
    import { NDKEvent, NDKKind, NDKNip07Signer, type NDKTag } from "@nostr-dev-kit/ndk";
    import { Button } from "flowbite-svelte";

    export let user: NDKUser;

    async function handleFollow() {
        if ($currentUser) {
            if (!$ndk.signer) {
                const signer = new NDKNip07Signer();
                $ndk.signer = signer;
            }

            const followResult = await $currentUser?.follow(user);
            if (followResult) {
                toast.success("Followed!", {
                    position: "bottom-right",
                });
                const followsSet = await $currentUser?.follows();
                const followsArray = Array.from(followsSet as Set<NDKUser>);
                $currentUserFollows = followsArray.map((user) => user.pubkey);
            } else {
                toast("You're already following them");
            }
        }
    }

    async function handleUnfollow() {
        const newFollowsArray = $currentUserFollows.filter((pubkey) => pubkey !== user.pubkey);
        const tags: NDKTag[] = newFollowsArray.map((pubkey) => ["p", pubkey] as NDKTag);

        const event = new NDKEvent($ndk);
        event.kind = NDKKind.Contacts;
        event.tags = tags;

        if ($currentUser) {
            if (!$ndk.signer) {
                const signer = new NDKNip07Signer();
                $ndk.signer = signer;
            }
            event
                .publish()
                .then(() => {
                    toast.success("Unfollowed!", {
                        position: "bottom-right",
                    });
                    $currentUserFollows = newFollowsArray;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
    let followingButtonText: string = "Following";
</script>

{#key user.pubkey}
    {#if $currentUser}
        {#if $currentUserFollows.includes(user.pubkey)}
            <Button
                on:click={handleUnfollow}
                on:mouseenter={() => (followingButtonText = "Unfollow")}
                on:mouseleave={() => (followingButtonText = "Following")}
                color="alternative"
            >
                <span class="w-16 text-left">{followingButtonText}</span>
            </Button>
        {:else}
            <Button on:click={handleFollow}>{$_("user.follow")}</Button>
        {/if}
    {:else}
        <Button disabled>{$_("user.follow")}</Button>
        <!-- <Popover>
			<SigninAlert />
		</Popover> -->
    {/if}
{/key}
