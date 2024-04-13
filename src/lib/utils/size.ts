export function formatBytes(bytes, decimals = 2) {
	if (!+bytes) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const sumByCol = (arr, col) =>
	arr
		.map((row) => Number(row[col])) // pull column into new array
		.reduce((a: number, b: number) => a + b); // reduce as normal

export const size = (arr) => formatBytes(sumByCol(arr, 2));
