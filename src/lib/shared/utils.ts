/**
 * Returns a record with the key being the unique attribute and an array of element
 * @param array array to filter
 * @param key key method
 */
export function groupBy<T, U extends string>(
	array: Array<T>,
	key: (item: T) => string,
	groups: Array<U>
): Array<[U, Array<T>]> {
	const record = array.reduce(
		function (acc, item) {
			const k = key(item);
			if (k in acc && acc[k as U]) {
				(acc[k as U] as Array<T>).push(item);
			}
			return acc;
		},
		Object.fromEntries(groups.map((group) => [group, [] as Array<T>])) as Record<U, Array<T>>
	);
	return Object.entries(record) as Array<[U, Array<T>]>;
}
