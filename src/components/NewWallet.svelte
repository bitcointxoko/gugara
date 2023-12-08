<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_NEW_WALLET } from "$env/static/public";
</script>

<div
  class="p-3 sm:p-4 md:p-6 rounded-lg border border-solid hover:border-bright bg-amber-500 hover:bg-amber-600 text-title-bright font-mono max-w-lg text-center align-center"
>
  <a href={PUBLIC_NEW_WALLET}>
    <div>
      <h2 class="mt text-2xl">{$_("wallet.title")}</h2>
      <p class="p">{$_("wallet.description")}</p>
    </div>
  </a>
</div>
