<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_GROUPCHAT } from "$env/static/public";
</script>

<div
  class="my-6 p-3 sm:p-4 md:p-6 rounded-lg border border-solid hover:border-bright bg-sky-400 hover:bg-sky-600 text-title-bright font-mono max-w-lg text-center align-center"
>
  <a href={PUBLIC_GROUPCHAT}>
    <h2 class="mt text-2xl">{$_("groupChat.title")}</h2>
    <p class="p">{$_("groupChat.description")}</p>
  </a>
</div>
