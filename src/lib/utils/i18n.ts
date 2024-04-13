import { setupI18n } from '../../services/i18n';

export function setLocale(locale: string) {
	setupI18n({ withLocale: locale });
}
