export const DISPLAY_ONLY_FAKE_ONES = false;
export const DISPLAY_FAKE_ONES = true;

export type SponsorId = 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner';

export interface Sponsor {
	hidden?: boolean;
	name: string;
	logo: string | null;
	url: string | null;
	description?: string;
	level: SponsorId;
}

export interface SponsorLevel {
	name: string;
	id: SponsorId;
	description: string;
	defaultSponsorCount: number;
	gridCols: string;
	logoSize: 'small' | 'medium' | 'large';
}

// Configuration des niveaux de sponsoring & des sponsors dans chaque niveau
export const sponsorLevels: SponsorLevel[] = [
	{
		name: 'Sponsors Platinum',
		id: 'platinum',
		description: "Nos partenaires stratégiques qui soutiennent massivement l'événement",
		defaultSponsorCount: 4,
		gridCols: 'grid-cols-2',
		logoSize: 'large'
	},
	{
		name: 'Sponsors Gold',
		id: 'gold',
		description: 'Nos partenaires majeurs qui contribuent significativement au BreizhCamp',
		defaultSponsorCount: 12,
		gridCols: 'grid-cols-3',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Silver',
		id: 'silver',
		description: 'Nos partenaires qui nous accompagnent dans cette aventure',
		defaultSponsorCount: 21,
		gridCols: 'grid-cols-3',
		logoSize: 'medium'
	},
	{
		name: 'Sponsors Bronze',
		id: 'bronze',
		description: 'Nos partenaires qui soutiennent la communauté tech bretonne',
		defaultSponsorCount: 4,
		gridCols: 'grid-cols-4',
		logoSize: 'small'
	},
	{
		name: 'Partenaires',
		id: 'partner',
		description: 'Nos partenaires institutionnels et associatifs',
		defaultSponsorCount: 2,
		gridCols: 'grid-cols-2',
		logoSize: 'medium'
	}
];

export const sponsors: Array<Sponsor> = [
	{
		name: 'Liksi',
		logo: '/sponsors/logo_liksi.png',
		url: 'https://www.liksi.fr',
		level: 'platinum'
	},
	{
		name: "Agence Ministérielle pour l'Intelligence Artificielle de Défense",
		logo: "/sponsors/logo_agence_ministerielle_pour_l'intelligence_artificielle_de_defense.png",
		url: 'https://www.linkedin.com/company/amiad-minarm/',
		level: 'gold'
	},
	{
		name: 'CELAD',
		logo: '/sponsors/logo_celad.png',
		url: 'https://www.celad.com/',
		level: 'gold'
	},
	{
		name: 'Fellows',
		logo: '/sponsors/logo_fellows.png',
		url: 'https://www.fellows-consulting.com/',
		level: 'gold'
	},
	{
		name: 'G2S',
		logo: '/sponsors/logo_g2s.png',
		url: 'https://www.g2s-groupama-technologies.fr/',
		level: 'gold'
	},
	{
		name: 'GROUPE SII',
		logo: '/sponsors/logo_groupe_sii.png',
		url: 'https://sii-group.com',
		level: 'gold'
	},
	{
		name: 'Infotel',
		logo: '/sponsors/logo_infotel.png',
		url: 'https://infotel.com/',
		level: 'gold'
	},
	{
		name: 'Max DS',
		logo: '/sponsors/logo_max_ds.svg',
		url: 'https://maxds.fr/',
		level: 'gold'
	},
	{
		name: 'Orange Business',
		logo: '/sponsors/logo_orange_business.png',
		url: 'https://www.orange-business.com/fr',
		level: 'gold',
		hidden: true
	},
	{
		name: 'Sopra Steria',
		logo: '/sponsors/logo_sopra_steria.png',
		url: 'https://www.soprasteria.com/fr',
		level: 'gold'
	},
	{
		name: 'Zenika',
		logo: '/sponsors/logo_zenika.svg',
		url: 'https://www.zenika.com/',
		level: 'gold'
	},
	{
		name: '6TM',
		logo: '/sponsors/logo_6tm.png',
		url: 'https://www.6tm.com/',
		level: 'silver'
	},
	{
		name: 'ACENSI',
		logo: '/sponsors/logo_acensi.svg',
		url: 'https://acensi.group/',
		level: 'silver'
	},
	{
		name: 'Adventiel',
		logo: '/sponsors/logo_adventiel.png',
		url: 'https://www.adventiel.fr/',
		level: 'silver'
	},
	{
		name: 'CGI',
		logo: '/sponsors/logo_cgi.png',
		url: 'https://www.cgi.fr/fr-fr',
		level: 'silver'
	},
	{
		name: 'Catamania',
		logo: '/sponsors/logo_catamania.png',
		url: 'https://www.catamania.com/',
		level: 'silver'
	},
	{
		name: 'Coexya',
		logo: '/sponsors/logo_coexya.png',
		url: 'https://www.coexya.eu/',
		level: 'silver'
	},
	{
		name: 'Delia Technologies',
		logo: '/sponsors/logo_delia_technologies.png',
		url: 'https://www.delia.tech/',
		level: 'silver'
	},
	{
		name: 'IDnow',
		logo: '/sponsors/logo_idnow.png',
		url: 'https://www.idnow.io/fr/',
		level: 'silver'
	},
	{
		name: 'Kanoma',
		logo: '/sponsors/logo_kanoma.svg',
		url: 'https://www.kanoma.fr/',
		level: 'silver'
	},
	{
		name: 'MV GROUP',
		logo: '/sponsors/logo_mv_group.svg',
		url: 'https://www.mv-group.fr/',
		level: 'silver'
	},
	{
		name: 'Moustache AI',
		logo: '/sponsors/logo_moustache_ai.png',
		url: 'https://moustacheai.fr',
		level: 'silver'
	},
	{
		name: 'Net-ng',
		logo: '/sponsors/logo_net-ng.svg',
		url: 'https://www.net-ng.com/',
		level: 'silver'
	},
	{
		name: 'Néosoft',
		logo: '/sponsors/logo_neosoft.png',
		url: 'https://www.neo-soft.fr/',
		level: 'silver'
	},
	{
		name: 'Onepoint',
		logo: '/sponsors/logo_onepoint.png',
		url: 'https://www.groupeonepoint.com',
		level: 'silver'
	},
	{
		name: 'Open',
		logo: '/sponsors/logo_open.png',
		url: 'https://www.open.global/fr',
		level: 'silver'
	},
	{
		name: 'Oxxeo',
		logo: '/sponsors/logo_oxxeo.png',
		url: 'https://www.oxxeo.fr/',
		level: 'silver'
	},
	{
		name: 'SFEIR',
		logo: '/sponsors/logo_sfeir.png',
		url: 'https://sfeir.com/',
		level: 'silver'
	},
	{
		name: 'Shodo Rennes',
		logo: '/sponsors/logo_shodo_rennes.png',
		url: 'https://shodo.io/',
		level: 'silver'
	},
	{
		name: 'Wijin',
		logo: '/sponsors/logo_wijin.png',
		url: 'https://www.wijin.tech/',
		level: 'silver'
	},
	{
		name: 'berix',
		logo: '/sponsors/logo_berix.png',
		url: 'https://berix.bzh/',
		level: 'silver'
	},
	{
		name: 'ASI',
		logo: '/sponsors/logo_asi.jpg',
		url: 'https://www.asi.fr/',
		level: 'bronze'
	},
	{
		name: 'Luminess',
		logo: '/sponsors/logo_luminess.png',
		url: 'https://www.luminess.eu/',
		level: 'bronze'
	},
	{
		name: 'RunsOn',
		logo: '/sponsors/logo_runson.svg',
		url: 'https://runs-on.com/',
		level: 'bronze'
	},
	{
		name: 'Scalian',
		logo: '/sponsors/logo_scalian.png',
		url: 'https://www.scalian.com',
		level: 'bronze'
	},
	{
		name: 'Softeam',
		logo: '/sponsors/logo_softeam.png',
		url: 'https://www.softeam.com/',
		level: 'bronze'
	}
];

export const partners: Array<Sponsor> = [
	{
		name: 'CYIM',
		logo: '/sponsors/logo_cyim.svg',
		url: 'https://www.cyim.com/',
		level: 'platinum'
	},
	{
		name: 'Université Rennes 1',
		logo: '/sponsors/logo_univ_rennes_1.png',
		url: 'https://www.univ-rennes.fr/',
		level: 'partner'
	}
];
