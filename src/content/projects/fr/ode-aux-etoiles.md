---
title: "L'Ode aux Étoiles (Code Game Jam)"
image: '../../../assets/projets/ode-aux-etoiles-cover.png'
description: 'Un jeu de plateforme 2D créé lors de la Code Game Jam IUT 2025. Développé sur Godot avec des assets sur-mesure, en gérant un scope strict pour livrer dans les temps.'
publishDate: 2025-01-15
tags: ['godot', 'gdscript', 'c#', 'game dev', 'teamwork']
category: 'personal'
github: 'https://github.com/Samferos/code_game_jam_2025'
demo: 'https://afissard.itch.io/lode-aux-etoiles'
featured: true
teamSize: 5
---

## Contexte du Projet

"L'Ode aux Étoiles" a été développé par une équipe de 5 personnes lors de la Code Game Jam IUT 2025. Autour du thème "Mélodie à l'infini", le concept initial visait une tour générée procéduralement. Pour garantir la livraison d'un jeu jouable avant la deadline, nous avons fait un choix d'ingénierie pragmatique : réduire le _scope_ pour nous concentrer sur un niveau unique et peaufiné.

## Mon Rôle & Défis Techniques

J'étais en charge de la programmation du gameplay principal, avec un focus sur la physique et la logique des entités :

- **Cinématique du Joueur :** Implémentation des mécaniques de plateforme 2D (sauts, gravité, détection de collisions) via GDScript pour un contrôle réactif.
- **Mouvements des Entités :** Programmation des comportements et des patterns de déplacement des ennemis.

## Architecture & Refonte Post-Jam

La version initiale a été entièrement développée en **GDScript** pour maximiser la vitesse de prototypage, en intégrant des assets (graphismes et musiques) 100% originaux créés par l'équipe.

Après l'événement, nous avons entamé une refonte technique pour migrer la base de code vers **C#**. Bien que cette branche soit restée à l'état de brouillon, cela a constitué un excellent exercice de traduction d'une logique de jeu dynamiquement typée vers une architecture orientée objet fortement typée.
