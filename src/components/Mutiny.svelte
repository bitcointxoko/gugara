<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_NAME, PUBLIC_MUTINY } from "$env/static/public";
</script>

<div
  class="my-6 p-2 sm:p-4 md:p-6 h-30 rounded-lg border border-solid hover:border-rose-500 hover:text-rose-500 bg-gray-800 hover:bg-gray-900 text-rose-600 font-mono max-w-lg text-center"
>
  <a href={PUBLIC_MUTINY}>
    <div class="flex justify-center">
      <img src="./mutiny-logo-ghost.png" alt="mutiny logo" class="m max-h-12" />
    </div>
    <p class="pt-2">{$_("mutiny.description")}{PUBLIC_NAME}</p>
  </a>
</div>
