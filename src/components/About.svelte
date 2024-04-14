<script>
	import { Card } from 'flowbite-svelte';
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { PUBLIC_NAME, PUBLIC_PUBKEY } from '$env/static/public';
	import Popover from './user/Popover.svelte';

	const user = $ndk.getUser({ pubkey: PUBLIC_PUBKEY });
</script>

<Card size="lg">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Ongi etorri! 🤙
	</h5>
	<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
		<a id="popover-0" href="/u/{user.npub}"
			><span class="font-bold decoration-dotted hover:underline">{PUBLIC_NAME}</span>
		</a>
		es un espacio abierto de intercambio y aprendizaje. Surgió de manera bastante espontánea al juntarse
		unos pocos
		<span class="text-orange-500">bitcoiners</span>
		mayormente a través de esa maravilla que es
		<span class="text-purple-500">nostr</span> para estar conectados compartiendo conocimientos y experiencias
		para aprender los unos de los otros mediante el estudio y el uso de herramientas. No hay una estructura
		definida, nos basamos en permanecer conectados entre nosotros tanto en línea como en encuentros periódicos.
		Por un lado vamos comentando lo que vamos haciendo cada uno de nosotros y sobre lo que nos vendría
		bien hablar y por otro hacemos puestas en común en los encuentros comentando avances y hablando sobre
		algo que hayamos concretado. El contacto permanente posibilita la cooperación resolviendo necesidades
		dentro del propio grupo, cada uno aporta lo que puede y se va creando esa infrastuctura a disposicion
		de todos.
	</p>
	<Popover {user} i={0} />
</Card>
