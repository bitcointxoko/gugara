import ndk from '$lib/stores/ndk';
import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
import type { NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';

export let currentUser: NDKUser | null;
export let currentUserProfile: NDKUserProfile | null;

export async function login() {
	const signer = new NDKNip07Signer();
	ndk.signer = signer;
	signer.user().then((user) => {
		user.ndk = ndk;
		user.fetchProfile().then((eventSet) => {
			console.log(user);
			currentUser = user as NDKUser;
			currentUserProfile = user.profile as NDKUserProfile;
		});
	});
}

export async function logout() {
	currentUserProfile = null;
}
