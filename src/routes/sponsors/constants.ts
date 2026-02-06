// Types pour les sponsors
export interface Sponsor {
	name: string;
	logo?: string | null;
	url?: string | null;
	description?: string;
}

export interface SponsorLevel {
	name: string;
	id: string;
	description: string;
	sponsors: Sponsor[];
	gridCols: string;
	logoSize: 'small' | 'medium' | 'large';
}

// Configuration des niveaux de sponsoring
export const sponsorLevels: SponsorLevel[] = [
	{
		name: 'Sponsors Platinum',
		id: 'platinum',
		description: "Nos partenaires stratégiques qui soutiennent massivement l'événement",
		sponsors: Array(6).fill({ name: 'Bientôt annoncé', logo: null, url: null }),
		gridCols: 'grid-cols-2 md:grid-cols-3',
		logoSize: 'large'
	},
	{
		name: 'Sponsors Gold',
		id: 'gold',
		description: 'Nos partenaires majeurs qui contribuent significativement au BreizhCamp',
		sponsors: Array(15).fill({ name: 'Bientôt annoncé', logo: null, url: null }),
		gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Silver',
		id: 'silver',
		description: 'Nos partenaires qui nous accompagnent dans cette aventure',
		sponsors: Array(18).fill({ name: 'Bientôt annoncé', logo: null, url: null }),
		gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Bronze',
		id: 'bronze',
		description: 'Nos partenaires qui soutiennent la communauté tech bretonne',
		sponsors: Array(4).fill({ name: 'Bientôt annoncé', logo: null, url: null }),
		gridCols: 'grid-cols-2 md:grid-cols-4',
		logoSize: 'small'
	},
	{
		name: 'Partenaires',
		id: 'partners',
		description: 'Nos partenaires institutionnels et associatifs',
		sponsors: Array(1).fill({ name: 'Bientôt annoncé', logo: null, url: null }),
		gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		logoSize: 'medium'
	}
];

// Exemple de sponsors réels (à remplacer par les vrais données)
export const exampleSponsors: Record<string, Sponsor[]> = {
	platinum: [
		{
			name: 'Sponsor Platinum 1',
			logo: '/sponsors/platinum-1.png',
			url: 'https://example.com'
		},
		{ name: 'Sponsor Platinum 2', logo: '/sponsors/platinum-2.png', url: 'https://example.com' }
		// ... autres sponsors
	],
	gold: [
		{ name: 'Sponsor Gold 1', logo: '/sponsors/gold-1.png', url: 'https://example.com' }
		// ... autres sponsors
	]
	// ... autres niveaux
};
