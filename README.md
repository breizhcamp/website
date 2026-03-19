# Site BreizhCamp

Le site Web du BreizCamp est un site statique, généré avec [Svelte](https://svelte.dev/). Svelte est un framework web qui utilise un compilateur pour vous permettre d'écrire des composants concis, en utilisant les API natives des langages que vous connaissez déjà - HTML, CSS et JavaScript !

La majorité des contenus est écrite en Markdown. Il est facile d'y contribuer directement depuis l'interface de GitHub.

Ami·es du BreizhCamp, n'hésitez pas à proposer des PR si vous voulez améliorer ce site!

Pour lancer le site sur votre machine, Vous pouvez

- soit installer Node.js et pnpm,
- soit utiliser l'image Docker si vous ne souhaitez pas déployer ces outils directement sur votre OS.

## Développement avec Node.js et pnpm

### Mettre en place son environnement de développement

```sh
cp .env.example .env
```

Attention, le fichier `.env` est exclu du git.

### Installer node.js et pnpm

**1. Cloner le projet **

```sh
git clone git@github.com:breizhcamp/website-rework.git
```

**2. Installer Node.js **

https://nodejs.org/fr/download

**3. Installer pnpm **

```sh
corepack enable pnpm
```

### Installer les dépendances

```sh
cd website-rework
pnpm i
```

### Démarrer le site en local

```sh
pnpm dev
```

Le site sera accessible sur l'url http://localhost:5173 et va s'ouvrir automatiquement dans le navigateur par défaut.

### Générer le site statique et le lancer en local

```sh
pnpm build
pnpm preview
```

Le site sera accessible sur l'url http://localhost:4173 et va s'ouvrir automatiquement dans le navigateur par défaut.

## Développement avec Docker

**Prérequis** : Docker ou un équivalent (Podman, Colima, etc)

**1. Cloner le projet **

```sh
git clone git@github.com:breizhcamp/website-rework.git
```

**2. Construire l'image Docker**

```sh
cd website-rework
make docker-image
```

**3. Lancer le serveur de développement**

```sh
make docker-dev
```

Le site sera accessible sur l'URL http://localhost:5173.

### Générer le site statique et le lancer en local

```sh
make docker-build
```

Le site généré sera accessible sur l'URL http://localhost:4173.

## Contribution

Les évolutions sont les bienvenues. Merci d'en discuter avec l'équipe du BreizhCamp en direct ou via une issue avant.

Vous pouvez forker le repo et ouvrir une PR. Au moment du commit, des actions automatiques seront déclenchées : formatage, vérification de syntaxe, etc.

## Actions classiques

### Configuration centralisée du site

Le site utilise un système de configuration centralisé qui permet de gérer facilement l'activation/désactivation des fonctionnalités.

**📖 Voir la documentation complète :** [CONFIGURATION.md](./CONFIGURATION.md)

**Fichier de configuration :** `src/lib/config/site.ts`

### Ouverture / Fermeture du CFP

Éditez `src/lib/config/site.ts` :

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

### Ouverture / Fermeture de la billetterie

Éditez `src/lib/config/site.ts` :

```typescript
tickets: {
  available: true, // ← Changer à false pour fermer
  badge: 'Disponibles'
}
```

### Activation du Programme et des Intervenants

Éditez `src/lib/config/site.ts` :

```typescript
{
  id: 'programme',
  available: true, // ← Changer à true pour activer
  // ...
},
{
  id: 'speakers',
  available: true, // ← Changer à true pour activer
  // ...
}
```

**💡 Avantage :** Tous les menus, liens et badges se mettent à jour automatiquement sur tout le site !

## Mise en production

Globallement, c'est déployer avec du `git push` :

| Contexte       | Déclencheur              | PUBLIC_BASE_URL                                                                 |
| -------------- | ------------------------ | ------------------------------------------------------------------------------- |
| production     | Push sur main            | https://www.breizhcamp.org                                                      |
| deploy-preview | Pull Request             | URL générée par Netlify (ex: https://deploy-preview-42--breizhcamp.netlify.app) |
| branch-deploy  | Push sur autres branches | URL générée par Netlify (ex: https://feature-xyz--breizhcamp.netlify.app)       |
