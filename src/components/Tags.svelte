<script lang="ts">
  export let tags: string[] | string[][] = [];
  const isNostr = Array.isArray(tags[0]) && tags[0][0] === `t`;
</script>

<div class="flex flex-wrap gap-2 font-mono">
  {#each tags as tag, i}
    <p class="text-highlight">
      #{isNostr ? tag[1] : tag}
    </p>
    {#if tags[i + 1]}
      <span class="text-muted-bright">/</span>
    {/if}
  {/each}
</div>
