<script>
	import About from "./About.svelte";
    import Articles from "./Articles.svelte";
	import Notes from "./Notes.svelte";
	import Mint from "./Mint.svelte";
	import NewWallet from "./NewWallet.svelte";
	import Meetups from "./Meetups.svelte";
	import Nodes from "./Nodes.svelte";
	import Nostrscript from "./Nostrscript.svelte";
	import Shop from "./Shop.svelte";
    import GroupChat from "./GroupChat.svelte";

</script>

<main class="flex flex-wrap flex-row justify-center">
    <section class="mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <div class="col-span-1 mx-2">
            <About/>
            <Meetups/>
            <Mint/>
            <Nostrscript/>
            <NewWallet/>
            <GroupChat/>
            <Nodes/>
        </div>
        <div class="col-span-1 mx-2">
            <Shop/>
        </div>
        <div class="col-span-1 mx-2">
            <Articles/>
        </div>
        <div class="col-span-1 mx-2">
            <Notes/>
        </div>
    </section>
</main>