/**
 * Format a date
 * @param dateString in the form of `2026-06-25`
 * @returns
 */
export function formatDate(dateString: string) {
	const date = new Date(dateString);
	return date.toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
