import NDK from '@nostr-dev-kit/ndk';
import { browser } from '$app/environment';
import { PUBLIC_PUBKEY, PUBLIC_RELAYS } from '$env/static/public';

let relayUrls: string[];
relayUrls = PUBLIC_RELAYS.split(',');

// Create a new NDK instance with explicit relays
const ndk = new NDK({
	explicitRelayUrls: relayUrls
});
// Now connect to specified relays
if (browser) {
	ndk.connect().then(() => {
		console.log('Connected');
	});
}

export default ndk;

export const user = ndk.getUser({ npub: PUBLIC_PUBKEY });
