<script>
  import About from "./About.svelte";
  import Articles from "./Articles.svelte";
  import Notes from "./Notes.svelte";
  import Mint from "./Mint.svelte";
  import NewWallet from "./NewWallet.svelte";
  import Btcpay from "./Btcpay.svelte";
  import Meetups from "./Meetups.svelte";
  import Nodes from "./Nodes.svelte";
  import Nostrscript from "./Nostrscript.svelte";
  import Shop from "./Shop.svelte";
  import GroupChat from "./GroupChat.svelte";
  import Mutiny from "./Mutiny.svelte";
  import Lottery from "./Lottery.svelte";
</script>

<main class="flex flex-wrap flex-row items-start justify-center">
  <section
    class="mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    <div class="col-span-1 mx-2">
      <About />
      <Meetups />
      <Mint />
      <!-- <Lottery /> -->
      <Nostrscript />
      <NewWallet />
      <GroupChat />
      <Btcpay />
      <Mutiny />
      <Nodes />
    </div>
    <div class="col-span-1 mx-2">
      <Shop />
    </div>
    <div class="col-span-1 mx-2">
      <Articles />
    </div>
    <div class="col-span-1 mx-2">
      <Notes />
    </div>
  </section>
</main>
