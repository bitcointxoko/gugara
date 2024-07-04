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
	import {
		GridSolid,
		HomeSolid,
		ShoppingBagSolid,
		CalendarMonthSolid,
		FilePenSolid,
		QuestionCircleOutline,
		CashSolid,
		ArrowRightToBracketOutline,
		ArrowLeftToBracketOutline,
		UserEditSolid,
		UsersGroupSolid,
	} from "flowbite-svelte-icons";
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
				<SidebarItem
					label={$currentUser.profile?.name}
					{spanClass}
				>
					<svelte:fragment slot="icon">
						<Avatar
							ndk={$ndk}
							user={$currentUser}
							class="h-6 w-6 rounded-full"
						/>
					</svelte:fragment>
				</SidebarItem>
			{/if}
			<SidebarItem label={$_("home")} href="/">
				<svelte:fragment slot="icon">
					<HomeSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_("calendar.title")} href="/calendar">
				<svelte:fragment slot="icon">
					<CalendarMonthSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem
				label={$_("articles.title")}
				href="/articles"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<FilePenSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem
				label={$_("shop.title")}
				href="/shop"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<ShoppingBagSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<!-- <SidebarItem label="Community" href="/community" {spanClass}>
				<svelte:fragment slot="icon">
					<UsersGroupSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem> -->
			<SidebarItem
				label={$_("apps.title")}
				href="/apps"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<GridSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem
				label={$_("convert.title")}
				href="/convert"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<CashSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			{#if !$currentUser}
				<SidebarItem
					label={$_("signin.signin")}
					on:click={toggleSigninMenu}
					{spanClass}
				>
					<svelte:fragment slot="icon">
						<ArrowLeftToBracketOutline
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			{:else if $currentUser}
				<SidebarItem
					label={$_("signin.signout")}
					{spanClass}
					on:click={signout}
				>
					<svelte:fragment slot="icon">
						<ArrowRightToBracketOutline
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				{#if $currentUser.pubkey === PUBLIC_PUBKEY}
					<SidebarItem
						label="Admin"
						{spanClass}
						href="/admin"
					>
						<svelte:fragment slot="icon">
							<UserEditSolid
								class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
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
				<Tooltip
					class="w-48 text-balance"
					triggeredBy="[id='tooltip']"
				>
					{$_("relays.tooltip")}
				</Tooltip>
			</svelte:fragment>
			<RelayList ndk={$ndk} />
		</SidebarCta>
	</SidebarWrapper>
</Sidebar>
<SigninModal {signinVisible} />
