# Guide d'utilisation du Design System

## Objectif

Éviter la duplication de code CSS en utilisant les classes utilitaires et composants réutilisables.

## Avant / Après

### Exemple 1 : Section avec titre

**❌ Avant (CSS dupliqué)**
```svelte
<section class="my-section">
  <h2>Mon titre</h2>
  <p class="subtitle">Ma description</p>
</section>

<style>
  .my-section {
    padding: 4rem 0;
  }
  
  .my-section h2 {
    text-align: center;
    color: var(--neutral-900);
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  
  .subtitle {
    text-align: center;
    color: var(--neutral-700);
    font-size: 1.1rem;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
```

**✅ Après (Classes utilitaires)**
```svelte
<section class="section">
  <h2 class="section-title">Mon titre</h2>
  <p class="section-subtitle">Ma description</p>
</section>

<!-- Pas de <style> nécessaire ! -->
```

### Exemple 2 : Grille de cartes

**❌ Avant**
```svelte
<div class="cards-grid">
  <div class="card-item">Contenu</div>
  <div class="card-item">Contenu</div>
</div>

<style>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .card-item {
    background: white;
    border: 1px solid var(--neutral-200);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  }
</style>
```

**✅ Après**
```svelte
<div class="grid grid-auto-fit gap-8">
  <div class="card">Contenu</div>
  <div class="card">Contenu</div>
</div>
```

### Exemple 3 : Flexbox avec espacement

**❌ Avant**
```svelte
<div class="header-row">
  <h2>Titre</h2>
  <span class="badge-custom">Nouveau</span>
</div>

<style>
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  .badge-custom {
    background: var(--violet);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
  }
</style>
```

**✅ Après**
```svelte
<div class="flex justify-between items-center gap-4">
  <h2>Titre</h2>
  <span class="badge badge-primary">Nouveau</span>
</div>
```

## Classes les plus utiles

### Layout
```html
<div class="container">           <!-- Conteneur centré -->
<section class="section">         <!-- Section avec padding -->
<div class="flex gap-4">          <!-- Flexbox avec gap -->
<div class="grid grid-cols-3">    <!-- Grid 3 colonnes -->
```

### Spacing
```html
<div class="mt-4 mb-8">           <!-- Margins -->
<div class="p-4">                 <!-- Padding -->
<div class="gap-6">               <!-- Gap dans flex/grid -->
```

### Typography
```html
<p class="text-sm text-neutral-700">     <!-- Texte small gris -->
<h2 class="text-2xl font-semibold">      <!-- Titre large bold -->
<div class="text-center">                <!-- Centré -->
```

### Composants
```html
<div class="card">                        <!-- Carte -->
<span class="badge badge-success">       <!-- Badge vert -->
<img class="avatar" />                   <!-- Avatar rond -->
<input class="input-field" />            <!-- Input stylisé -->
```

## Composants UI à utiliser

Au lieu de recréer des boutons, badges, cartes, utilisez les composants existants :

```svelte
<script>
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
</script>

<Card>
  <h3>Titre de la carte</h3>
  <p>Contenu</p>
  <Badge>React</Badge>
  <Button variant="primary">Action</Button>
</Card>
```

## Quand créer du CSS custom ?

Créez du CSS custom uniquement pour :
- Des styles très spécifiques à un composant
- Des animations complexes
- Des layouts très particuliers

**Règle d'or :** Si vous écrivez le même CSS dans 2+ endroits, créez une classe utilitaire ou un composant.

## Ressources

- `/design-system` - Documentation visuelle complète
- `src/lib/css/utilities.css` - Toutes les classes disponibles
- `src/lib/css/README.md` - Guide des fichiers CSS
- `src/lib/components/ui/` - Composants réutilisables

## Migration progressive

Vous n'avez pas besoin de tout refactoriser d'un coup :
1. Utilisez les classes utilitaires pour les nouveaux composants
2. Refactorisez progressivement l'ancien code quand vous le modifiez
3. Priorisez les sections avec beaucoup de duplication
