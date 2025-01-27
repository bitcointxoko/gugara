import { dictionary, locale, _ } from "svelte-i18n";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import eu from "./locales/eu/common.json";
function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  dictionary.set({
    en: en,
    es: es,
    eu: eu,
  });
  locale.set(_locale);
}

export { _, setupI18n };
