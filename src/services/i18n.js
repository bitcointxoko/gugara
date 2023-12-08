import { dictionary, locale, _ } from "svelte-i18n";
function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  dictionary.set({
    en: {
      loading: "loading...",
      sats: "sats",
      greeting: {
        morning: "Good morning.",
        midday: "Good afternoon.",
        afternoon: "Good afternoon.",
        night: "Good night.",
        welcome: "Welcome! 🤙",
      },
      meetup: {
        title: "Next meetups",
        rsvp: "RSVP",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Balance: ",
      },
      lottery: {
        title: "Lottery",
        balance: "🎄 Balance: ",
      },
      damus: {
        title: "Damus Zaps",
        description: "⚡️ Toggle zaps in Damus Testflight",
      },
      wallet: {
        title: "+ New wallet ⚡️",
        description: "Create a new LNbits wallet",
      },
      store: {
        title: "+ New store",
        description: "Create a new BTCPay store",
      },
      groupChat: {
        title: "SimpleX 💬",
        description: "Join the SimpleX group",
      },
      mutiny: {
        title: "Mutiny",
        description: "Mutiny hosted by ",
      },
      nodes: {
        title: "Nodes ⚡️",
        channels: "Channels: ",
        capacity: "Capacity: ",
      },
      shop: {
        title: "Shop 🛒",
        buy: "Buy for ",
      },
      articles: {
        title: "Articles 📖",
        minRead: "min read",
      },
      notes: "Notes 📝",
      footer: {
        donate: "Donate with",
        contribute: "Contribute on GitHub",
        made: "Made with 💜 and ⚡️",
      },
    },
    es: {
      loading: "cargando...",
      sats: "sats",
      greeting: {
        morning: "Buenos días.",
        midday: "Buenas tardes.",
        afternoon: "Buenas tardes.",
        night: "Buenas noches.",
        welcome: "Ongi etorri! 🤙",
      },
      meetup: {
        title: "Próximos meetups",
        rsvp: "RSVP",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Saldo: ",
      },
      lottery: {
        title: "Lotería",
        balance: "🎄 Saldo: ",
      },
      damus: {
        title: "Damus Zaps",
        description: "⚡️ Habilitar zaps en Damus Testflight",
      },
      wallet: {
        title: "+ Nueva billetera ⚡️",
        description: "Crear una nueva billetera LNbits",
      },
      store: {
        title: "+ Nueva tienda",
        description: "Crear una nueva tienda BTCPay",
      },
      groupChat: {
        title: "SimpleX 💬",
        description: "Únete al grupo SimpleX",
      },
      mutiny: {
        title: "Mutiny",
        description: "Mutiny alojado por ",
      },
      nodes: {
        title: "Nodos ⚡️",
        channels: "Canales: ",
        capacity: "Capacidad: ",
      },
      shop: {
        title: "Tienda 🛒",
        buy: "Comprar por ",
      },
      articles: {
        title: "Artículos 📖",
        minRead: "min de lectura",
      },
      notes: "Notas 📝",
      footer: {
        donate: "Donar con",
        contribute: "Contribuir en GitHub",
        made: "Hecho con 💜 y ⚡️",
      },
    },
    zh: {
      loading: "加載中...",
      sats: "聰",
      greeting: {
        morning: "早安。",
        midday: "下午好。",
        afternoon: "下午好。",
        night: "晚安。",
        welcome: "歡迎！ 🤙",
      },
      meetup: {
        title: "下次聚會",
        rsvp: "RSVP",
      },
      mint: {
        title: "鑄幣廠",
        balance: "🥜 餘額：",
      },
      lottery: {
        title: "彩票",
        balance: "🎄 餘額：",
      },
      damus: {
        title: "達摩打閃",
        description: "⚡️ 在達摩 Testflight 中啟用打閃",
      },
      wallet: {
        title: "+ 新錢包 ⚡️",
        description: "創建一個新的 LNbits 錢包",
      },
      store: {
        title: "+ 新商店",
        description: "創建一個新的 BTCPay 商店",
      },
      groupChat: {
        title: "SimpleX 💬",
        description: "加入 SimpleX 聊天群",
      },
      nodes: {
        title: "節點 ⚡️",
        channels: "通道：",
        capacity: "容量：",
      },
      shop: {
        title: "商店 🛒",
        buy: "購買 ",
      },
      articles: {
        title: "文章 📖",
        minRead: "分鐘閱讀",
      },
      notes: "筆記 📝",
      footer: {
        donate: "捐助",
        contribute: "在 GitHub 上參與",
        made: "使用 💜 和 ⚡️ 建造",
      },
    },
    nl: {
      loading: "loading...",
      sats: "sats",
      greeting: {
        morning: "Goedemorgen.",
        midday: "Goedemiddag.",
        afternoon: "Goedemiddag.",
        night: "Goedenacht.",
        welcome: "Welkom! 🤙",
      },
      meetup: {
        title: "Volgende meetups",
        rsvp: "RSVP",
      },
      mint: {
        title: "Mint",
        balance: "🥜 Saldo: ",
      },
      lottery: {
        title: "Loterij",
        balance: "🎄 Saldo: ",
      },
      damus: {
        title: "Damus Zaps",
        description: "⚡️ Schakel zappen in Damus TestFlight",
      },
      wallet: {
        title: "+ Nieuw wallet ⚡️",
        description: "Maak een nieuw LNbits wallet",
      },
      groupChat: {
        title: "SimpleX 💬",
        description: "Word lid van de SimpleX groep",
      },
      mutiny: {
        title: "Mutiny",
        description: "Mutiny gehost door ",
      },
      nodes: {
        title: "Nodes ⚡️",
        channels: "Kanalen: ",
        capacity: "Capaciteit: ",
      },
      shop: {
        title: "Winkel 🛒",
        buy: "Kopen voor ",
      },
      articles: {
        title: "Artikelen 📖",
        minRead: "min lezen",
      },
      notes: "Noten 📝",
      footer: {
        donate: "Doneer met",
        contribute: "Meewerken op GitHub",
        made: "Gemaakt met 💜 en ⚡️",
      },
    },
  });
  locale.set(_locale);
}

export { _, setupI18n };
