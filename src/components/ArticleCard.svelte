<script lang="ts">
	import { _ } from "../services/i18n";
	import type { NDKEvent } from "@nostr-dev-kit/ndk";
	import { PUBLIC_NOSTR_LONG_FORM_CLIENT } from "$env/static/public";
	import Tags from "../components/Tags.svelte";
	import { Card } from "flowbite-svelte";
	import { readingTime } from "$lib/util";
	import LikeActions from "./actions/LikeActions.svelte";

	export let event: NDKEvent;
</script>

<Card img={event.tagValue("image")}>
	<a
		href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}a/{event.encode()}"
		class="text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white"
	>
		{event.tagValue("title")}
	</a>
	<div class="mx-1 mb-2 border-b border-dotted text-sm font-light">
		{new Date(
			Number(event.tagValue("published_at")) * 1000
		).toLocaleDateString()}
		//
		<span>
			{readingTime(event.content)}
			{$_("articles.minRead")}
		</span>
	</div>
	<Tags tags={event.tags.filter((v) => v[0] === "t")} />
	<p
		class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
	>
		{event.tagValue("summary")}
	</p>
	<LikeActions {event} />
</Card>
