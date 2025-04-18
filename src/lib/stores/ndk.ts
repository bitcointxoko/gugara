import { PUBLIC_PUBKEY, PUBLIC_RELAYS } from "$env/static/public";
import { browser } from "$app/environment";
import type { NDKCacheAdapter } from "@nostr-dev-kit/ndk";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";
import NDKSvelte from "@nostr-dev-kit/ndk-svelte";
import NDK, { NDKRelayAuthPolicies } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

let relayUrls: string[];
relayUrls = PUBLIC_RELAYS.split(",");

// Create a new NDK instance with explicit relays
// const ndk = new NDK({
// explicitRelayUrls: relayUrls
// });
// Now connect to specified relays
// if (browser) {
// ndk.connect().then(() => {
// console.log('Connected');
// });
// }

let cacheAdapter: NDKCacheAdapter | undefined;

if (browser) {
  cacheAdapter = new NDKCacheAdapterDexie({ dbName: "gugara" });
}

// export const ndkStore = new NDKSvelte({
// explicitRelayUrls: [
// "wss://purplepag.es",
// "wss://relay.nostr.band",
// "wss://nos.lol",
// 'wss://relay.snort.social',
// "wss://relay.damus.io",
// "wss://nostr.wine",
// "wss://bostr.bitcointxoko.com",
// "ws://localhost:8080",
// ],
// explicitRelayUrls: relayUrls,
// cacheAdapter: cacheAdapter,
// });

// ndkStore.connect().then(() => console.log("NDK Connected"));

// Create a singleton instance that is the default export
// const ndk = writable(ndkStore);
const ndkStore = new NDKSvelte({
  explicitRelayUrls: relayUrls,
  cacheAdapter: cacheAdapter,
});
ndkStore.relayAuthDefaultPolicy = NDKRelayAuthPolicies.signIn({
  ndk: ndkStore,
});

ndkStore.connect().then(() => console.log("NDK Connected"));

const ndk = writable(ndkStore);

export const bunkerNDKStore = new NDK({
  explicitRelayUrls: [
    "wss://relay.nsecbunker.com",
    "wss://nos.lol",
    "wss://relay.damus.io",
    "wss://relay.nostr.band",
  ],
  enableOutboxModel: false,
});

bunkerNDKStore.connect().then(() => console.log("Bunker NDK Connected"));
export const bunkerNdk = writable(bunkerNDKStore);

// export const user = ndk.getUser({ npub: PUBLIC_PUBKEY });

export default ndk;
