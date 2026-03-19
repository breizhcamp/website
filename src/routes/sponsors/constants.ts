// Types pour les sponsors
export interface Sponsor {
	hidden?: boolean;
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

// Configuration des niveaux de sponsoring & des sponsors dans chaque niveau
export const sponsorLevels: SponsorLevel[] = [
	{
		name: 'Sponsors Platinum',
		id: 'platinum',
		description: "Nos partenaires stratégiques qui soutiennent massivement l'événement",
		// listAnonymousSponsors(4)
		sponsors: listSponsors(
			true, // true : on force le fait de cacher les sponsors, même s'ils sont connus (correctement renseignés)
			{ name: 'Sponsor 1', logo: '/sponsors/platinum-1.png', url: 'https://example.com' },
			{ name: 'Sponsor 2', logo: '/sponsors/platinum-2.png', url: 'https://example.com' },
			{ name: 'Sponsor 3', logo: '/sponsors/platinum-3.png', url: 'https://example.com' },
			{ name: 'Sponsor 4', logo: '/sponsors/platinum-4.png', url: 'https://example.com' }
		),
		gridCols: 'grid-cols-2 md:grid-cols-3',
		logoSize: 'large'
	},
	{
		name: 'Sponsors Gold',
		id: 'gold',
		description: 'Nos partenaires majeurs qui contribuent significativement au BreizhCamp',
		sponsors: listAnonymousSponsors(15),
		gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Silver',
		id: 'silver',
		description: 'Nos partenaires qui nous accompagnent dans cette aventure',
		sponsors: listAnonymousSponsors(18),
		gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Bronze',
		id: 'bronze',
		description: 'Nos partenaires qui soutiennent la communauté tech bretonne',
		sponsors: listAnonymousSponsors(4),
		gridCols: 'grid-cols-2 md:grid-cols-4',
		logoSize: 'small'
	},
	{
		name: 'Partenaires',
		id: 'partners',
		description: 'Nos partenaires institutionnels et associatifs',
		sponsors: listAnonymousSponsors(1),
		gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		logoSize: 'medium'
	}
];

function listSponsors(hidden = false, ...sponsors: Sponsor[]): Sponsor[] {
	const list: Sponsor[] = [];
	for (const sponsor of sponsors) {
		const sponsorToList = { ...sponsor };
		if (hidden) {
			sponsorToList.hidden = true;
		}
		list.push(sponsorToList);
	}
	return list;
}

function listAnonymousSponsors(count: number): Sponsor[] {
	return Array(count).fill({ hidden: true, name: 'X', logo: null, url: null });
}
