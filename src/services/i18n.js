import { dictionary, locale, _ } from 'svelte-i18n';
function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
	dictionary.set({
		en: {
			locale: {
				short: 'EN',
				long: 'en-GB'
			},
			details: 'Details',
			home: 'Home',
			sats: 'sats',
			signin: {
				signin: 'Sign in',
				extension: 'Extension',
				extensionHelp: 'Use a nostr extension to sign in.',
				nostrConnect: 'Nostr Connect',
				nostrConnectHelp:
					"A NIP-46 remote signer allows you to keep your private key secured in a single location and remotely sign Nostr events. Create a token with full event permissions and then enter it below. You'll only have to do this once.",
				token: 'Token',
				submit: 'Submit',
				haveKeys: 'I already have nostr keys',
				noKeys: "I don't have nostr keys yet",
				signup: 'Sign up',
				signupHelp: 'Sign up with email on Flockstr',
				flockstr: 'Flockstr'
			},
			meetup: {
				title: 'Next meetup',
				rsvp: 'RSVP',
				areYouComing: 'Are you coming?',
				yes: 'Yes',
				maybe: 'Maybe',
				no: 'No',
				confirm: 'Confirm'
			},
			mint: {
				title: 'Mint',
				balance: '🥜 Balance',
				nutstash: 'Nutstash',
				tooltip: 'A mint is like a bank for ecash that offers instant and private transactions'
			},
			nodes: {
				channels: 'Channels: ',
				capacity: 'Capacity: ',
				tooltip: 'This is our node on the Lightning Network'
			},
			shop: {
				title: 'Shop',
				buy: 'Buy',
				currencySymbol: '€'
			},
			articles: {
				title: 'Articles',
				minRead: 'min read'
			},
			calendar: {
				title: 'Calendar'
			},
			apps: {
				title: 'Apps',
				tooltip: 'Check out all our self-hosted apps',
				visit: 'visit app'
			},
			profile: {
				title: 'Profile',
				openInClient: 'Open in client',
				follow: 'Follow',
				followers: 'Followers',
				following: 'Following'
			},
			relays: {
				title: 'Relays',
				tooltip:
					'Did you know that much of this website lives on nostr? A relay is where data is stored in the nostr protocol'
			},
			convert: {
				title: 'Convert',
				price: 'Price',
				euro: 'Euro',
				sats: 'Sats'
			},
			onboardingBitcoin: {
				title: 'Starting with Bitcoin',
				description:
					'At Bitcoin Txoko we believe that the best way to learn about bitcoin is to use it, spend it and better yet, earn it. It only takes 10 minutes to set up a wallet and a store to start transacting on the Lightning Network with Bitcoin Txoko.',
				start: 'Start',
				guide: 'Guide',
				guides: 'Guides',
				wallet: 'Wallet',
				walletDescription:
					'A Lightning wallet allows you to make instant Bitcoin transactions with low fees. Bitcoin Txoko offers a Lightning escrow wallet for free. It also integrates with the BTCPay server store when you want to set one up later. Note that custodial means that Bitcoin Txoko is in custody of your funds. When you are ready to take on self-custody, you can switch to a self-custodial wallet like Mutiny or Phoenix.',
				lnaddress: 'Lightning Address',
				lndhub: 'LNDhub',
				boltcard: 'BoltCard',
				boltcardDescription:
					'A BoltCard is like a debit card for the Lightning Network. You can reload it with funds and spend by tapping the card on NFC readers. Once you have set up a Lightning wallet with LNbits in the previous step, it only takes a few minutes to create a BoltCard. You can purchase an NFC card from our store. See our setup guide on how to set it up.',
				shop: 'Shop',
				shopDescription:
					'With BTCPay server you can create a store to start selling your goods and services for Bitcoin, whether you want to create a Point of Sale or an online store. You can connect your existing wallet to receive transactions in Lightning. You can also link an on-chain wallet for larger transactions. It only takes a few minutes to set up. See our guide for more details.',
				register: 'Register'
			},
			footer: {
				simplex: 'SimpleX',
				github: 'GitHub',
				made: 'Made with 💜 and ⚡️'
			}
		},
		es: {
			locale: {
				short: 'ES',
				long: 'es-ES'
			},
			details: 'Detalles',
			home: 'Inicio',
			sats: 'sats',
			signin: {
				signin: 'Iniciar sesión',
				extension: 'Extensión',
				extensionHelp: 'Utilizar una extensión nostr para iniciar sesión.',
				nostrConnect: 'Nostr Connect',
				nostrConnectHelp:
					'Un firmante remoto NIP-46 te permite mantener tu clave privada segura en una única ubicación y firmar remotamente eventos de Nostr. Crea un token con todos los permisos para eventos e introdúcelo a continuación. Sólo tendrás que hacerlo una vez.',
				token: 'Token',
				submit: 'Enviar',
				haveKeys: 'Ya tengo claves nostr',
				noKeys: 'Aún no tengo claves nostr',
				signup: 'Registrarse',
				signupHelp: 'Apuntarse con correo en Flockstr',
				flockstr: 'Flockstr'
			},
			meetup: {
				title: 'Próximo meetup',
				rsvp: 'RSVP',
				areYouComing: 'Vas a venir?',
				yes: 'Sí',
				maybe: 'No estoy seguro',
				no: 'No',
				confirm: 'Confirmar'
			},
			mint: {
				title: 'Mint',
				balance: '🥜 Saldo',
				nutstash: 'Nutstash',
				tooltip:
					'Un mint es como un banco para ecash, que ofrece transacciones instantáneas y privadas'
			},
			nodes: {
				channels: 'Canales: ',
				capacity: 'Capacidad: ',
				tooltip: 'Este es nuestro nodo en la red Lightning'
			},
			shop: {
				title: 'Tienda',
				buy: 'Comprar',
				currencySymbol: '€'
			},
			articles: {
				title: 'Artículos',
				minRead: 'min de lectura'
			},
			calendar: {
				title: 'Calendario'
			},
			apps: {
				title: 'Apps',
				tooltip: 'Consulta toda las aplicaciones autoalojadas',
				visit: 'visitar app'
			},
			profile: {
				title: 'Perfil',
				openInClient: 'Abrir en cliente',
				follow: 'Seguir',
				followers: 'Seguidores',
				following: 'Siguiendo'
			},
			relays: {
				title: 'Relays',
				tooltip:
					'Sabías que gran parte de este sitio web vive en nostr? Un relay es donde se almacenan los datos en el protocolo nostr'
			},
			convert: {
				title: 'Conversor',
				price: 'Precio',
				euro: 'Euro',
				sats: 'Sats'
			},
			onboardingBitcoin: {
				title: 'Empezar con Bitcoin',
				description:
					'En Bitcoin Txoko creemos que la mejor manera de aprender sobre bitcoin es usarlo, gastarlo y mejor aún, ganarlo. Sólo se tarda 10 minutos en configurar una billetera y una tienda para empezar a realizar transacciones en la Lightning Network con Bitcoin Txoko.',
				start: 'Empezar',
				guide: 'Guía',
				guides: 'Guías',
				wallet: 'Billetera',
				walletDescription:
					'Una billetera Lightning te permite realizar transacciones instantáneas en Bitcoin con bajas comisiones. Bitcoin Txoko ofrece una billetera Lightning de custodia de forma gratuita. También se integra en la tienda del servidor BTCPay cuando quieras configurar una más adelante. Ten en cuenta que custodial significa que Bitcoin Txoko está en custodia de tus fondos. Cuando estés listo para asumir la autocustodia, puedes cambiar a una billetera de autocustodia como Mutiny o Phoenix.',
				lnaddress: 'Dirección Lightning',
				lndhub: 'LNDhub',
				boltcard: 'BoltCard',
				boltcardDescription:
					'Una BoltCard es como una tarjeta de débito para la red Lightning. Puedes recargarla con fondos y gastar tocando la tarjeta en lectores NFC. Una vez que hayas configurado una billetera Lightning con LNbits en el paso anterior, sólo tardarás unos minutos en crear una BoltCard. Puedes comprar una tarjeta NFC en nuestra tienda. Consulta nuestra guía de configuración para saber cómo configurarla.',
				shop: 'Tienda',
				shopDescription:
					'Con el servidor BTCPay puedes crear una tienda para empezar a vender tus bienes y servicios por Bitcoin, tanto si deseas crear un Punto de Venta como una tienda online. Puedes conectar tu billetera existente para recibir transacciones en Lightning. También puedes vincular una billetera on-chain para transacciones más grandes. Sólo se tarda unos minutos en configurarlo. Consulta nuestra guía para más detalles.',
				register: 'Registrar'
			},

			footer: {
				simplex: 'SimpleX',
				github: 'GitHub',
				made: 'Hecho con 💜 y ⚡️'
			}
		},
		eu: {
			locale: {
				short: 'EU',
				long: 'es-ES'
			},
			details: 'Xehetasunak',
			home: 'Hasiera',
			sats: 'satak',
			meetup: {
				title: 'Hurrengo bilera',
				rsvp: 'RSVP'
			},
			mint: {
				title: 'Mint',
				balance: '🥜 Saldo',
				nutstash: 'Nutstash',
				tooltip:
					'Mint bat ihes egiteko banku bat bezalakoa da, berehalako tranakzioak eta transakzio pribatuak eskaintzen dituena'
			},
			nodes: {
				channels: 'Kanalak: ',
				capacity: 'Edukiera: ',
				tooltip: 'Hau da gure nodoa Lightning sarean'
			},
			shop: {
				title: 'Denda',
				buy: 'Erosi',
				currencySymbol: '€'
			},
			articles: {
				title: 'Artikuluak',
				minRead: 'minutuko irakurketa'
			},
			calendar: {
				title: 'Egutegi'
			},
			apps: {
				title: 'Aplikazioak',
				tooltip: 'Autozaindutako gure aplikazioak ezagutu',
				visit: 'app-a bisitatu'
			},
			profile: {
				title: 'Profil',
				openInClient: 'Bezeroan ireki',
				follow: 'Jarraitu',
				followers: 'Jarraitzaileak',
				following: 'Jarraitzen'
			},
			relays: {
				title: 'Relays',
				tooltip:
					'Ba al zenekien webgune honen zati handi bat nostr hizkuntzan bizi dela? Relay batean gordetzen dira datuak nostr protokoloan'
			},
			onboardingBitcoin: {
				title: 'Empezar con Bitcoin',
				description:
					'En Bitcoin Txoko creemos que la mejor manera de aprender sobre bitcoin es usarlo, gastarlo y mejor aún, ganarlo. Sólo se tarda 10 minutos en configurar una billetera y una tienda para empezar a realizar transacciones en la Lightning Network con Bitcoin Txoko.',
				start: 'Empezar',
				guide: 'Guía',
				guides: 'Guías',
				wallet: 'Billetera',
				walletDescription:
					'Una billetera Lightning te permite realizar transacciones instantáneas en Bitcoin con bajas comisiones. Bitcoin Txoko ofrece una billetera Lightning de custodia de forma gratuita. También se integra en la tienda del servidor BTCPay cuando quieras configurar una más adelante. Ten en cuenta que custodial significa que Bitcoin Txoko está en custodia de tus fondos. Cuando estés listo para asumir la autocustodia, puedes cambiar a una billetera de autocustodia como Mutiny o Phoenix.',
				lnaddress: 'Dirección Lightning',
				lndhub: 'LNDhub',
				boltcard: 'BoltCard',
				boltcardDescription:
					'Una BoltCard es como una tarjeta de débito para la red Lightning. Puedes recargarla con fondos y gastar tocando la tarjeta en lectores NFC. Una vez que hayas configurado una billetera Lightning con LNbits en el paso anterior, sólo tardarás unos minutos en crear una BoltCard. Puedes comprar una tarjeta NFC en nuestra tienda. Consulta nuestra guía de configuración para saber cómo configurarla.',
				shop: 'Tienda',
				shopDescription:
					'Con el servidor BTCPay puedes crear una tienda para empezar a vender tus bienes y servicios por Bitcoin, tanto si deseas crear un Punto de Venta como una tienda online. Puedes conectar tu billetera existente para recibir transacciones en Lightning. También puedes vincular una billetera on-chain para transacciones más grandes. Sólo se tarda unos minutos en configurarlo. Consulta nuestra guía para más detalles.',
				register: 'Registrar'
			},
			footer: {
				simplex: 'SimpleX',
				github: 'GitHub',
				made: 'Made with 💜 and ⚡️'
			}
		},
		zh: {
			locale: {
				short: 'CN',
				long: 'zh-TW'
			},
			details: '詳情',
			home: '首頁',
			sats: '聰',
			meetup: {
				title: '下次聚會',
				rsvp: 'RSVP'
			},
			mint: {
				title: '鑄幣廠',
				balance: '🥜 餘額',
				nutstash: 'Nutstash',
				tooltip:
					'Un mint es como un banco para ecash, que ofrece transacciones instantáneas y privadas'
			},
			nodes: {
				channels: '通道：',
				capacity: '容量：',
				tooltip: '這是我們在閃電網絡上的節點'
			},
			shop: {
				title: '商店',
				buy: '購買 '
			},
			articles: {
				title: '文章',
				minRead: '分鐘閱讀'
			},
			calendar: {
				title: '日曆'
			},
			apps: {
				title: '應用程式',
				tooltip: '查看所有我們自託管的應用程式',
				visit: '訪問'
			},
			profile: {
				title: '檔案',
				openInClient: '在客戶端中打開',
				follow: '關注',
				followers: '粉絲',
				following: '關注'
			},
			relays: {
				title: '中繼器',
				tooltip:
					'你知道本網站的大部分內容都保存在 nostr 上嗎？中繼器是在 nostr 協議裏儲存數據的地方'
			},
			footer: {
				simplex: 'SimpleX',
				github: 'GitHub',
				made: '用 💜 和 ⚡️ 建造'
			}
		}
	});
	locale.set(_locale);
}

export { _, setupI18n };
