/**
 * Returns a record with the key being the unique attribute and an array of element
 * @param array array to filter
 * @param key key method
 */
export function groupBy<T>(array: Array<T>, key: (item: T) => string): Record<string, Array<T>> {
	return array.reduce(
		function (acc, item) {
			const k = key(item);
			if (k in acc && acc[k]) {
				(acc[k] as Array<T>).push(item);
			} else {
				acc[k] = [item];
			}
			return acc;
		},
		{} as Record<string, Array<T>>
	);
}
