<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_BTCPAY } from "$env/static/public";
</script>

<div
  class="my-6 p-2 sm:p-4 md:p-6 h-30 rounded-lg border border-solid hover:border-bright bg-button-dark hover:bg-button-dark text-gray-50 font-mono max-w-lg text-center"
>
  <a href="{PUBLIC_BTCPAY}/register">
    <div class="flex justify-center">
      <img
        src="{PUBLIC_BTCPAY}/img/paybutton/logo.svg"
        alt="pay with btcpay"
        class="m max-h-12"
      />
    </div>
    <p class="pt-2">{$_("store.description")}</p>
  </a>
</div>
