<script lang="ts">
    import Modal from "./Modal.svelte";
    import { Button, Card, Dropdown, DropdownItem, Tabs, TabItem } from "flowbite-svelte";
    import ChevronDownOutline from "flowbite-svelte-icons/ChevronDownOutline.svelte";
    import { _ } from "../services/i18n";
    let showOnboardingModal: boolean = false;
    const closeModal = () => {
        showOnboardingModal = false;
    };
</script>

<Card class="mt-2 text-center bg-warm-50" size="lg" padding="xl">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {$_("onboardingBitcoin.title")}
    </h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 text-balance">
        {$_("onboardingBitcoin.description")}
    </p>
    <div
        class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"
    >
        <Button on:click={() => (showOnboardingModal = true)}
            >{$_("onboardingBitcoin.start")}</Button
        >
        <Modal
            isOpen={showOnboardingModal}
            onClose={closeModal}
            title={$_("onboardingBitcoin.title")}
        >
            <Tabs tabStyle="pill" defaultClass="flex rounded-lg">
                <TabItem class="w-full" open>
                    <span slot="title">{$_("onboardingBitcoin.wallet")}</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-balance">
                        <b>{$_("onboardingBitcoin.wallet")}:</b>
                        {$_("onboardingBitcoin.walletDescription")} [<a
                            href="https://phoenix.acinq.co/"
                            class="underline decoration-dotted">Phoenix</a
                        >]
                    </p>
                    <div class="pt-4 my-4">
                        <Button class="mr-2" color="alternative"
                            >{$_("onboardingBitcoin.guides")}<ChevronDownOutline
                                class="w-3 h-3 text-alternative ms-2"
                            />
                        </Button>
                        <Dropdown>
                            <DropdownItem
                                href="https://habla.news/es/a/naddr1qqxnzd3exuerqdp3xv6ngd3kqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rszszq8e"
                                >{$_("onboardingBitcoin.lnaddress")}
                            </DropdownItem>
                            <DropdownItem
                                href="https://habla.news/es/a/naddr1qqxnzd3exuerqdfkxccnyv3cqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rs6mxhd7"
                                >{$_("onboardingBitcoin.lndhub")}
                            </DropdownItem>
                        </Dropdown>
                        <Button href="https://bitcointxoko.com"
                            >{$_("onboardingBitcoin.wallet")}
                        </Button>
                    </div>
                </TabItem>
                <TabItem class="w-full">
                    <span slot="title">{$_("onboardingBitcoin.boltcard")}</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-balance">
                        <b>{$_("onboardingBitcoin.boltcard")}:</b>
                        {$_("onboardingBitcoin.boltcardDescription")}
                    </p>
                    <div class="pt-4 my-4">
                        <Button
                            class="mr-2"
                            href="https://habla.news/es/a/naddr1qqxnzd3e8qcr2wfn8qcrgwf4qy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rsgt7cpp"
                            color="alternative">{$_("onboardingBitcoin.guide")}</Button
                        >
                        <Button href="/shop/tarjeta%20nfc%20-%20ntag424%20dna%20(pvc%20blanca)"
                            >{$_("onboardingBitcoin.shop")}
                        </Button>
                    </div>
                </TabItem>
                <TabItem class="w-full">
                    <span slot="title">{$_("onboardingBitcoin.shop")}</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-balance">
                        <b>{$_("onboardingBitcoin.shop")}:</b>
                        {$_("onboardingBitcoin.shopDescription")}
                    </p>
                    <div class="pt-4 my-4">
                        <Button
                            class="mr-2"
                            href="https://habla.news/es/a/naddr1qvzqqqr4gupzqkvlvlma7a55ccp6d5rrdc27h3ssmdmael286mjaq5uxmqslk04fqqxnzdesxcurvwfjxcmnwdfe3jddt2"
                            color="alternative">{$_("onboardingBitcoin.guide")}</Button
                        >
                        <Button href="https://btcpay.bitcointxoko.com/register"
                            >{$_("onboardingBitcoin.register")}
                        </Button>
                    </div>
                </TabItem>
            </Tabs>
        </Modal>
    </div>
</Card>
