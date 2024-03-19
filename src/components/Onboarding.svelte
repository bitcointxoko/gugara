<script lang="ts">
	import { Button, Card, Modal, Tabs, TabItem } from 'flowbite-svelte';
	import { _ } from '../services/i18n';
	let defaultModal = false;
</script>

<Card class="mt-2 text-center" size="lg" padding="xl">
	<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Empezar con Bitcoin</h5>
	<p class="mb-5 text-balance text-base text-gray-500 dark:text-gray-400 sm:text-lg">
		En Bitcoin Txoko creemos que la mejor manera de aprender sobre bitcoin es usarlo, gastarlo y
		mejor aún, ganarlo. Sólo se tarda 10 minutos en configurar una billetera y una tienda para
		empezar a realizar transacciones en la Lightning Network con Bitcoin Txoko.
	</p>
	<div
		class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"
	>
		<Button on:click={() => (defaultModal = true)}>Empezar</Button>
		<Modal title="Empezar con Bitcoin" bind:open={defaultModal} autoclose outsideclose>
			<Tabs
				style="full"
				defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
			>
				<TabItem class="w-full divide-y" open>
					<span slot="title">Billetera</span>
					<p class="text-balance text-sm text-gray-500 dark:text-gray-400">
						<b>Billetera:</b>
						Una billetera Lightning te permite realizar transacciones instantáneas en Bitcoin con bajas
						comisiones. Bitcoin Txoko ofrece una billetera Lightning de custodia de forma gratuita. También
						se integra en la tienda del servidor BTCPay cuando quieras configurar una más adelante. Ten
						en cuenta que custodial significa que Bitcoin Txoko está en custodia de tus fondos. Cuando
						estés listo para asumir la autocustodia, puedes cambiar a una billetera de autocustodia como
						<a href="https://mutinywallet.com" class="underline decoration-dotted">Mutiny</a> o
						<a href="https://phoenix.acinq.co/" class="underline decoration-dotted">Phoenix</a>.
					</p>
					<div class="my-4 pt-4">
						<Button href="https://bitcointxoko.com">Nueva billetera</Button>
					</div>
				</TabItem>
				<TabItem class="w-full divide-y">
					<span slot="title">BoltCard</span>
					<p class="text-balance text-sm text-gray-500 dark:text-gray-400">
						<b>BoltCard:</b>
						Una BoltCard es como una tarjeta de débito para la red Lightning. Puedes recargarla con fondos
						y gastar tocando la tarjeta en lectores NFC. Una vez que hayas configurado una billetera
						Lightning con LNbits en el paso anterior, sólo tardarás unos minutos en crear una BoltCard.
						Puedes comprar una tarjeta NFC en nuestra tienda. Consulta nuestra guía de configuración
						para saber cómo configurarla.
					</p>
					<div class="my-4 pt-4">
						<Button
							class="mr-2"
							href="https://habla.news/es/a/naddr1qqxnzd3e8qcr2wfn8qcrgwf4qy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rsgt7cpp"
							color="alternative">Guía</Button
						>
						<Button href="/shop">Tienda</Button>
					</div>
				</TabItem>
				<TabItem class="w-full divide-y">
					<span slot="title">Tienda</span>
					<p class="text-balance text-sm text-gray-500 dark:text-gray-400">
						<b>Tienda:</b>
						Con el servidor BTCPay puedes crear una tienda para empezar a vender tus bienes y servicios
						por Bitcoin, tanto si deseas crear un Punto de Venta como una tienda online. Puedes conectar
						tu billetera existente para recibir transacciones en Lightning. También puedes vincular una
						billetera on-chain para transacciones más grandes. Sólo se tarda unos minutos en configurarlo.
						Consulta nuestra guía para más detalles.
					</p>
					<div class="my-4 pt-4">
						<Button
							class="mr-2"
							href="https://habla.news/es/a/naddr1qqxnzd3e8qcr2wfn8qcrgwf4qy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygzenanl0hmkjnrq8fksvdhpt67xzrdh0h8agltwt5znsmvzr7e74ypsgqqqw4rsgt7cpp"
							color="alternative">Guía</Button
						>
						<Button href="https://btcpay.bitcointxoko.com/register">Registrar</Button>
					</div>
				</TabItem>
			</Tabs>
		</Modal>
	</div>
</Card>
