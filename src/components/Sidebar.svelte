<script lang="ts">
    import { page } from "$app/stores";
    import { _ } from "../services/i18n";
    import {
        Sidebar,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper,
        SidebarCta,
        Tooltip,
    } from "flowbite-svelte";
    import HomeSolid from "flowbite-svelte-icons/HomeSolid.svelte";
    import ShoppingBagSolid from "flowbite-svelte-icons/ShoppingBagSolid.svelte";
    import CalendarMonthSolid from "flowbite-svelte-icons/CalendarMonthSolid.svelte";
    import FilePenSolid from "flowbite-svelte-icons/FilePenSolid.svelte";
    import QuestionCircleOutline from "flowbite-svelte-icons/QuestionCircleOutline.svelte";
    import GridPlusSolid from "flowbite-svelte-icons/GridPlusSolid.svelte";
    import CashSolid from "flowbite-svelte-icons/CashSolid.svelte";
    import LandmarkSolid from "flowbite-svelte-icons/LandmarkSolid.svelte";
    import ArrowRightToBracketOutline from "flowbite-svelte-icons/ArrowRightToBracketOutline.svelte";
    import ArrowLeftToBracketOutline from "flowbite-svelte-icons/ArrowLeftToBracketOutline.svelte";
    import UserEditSolid from "flowbite-svelte-icons/UserEditSolid.svelte";
    import ndk from "$lib/stores/ndk";
    import currentUser from "$lib/stores/currentUser";
    import { Avatar, RelayList } from "@nostr-dev-kit/ndk-svelte-components";
    import SigninModal from "./signin/SigninModal.svelte";
    import { signout } from "$lib/utils/auth";
    import { PUBLIC_PUBKEY } from "$env/static/public";

    $: activeUrl = $page.url.pathname;

    let spanClass = "flex-1 ms-3 whitespace-nowrap";

    let signinVisible = false;

    function toggleSigninMenu() {
        signinVisible = !signinVisible;
    }
</script>

<Sidebar {activeUrl}>
    <SidebarWrapper>
        <SidebarGroup>
            {#if $currentUser}
                <SidebarItem label={$currentUser.profile?.name} {spanClass}>
                    <svelte:fragment slot="icon">
                        <Avatar ndk={$ndk} user={$currentUser} class="w-6 h-6 rounded-full" />
                    </svelte:fragment>
                </SidebarItem>
            {/if}
            <SidebarItem label={$_("home")} href="/">
                <svelte:fragment slot="icon">
                    <HomeSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label={$_("calendar.title")} href="/calendar">
                <svelte:fragment slot="icon">
                    <CalendarMonthSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label={$_("articles.title")} href="/articles" {spanClass}>
                <svelte:fragment slot="icon">
                    <FilePenSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label={$_("shop.title")} href="/shop" {spanClass}>
                <svelte:fragment slot="icon">
                    <ShoppingBagSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label={$_("apps.title")} href="/apps" {spanClass}>
                <svelte:fragment slot="icon">
                    <GridPlusSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Mints" href="/mint" {spanClass}>
                <svelte:fragment slot="icon">
                    <LandmarkSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label={$_("convert.title")} href="/convert" {spanClass}>
                <svelte:fragment slot="icon">
                    <CashSolid
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                </svelte:fragment>
            </SidebarItem>
            {#if !$currentUser}
                <SidebarItem label={$_("signin.signin")} on:click={toggleSigninMenu} {spanClass}>
                    <svelte:fragment slot="icon">
                        <ArrowLeftToBracketOutline
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                    </svelte:fragment>
                </SidebarItem>
            {:else if $currentUser}
                <SidebarItem label={$_("signin.signout")} {spanClass} on:click={signout}>
                    <svelte:fragment slot="icon">
                        <ArrowRightToBracketOutline
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                    </svelte:fragment>
                </SidebarItem>
                {#if $currentUser.pubkey === PUBLIC_PUBKEY}
                    <SidebarItem label="Admin" {spanClass} href="/admin">
                        <svelte:fragment slot="icon">
                            <UserEditSolid
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                        </svelte:fragment>
                    </SidebarItem>
                {/if}
            {/if}
        </SidebarGroup>
        <SidebarCta
            label={$_("relays.title")}
            divWrapperClass="p-4 mt-6 bg-gray-50 rounded-lg dark:bg-gray-900 text-gray-900 dark:text-gray-50"
            spanClass="bg-emerald-100 text-emerald-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-emerald-200 dark:text-emerald-900"
        >
            <svelte:fragment slot="icon">
                <QuestionCircleOutline id="tooltip" />
                <Tooltip class="w-48 text-balance" triggeredBy="[id='tooltip']">
                    {$_("relays.tooltip")}
                </Tooltip>
            </svelte:fragment>
            <RelayList ndk={$ndk} />
        </SidebarCta>
    </SidebarWrapper>
</Sidebar>
<SigninModal {signinVisible} />
