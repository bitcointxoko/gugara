<script>
  import { browser } from "$app/environment";
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };
  import Carousel from "svelte-carousel";
  import { _ } from "../../services/i18n";
  import { PUBLIC_PRICE_CURRENCY_SYMBOL } from "$env/static/public";

  let products = [
    {
      name: "Calcetines",
      images: [
        "https://btcpay.bitcointxoko.com/Storage/27156195-7ac7-462d-9271-d04b0031a36f",
        "https://btcpay.bitcointxoko.com/Storage/55322c67-0021-4560-a455-fd9cb53e3992",
        "https://btcpay.bitcointxoko.com/Storage/21864421-128a-4cc8-af59-6079f7393613",
        "https://btcpay.bitcointxoko.com/Storage/f825d8ae-7d1a-4fde-beb3-3e22cc2b8b24",
      ],
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
      images: [
        "https://btcpay.bitcointxoko.com/Storage/e4fdc158-6d5e-46fb-b128-fef49a3d099a",
      ],
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
      images: [
        "https://btcpay.bitcointxoko.com/LocalStorage/0b8333f0-1267-421a-97cd-69a44490b34a-nfc-card-ntag424-dna.jpg",
        "https://btcpay.bitcointxoko.com/Storage/eec02d9f-ca54-4ab0-a6aa-5a5b266faaaa",
        "https://btcpay.bitcointxoko.com/Storage/df113b6f-fbc1-4780-a027-29f04b4853b8",
      ],
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
      images: [
        "https://btclock.store/wp-content/uploads/2023/11/IMG_2174.jpeg",
        "https://btclock.store/wp-content/uploads/2023/11/webinterface.png",
        "https://btclock.store/wp-content/uploads/2023/08/PresolderAll.jpeg",
        "https://btclock.store/wp-content/uploads/2023/08/AcrylSet.jpeg",
        "https://btclock.store/wp-content/uploads/2023/08/FrontPCB.jpeg",
        "https://btclock.store/wp-content/uploads/2023/08/PresolderSMD.jpeg",
        "https://btclock.store/wp-content/uploads/2023/10/img_1805-scaled.jpeg",
        "https://btclock.store/wp-content/uploads/2023/10/img_1804-scaled.jpeg",
      ],
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
      images: [
        "https://btcpay.bitcointxoko.com/Storage/1952523a-fe90-4aff-9091-1989cdd43fa1",
      ],
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
      images: [
        "https://btcpay.bitcointxoko.com/Storage/2f1ecaa1-a7c5-49dc-a646-c0d35a1ba2ce",
        "https://btcpay.bitcointxoko.com/Storage/e8fefa8b-25a4-40f5-ba70-9a0d1fa97b06",
        "https://btcpay.bitcointxoko.com/Storage/de717276-1122-4e15-9e52-a00e0e0c8705",
        "https://btcpay.bitcointxoko.com/Storage/f96cb841-5b6f-452d-8b0c-569be1dfb189",
      ],
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
        {#if product.images.length > 1}
          {#if browser}
            <Carousel bind:this={carousel}>
              {#each product.images as image}
                <div class="mt-2 relative overflow-hidden pb-4/5">
                  <img
                    src={image}
                    alt={product.name}
                    class="rounded-md absolute h-full w-full object-cover"
                  />
                </div>
              {/each}
            </Carousel>
          {/if}
        {:else}
          <div class="px-2 mt-2">
            <img src={product.images} alt="" class="rounded-md" />
          </div>
        {/if}
        <h3 class="mx-2 my-2 font-semibold text-left">{product.name}</h3>
        <p class="mx-3 my-2">{product.description}</p>
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
