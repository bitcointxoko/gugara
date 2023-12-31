<script lang="ts">
  import { _ } from "../../services/i18n";
  import ndk from "$lib/stores/ndk";
  import {
    PUBLIC_NOSTR_LONG_FORM_CLIENT,
    PUBLIC_PUBKEY,
  } from "$env/static/public";
  import Tags from "../../components/Tags.svelte";

  const user = ndk.getUser({ npub: PUBLIC_PUBKEY });

  const eventsPromise = ndk.fetchEvents({
    kinds: [30023],
    authors: [user.hexpubkey],
  });

  export function getTagValues(
    tags: string[][],
    name: string
  ): string[] | null {
    const found = tags.find((v) => v[0] === name);
    if (!found) return null;
    const [, ...values] = found;
    return values;
  }

  export function readingTime(text: string): number {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  }
</script>

<main class="flex flex-wrap flex-row items-start justify-center">
  <section
    class="mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    {#await eventsPromise then events}
      {#each Array.from(events) as event}
        <div
          class="p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-w-lg text-muted-bright hover:text-highlight"
        >
          <a href="{PUBLIC_NOSTR_LONG_FORM_CLIENT}/a/{event.encode()}">
            {#if getTagValues(event.tags, "image")}
              <img
                src={getTagValues(event.tags, "image")}
                alt={getTagValues(event.tags, "title")}
                class="rounded-md mt mr-48"
              />
            {/if}
            <div class="mt-2 text-xs">
              <Tags tags={event.tags.filter((v) => v[0] === "t")} />
            </div>
            <h3 class="font-semibold mt-2 mx-1">
              {getTagValues(event.tags, "title")}
            </h3>
            <div
              class="mt-1 mx-1 text-sm font-thin text-muted-bright border-b border-dotted"
            >
              {new Date(
                Number(getTagValues(event.tags, "published_at")) * 1000
              ).toLocaleDateString()} //
              <span>
                {readingTime(event.content)}
                {$_("articles.minRead")}
              </span>
            </div>
            <p class="p-2 text-muted-bright border-gray-300">
              {getTagValues(event.tags, "summary")}
            </p>
          </a>
        </div>
      {/each}
    {/await}
  </section>
</main>
