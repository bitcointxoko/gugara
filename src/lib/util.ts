import { setupI18n } from '../services/i18n';

export function setLocale(locale: string) {
	setupI18n({ withLocale: locale });
}

export function readingTime(text: string): number {
	const wpm = 225;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
}
