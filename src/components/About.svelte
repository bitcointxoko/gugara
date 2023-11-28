<script>
    import { _ } from '../services/i18n';
    import { PUBLIC_ABOUT, PUBLIC_NAME, PUBLIC_NOSTR_SHORT_NOTE_CLIENT, PUBLIC_PUBKEY } from "$env/static/public";
</script>

<div class="basis-1/3 p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-amber-500 bg-white text-black font-mono max-w-lg flex-auto">
    <h2 class="text-xl text-bold">{$_('greeting.welcome')}</h2>
    <div class="text-gray-600 mt-2 mx-2 justify-center">
            <p class="my-2"> <a href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{PUBLIC_PUBKEY}"><span class="font-bold hover:text-amber-500">{PUBLIC_NAME}</span></a>
             es un espacio abierto de intercambio y aprendizaje. Surgió de manera bastante espontánea al juntarse unos pocos <span class="text-orange-500">bitcoiners</span> mayormente a través de esa maravilla que es <span class="text-purple-500">nostr</span> para estar conectados compartiendo conocimientos y experiencias para aprender los unos de los otros mediante el estudio y el uso de herramientas.

            No hay una estructura definida, nos basamos en permanecer conectados entre nosotros tanto en línea como en encuentros periódicos. Por un lado vamos comentando lo que vamos haciendo cada uno de nosotros y sobre lo que nos vendría bien hablar y por otro hacemos puestas en común en los encuentros comentando avances y hablando sobre algo que hayamos concretado. El contacto permanente posibilita la cooperación resolviendo necesidades dentro del propio grupo, cada uno aporta lo que puede y se va creando esa infrastuctura a disposicion de todos. </p>
    </div>
    <!-- IF defining PUBLIC_ABOUT in .env then uncomment the next block and delete the previous div -->
    <!-- <div class="text-gray-600 mt-2 mx-2 justify-center">
        <p class="my-2"> <a href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{PUBLIC_PUBKEY}"><span class="font-bold hover:text-amber-500">{PUBLIC_NAME}</span></a>
        {PUBLIC_ABOUT}</p>
    </div> -->
</div>  