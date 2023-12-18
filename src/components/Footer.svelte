<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_BTCPAY, PUBLIC_GITHUB } from "$env/static/public";
</script>

<section class="flex pt-4 mb-2 mx-6 gap-4 justify-center">
  <!-- <div
    class="p-2 sm:p-4 md:p-6 rounded-lg border border-solid hover:border-bright bg-button-dark text-white text-xl font-mono max-w-sm"
  >
    <form
      method="POST"
      action="{PUBLIC_BTCPAY}/api/v1/invoices"
      class="btcpay-form btcpay-form--block"
    >
      <input
        type="hidden"
        name="storeId"
        value="4rtzNutBRAgsc7Mb9Qu5Ek6i2jSNwZGHL6npV26YF5QP"
      />
      <input type="hidden" name="currency" value="SATS" />
      <button
        type="submit"
        class="submit"
        name="submit"
        title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
      >
        <span>{$_("footer.donate")}</span>
        <img
          src="{PUBLIC_BTCPAY}/img/paybutton/logo.svg"
          alt="pay with btcpay"
          class="inline-block h-10"
        />
      </button>
    </form>
  </div> -->
  <div
    class="flex p-2 sm:p-4 md:p-6 rounded-lg border border-solid hover:border-bright bg-slate-800 text-white text-xl text-center font-mono max-w-sm"
  >
    <a href={PUBLIC_GITHUB}>
      <p class="pt-1">{$_("footer.contribute")}</p>
    </a>
  </div>
</section>
<section class="flex p-2 mb-6 mx-6 gap-4 justify-center">
  <p>{$_("footer.made")}</p>
</section>
