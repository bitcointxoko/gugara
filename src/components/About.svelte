<script>
	import { Card } from 'flowbite-svelte';
	import { _ } from '../services/i18n';
	import ndk from '$lib/stores/ndk';
	import { PUBLIC_NAME, PUBLIC_PUBKEY } from '$env/static/public';
	import Popover from './user/Popover.svelte';

	const user = $ndk.getUser({ pubkey: PUBLIC_PUBKEY });
</script>

<Card size="lg" class="bg-warm-50">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{$_("about.welcome")}
	</h5>
	<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
		<a id="popover-0" href="/u/{user.npub}"
			><span class="font-bold decoration-dotted hover:underline">{PUBLIC_NAME}</span>
		</a>
		{$_("about.body")}
	</p>
	<Popover {user} />
</Card>

