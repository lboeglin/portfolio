---
title: 'Portfolio Personnel V2'
description: "Un site web moderne, rapide et accessible conçu avec Astro, TailwindCSS et DaisyUI pour présenter mon parcours d'ingénieur logiciel."
publishDate: '2024-02-15'
tags: ['Astro', 'TypeScript', 'TailwindCSS', 'DaisyUI']
category: 'personal'
github: '[https://github.com/lboeglin/portfolio](https://github.com/lboeglin/portfolio)'
demo: '[https://lohan-boeglin.com](https://lohan-boeglin.com)'
image: 'https://placehold.co/1200x720'
---

## Vue d'ensemble

Ce projet est né du besoin d'avoir une plateforme rapide, performante et facile à maintenir pour présenter mes projets académiques et professionnels. J'ai choisi **Astro** pour son approche "Island Architecture", qui réduit drastiquement la quantité de JavaScript envoyée au client.

### Fonctionnalités Clés

- **Internationalisation (i18n) :** Support natif pour l'anglais et le français.
- **Système de Thème :** Bascule mode sombre/clair avec persistance d'état utilisant les thèmes DaisyUI (Coffee/Caramellatte).
- **View Transitions :** Animations de navigation fluides côté client utilisant l'API View Transitions.
- **Design Responsive :** Mise en page "mobile-first" avec une barre latérale rétractable.

## Défis Techniques

### Gestion des Transitions de Vue

L'un des principaux défis a été de s'assurer que l'état (comme le choix du thème) persistait correctement lors de la navigation entre les pages. Comme le `ClientRouter` d'Astro remplace le contenu du DOM, les événements `window.onload` standard ne se déclenchent plus.

J'ai résolu ce problème en utilisant les événements du cycle de vie d'Astro :

```javascript
document.addEventListener('astro:page-load', () => {
  initTheme();
});
```
