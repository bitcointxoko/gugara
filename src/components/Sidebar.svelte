<script lang="ts">
	import { page } from '$app/stores';
	import { _ } from '../services/i18n';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarCta,
		Tooltip
	} from 'flowbite-svelte';
	import {
		GridSolid,
		HomeSolid,
		ShoppingBagSolid,
		CalendarMonthSolid,
		FilePenSolid,
		ProfileCardSolid,
		QuestionCircleOutline,
		CashSolid
	} from 'flowbite-svelte-icons';
	import ndk from '$lib/stores/ndk';
	import { RelayList } from '@nostr-dev-kit/ndk-svelte-components';

	$: activeUrl = $page.url.pathname;

	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
</script>

<Sidebar {activeUrl}>
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarItem label={$_('home')} href="/">
				<svelte:fragment slot="icon">
					<HomeSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('calendar.title')} href="/calendar">
				<svelte:fragment slot="icon">
					<CalendarMonthSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('articles.title')} href="/articles" {spanClass}>
				<svelte:fragment slot="icon">
					<FilePenSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('shop.title')} href="/shop" {spanClass}>
				<svelte:fragment slot="icon">
					<ShoppingBagSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('apps.title')} href="/apps" {spanClass}>
				<svelte:fragment slot="icon">
					<GridSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('convert.title')} href="/convert" {spanClass}>
				<svelte:fragment slot="icon">
					<CashSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label={$_('profile.title')} href="/profile" {spanClass}>
				<svelte:fragment slot="icon">
					<ProfileCardSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
		<SidebarCta
			label={$_('relays.title')}
			divWrapperClass="p-4 mt-6 bg-gray-50 rounded-lg dark:bg-gray-900 text-gray-900 dark:text-gray-50"
			spanClass="bg-emerald-100 text-emerald-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-emerald-200 dark:text-emerald-900"
		>
			<svelte:fragment slot="icon">
				<QuestionCircleOutline id="tooltip" />
				<Tooltip class="w-48 text-balance" triggeredBy="[id='tooltip']">
					{$_('relays.tooltip')}
				</Tooltip>
			</svelte:fragment>
			<RelayList {ndk} />
		</SidebarCta>
	</SidebarWrapper>
</Sidebar>
