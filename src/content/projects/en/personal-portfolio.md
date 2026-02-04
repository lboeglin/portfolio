---
title: 'Personal Portfolio V2'
description: 'A modern, fast, and accessible portfolio website built with Astro, TailwindCSS, and DaisyUI to showcase my software engineering journey.'
publishDate: 2024-02-15
tags: ['Astro', 'TypeScript', 'TailwindCSS', 'DaisyUI']
category: 'personal'
github: 'https://github.com/lboeglin/portfolio'
demo: 'https://lohan-boeglin.com'
image: 'https://placehold.co/1280x720/1d232a/7480ff?text=Portfolio+V2'
---

## Overview

This project was born out of a need to have a fast, performant, and easily maintainable platform to showcase my academic and professional projects. I chose **Astro** for its "Island Architecture" approach, which drastically reduces the amount of JavaScript shipped to the client.

### Key Features

- **Internationalization (i18n):** Native support for English and French.
- **Theme System:** Dark/Light mode toggle with persistent state using DaisyUI themes (Coffee/Caramellatte).
- **View Transitions:** Smooth client-side navigation animations using the View Transitions API.
- **Responsive Design:** Fully mobile-first layout with a collapsible sidebar.

## Technical Challenges

### Handling View Transitions

One of the main challenges was ensuring that state (like the theme toggle) persisted correctly across page navigations. Since Astro's `ClientRouter` swaps the DOM content, standard `window.onload` events don't fire again.

I solved this by using Astro's lifecycle events:

```javascript
document.addEventListener('astro:page-load', () => {
  // Re-initialize theme logic here
  initTheme();
});
```
