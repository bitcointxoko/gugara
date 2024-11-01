import { dictionary, locale, _ } from "svelte-i18n";
function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  dictionary.set({
    en: {
      locale: {
        short: "EN",
        long: "en-GB",
      },
      details: "Details",
      home: "Home",
      sats: "sats",
      about: {
        welcome: "Ongi etorri! 🤙",
        bitcoiners: "bitcoiners",
        nostr: "nostr",
        body1:
          " es un espacio abierto de intercambio y aprendizaje. Surgió de manera bastante espontánea al juntarse unos pocos",
        body2: " mayormente a través de esa maravilla que es",
        body3:
          " para estar conectados compartiendo conocimientos y experiencias para aprender los unos de los otros mediante el estudio y el uso de herramientas. No hay una estructura definida, nos basamos en permanecer conectados entre nosotros tanto en línea como en encuentros periódicos.Por un lado vamos comentando lo que vamos haciendo cada uno de nosotros y sobre lo que nos vendría bien hablar y por otro hacemos puestas en común en los encuentros comentando avances y hablando sobre algo que hayamos concretado. El contacto permanente posibilita la cooperación resolviendo necesidades dentro del propio grupo, cada uno aporta lo que puede y se va creando esa infrastuctura a disposicion de todos.",
      },
      signin: {
        signin: "Sign in",
        signout: "Sign out",
        extension: "Extension",
        extensionHelp: "Use a nostr extension to sign in.",
        nostrConnect: "Nostr Connect",
        nostrConnectHelp:
          "A NIP-46 remote signer allows you to keep your private key secured in a single location and remotely sign Nostr events. Create a token with full event permissions and then enter it below. You'll only have to do this once.",
        token: "Token",
        submit: "Submit",
        haveKeys: "I already have nostr keys",
        noKeys: "I don't have nostr keys yet",
        signup: "Sign up",
        signupHelp: "Sign up with email on Flockstr",
        flockstr: "Flockstr",
      },
      meetup: {
        title: "Next meetup",
        rsvp: "RSVP",
        areYouComing: "Are you coming?",
        yes: "Yes",
        maybe: "Maybe",
        no: "No",
        confirm: "Confirm",
        attendees: "Attendees",
        ended: "ended",
      },
      share: {
        share: "Share",
        embed: "Share on Nostr",
        embedHelp:
          "Copy the embed code which looks like nostr:nevent... or naddr...",
        njump: "Share njump.me link",
        njumpHelp:
          "Share this link so your friend can open it in a nostr client of their choosing",
        page: "Share page link",
        pageHelp: "Copy the link to this event on our website",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Balance",
        obsolete: "💀 Obsolete",
        nutstash: "Nutstash",
        tooltip:
          "A mint is like a bank for ecash that offers instant and private transactions",
        rating: "rating",
        r: "ratings",
        noDescription: "The mint didn't provide a description.",
        eventNotFound: "Cashu mint event not found.",
      },
      nodes: {
        channels: "Channels: ",
        capacity: "Capacity: ",
        tooltip: "This is our node on the Lightning Network",
      },
      shop: {
        title: "Shop",
        buy: "Buy",
        currencySymbol: "€",
        soldOut: "sold out",
      },
      articles: {
        title: "Articles",
        minRead: "min read",
      },
      calendar: {
        title: "Calendar",
      },
      apps: {
        title: "Apps",
        tooltip: "Check out all our self-hosted apps",
        visit: "visit app",
      },
      user: {
        profile: "Profile",
        openInClient: "Open in client",
        follow: "Follow",
        followers: "Followers",
        following: "Following",
      },
      zap: {
        title: "Zap",
        amount: "Amount",
        comment: "Comment",
        commentPlaceholder: "Zap comment",
        action: "Zap",
      },
      relays: {
        title: "Relays",
        tooltip:
          "Did you know that much of this website lives on nostr? A relay is where data is stored in the nostr protocol",
      },
      convert: {
        title: "Convert",
        price: "Price",
        euro: "Euro",
        sats: "Sats",
      },
      onboardingBitcoin: {
        title: "Starting with Bitcoin",
        description:
          "At Bitcoin Txoko we believe that the best way to learn about bitcoin is to use it, spend it and better yet, earn it. It only takes 10 minutes to set up a wallet and a store to start transacting on the Lightning Network with Bitcoin Txoko.",
        start: "Start",
        guide: "Guide",
        guides: "Guides",
        wallet: "Wallet",
        walletDescription:
          "A Lightning wallet allows you to make instant Bitcoin transactions with low fees. Bitcoin Txoko offers a Lightning escrow wallet for free. It also integrates with the BTCPay server store when you want to set one up later. Note that custodial means that Bitcoin Txoko is in custody of your funds. When you are ready to take on self-custody, you can switch to a self-custodial wallet like Phoenix.",
        lnaddress: "Lightning Address",
        lndhub: "LNDhub",
        boltcard: "BoltCard",
        boltcardDescription:
          "A BoltCard is like a debit card for the Lightning Network. You can reload it with funds and spend by tapping the card on NFC readers. Once you have set up a Lightning wallet with LNbits in the previous step, it only takes a few minutes to create a BoltCard. You can purchase an NFC card from our store. See our setup guide on how to set it up.",
        shop: "Shop",
        shopDescription:
          "With BTCPay server you can create a store to start selling your goods and services for Bitcoin, whether you want to create a Point of Sale or an online store. You can connect your existing wallet to receive transactions in Lightning. You can also link an on-chain wallet for larger transactions. It only takes a few minutes to set up. See our guide for more details.",
        register: "Register",
      },
      admin: {
        newEvent: "New event",
        title: "Event title",
        image: "Image",
        upload: "Upload",
        noFiles: "No files",
        start: "Start",
        end: "End",
        timeZone: "Time zone",
        calendar: "Calendar",
        locationName: "Location name",
        locationAddress: "Location address",
        latitude: "Latitude",
        longitude: "Longitude",
        geohash: "Geohash",
        getHash: "Get hash",
        description: "Description",
        submit: "Submit",
      },
      footer: {
        made: "Made with 💜 and ⚡️",
      },
    },
    es: {
      locale: {
        short: "ES",
        long: "es-ES",
      },
      details: "Detalles",
      home: "Inicio",
      sats: "sats",
      about: {
        welcome: "Ongi etorri! 🤙",
        bitcoiners: "bitcoiners",
        nostr: "nostr",
        body1:
          "es un espacio abierto de intercambio y aprendizaje. Surgió de manera bastante espontánea al juntarse unos pocos",
        body2: "mayormente a través de esa maravilla que es",
        body3:
          "para estar conectados compartiendo conocimientos y experiencias para aprender los unos de los otros mediante el estudio y el uso de herramientas. No hay una estructura definida, nos basamos en permanecer conectados entre nosotros tanto en línea como en encuentros periódicos.Por un lado vamos comentando lo que vamos haciendo cada uno de nosotros y sobre lo que nos vendría bien hablar y por otro hacemos puestas en común en los encuentros comentando avances y hablando sobre algo que hayamos concretado. El contacto permanente posibilita la cooperación resolviendo necesidades dentro del propio grupo, cada uno aporta lo que puede y se va creando esa infrastuctura a disposicion de todos.",
      },
      signin: {
        signin: "Iniciar sesión",
        signout: "Cerrar sesión",
        extension: "Extensión",
        extensionHelp: "Utilizar una extensión nostr para iniciar sesión.",
        nostrConnect: "Nostr Connect",
        nostrConnectHelp:
          "Un firmante remoto NIP-46 te permite mantener tu clave privada segura en una única ubicación y firmar remotamente eventos de Nostr. Crea un token con todos los permisos para eventos e introdúcelo a continuación. Sólo tendrás que hacerlo una vez.",
        token: "Token",
        submit: "Enviar",
        haveKeys: "Ya tengo claves nostr",
        noKeys: "Aún no tengo claves nostr",
        signup: "Registrarse",
        signupHelp: "Apuntarse con correo electrónico en Flockstr",
        flockstr: "Flockstr",
      },
      meetup: {
        title: "Próximo meetup",
        rsvp: "RSVP",
        areYouComing: "Vas a venir?",
        yes: "Sí",
        maybe: "No estoy seguro",
        no: "No",
        confirm: "Confirmar",
        attendees: "Asistentes",
        ended: "terminado",
      },
      share: {
        share: "Compartir",
        embed: "Compartir en Nostr",
        embedHelp:
          "Copiar la entidad que se parece a nostr:nevent... o naddr...",
        njump: "Compartir el enlace njump.me",
        njumpHelp:
          "Comparte este enlace para que tu amigo pueda abrirlo en el cliente nostr de su elección",
        page: "Compartir enlace",
        pageHelp: "Copiar el enlace al evento en nuestro sitio web",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Saldo",
        obsolete: "💀 Obsoleto",
        nutstash: "Nutstash",
        tooltip:
          "Un mint es como un banco para ecash, que ofrece transacciones instantáneas y privadas",
        rating: "calificación",
        r: "calificaciones",
        noDescription: "El mint no proporcionó una descripción.",
        eventNotFound: "Evento Cashu mint no encontrado.",
      },
      nodes: {
        channels: "Canales: ",
        capacity: "Capacidad: ",
        tooltip: "Este es nuestro nodo en la red Lightning",
      },
      shop: {
        title: "Tienda",
        buy: "Comprar",
        currencySymbol: "€",
        soldOut: "agotado",
      },
      articles: {
        title: "Artículos",
        minRead: "min de lectura",
      },
      calendar: {
        title: "Calendario",
      },
      apps: {
        title: "Apps",
        tooltip: "Ver todas las aplicaciones autoalojadas",
        visit: "visitar app",
      },
      user: {
        title: "Perfil",
        openInClient: "Abrir en cliente",
        follow: "Seguir",
        followers: "Seguidores",
        following: "Siguiendo",
      },
      zap: {
        title: "Zap",
        amount: "Cantidad",
        comment: "Comentario",
        commentPlaceholder: "Comentario para zap",
        action: "Zap",
      },
      relays: {
        title: "Relays",
        tooltip:
          "Sabías que gran parte de este sitio web vive en nostr? Un relay es donde se almacenan los datos en el protocolo nostr",
      },
      convert: {
        title: "Conversor",
        price: "Precio",
        euro: "Euro",
        sats: "Sats",
      },
      onboardingBitcoin: {
        title: "Empezar con Bitcoin",
        description:
          "En Bitcoin Txoko creemos que la mejor manera de aprender sobre bitcoin es usarlo, gastarlo y mejor aún, ganarlo. Sólo se tarda 10 minutos en configurar una billetera y una tienda para empezar a realizar transacciones en la Lightning Network con Bitcoin Txoko.",
        start: "Empezar",
        guide: "Guía",
        guides: "Guías",
        wallet: "Billetera",
        walletDescription:
          "Una billetera Lightning te permite realizar transacciones instantáneas en Bitcoin con bajas comisiones. Bitcoin Txoko ofrece una billetera Lightning de custodia de forma gratuita. También se integra en la tienda del servidor BTCPay cuando quieras configurar una más adelante. Ten en cuenta que custodial significa que Bitcoin Txoko está en custodia de tus fondos. Cuando estés listo para asumir la autocustodia, puedes cambiar a una billetera de autocustodia como Phoenix.",
        lnaddress: "Dirección Lightning",
        lndhub: "LNDhub",
        boltcard: "BoltCard",
        boltcardDescription:
          "Una BoltCard es como una tarjeta de débito para la red Lightning. Puedes recargarla con fondos y gastar tocando la tarjeta en lectores NFC. Una vez que hayas configurado una billetera Lightning con LNbits en el paso anterior, sólo tardarás unos minutos en crear una BoltCard. Puedes comprar una tarjeta NFC en nuestra tienda. Consulta nuestra guía de configuración para saber cómo configurarla.",
        shop: "Tienda",
        shopDescription:
          "Con el servidor BTCPay puedes crear una tienda para empezar a vender tus bienes y servicios por Bitcoin, tanto si deseas crear un Punto de Venta como una tienda online. Puedes conectar tu billetera existente para recibir transacciones en Lightning. También puedes vincular una billetera on-chain para transacciones más grandes. Sólo se tarda unos minutos en configurarlo. Consulta nuestra guía para más detalles.",
        register: "Registrar",
      },
      admin: {
        newEvent: "Nuevo evento",
        title: "Título del evento",
        image: "Imagen",
        upload: "Subir",
        noFiles: "No hay archivos",
        start: "Comienzo",
        end: "Fin",
        timeZone: "Zona horaria",
        calendar: "Calendario",
        locationName: "Nombre del lugar",
        locationAddress: "Dirección del lugar",
        latitude: "Latitud",
        longitude: "Longitud",
        geohash: "Geohash",
        getHash: "Obtener hash",
        description: "Descripción",
        submit: "Publicar",
      },
      footer: {
        made: "Hecho con 💜 y ⚡️",
      },
    },
    eu: {
      locale: {
        short: "EU",
        long: "es-ES",
      },
      details: "Details",
      home: "Home",
      sats: "sats",
      about: {
        welcome: "Ongi etorri! 🤙",
        bitcoiners: "bitcoiners",
        nostr: "nostr",
        body1:
          "es un espacio abierto de intercambio y aprendizaje. Surgió de manera bastante espontánea al juntarse unos pocos",
        body2: "mayormente a través de esa maravilla que es",
        body3:
          "para estar conectados compartiendo conocimientos y experiencias para aprender los unos de los otros mediante el estudio y el uso de herramientas. No hay una estructura definida, nos basamos en permanecer conectados entre nosotros tanto en línea como en encuentros periódicos.Por un lado vamos comentando lo que vamos haciendo cada uno de nosotros y sobre lo que nos vendría bien hablar y por otro hacemos puestas en común en los encuentros comentando avances y hablando sobre algo que hayamos concretado. El contacto permanente posibilita la cooperación resolviendo necesidades dentro del propio grupo, cada uno aporta lo que puede y se va creando esa infrastuctura a disposicion de todos.",
      },
      signin: {
        signin: "Sign in",
        signout: "Sign out",
        extension: "Extension",
        extensionHelp: "Use a nostr extension to sign in.",
        nostrConnect: "Nostr Connect",
        nostrConnectHelp:
          "A NIP-46 remote signer allows you to keep your private key secured in a single location and remotely sign Nostr events. Create a token with full event permissions and then enter it below. You'll only have to do this once.",
        token: "Token",
        submit: "Submit",
        haveKeys: "I already have nostr keys",
        noKeys: "I don't have nostr keys yet",
        signup: "Sign up",
        signupHelp: "Sign up with email on Flockstr",
        flockstr: "Flockstr",
      },
      meetup: {
        title: "Next meetup",
        rsvp: "RSVP",
        areYouComing: "Are you coming?",
        yes: "Yes",
        maybe: "Maybe",
        no: "No",
        confirm: "Confirm",
        attendees: "Attendees",
        ended: "ended",
      },
      share: {
        share: "Share",
        embed: "Share on Nostr",
        embedHelp:
          "Copy the embed code which looks like nostr:nevent... or naddr...",
        njump: "Share njump.me link",
        njumpHelp:
          "Share this link so your friend can open it in a nostr client of their choosing",
        page: "Share page link",
        pageHelp: "Copy the link to this event on our website",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Balance",
        obsolete: "💀 Obsolete",
        nutstash: "Nutstash",
        tooltip:
          "A mint is like a bank for ecash that offers instant and private transactions",
        rating: "rating",
        r: "ratings",
        noDescription: "The mint didn't provide a description.",
        eventNotFound: "Cashu mint event not found.",
      },
      nodes: {
        channels: "Channels: ",
        capacity: "Capacity: ",
        tooltip: "This is our node on the Lightning Network",
      },
      shop: {
        title: "Shop",
        buy: "Buy",
        currencySymbol: "€",
        soldOut: "sold out",
      },
      articles: {
        title: "Articles",
        minRead: "min read",
      },
      calendar: {
        title: "Calendar",
      },
      apps: {
        title: "Apps",
        tooltip: "Check out all our self-hosted apps",
        visit: "visit app",
      },
      user: {
        profile: "Profile",
        openInClient: "Open in client",
        follow: "Follow",
        followers: "Followers",
        following: "Following",
      },
      zap: {
        title: "Zap",
        amount: "Amount",
        comment: "Comment",
        commentPlaceholder: "Zap comment",
        action: "Zap",
      },
      relays: {
        title: "Relays",
        tooltip:
          "Did you know that much of this website lives on nostr? A relay is where data is stored in the nostr protocol",
      },
      convert: {
        title: "Convert",
        price: "Price",
        euro: "Euro",
        sats: "Sats",
      },
      onboardingBitcoin: {
        title: "Starting with Bitcoin",
        description:
          "At Bitcoin Txoko we believe that the best way to learn about bitcoin is to use it, spend it and better yet, earn it. It only takes 10 minutes to set up a wallet and a store to start transacting on the Lightning Network with Bitcoin Txoko.",
        start: "Start",
        guide: "Guide",
        guides: "Guides",
        wallet: "Wallet",
        walletDescription:
          "A Lightning wallet allows you to make instant Bitcoin transactions with low fees. Bitcoin Txoko offers a Lightning escrow wallet for free. It also integrates with the BTCPay server store when you want to set one up later. Note that custodial means that Bitcoin Txoko is in custody of your funds. When you are ready to take on self-custody, you can switch to a self-custodial wallet like Phoenix.",
        lnaddress: "Lightning Address",
        lndhub: "LNDhub",
        boltcard: "BoltCard",
        boltcardDescription:
          "A BoltCard is like a debit card for the Lightning Network. You can reload it with funds and spend by tapping the card on NFC readers. Once you have set up a Lightning wallet with LNbits in the previous step, it only takes a few minutes to create a BoltCard. You can purchase an NFC card from our store. See our setup guide on how to set it up.",
        shop: "Shop",
        shopDescription:
          "With BTCPay server you can create a store to start selling your goods and services for Bitcoin, whether you want to create a Point of Sale or an online store. You can connect your existing wallet to receive transactions in Lightning. You can also link an on-chain wallet for larger transactions. It only takes a few minutes to set up. See our guide for more details.",
        register: "Register",
      },
      admin: {
        newEvent: "New event",
        title: "Event title",
        image: "Image",
        upload: "Upload",
        noFiles: "No files",
        start: "Start",
        end: "End",
        timeZone: "Time zone",
        calendar: "Calendar",
        locationName: "Location name",
        locationAddress: "Location address",
        latitude: "Latitude",
        longitude: "Longitude",
        geohash: "Geohash",
        getHash: "Get hash",
        description: "Description",
        submit: "Submit",
      },
      footer: {
        made: "Made with 💜 and ⚡️",
      },
    },
  });
  locale.set(_locale);
}

export { _, setupI18n };
