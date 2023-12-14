<script>
  import { _ } from "../../services/i18n";
  import Carousel from "svelte-carousel";
  import {
    PUBLIC_PRICE_CURRENCY_SYMBOL,
    PUBLIC_SHOP,
  } from "$env/static/public";

  let products = [
    {
      name: "Calcetines",
      image:
        "https://btcpay.bitcointxoko.com/Storage/27156195-7ac7-462d-9271-d04b0031a36f",
      description:
        "¡Ponte a la moda Bitcoin con nuestros calcetines de Bitcoin! 🧦 ¡Da pasos seguros con estilo mientras muestras tu amor por Bitcoin! 🚀",
      action:
        "https://btcpay.bitcointxoko.com/apps/4RxS3NvGuRU2S55A9srXq3XENyoT/pos",
      choiceKey: "socks",
      price: "10,00",
      currency: PUBLIC_PRICE_CURRENCY_SYMBOL,
    },
    {
      name: "Calcetines x 3",
      image:
        "https://btcpay.bitcointxoko.com/Storage/e4fdc158-6d5e-46fb-b128-fef49a3d099a",
      description:
        "Presentamos nuestros nuevos calcetines Bitcoin, la forma más cómoda de caminar hacia el futuro financiero. 🧦 ¡Lleva consigo el espíritu de Satoshi en cada paso! 🚀 ",
      action:
        "https://btcpay.bitcointxoko.com/apps/4RxS3NvGuRU2S55A9srXq3XENyoT/pos",
      choiceKey: "calcetines x 3",
      price: "25,00",
      currency: PUBLIC_PRICE_CURRENCY_SYMBOL,
    },
    {
      name: "Tarjeta NFC",
      image:
        "https://btcpay.bitcointxoko.com/LocalStorage/0b8333f0-1267-421a-97cd-69a44490b34a-nfc-card-ntag424-dna.jpg",
      description:
        "Un chip NXP NTAG424 DNA dentro de una tarjeta NFC PVC blanca. ",
      action:
        "https://btcpay.bitcointxoko.com/apps/psvYP8PQeG3toagw8eUgG95Kwda/pos",
      choiceKey: "tarjeta nfc - ntag424 dna (pvc blanca)",
      price: "7.500",
      currency: "sats",
    },
    {
      name: "Kit BTClock",
      image:
        "https://btcpay.bitcointxoko.com/Storage/8b6d0541-bd0b-4713-b674-bff4fc40c37a",
      description:
        "Incluye PCB principal (componentes SMB soldados), PCB frontal, parte frontal y trasera acrílicas, cable USB-C, juego de tornillos, componentes necesarios. No incluye pantallas de tinta electrónica ni S3 mini. ",
      action:
        "https://btcpay.bitcointxoko.com/apps/psvYP8PQeG3toagw8eUgG95Kwda/pos",
      choiceKey: "kit btclock",
      price: "200.000",
      currency: "sats",
    },
    {
      name: "Pantallas e-Ink (x 7)",
      image:
        "https://btcpay.bitcointxoko.com/Storage/1952523a-fe90-4aff-9091-1989cdd43fa1",
      description:
        "Pantallas tinta eletrónica para BTClock. Necesitas 7 por reloj. El precio es por 7 pantallas. ",
      action:
        "https://btcpay.bitcointxoko.com/apps/315345vxVqUWLASyga7ZLW3tdxUa/pos",
      choiceKey: "e-ink-display",
      price: "54,39",
      currency: PUBLIC_PRICE_CURRENCY_SYMBOL,
    },
    {
      name: "S3 mini",
      image:
        "https://btcpay.bitcointxoko.com/Storage/ec028167-3684-485e-9b6d-611067ef5bec",
      description: "S3 mini para BTClock. ",
      action:
        "https://btcpay.bitcointxoko.com/apps/315345vxVqUWLASyga7ZLW3tdxUa/pos",
      choiceKey: "s3-mini",
      price: "6,72",
      currency: PUBLIC_PRICE_CURRENCY_SYMBOL,
    },
  ];
</script>

<main class="flex flex-wrap flex-row items-start justify-center">
  <section
    class="mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    {#each products as product}
      <div
        class="p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-w-lg text-muted-bright"
      >
        <img src={product.image} alt={product.name} class="mt rounded-md" />
        <h3 class="mx my-2 font-semibold text-left">{product.name}</h3>
        <p class="mx-2 my-2">{product.description}</p>
        <div class="relative flex justify-center">
          <form method="POST" action={product.action}>
            <button
              name="choiceKey"
              value={product.choiceKey}
              class="my-2 px-4 py-2 rounded-full bg-button-bright text-gray-50 border hover:border-green-900 hover:text-highlight hover:bg-button-dark"
            >
              {$_("shop.buy")}{product.price}
              {product.currency}
            </button>
          </form>
        </div>
      </div>
    {/each}
  </section>
</main>
