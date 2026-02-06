export interface SocialLink {
	type: 'twitter' | 'linkedin' | 'mastodon';
	handle: string;
	url: string;
}

export interface Organizer {
	name: string;
	picture: string;
	social?: SocialLink;
}

export interface Community {
	name: string;
	logo: string;
	url: string;
	text?: string;
	organizers: Organizer[];
}

export const communities: Community[] = [
	{
		name: 'BreizhJUG',
		logo: 'https://secure.meetupstatic.com/photos/event/8/f/d/e/600_456516830.jpeg',
		url: 'http://www.breizhjug.org',
		text: "Le Java User Group à l'origine du BreizhCamp en 2011",
		organizers: [
			{
				name: 'Laurent Huet',
				picture: '/team/lhuet35.png',
				social: {
					type: 'twitter',
					handle: 'lhuet35',
					url: 'https://twitter.com/lhuet35'
				}
			}
		]
	},
	{
		name: 'Rennes JS',
		logo: 'https://rennesjs.org/images/logo-rennesjs.jpg',
		url: 'https://rennesjs.org',
		organizers: [
			{
				name: 'Nicolas Pennec',
				picture: '/team/NicoPennec.jpeg',
				social: {
					type: 'twitter',
					handle: 'NicoPennec',
					url: 'https://twitter.com/NicoPennec'
				}
			},
			{
				name: 'François Eoche',
				picture: '/team/francois-eoche.jpeg',
				social: {
					type: 'linkedin',
					handle: 'francois-eoche',
					url: 'https://www.linkedin.com/in/francois-eoche/'
				}
			},
			{
				name: 'Grégory Houllier',
				picture: '/team/ghoullier.jpeg',
				social: {
					type: 'linkedin',
					handle: 'ghoullier',
					url: 'https://www.linkedin.com/in/ghoullier/'
				}
			}
		]
	},
	{
		name: 'Software Crafters Rennes',
		logo: 'https://pbs.twimg.com/profile_images/869988942770307072/5eE0osqk_400x400.jpg',
		url: 'https://www.meetup.com/fr-FR/Software-Craftsmanship-Rennes/',
		organizers: [
			{
				name: 'Benoît Masson',
				picture: '/team/benoitmasson.png',
				social: {
					type: 'linkedin',
					handle: 'benoitmasson',
					url: 'https://www.linkedin.com/in/benoitmasson/'
				}
			},
			{
				name: 'Gaël Salaün',
				picture: '/team/gsalaun1.jpg',
				social: {
					type: 'linkedin',
					handle: 'gael-salaun',
					url: 'https://www.linkedin.com/in/gael-salaun/'
				}
			},
			{
				name: 'Pascal Le Merrer',
				picture: '/team/pascallemerrer.jpeg',
				social: {
					type: 'linkedin',
					handle: 'pascallemerrer',
					url: 'https://www.linkedin.com/in/pascal-le-merrer-872a478/'
				}
			}
		]
	},
	{
		name: 'Rennes DevOps',
		logo: 'https://pbs.twimg.com/profile_images/2185370459/Logo-Rennes-DevOps_400x400.png',
		url: 'https://www.meetup.com/fr-FR/rennes-devops/',
		organizers: [
			{
				name: 'Nicolas Ledez',
				picture: '/team/nledez.jpg',
				social: {
					type: 'twitter',
					handle: 'nledez',
					url: 'https://twitter.com/nledez'
				}
			},
			{
				name: 'Nicolas Bouron',
				picture: '/team/nbouron.jpeg',
				social: {
					type: 'twitter',
					handle: 'nbouron',
					url: 'https://twitter.com/nbouron'
				}
			},
			{
				name: 'Etienne Besson',
				picture: '/team/etienne_besson.jpg',
				social: {
					type: 'twitter',
					handle: 'etienne_besson',
					url: 'https://twitter.com/etienne_besson'
				}
			}
		]
	},
	{
		name: 'Python Rennes',
		logo: 'https://pbs.twimg.com/profile_images/1451128458050945024/Gm1vyzTx_400x400.jpg',
		url: 'https://www.meetup.com/fr-FR/python-rennes/',
		organizers: [
			{
				name: 'Luc Sorel-Giffo',
				picture: '/team/lucsorelgiffo.jpg',
				social: {
					type: 'mastodon',
					handle: 'lucsorelgiffo',
					url: 'https://floss.social/@lucsorelgiffo'
				}
			},
			{
				name: 'Nicolas Ledez',
				picture: '/team/nledez.jpg',
				social: {
					type: 'twitter',
					handle: 'nledez',
					url: 'https://twitter.com/nledez'
				}
			}
		]
	},
	{
		name: 'Écoconception de services numériques - Rennes',
		logo: 'https://secure.meetupstatic.com/photos/event/7/8/d/a/clean_506730938.jpeg',
		url: 'https://www.meetup.com/fr-FR/ecoconception-de-services-numeriques-rennes/',
		organizers: [
			{
				name: 'Sylvain Révéreault',
				picture: '/team/srevereault.jpg',
				social: {
					type: 'twitter',
					handle: 'srevereault',
					url: 'https://twitter.com/srevereault'
				}
			}
		]
	},
	{
		name: 'Breizh Data Club',
		logo: 'https://secure.meetupstatic.com/photos/event/a/d/a/5/clean_490484453.jpeg',
		url: 'https://www.meetup.com/fr-FR/Breizh-Data-Club/',
		organizers: [
			{
				name: 'Didier Certain',
				picture: '/team/didier-certain.jpeg',
				social: {
					type: 'linkedin',
					handle: 'didier-certain',
					url: 'https://www.linkedin.com/in/didier-certain-46950a1/'
				}
			},
			{
				name: 'Keyan Bennaceur',
				picture: '/team/keyan-bennaceur.jpeg',
				social: {
					type: 'linkedin',
					handle: 'keyan-bennaceur',
					url: 'https://www.linkedin.com/in/keyan-bennaceur/'
				}
			}
		]
	},
	{
		name: 'Csscade',
		logo: 'https://media.licdn.com/dms/image/C4D0BAQHT4twp7ZPWBg/company-logo_200_200/0/1640208536741?e=1695859200&v=beta&t=LPsVyayDAuhO6w1uwfwRbpCkLWhSx7lZJ9qmpmAF8GE',
		url: 'http://csscade.fr/',
		organizers: [
			{
				name: 'Manon Carbonnel',
				picture: '/team/manoncarbonnel_.jpg',
				social: {
					type: 'twitter',
					handle: 'manoncarbonnel_',
					url: 'https://twitter.com/manoncarbonnel_'
				}
			}
		]
	},
	{
		name: 'Golang Rennes',
		logo: 'https://pbs.twimg.com/profile_images/761950032065093632/oL_fGJyP_400x400.jpg',
		url: 'https://www.meetup.com/fr/Golang-Rennes/',
		organizers: [
			{
				name: 'Marc Audefroy',
				picture: '/team/MarcAudefroy.jpg',
				social: {
					type: 'twitter',
					handle: 'MarcAudefroy',
					url: 'https://twitter.com/MarcAudefroy'
				}
			},
			{
				name: 'Benoît Masson',
				picture: '/team/benoitmasson.png',
				social: {
					type: 'linkedin',
					handle: 'benoitmasson',
					url: 'https://www.linkedin.com/in/benoitmasson/'
				}
			},
			{
				name: 'Gwendal Leclerc',
				picture: '/team/Skillo1989.jpg',
				social: {
					type: 'twitter',
					handle: 'Skillo1989',
					url: 'https://twitter.com/Skillo1989'
				}
			}
		]
	},
	{
		name: 'Mobile Rennes',
		logo: 'https://secure.meetupstatic.com/photos/event/5/9/6/e/clean_522742894.webp',
		url: 'https://www.meetup.com/fr-FR/mobile-rennes/',
		organizers: [
			{
				name: 'Caroline Mouden',
				picture: '/team/CarolineMouden.jpg',
				social: {
					type: 'twitter',
					handle: 'CarolineMouden',
					url: 'https://twitter.com/CarolineMouden'
				}
			},
			{
				name: 'Johanna Duigou',
				picture: '/team/johanna_duigou.jpg',
				social: {
					type: 'twitter',
					handle: 'johanna_duigou',
					url: 'https://twitter.com/johanna_duigou'
				}
			},
			{
				name: 'Sylvain Tranchand',
				picture: '/team/sylvain_tranchand.jpg',
				social: {
					type: 'linkedin',
					handle: 'tranchandsylvain',
					url: 'https://www.linkedin.com/in/tranchandsylvain/'
				}
			}
		]
	}
];
