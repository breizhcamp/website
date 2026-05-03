/**
 * Configuration centralisée du site BreizhCamp
 * Permet de gérer l'activation/désactivation des fonctionnalités
 */

export interface PageConfig {
	/** Identifiant unique de la page */
	id: string;
	/** Libellé affiché dans les menus */
	label: string;
	/** URL de la page */
	href: string;
	/** Description courte pour les tooltips, pages d'erreur, etc. */
	description: string;
	/** La page est-elle disponible ? */
	available: boolean;
	/** Afficher dans le menu principal ? */
	showInMainNav: boolean;
	/** Afficher dans le footer ? */
	showInFooter: boolean;
	/** Lien externe ? */
	external?: boolean;
	/** Badge à afficher (ex: "Ouvert", "Bientôt") */
	badge?: string;
	/** Label ARIA personnalisé */
	ariaLabel?: string;
	/** Ordre d'affichage dans les menus */
	order: number;
}

export interface SiteConfig {
	/** Configuration des pages */
	pages: PageConfig[];
	/** Configuration du CFP */
	cfp: {
		/** Indique si le lien vers le CFP est affiché dans la barre de menus du header */
		showInMainNav: boolean;
		/** Indique si le CFP est ouvert/fermé */
		isOpen: boolean;
		/** Text du badge (si non défini, sera "Ouvert"/"Fermé" en fonction de {@link isOpen} */
		badge?: string;
		url?: string;
	};
	/** Configuration des billets */
	tickets: {
		available: boolean;
		url: string;
	};
}

/**
 * Configuration principale du site
 */
export const siteConfig: SiteConfig = {
	pages: [
		{
			id: 'home',
			label: 'Accueil',
			href: '/',
			description: 'Retour à la page principale',
			available: true,
			showInMainNav: false, // ← Le logo fait office d'accueil
			showInFooter: true,
			order: 1
		},
		{
			id: 'programme',
			label: 'Programme',
			href: '/programme',
			description: 'Découvrir les sessions et conférences',
			available: true, // 🔧 Changer à true pour activer
			showInMainNav: true, // ← Réactivé mais sera dans un menu "Plus" si nécessaire
			showInFooter: true,
			order: 2
		},
		{
			id: 'speakers',
			label: 'Intervenants',
			href: '/intervenants',
			description: 'Rencontrer nos speakers',
			available: false, // 🔧 Changer à true pour activer
			showInMainNav: false, // ← Supprimé du menu principal
			showInFooter: false,
			order: 3
		},
		{
			id: 'sponsors',
			label: 'Sponsors',
			href: '/sponsors',
			description: 'Nos partenaires',
			available: true,
			showInMainNav: true,
			showInFooter: true,
			order: 4
		},
		{
			id: 'blog',
			label: 'Blog',
			href: '/blog',
			description: 'Actualités BreizhCamp',
			available: true,
			showInMainNav: false,
			showInFooter: false,
			order: 5
		},
		{
			id: 'infos',
			label: 'Infos pratiques',
			href: '/infos-pratiques',
			description: "Tout savoir sur l'événement",
			available: true,
			showInMainNav: true,
			showInFooter: true,
			order: 6
		},
		{
			id: 'newsletter',
			label: 'Newsletter',
			href: '/#newsletter',
			description: "S'inscrire à la newsletter",
			available: true,
			showInMainNav: false,
			showInFooter: true,
			order: 6.5
		},
		{
			id: 'equipe',
			label: 'Équipe',
			href: '/equipe',
			description: "L'équipe BreizhCamp et l'association",
			available: true,
			showInMainNav: true,
			showInFooter: true,
			order: 7
		}
	],
	cfp: {
		showInMainNav: false, // 🔧 Changer à true/false pour afficher/cacher le CFP dans le header
		isOpen: false, // 🔧 Changer à true/false pour ouvrir/fermer le CFP
		// 🔧 Si non défini 'Ouvert'/'Fermé' en fonction de `isOpen`
		//badge: 'Bientôt',
		//badge: 'Ouvert → 15/03',
		// 🔧 À commenter si pas encore créé dans Sessionize (⇒ menu grisé avec badge "Bientôt")
		url: 'https://sessionize.com/breizhcamp-2026/'
	},
	tickets: {
		available: true, // 🔧 Changer à true pour ouvrir les billets
		url: 'https://www.billetweb.fr/breizhcamp-2026'
	}
};

/**
 * Utilitaires pour récupérer les pages selon leur configuration
 */
export const getNavigationPages = () => {
	return siteConfig.pages.filter((page) => page.showInMainNav).sort((a, b) => a.order - b.order);
};

export const getFooterPages = () => {
	return siteConfig.pages.filter((page) => page.showInFooter).sort((a, b) => a.order - b.order);
};

export const getAllPages = () => {
	return siteConfig.pages.sort((a, b) => a.order - b.order);
};

/**
 * Génère les éléments de navigation pour le header
 */
export const getNavigationItems = () => {
	const pages = getNavigationPages();
	const items = pages.map((page) => ({
		label: page.label,
		href: page.available ? page.href : null,
		description: page.description,
		available: page.available,
		external: page.external || false,
		ariaLabel: page.ariaLabel || page.label
	}));

	// Ajouter le CFP si à afficher
	if (siteConfig.cfp.showInMainNav) {
		items.push({
			label: 'CFP',
			href: siteConfig.cfp.url ?? '#',
			description: 'Proposer une conférence',
			available: siteConfig.cfp.url !== undefined,
			external: true,
			ariaLabel: `CFP — ${siteConfig.cfp.badge} (ouvre Sessionize)`
		});
	}

	return items;
};

/**
 * Génère les éléments pour les pages d'erreur et suggestions
 */
export const getSuggestionPages = () => {
	return getAllPages().map((page) => ({
		label: page.label,
		href: page.available ? page.href : null,
		description: page.available ? page.description : 'Bientôt disponible',
		unavailable: !page.available
	}));
};

export const isProgramAvailable = () => {
	return siteConfig.pages.find((page) => page.id === 'programme')?.available ?? false;
};
