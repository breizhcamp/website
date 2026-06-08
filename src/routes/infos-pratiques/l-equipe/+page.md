---
title: "L'équipe"
excerpt: 'Découvrez les organisateurs du BreizhCamp'
icon: /icons/team.svg
category: 'organization'
layout: practical-info
order: 2
---

<script>
import PracticalInfoActions from '../PracticalInfoActions.svelte';
import PracticalInfoMembersList from '../PracticalInfoMembersList.svelte';
import { equipeOrganisation, comiteProgramme } from '$lib/config/team';
</script>

# Une équipe de bénévoles survitaminée

Le BreizhCamp est organisé par une _équipe de bénévoles survitaminée qui s'active en coulisse_. Développeurs, chefs de projet, designers... tous unis par l'envie de partager et faire grandir l'écosystème tech breton.

## Organisation

L'équipe d'organisation s'occupe de tous les aspects logistiques et opérationnels de l'événement :

- **Logistique** : Gestion du lieu, restauration, matériel
- **Communication** : Site web, réseaux sociaux, relations presse
- **Sponsors** : Recherche et gestion des partenariats
- **Accueil** : Accueil des participants et intervenants
- **Technique** : Infrastructure, streaming, enregistrement

**Membres de l'équipe d'organisation :**

<PracticalInfoMembersList members={equipeOrganisation} />.

## Comité programme

Le programme est composé à partir des votes des _membres des communautés techniques de Rennes_, pour assurer un programme diversifié et représentatif de notre écosystème.

Le comité programme est responsable de :

- **Sélection des conférences** : Évaluation et vote des propositions
- **Organisation du planning** : Répartition des sessions par thème et niveau
- **Accompagnement des speakers** : Support et coaching
- **Diversité du contenu** : Équilibre des sujets et formats

**Membres du comité programme :**

<PracticalInfoMembersList members={comiteProgramme} />.

## Rejoindre l'équipe

Vous souhaitez contribuer au BreizhCamp ? Nous sommes toujours à la recherche de nouvelles bonnes volontés ! Que vous ayez 2h par mois ou plus de temps à consacrer, votre aide sera précieuse.

Compétences recherchées :

- Développement web et mobile
- Design graphique et UX
- Communication et marketing
- Logistique événementielle
- Relations entreprises et sponsoring
- Audiovisuel et technique

<PracticalInfoActions actions={[
{
label: 'Nous rejoindre',
href: 'mailto:contact@breizhcamp.org',
variant: 'primary',
external: true
}
]}/>
