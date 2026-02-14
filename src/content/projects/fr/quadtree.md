---
title: 'Moteur de Terrain Quadtree'
description: "Moteur de terrain 2D infini en Go avec Ebitengine, utilisant une structure de données Quadtree pour l'optimisation mémoire."
publishDate: 2024-01-10
tags: ['Go', 'Algorithmie', 'Game Dev', 'Optimisation']
category: 'academic'
github: 'https://github.com/lboeglin/go-quadtree-engine'
image: '../../../assets/projets/quadtree-debug.png'
featured: true
teamSize: 1
---

Ce projet a été réalisé dans le cadre des modules d'Introduction au Développement et de la SAÉ "Implémentation d'un besoin client" en première année de BUT Informatique. L'objectif était de développer une bibliothèque capable de représenter et de stocker un terrain de jeu en 2D de manière compacte en mémoire via un arbre quaternaire (Quadtree).

## Fonctionnalités Principales

Le cœur du projet repose sur l'implémentation récursive d'un Quadtree. Contrairement à un tableau 2D classique qui consomme beaucoup de mémoire pour les grandes cartes, le Quadtree divise l'espace en quatre zones, ne créant des nœuds enfants que lorsque le terrain n'est pas uniforme.

J'ai implémenté les fonctions critiques suivantes :

- **Lecture de Fichier (`ReadFromFile`) :** Analyse de fichiers texte représentant des terrains, avec prise en charge des espaces pour générer la carte initiale.
- **Construction (`MakeFromArray`) :** Conversion d'un tableau brut en structure Quadtree récursive. Mon algorithme gère les terrains dont la taille est une puissance de 2 ($2^n$).
- **Rendu (`GetContent`) :** Algorithme de parcours de l'arbre pour extraire uniquement la zone visible par la caméra et l'afficher à l'écran.
- **Mise à jour (`Update`) :** Gestion dynamique de l'affichage en fonction des déplacements du personnage et de la position relative de la caméra.

## Extensions Implémentées

Au-delà du cahier des charges, j'ai développé plusieurs extensions configurables via un fichier `config.json` :

- **Génération Procédurale :** Création de terrains aléatoires, permettant une rejouabilité infinie.
- **Système de Sauvegarde :** Sérialisation de l'état du Quadtree vers un fichier, permettant de conserver la progression et la topologie du terrain généré.
- **Physique & Collisions :** Implémentation de "biomes" bloquants. Le système détecte le type de terrain (ex: Eau) et empêche le personnage de s'y déplacer.
