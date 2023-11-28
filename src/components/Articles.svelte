<script lang="ts">
    import { _ } from '../services/i18n';
    import ndk from "$lib/stores/ndk";
    import { PUBLIC_NOSTR_LONG_FORM_CLIENT, PUBLIC_PUBKEY } from "$env/static/public";

    const user = ndk.getUser({npub: PUBLIC_PUBKEY});

    const eventsPromise = ndk.fetchEvents({kinds:[30023], authors:[user.hexpubkey]});

    export function getTagValues(tags: string[][], name: string): string[] | null {
        const found = tags.find((v) => v[0] === name);
        if (!found) return null;
        const [, ...values] = found;
        return values;
    };

    export function readingTime(text: string): number {
	const wpm = 225;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
}


</script>

<div class="basis-1/3 p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-amber-500 bg-white text-black font-mono max-w-lg">
    <h2 class="text-xl">{$_('articles.title')}</h2>
    <div class="mt-2 divide-y">
        {#await eventsPromise then events}
            {#each Array.from(events) as event}
            <div class="text-gray-600 hover:text-amber-600">
                <a href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}/a/{event.encode()}">
                    <h3 class="font-semibold mt-2">{getTagValues(event.tags, "title")}</h3>
                    <div class="mt-1 text-sm font-thin text-gray-500 border-b border-dotted">{new Date(Number(getTagValues(event.tags, "published_at")) * 1000).toLocaleDateString()} / <span>
                        {readingTime(event.content)} {$_('articles.minRead')}
                    </div>
                    <p class="p-2 text-gray-600 border-gray-300">{getTagValues(event.tags, "summary")}</p>
                </a>
            </div>
            {/each}
        {/await}
    </div>
</div>