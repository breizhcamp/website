# Configuration du site BreizhCamp

Ce dossier contient la configuration centralisée du site BreizhCamp, permettant de gérer facilement l'activation/désactivation des fonctionnalités.

## 📁 Fichiers

- `site.ts` - Configuration principale du site

## 🔧 Configuration des pages

### Activer/Désactiver une page

Pour activer ou désactiver une page, modifiez la propriété `available` dans `site.ts` :

```typescript
{
  id: 'programme',
  label: 'Programme',
  href: '/programme',
  description: 'Découvrir les sessions et conférences',
  available: true, // ← Changer à true pour activer
  showInMainNav: true,
  showInFooter: true,
  order: 2
}
```

### Ajouter une nouvelle page

1. Ajoutez une nouvelle entrée dans le tableau `pages` :

```typescript
{
  id: 'nouvelle-page',
  label: 'Nouvelle Page',
  href: '/nouvelle-page',
  description: 'Description de la nouvelle page',
  available: true,
  showInMainNav: true,
  showInFooter: false,
  order: 7
}
```

2. La page apparaîtra automatiquement dans :
   - Le menu principal (si `showInMainNav: true`)
   - Le footer (si `showInFooter: true`)
   - Les suggestions de la page d'erreur
   - Avec un badge "Bientôt" si `available: false`

### Configuration du CFP

```typescript
cfp: {
  showInMainNav: true, // 🔧 Changer à true/false pour afficher/cacher le CFP dans le header
  isOpen: true, // 🔧 Changer à true/false pour ouvrir/fermer le CFP
  // 🔧 Si non défini 'Ouvert'/'Fermé' en fonction de `isOpen`
  //badge: 'Bientôt',
  //badge: 'Ouvert → 15/03',
  // 🔧 À commenter si pas encore créé dans Sessionize (⇒ menu grisé avec badge "Bientôt")
  url: 'https://sessionize.com/breizhcamp-2026/'
}
```

### Configuration des billets

```typescript
tickets: {
  available: false, // ← Changer à true pour ouvrir les billets
  badge: 'Bientôt disponibles'
}
```

## 🎯 Utilisation dans les composants

### Header et Footer

Les composants utilisent automatiquement la configuration :

```typescript
import { getNavigationItems, getFooterPages } from '../config/site.js';

const navigationItems = getNavigationItems();
const footerPages = getFooterPages();
```

### Page d'erreur

```typescript
import { getSuggestionPages } from '../config/site.js';

const popularPages = getSuggestionPages();
```

## 🔄 Fonctions utilitaires

- `getNavigationPages()` - Pages pour le menu principal
- `getFooterPages()` - Pages pour le footer
- `getAvailablePages()` - Seulement les pages disponibles
- `getAllPages()` - Toutes les pages (triées par ordre)
- `getPageById(id)` - Récupérer une page par son ID
- `getNavigationItems()` - Items formatés pour la navigation (avec CFP)
- `getSuggestionPages()` - Pages formatées pour les suggestions d'erreur

## 🎨 Rendu automatique

### Pages disponibles

- Lien cliquable normal
- Couleurs et styles standards

### Pages non disponibles

- Élément non cliquable
- Badge "Bientôt" ou "Bientôt disponible"
- Opacité réduite
- Curseur `not-allowed`

## 📝 Exemple complet

```typescript
// Activer le programme et les intervenants
export const siteConfig: SiteConfig = {
	pages: [
		// ... autres pages
		{
			id: 'programme',
			label: 'Programme',
			href: '/programme',
			description: 'Découvrir les sessions et conférences',
			available: true, // ✅ Activé
			showInMainNav: true,
			showInFooter: true,
			order: 2
		},
		{
			id: 'speakers',
			label: 'Intervenants',
			href: '/intervenants',
			description: 'Rencontrer nos speakers',
			available: true, // ✅ Activé
			showInMainNav: true,
			showInFooter: false,
			order: 3
		}
	],
	cfp: {
		isOpen: false, // ❌ CFP fermé
		url: 'https://sessionize.com/breizhcamp-2026/',
		badge: 'Fermé'
	},
	tickets: {
		available: true, // ✅ Billets ouverts
		badge: 'Disponibles'
	}
};
```

Cette configuration rendra automatiquement :

- Programme et Intervenants cliquables dans tous les menus
- CFP absent du menu
- Bouton "Billets" cliquable dans le header
