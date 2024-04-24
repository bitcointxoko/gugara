<script lang="ts">
	import {
		Button,
		Card,
		Dropdown,
		DropdownItem,
		Modal,
		Tabs,
		TabItem,
	} from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	import { _ } from "../services/i18n";
	let defaultModal = false;
</script>

<Card class="mt-2 text-center" size="lg" padding="xl">
	<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
		{$_("onboardingBitcoin.title")}
	</h5>
	<p
		class="mb-5 text-balance text-base text-gray-500 dark:text-gray-400 sm:text-lg"
	>
		{$_("onboardingBitcoin.description")}
	</p>
	<div
		class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"
	>
		<Button on:click={() => (defaultModal = true)}
			>{$_("onboardingBitcoin.start")}</Button
		>
		<Modal
			title={$_("onboardingBitcoin.title")}
			bind:open={defaultModal}
			autoclose
			outsideclose
		>
			<Tabs
				style="full"
				defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
			>
				<TabItem class="w-full divide-y" open>
					<span slot="title"
						>{$_("onboardingBitcoin.wallet")}</span
					>
					<p
						class="text-balance text-sm text-gray-500 dark:text-gray-400"
					>
						<b>{$_("onboardingBitcoin.wallet")}:</b>
						{$_("onboardingBitcoin.walletDescription")} [
						<a
							href="https://mutinywallet.com"
							class="underline decoration-dotted"
							>Mutiny</a
						>
						|
						<a
							href="https://phoenix.acinq.co/"
							class="underline decoration-dotted"
							>Phoenix</a
						> ]
					</p>
					<div class="my-4 pt-4">
						<Button class="mr-2" color="alternative"
							>{$_(
								"onboardingBitcoin.guides"
							)}<ChevronDownOutline
								class="text-alternative ms-2 h-3 w-3"
							/></Button
						>
						<Dropdown>
							<DropdownItem
								href="https://habla.news/es/a/naddr1qqxnzd3exuerqdp3xv6ngd3kqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rszszq8e"
								>{$_(
									"onboardingBitcoin.lnaddress"
								)}</DropdownItem
							>
							<DropdownItem
								href="https://habla.news/es/a/naddr1qqxnzd3exuerqdfkxccnyv3cqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rs6mxhd7"
								>{$_(
									"onboardingBitcoin.lndhub"
								)}</DropdownItem
							>
						</Dropdown>
						<Button href="https://bitcointxoko.com"
							>{$_(
								"onboardingBitcoin.wallet"
							)}</Button
						>
					</div>
				</TabItem>
				<TabItem class="w-full divide-y">
					<span slot="title"
						>{$_("onboardingBitcoin.boltcard")}</span
					>
					<p
						class="text-balance text-sm text-gray-500 dark:text-gray-400"
					>
						<b>{$_("onboardingBitcoin.boltcard")}:</b>
						{$_(
							"onboardingBitcoin.boltcardDescription"
						)}
					</p>
					<div class="my-4 pt-4">
						<Button
							class="mr-2"
							href="https://habla.news/es/a/naddr1qqxnzd3e8qcr2wfn8qcrgwf4qy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rsgt7cpp"
							color="alternative"
							>{$_(
								"onboardingBitcoin.guide"
							)}</Button
						>
						<Button href="/shop"
							>{$_(
								"onboardingBitcoin.shop"
							)}</Button
						>
					</div>
				</TabItem>
				<TabItem class="w-full divide-y">
					<span slot="title"
						>{$_("onboardingBitcoin.shop")}</span
					>
					<p
						class="text-balance text-sm text-gray-500 dark:text-gray-400"
					>
						<b>{$_("onboardingBitcoin.shop")}:</b>
						{$_("onboardingBitcoin.shopDescription")}
					</p>
					<div class="my-4 pt-4">
						<Button
							class="mr-2"
							href="https://habla.news/es/a/naddr1qvzqqqr4gupzqkvlvlma7a55ccp6d5rrdc27h3ssmdmael286mjaq5uxmqslk04fqqxnzdesxcurvwfjxcmnwdfe3jddt2"
							color="alternative"
							>{$_(
								"onboardingBitcoin.guide"
							)}</Button
						>
						<Button
							href="https://btcpay.bitcointxoko.com/register"
							>{$_(
								"onboardingBitcoin.register"
							)}</Button
						>
					</div>
				</TabItem>
			</Tabs>
		</Modal>
	</div>
</Card>
