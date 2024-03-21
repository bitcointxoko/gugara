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
			meetup: {
				title: 'Next meetup',
				rsvp: 'RSVP'
			},
			mint: {
				title: 'Mint',
				balance: '🥜 Balance: ',
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
			meetup: {
				title: 'Próximo meetup',
				rsvp: 'RSVP'
			},
			mint: {
				title: 'Mint',
				balance: '🥜 Saldo: ',
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
				balance: '🥜 Saldo: ',
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
				balance: '🥜 餘額：',
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
