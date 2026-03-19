# 🔧 Guide de Configuration BreizhCamp

## Activation rapide des fonctionnalités

### ✅ Activer le Programme et les Intervenants

Éditez `src/lib/config/site.ts` et changez :

```typescript
{
  id: 'programme',
  label: 'Programme',
  href: '/programme',
  description: 'Découvrir les sessions et conférences',
  available: true, // ← Changer de false à true
  showInMainNav: true,
  showInFooter: true,
  order: 2
},
{
  id: 'speakers',
  label: 'Intervenants',
  href: '/intervenants',
  description: 'Rencontrer nos speakers',
  available: true, // ← Changer de false à true
  showInMainNav: true, // ← Changer de false à true pour l'afficher dans le menu
  showInFooter: false,
  order: 3
}
```

**Résultat immédiat :**

- ✅ Liens cliquables dans le menu principal
- ✅ Programme visible dans le footer
- ✅ Plus de badges "Bientôt disponible"
- ✅ Pages d'erreur mises à jour automatiquement

### 🎫 Activer les Billets

```typescript
tickets: {
  available: true, // ← Changer de false à true
  badge: 'Disponibles' // ← Optionnel : changer le texte
}
```

**Résultat :**

- ✅ Bouton "Billets" cliquable dans le header
- ✅ Lien vers `/billets` au lieu du badge

### 🎤 Ouvrir/Fermer le CFP

#### Cacher le menu CFP

```typescript
cfp: {
  showInMainNav: false,
  isOpen: false
}
```

**Résultat :**

- ❌ CFP disparaît du menu

#### Affichage du menu CFP désactivé

```typescript
cfp: {
	showInMainNav: false,
	isOpen: false
}
```

**Résultat :**

- ✅ CFP apparaît dans le menu en grisé avec badge gris `BIENTÔT`
- ❌ Pas de lien externe vers Sessionize

#### Ouverture du CFP

```typescript
cfp: {
  showInMainNav: true,
  isOpen: true,
  url: 'https://sessionize.com/breizhcamp-2026/'
}
```

**Résultat :**

- ✅ CFP apparaît dans le menu avec badge vert `OUVERT`
- ✅ Lien externe vers Sessionize

```typescript
// CFP Ouvert avec badge spécifique
cfp: {
	showInMainNav: true,
	isOpen: true,
	badge: 'Ouvert → 15/03',
	url: 'https://sessionize.com/breizhcamp-2026/'
}
```

**Résultat :**

- ✅ CFP apparaît dans le menu avec badge vert `OUVERT → 15/03`
- ✅ Lien externe vers Sessionize

#### Fermeture du CFP

```typescript
cfp: {
	showInMainNav: true,
	isOpen: false,
	url: 'https://sessionize.com/breizhcamp-2026/'
}
```

**Résultat :**

- ✅ CFP apparaît dans le menu avec badge orange `FERMÉ`
- ✅ Lien externe vers Sessionize

## 🚀 Déploiement par étapes

### Phase 1 : Site de base

```typescript
// Tout désactivé sauf les pages essentielles
programme: {
	available: false;
}
speakers: {
	available: false;
}
cfp: {
	showInMainNav: false;
	isOpen: false;
}
tickets: {
	available: false;
}
```

### Phase 2 : Ouverture/Fermeture CFP

```typescript
// Affichage du menu CFP désactivé
cfp: {
	showInMainNav: true,
	isOpen: false
}

// CFP Ouvert
cfp: {
	showInMainNav: true,
	isOpen: true,
	url: 'https://sessionize.com/breizhcamp-2026/'
}

// CFP Ouvert avec badge spécifique
cfp: {
	showInMainNav: true,
	isOpen: true,
	badge: 'Ouvert → 15/03',
	url: 'https://sessionize.com/breizhcamp-2026/'
}

// CFP Fermé
cfp: {
	showInMainNav: true,
	isOpen: false,
	url: 'https://sessionize.com/breizhcamp-2026/'
}
```

### Phase 3 : Programme disponible

```typescript
programme: {
	available: true;
}
speakers: {
	available: true;
}
```

### Phase 4 : Billets en vente

```typescript
tickets: { available: true, badge: 'Disponibles' }
cfp: { isOpen: false, badge: 'Fermé' }
```

## 🎯 Avantages du système

- **🔄 Changement instantané** : Pas besoin de modifier plusieurs fichiers
- **🎨 Cohérence visuelle** : Badges et styles automatiques
- **🚫 Zéro lien cassé** : Les pages non disponibles ne sont pas cliquables
- **📱 Responsive** : Fonctionne sur desktop et mobile
- **♿ Accessible** : Curseurs et labels appropriés
- **🧹 Maintenable** : Une seule source de vérité

## 📍 Fichiers impactés automatiquement

Quand vous changez la configuration, ces composants se mettent à jour automatiquement :

- `src/lib/components/layout/Header.svelte` (menu principal + mobile)
- `src/lib/components/layout/Footer.svelte` (navigation footer)
- `src/routes/+error.svelte` (suggestions de pages)
- `src/routes/+page.svelte` (si vous l'adaptez)

**Aucune modification manuelle nécessaire !** 🎉
