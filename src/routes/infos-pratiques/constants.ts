// Types pour les sections d'informations
export interface InfoSection {
	id: string;
	title: string;
	shortDescription: string;
	content: string;
	icon: string;
	category: 'event' | 'participation' | 'organization';
	actions?: Array<{
		label: string;
		href: string;
		variant: 'primary' | 'secondary';
		external?: boolean;
	}>;
}

export interface CategoryInfo {
	id: string;
	title: string;
	description: string;
	icon: string;
}

// Icônes SVG pour les sections
const icons = {
	conference: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
	info: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
	rules: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
	help: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,
	team: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10l-1.99-1.01A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.49.59-1.42 1.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/></svg>`,
	association: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
	coaching: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
	speakers: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>`
};

// Catégories pour organiser les sections
export const categories: CategoryInfo[] = [
	{
		id: 'event',
		title: "📅 L'événement",
		description: 'Tout savoir sur le BreizhCamp et comment y participer',
		icon: '📅'
	},
	{
		id: 'participation',
		title: '🎤 Participer',
		description: 'Devenir speaker, code de conduite et conseils pratiques',
		icon: '🎤'
	},
	{
		id: 'organization',
		title: '👥 Organisation',
		description: "L'équipe, l'association et comment nous rejoindre",
		icon: '👥'
	}
];

// Configuration des sections d'informations
export const infoSections: InfoSection[] = [
	{
		id: 'la-conference',
		title: 'La conférence',
		shortDescription: 'Découvrez le BreizhCamp, ses valeurs et son organisation',
		icon: icons.conference,
		category: 'event',
		content: `
			<h3>Qu'est-ce que le BreizhCamp ?</h3>
			<p>Le BreizhCamp est <em>la plus grande conférence tech de Bretagne</em>. Organisée chaque année à Rennes, elle rassemble la communauté des développeurs, architectes, chefs de projets et passionnés de technologies.</p>
			
			<h4>Nos valeurs</h4>
			<ul>
				<li><strong>Partage</strong> : Favoriser les échanges entre participants</li>
				<li><strong>Diversité</strong> : Accueillir tous les profils et niveaux</li>
				<li><strong>Bienveillance</strong> : Créer un environnement respectueux</li>
				<li><strong>Innovation</strong> : Présenter les dernières tendances tech</li>
			</ul>
			
			<h4>Format de l'événement</h4>
			<p>Le BreizhCamp propose différents formats de sessions :</p>
			<ul>
				<li><strong>Conférences</strong> (45 min) : Présentations approfondies</li>
				<li><strong>Tools in Action</strong> (25 min) : Démonstrations pratiques</li>
				<li><strong>Quickies</strong> (15 min) : Présentations courtes et percutantes</li>
				<li><strong>Hands-on</strong> (2h) : Ateliers pratiques en petits groupes</li>
			</ul>
		`
	},
	{
		id: 'tout-le-reste',
		title: 'Tout le reste',
		shortDescription: 'Informations pratiques pour votre venue au BreizhCamp',
		icon: icons.info,
		category: 'event',
		content: `
			<h3>Lieu et accès</h3>
			<p>Le BreizhCamp 2026 se déroule à <strong>Rennes, Bretagne</strong>. Le lieu exact sera communiqué prochainement.</p>
			
			<h4>Comment venir ?</h4>
			<ul>
				<li><strong>En train</strong> : Gare de Rennes, puis transports en commun</li>
				<li><strong>En avion</strong> : Aéroport Rennes-Bretagne</li>
				<li><strong>En voiture</strong> : Parking disponible sur site</li>
				<li><strong>À vélo</strong> : Stationnement vélo sécurisé</li>
			</ul>
			
			<h4>Hébergement</h4>
			<p>Rennes propose de nombreuses options d'hébergement. Nous recommandons de réserver tôt, particulièrement pour les hôtels proches du centre-ville.</p>
			
			<h4>Restauration</h4>
			<p>Les repas du midi sont inclus dans votre billet. Nous proposons des options végétariennes, véganes et sans gluten. N'hésitez pas à nous signaler vos allergies alimentaires lors de l'inscription.</p>
			
			<h4>Accessibilité</h4>
			<p>Le BreizhCamp est accessible aux personnes à mobilité réduite. Contactez-nous pour toute demande spécifique d'accompagnement.</p>
		`
	},
	{
		id: 'code-de-conduite',
		title: 'Code de conduite',
		shortDescription: 'Les règles de bonne conduite pour un événement respectueux',
		icon: icons.rules,
		category: 'participation',
		content: `
			<h3>Notre engagement</h3>
			<p>Le BreizhCamp s'engage à offrir une expérience <em>respectueuse et inclusive</em> à tous les participants, quels que soient leur genre, orientation sexuelle, handicap, apparence physique, origine ethnique, religion ou niveau d'expérience.</p>
			
			<h4>Comportements attendus</h4>
			<ul>
				<li>Faire preuve de <strong>respect</strong> envers tous les participants</li>
				<li>Utiliser un <strong>langage bienveillant</strong> et inclusif</li>
				<li>Accepter les <strong>critiques constructives</strong></li>
				<li>Se concentrer sur l'<strong>apprentissage collectif</strong></li>
				<li>Faire preuve d'<strong>empathie</strong> envers les autres participants</li>
			</ul>
			
			<h4>Comportements inacceptables</h4>
			<ul>
				<li>Commentaires offensants ou discriminatoires</li>
				<li>Harcèlement sous toute forme</li>
				<li>Intimidation ou menaces</li>
				<li>Perturbation des présentations</li>
				<li>Comportement inapproprié lors des événements sociaux</li>
			</ul>
			
			<h4>Signalement</h4>
			<p>Si vous êtes témoin ou victime d'un comportement inapproprié, contactez immédiatement l'équipe d'organisation. Tous les signalements seront traités avec confidentialité et sérieux.</p>
			
			<p><strong>Contact d'urgence</strong> : Équipe BreizhCamp disponible sur place ou par email.</p>
		`
	},
	{
		id: 'faq',
		title: 'FAQ',
		shortDescription: 'Réponses aux questions les plus fréquentes',
		icon: icons.help,
		category: 'event',
		content: `
			<h3>Questions générales</h3>
			
			<h4>Quand a lieu le BreizhCamp 2026 ?</h4>
			<p>Les dates exactes seront communiquées prochainement. Suivez-nous sur nos réseaux sociaux pour être informé en premier !</p>
			
			<h4>Combien coûte un billet ?</h4>
			<p>Le BreizhCamp propose plusieurs tarifs :</p>
			<ul>
				<li><strong>Étudiant</strong> : Tarif préférentiel sur justificatif</li>
				<li><strong>Particulier</strong> : Tarif standard</li>
				<li><strong>Entreprise</strong> : Tarif professionnel</li>
			</ul>
			
			<h4>Puis-je annuler mon inscription ?</h4>
			<p>Oui, les remboursements sont possibles jusqu'à 2 semaines avant l'événement. Consultez nos conditions générales pour plus de détails.</p>
			
			<h4>Y a-t-il un dress code ?</h4>
			<p>Non ! Venez comme vous êtes. Le BreizhCamp privilégie le confort et l'authenticité.</p>
			
			<h4>Puis-je venir avec mes enfants ?</h4>
			<p>Le BreizhCamp n'est pas spécifiquement adapté aux enfants, mais ils sont les bienvenus si accompagnés. Contactez-nous pour organiser leur venue.</p>
			
			<h4>Comment proposer une conférence ?</h4>
			<p>Le Call for Papers (CFP) ouvre plusieurs mois avant l'événement. Suivez nos annonces pour ne pas le manquer !</p>
			
			<h4>Puis-je filmer ou photographier ?</h4>
			<p>Les photos et vidéos sont autorisées dans les espaces communs. Respectez cependant la vie privée des autres participants et demandez leur accord.</p>
		`
	},
	{
		id: 'equipe',
		title: "L'équipe",
		shortDescription: 'Découvrez les organisateurs du BreizhCamp',
		icon: icons.team,
		category: 'organization',
		content: `
			<h3>Une équipe de bénévoles survitaminée</h3>
			<p>Le BreizhCamp est organisé par une <em>équipe de bénévoles survitaminée qui s'active en coulisse</em>. Développeurs, chefs de projet, designers... tous unis par l'envie de partager et faire grandir l'écosystème tech breton.</p>
			
			<h4>Organisation</h4>
			<p>L'équipe d'organisation s'occupe de tous les aspects logistiques et opérationnels de l'événement :</p>
			<ul>
				<li><strong>Logistique</strong> : Gestion du lieu, restauration, matériel</li>
				<li><strong>Communication</strong> : Site web, réseaux sociaux, relations presse</li>
				<li><strong>Sponsors</strong> : Recherche et gestion des partenariats</li>
				<li><strong>Accueil</strong> : Accueil des participants et intervenants</li>
				<li><strong>Technique</strong> : Infrastructure, streaming, enregistrement</li>
			</ul>
			
			<p><strong>Membres de l'équipe d'organisation :</strong></p>
			<p>Alexandre Thomazo, Annelore Bidaux, Benoit Miedan-Gros, Caroline Mouden, Etienne Besson, Gaël Salaün, Hermann Nsounga, Johanna Duigou, Julien Coste, Julien Stephan, Laurent Huet, Luc Sorel-Giffo, Marc Audefroy, Maxime Odye, Nicolas Ledez, Pascal Le Merrer, Sébastien Chédor, Sylvain Révéreault, Yoann Dubreuil.</p>
			
			<h4>Comité programme</h4>
			<p>Le programme est composé à partir des votes des <em>membres des communautés techniques de Rennes</em>, pour assurer un programme diversifié et représentatif de notre écosystème.</p>
			
			<p>Le comité programme est responsable de :</p>
			<ul>
				<li><strong>Sélection des conférences</strong> : Évaluation et vote des propositions</li>
				<li><strong>Organisation du planning</strong> : Répartition des sessions par thème et niveau</li>
				<li><strong>Accompagnement des speakers</strong> : Support et coaching</li>
				<li><strong>Diversité du contenu</strong> : Équilibre des sujets et formats</li>
			</ul>
			
			<p><strong>Membres du comité programme :</strong></p>
			<p>Alexandre Thomazo, Guillaume Collic, Benoît Masson, Gaël Salaün, Pascal Le Merrer, Nicolas Pennec, Sylvain Révéreault, Sylvain Guernion, Luc Sorel-Giffo, Caroline Mouden, Sylvain Tranchand, Benoit Miedan-Gros, Sébastien Chédor, Julien Stephan, Maxime Odye, Jean-Louis Jouannic, Christopher Louët.</p>
			
			<h4>Rejoindre l'équipe</h4>
			<p>Vous souhaitez contribuer au BreizhCamp ? Nous sommes toujours à la recherche de nouvelles bonnes volontés ! Que vous ayez 2h par mois ou plus de temps à consacrer, votre aide sera précieuse.</p>
			
			<p>Compétences recherchées :</p>
			<ul>
				<li>Développement web et mobile</li>
				<li>Design graphique et UX</li>
				<li>Communication et marketing</li>
				<li>Logistique événementielle</li>
				<li>Relations entreprises et sponsoring</li>
				<li>Audiovisuel et technique</li>
			</ul>
		`,
		actions: [
			{
				label: 'Nous rejoindre',
				href: 'mailto:contact@breizhcamp.org',
				variant: 'primary',
				external: true
			}
		]
	},
	{
		id: 'association',
		title: "L'association",
		shortDescription: "En savoir plus sur l'association BreizhCamp",
		icon: icons.association,
		category: 'organization',
		content: `
			<h3>Association BreizhCamp</h3>
			<p>Le BreizhCamp est une <em>association loi 1901</em> dont l'objectif est d'organiser et de faciliter des événements autour de l'ingénierie informatique.</p>
			
			<h4>Nos missions principales</h4>
			<ul>
				<li><strong>Organiser</strong> l'événement annuel BreizhCamp</li>
				<li><strong>Faciliter</strong> les événements tech en Bretagne</li>
				<li><strong>Soutenir</strong> les groupes d'utilisateurs locaux</li>
				<li><strong>Promouvoir</strong> l'ingénierie informatique</li>
				<li><strong>Animer</strong> la communauté tech bretonne</li>
			</ul>
			
			<h4>Écosystème BreizhCamp</h4>
			<p>BreizhCamp c'est aussi un <em>ensemble de groupes d'utilisateurs locaux</em> qui organisent chaque mois des soirées techniques sur divers thèmes.</p>
			
			<p>Chacun de ces groupes d'utilisateurs, que nous appelons également <strong>User Groups</strong> ou <strong>Meet Up</strong>, bénéficie du cadre légal et de la force de frappe de l'équipe BreizhCamp en terme de :</p>
			<ul>
				<li><strong>Accès aux locaux</strong> : Facilitation pour trouver des lieux</li>
				<li><strong>Matériel</strong> : Mise à disposition d'équipements</li>
				<li><strong>Réseau de connaissance</strong> : Contacts et expertise</li>
				<li><strong>Sponsoring</strong> : Support financier et partenariats</li>
				<li><strong>Communication</strong> : Promotion des événements</li>
			</ul>
			
			<h4>Gouvernance</h4>
			<p>L'association est dirigée par un bureau élu chaque année :</p>
			<ul>
				<li><strong>Président(e)</strong> : Représentation légale et coordination</li>
				<li><strong>Trésorier(ère)</strong> : Gestion financière et comptabilité</li>
				<li><strong>Secrétaire</strong> : Gestion administrative et procès-verbaux</li>
			</ul>
			
			<h4>Adhésion et participation</h4>
			<p>Vous pouvez adhérer à l'association pour soutenir nos actions. L'adhésion donne accès :</p>
			<ul>
				<li>Aux assemblées générales</li>
				<li>Au vote pour les décisions importantes</li>
				<li>Aux informations privilégiées sur l'organisation</li>
				<li>À la possibilité de candidater au bureau</li>
			</ul>
			
			<h4>Transparence financière</h4>
			<p>Les comptes de l'association sont présentés chaque année en assemblée générale. Nous publions également un rapport d'activité détaillant l'utilisation des fonds.</p>
		`,
		actions: [
			{
				label: 'Nous contacter',
				href: 'mailto:contact@breizhcamp.org',
				variant: 'primary',
				external: true
			},
			{
				label: "Adhérer à l'association",
				href: 'mailto:contact@breizhcamp.org?subject=Adhésion association BreizhCamp',
				variant: 'secondary',
				external: true
			}
		]
	},
	{
		id: 'coaching',
		title: 'Le coaching',
		shortDescription: 'Accompagnement pour les speakers débutants',
		icon: icons.coaching,
		category: 'participation',
		content: `
			<h3>Programme de coaching speakers</h3>
			<p>Le BreizhCamp propose un <em>programme de coaching</em> pour accompagner les speakers débutants dans la préparation de leur première conférence.</p>
			
			<h4>Pourquoi un coaching ?</h4>
			<p>Prendre la parole en public peut être intimidant. Notre programme vise à :</p>
			<ul>
				<li><strong>Démystifier</strong> l'exercice de la conférence</li>
				<li><strong>Accompagner</strong> dans la structuration du contenu</li>
				<li><strong>Préparer</strong> à la prise de parole</li>
				<li><strong>Rassurer</strong> et donner confiance</li>
				<li><strong>Diversifier</strong> les profils de speakers</li>
			</ul>
			
			<h4>Comment ça marche ?</h4>
			<p>Le coaching se déroule en plusieurs étapes :</p>
			<ul>
				<li><strong>Candidature</strong> : Soumission de votre idée de sujet</li>
				<li><strong>Sélection</strong> : Évaluation par l'équipe programme</li>
				<li><strong>Accompagnement</strong> : Coaching personnalisé avec un mentor</li>
				<li><strong>Répétition</strong> : Sessions d'entraînement</li>
				<li><strong>Conférence</strong> : Présentation le jour J</li>
			</ul>
			
			<h4>Qui peut en bénéficier ?</h4>
			<p>Le programme s'adresse aux personnes qui :</p>
			<ul>
				<li>N'ont jamais fait de conférence</li>
				<li>Ont une expertise à partager</li>
				<li>Souhaitent contribuer à la communauté</li>
				<li>Ont besoin d'accompagnement pour se lancer</li>
			</ul>
			
			<h4>Nos mentors</h4>
			<p>Nos mentors sont des speakers expérimentés de la communauté qui donnent de leur temps pour accompagner les nouveaux talents.</p>
		`
	},
	{
		id: 'conseils-orateurs',
		title: 'Conseils aux orateurs',
		shortDescription: 'Guide pratique pour réussir votre présentation',
		icon: icons.speakers,
		category: 'participation',
		content: `
			<h3>Guide du speaker BreizhCamp</h3>
			<p>Vous allez présenter au BreizhCamp ? Voici nos conseils pour <em>réussir votre présentation</em> et vivre une expérience enrichissante.</p>
			
			<h4>Préparation du contenu</h4>
			<ul>
				<li><strong>Définissez votre objectif</strong> : Que doivent retenir les participants ?</li>
				<li><strong>Connaissez votre audience</strong> : Adaptez le niveau technique</li>
				<li><strong>Structurez votre présentation</strong> : Introduction, développement, conclusion</li>
				<li><strong>Préparez des exemples concrets</strong> : Illustrations, démos, cas d'usage</li>
				<li><strong>Chronométrez votre présentation</strong> : Respectez le format choisi</li>
			</ul>
			
			<h4>Conseils de présentation</h4>
			<ul>
				<li><strong>Arrivez en avance</strong> : Testez le matériel, familiarisez-vous avec la salle</li>
				<li><strong>Interagissez avec l'audience</strong> : Questions, sondages, démonstrations</li>
				<li><strong>Gérez votre stress</strong> : Respirez, hydratez-vous, restez naturel</li>
				<li><strong>Préparez-vous aux questions</strong> : Anticipez les interrogations possibles</li>
				<li><strong>Amusez-vous</strong> : Votre passion se transmettra à l'audience</li>
			</ul>
			
			<h4>Aspects techniques</h4>
			<ul>
				<li><strong>Format des slides</strong> : 16:9, police lisible (minimum 24pt)</li>
				<li><strong>Matériel fourni</strong> : Vidéoprojecteur, micro, pointeur laser</li>
				<li><strong>Connexions</strong> : HDMI, adaptateurs disponibles</li>
				<li><strong>Sauvegarde</strong> : Prévoyez plusieurs supports (USB, cloud)</li>
				<li><strong>Démos live</strong> : Préparez un plan B en cas de problème réseau</li>
			</ul>
			
			<h4>Après votre présentation</h4>
			<ul>
				<li><strong>Restez disponible</strong> : Échangez avec les participants</li>
				<li><strong>Partagez vos slides</strong> : Nous vous aiderons à les diffuser</li>
				<li><strong>Collectez les retours</strong> : Améliorez-vous pour la prochaine fois</li>
				<li><strong>Rejoignez la communauté</strong> : Continuez les échanges après l'événement</li>
			</ul>
			
			<h4>Support de l'équipe</h4>
			<p>L'équipe BreizhCamp est là pour vous accompagner. N'hésitez pas à nous contacter pour toute question ou demande d'aide.</p>
		`
	}
];
