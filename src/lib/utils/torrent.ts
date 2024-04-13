import type { NDKEvent } from '@nostr-dev-kit/ndk';

export const Trackers = [
	'udp://tracker.coppersurfer.tk:6969/announce',
	'udp://tracker.openbittorrent.com:6969/announce',
	'udp://open.stealth.si:80/announce',
	'udp://tracker.torrent.eu.org:451/announce',
	'udp://tracker.opentrackr.org:1337',
	'udp://tracker.leechers-paradise.org:6969',
	'udp://tracker.coppersurfer.tk:6969',
	'udp://tracker.opentrackr.org:1337',
	'udp://explodie.org:6969',
	'udp://tracker.empire-js.us:1337'
];

export function getTorrentMagnetLink(torrent: NDKEvent) {
	const btih = torrent.tagValue('btih');
	const magnet = {
		xt: `urn:btih:${btih}`,
		dn: name,
		tr: Trackers
	};
	const params = Object.entries(magnet)
		.map(([k, v]) => {
			if (Array.isArray(v)) {
				return v.map((a) => `${k}=${encodeURIComponent(a)}`).join('&');
			} else {
				return `${k}=${v as string}`;
			}
		})
		.flat()
		.join('&');
	return `magnet:?${params}`;
}
