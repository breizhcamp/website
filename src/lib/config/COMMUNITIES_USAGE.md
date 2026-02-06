# Guide d'utilisation - Communautés

## Fichier de configuration

Le fichier `communities.ts` contient toutes les informations des communautés partenaires du BreizhCamp.

### Structure des données

```typescript
interface SocialLink {
	type: 'twitter' | 'linkedin' | 'mastodon';
	handle: string;
	url: string;
}

interface Organizer {
	name: string;
	picture: string;
	social?: SocialLink;
}

interface Community {
	name: string;
	logo: string;
	url: string;
	text?: string;
	organizers: Organizer[];
}
```

## Utilisation dans un composant Svelte

### Import simple

```svelte
<script lang="ts">
	import { communities } from '$lib/config/communities';
</script>

{#each communities as community (community.name)}
	<div>
		<h3>{community.name}</h3>
		<a href={community.url}>{community.url}</a>
	</div>
{/each}
```

### Avec les organisateurs

```svelte
<script lang="ts">
	import { communities } from '$lib/config/communities';
</script>

{#each communities as community (community.name)}
	<article>
		<img src={community.logo} alt={community.name} />
		<h3>{community.name}</h3>
		{#if community.text}
			<p>{community.text}</p>
		{/if}

		<div class="organizers">
			{#each community.organizers as organizer (organizer.name)}
				<div>
					<img src={organizer.picture} alt={organizer.name} />
					<span>{organizer.name}</span>
					{#if organizer.social}
						<a href={organizer.social.url}>
							@{organizer.social.handle}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</article>
{/each}
```

### Filtrer par type de réseau social

```svelte
<script lang="ts">
	import { communities } from '$lib/config/communities';

	// Trouver tous les organisateurs sur Twitter
	const twitterOrganizers = communities
		.flatMap((c) => c.organizers)
		.filter((o) => o.social?.type === 'twitter');
</script>
```

### Rechercher une communauté

```svelte
<script lang="ts">
	import { communities } from '$lib/config/communities';

	const rennesJS = communities.find((c) => c.name === 'Rennes JS');
</script>
```

## Composant prêt à l'emploi

Un composant `Communities.svelte` est disponible dans `src/lib/components/`:

```svelte
<script>
	import Communities from '$lib/components/Communities.svelte';
</script>

<Communities />
```

Ce composant affiche:

- Toutes les communautés avec leurs logos
- Les organisateurs avec leurs photos
- Les liens vers les réseaux sociaux
- Un design responsive et accessible

## Ajouter une nouvelle communauté

1. Ouvrir `src/lib/config/communities.ts`
2. Ajouter un nouvel objet dans le tableau:

```typescript
{
  name: 'Nouvelle Communauté',
  logo: 'https://example.com/logo.png',
  url: 'https://example.com',
  text: 'Description optionnelle',
  organizers: [
    {
      name: 'Prénom Nom',
      picture: '/team/prenom-nom.jpg',
      social: {
        type: 'twitter',
        handle: 'username',
        url: 'https://twitter.com/username'
      }
    }
  ]
}
```

## Ajouter une photo d'organisateur

1. Placer la photo dans `static/team/`
2. Nommer le fichier de manière cohérente (ex: `prenom-nom.jpg`)
3. Référencer dans `communities.ts`: `picture: '/team/prenom-nom.jpg'`

## Types de réseaux sociaux supportés

- `twitter`: Twitter/X
- `linkedin`: LinkedIn
- `mastodon`: Mastodon (ou autres instances Fediverse)

Pour ajouter un nouveau type:

1. Modifier l'interface `SocialLink` dans `communities.ts`
2. Ajouter l'icône SVG dans le composant `Communities.svelte`

## Optimisation des performances

### Lazy loading des images

Les images utilisent `loading="lazy"` par défaut dans le composant.

### Préchargement des logos importants

```svelte
<svelte:head>
	<link rel="preload" as="image" href="/team/important-person.jpg" />
</svelte:head>
```

### Utilisation de WebP

Pour convertir les images en WebP:

```bash
# Avec cwebp (libwebp)
cwebp -q 80 input.jpg -o output.webp

# Avec sharp (Node.js)
npm install sharp
node -e "require('sharp')('input.jpg').webp({quality:80}).toFile('output.webp')"
```

Puis utiliser avec fallback:

```svelte
<picture>
	<source srcset="/team/person.webp" type="image/webp" />
	<img src="/team/person.jpg" alt="Person" />
</picture>
```

## Accessibilité

Le composant `Communities.svelte` inclut:

- Attributs `alt` descriptifs sur toutes les images
- Liens avec `rel="noopener noreferrer"` pour la sécurité
- Attributs `title` sur les liens sociaux
- Structure sémantique HTML5 (`<article>`, `<h3>`, etc.)

## Tests

### Vérifier que toutes les images existent

```bash
# Lister toutes les photos référencées
grep -r "picture:" src/lib/config/communities.ts | grep -o "/team/[^']*"

# Vérifier qu'elles existent
for img in $(grep -r "picture:" src/lib/config/communities.ts | grep -o "/team/[^']*"); do
  if [ ! -f "static$img" ]; then
    echo "Missing: $img"
  fi
done
```

### Valider la structure TypeScript

```bash
npm run check
# ou
pnpm check
```

## Maintenance

### Mise à jour d'une photo

1. Remplacer le fichier dans `static/team/`
2. Garder le même nom de fichier (pas besoin de modifier `communities.ts`)
3. Vider le cache du navigateur si nécessaire

### Mise à jour des informations

Modifier directement `src/lib/config/communities.ts` - les changements seront automatiquement pris en compte au prochain build.

### Suppression d'une communauté

1. Retirer l'objet du tableau dans `communities.ts`
2. Optionnel: supprimer les photos des organisateurs si elles ne sont plus utilisées ailleurs
