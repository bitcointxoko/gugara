<script lang="ts">
	import { NDKEvent } from '@nostr-dev-kit/ndk';
	import React from './React.svelte';
	import Zap from './Zap.svelte';

	export let event: NDKEvent;
</script>

<div class="flex gap-2">
	<React {event} />
	<Zap {event} />
</div>
