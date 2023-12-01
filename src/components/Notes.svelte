<script lang="ts">
  import { _ } from "../services/i18n";
  import {
    PUBLIC_NOSTR_SHORT_NOTE_CLIENT,
    PUBLIC_PUBKEY,
  } from "$env/static/public";
  import ndk from "$lib/stores/ndk";

  const user = ndk.getUser({ npub: PUBLIC_PUBKEY });

  const eventsPromise = ndk.fetchEvents({
    kinds: [1],
    authors: [user.hexpubkey],
  });
</script>

<div
  class="p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-w-lg"
>
  <h2 class="ml mt text-xl text-title-bright">{$_("notes")}</h2>
  <div class="text-muted-bright mt-2 divide-y">
    {#await eventsPromise then events}
      {#each Array.from(events) as event}
        <div
          class="p-2 border-gray-300 max-h-40 overflow-hidden overflow-x-clip overflow-y-scroll hover:text-highlight"
        >
          <a href="{PUBLIC_NOSTR_SHORT_NOTE_CLIENT}{event.encode()}">
            <p>{event.content}</p>
          </a>
        </div>
      {/each}
    {/await}
  </div>
</div>
