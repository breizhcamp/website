export interface CategoryInfo {
	id: string;
	title: string;
	description: string;
}

// Catégories pour organiser les sections
export const categories: CategoryInfo[] = [
	{
		id: 'event',
		title: "📅 L'événement",
		description: 'Tout savoir sur le BreizhCamp et comment y participer'
	},
	{
		id: 'participation',
		title: '🎤 Participer',
		description: 'Devenir speaker, code de conduite et conseils pratiques'
	},
	{
		id: 'organization',
		title: '👥 Organisation',
		description: "L'équipe, l'association et comment nous rejoindre"
	}
];
