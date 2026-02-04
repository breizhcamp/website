# Design System BreizhCamp

## Structure des fichiers CSS

```
src/lib/css/
├── index.css          # Point d'entrée - importe tous les autres fichiers
├── normalize.css      # Reset CSS avec modern-normalize
├── font.css          # Chargement de la police Inter
├── app.css           # Variables CSS et styles de base
├── utilities.css     # Classes utilitaires réutilisables
└── input.css         # Styles des champs de formulaire
```

## Utilisation

### 1. Classes utilitaires (utilities.css)

Utilisez les classes utilitaires pour éviter de dupliquer du CSS :

```svelte
<!-- ❌ Mauvais : CSS dupliqué -->
<style>
  .my-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

<!-- ✅ Bon : Classe utilitaire -->
<div class="container">
  <!-- contenu -->
</div>
```

### 2. Composants réutilisables

Utilisez les composants UI existants :

```svelte
import Button from '$lib/components/ui/Button.svelte';
import Card from '$lib/components/ui/Card.svelte';
import Badge from '$lib/components/ui/Badge.svelte';
```

### 3. Variables CSS

Utilisez les variables CSS pour les couleurs :

```css
/* ✅ Bon */
color: var(--neutral-700);
background: var(--violet);

/* ❌ Mauvais */
color: #334155;
background: #8e3089;
```

## Classes les plus utilisées

### Layout
- `.container` - Conteneur centré avec max-width
- `.section` - Section avec padding vertical
- `.flex`, `.grid` - Layouts flexbox et grid

### Spacing
- `.gap-4`, `.mt-4`, `.mb-8`, `.p-4` - Espacements cohérents

### Typography
- `.text-sm`, `.text-lg` - Tailles de texte
- `.font-semibold` - Poids de police
- `.text-center` - Alignement

### Colors
- `.text-neutral-700` - Texte principal (contraste AAA)
- `.text-neutral-600` - Texte secondaire (contraste AAA)
- `.bg-neutral-50` - Fond gris clair

### Composants
- `.card` - Carte avec border et shadow
- `.badge`, `.badge-primary` - Badges
- `.input-field` - Champ de formulaire
- `.avatar`, `.avatar-sm` - Avatars

## Accessibilité

### Contrastes WCAG 2.1 AAA

✅ **Utilisez ces couleurs pour les textes :**
- `neutral-700` (#334155) - Contraste 9.73:1
- `neutral-600` (#475569) - Contraste 7.23:1

❌ **Évitez ces couleurs pour les textes :**
- `neutral-500` (#64748B) - Contraste 4.54:1 (AA seulement)
- `neutral-400` (#94A3B8) - Contraste 2.85:1 (échec)

### Zones de clic

Minimum 44x44px pour tous les éléments interactifs.

### Focus visible

Tous les éléments interactifs ont un outline violet de 2px au focus.

## Responsive

Les classes utilitaires supportent les breakpoints :

```html
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  <!-- Responsive grid -->
</div>
```

Breakpoints :
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

## Voir aussi

- `/design-system` - Page de documentation complète avec exemples visuels
- `src/lib/components/ui/` - Composants UI réutilisables
