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

### 🎤 Fermer le CFP

```typescript
cfp: {
  isOpen: false, // ← Changer de true à false
  url: 'https://sessionize.com/breizhcamp-2026/',
  badge: 'Fermé'
}
```

**Résultat :**
- ❌ CFP disparaît du menu
- ❌ Plus de lien externe vers Sessionize

## 🚀 Déploiement par étapes

### Phase 1 : Site de base
```typescript
// Tout désactivé sauf les pages essentielles
programme: { available: false }
speakers: { available: false }
cfp: { isOpen: false }
tickets: { available: false }
```

### Phase 2 : Ouverture CFP
```typescript
cfp: { isOpen: true, badge: 'Ouvert' }
```

### Phase 3 : Programme disponible
```typescript
programme: { available: true }
speakers: { available: true }
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