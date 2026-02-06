#!/bin/bash

# Script pour vérifier l'intégrité des images de l'équipe
# Usage: ./scripts/check-team-images.sh

echo "🔍 Vérification des images de l'équipe..."
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

missing_count=0
found_count=0

# Extraire toutes les références d'images depuis communities.ts
echo "📋 Vérification des images dans communities.ts..."
images=$(grep -o "picture: '/team/[^']*'" src/lib/config/communities.ts | sed "s/picture: '//g" | sed "s/'//g")

for img in $images; do
  if [ -f "static$img" ]; then
    echo -e "${GREEN}✓${NC} $img"
    ((found_count++))
  else
    echo -e "${RED}✗${NC} $img (MANQUANT)"
    ((missing_count++))
  fi
done

echo ""
echo "📋 Vérification des images dans equipe/+page.svelte..."

# Extraire les images depuis equipe/+page.svelte
images=$(grep -o "photo: '/team/[^']*'" src/routes/equipe/+page.svelte | sed "s/photo: '//g" | sed "s/'//g" | sort -u)

for img in $images; do
  if [ -f "static$img" ]; then
    echo -e "${GREEN}✓${NC} $img"
    ((found_count++))
  else
    echo -e "${RED}✗${NC} $img (MANQUANT)"
    ((missing_count++))
  fi
done

echo ""
echo "📊 Résumé:"
echo "  Images trouvées: $found_count"
echo "  Images manquantes: $missing_count"

if [ $missing_count -eq 0 ]; then
  echo -e "${GREEN}✓ Toutes les images sont présentes!${NC}"
  exit 0
else
  echo -e "${RED}✗ $missing_count image(s) manquante(s)${NC}"
  exit 1
fi
