import { dictionary, locale, _ } from "svelte-i18n";
import en from "./en.json";
import es from "./es.json";
import eu from "./eu.json";
function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  dictionary.set({
    en: en,
    es: es,
    eu: eu,
  });
  locale.set(_locale);
}

export { _, setupI18n };
