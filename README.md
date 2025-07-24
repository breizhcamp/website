# Site BreizhCamp

Le site Web du BreizCamp est un site statique, généré avec [Svelte](https://svelte.dev/). Svelte est un framework web qui utilise un compilateur pour vous permettre d'écrire des composants concis, en utilisant les API natives des langages que vous connaissez déjà - HTML, CSS et JavaScript !

La majorité des contenus est écrit en Markdown. Il est facile d'y contribuer directement depuis l'interface de GitHub.

Ami·es du BreizhCamp, n'hésitez pas à proposer des PR si vous voulez améliorer ce site!

## Développement

### Installer node, npm et pnpm

L'installation de NodeJs installe automatiquement npm.

**1. windows**

download and install nodeJs: https://nodejs.org/en/download

**1. linux**

```sh
apt install nodejs
```

**2. windows et linux**

```
npm i -g pnpm
```

### Installer les dépendances

```sh
cd path/to/the/project
pnpm i
```

### Démarrer le site en local

```
pnpm dev
```

Le site sera accessible sur l'url : http://localhost:5173 et va s'ouvrir automatiquement dans le navigateur configuré par défaut.

### Générer le site statique et le lancer en local

```
pnpm build
pnpm preview
```

Le site sera accessible sur l'url : http://localhost:4173 et va s'ouvrir automatiquement dans le navigateur configuré par défaut.

### Contribution

Les évolutions sont les bienvenues. Merci d'en discuter avec l'équipe du BreizhCamp en direct ou via une issue avant.

Vous pouvez forker le repo et ouvrir une PR. Au moment du commit, des actions automatiques seront déclenchées : formatage, vérification de syntaxe, etc.

## Actions classiques

### Ouverture / Fermeture du CFP

### Ouverture / Fermeture de la billetterie

### Récupération des talks pour le programme

## Mise en production
