---
title: "Anby's Movies"
description: "Une application Android native de découverte de films conçue avec Kotlin et Material Design 3, suivant l'architecture MVVM et consommant l'API TMDb."
image: '../../../assets/projets/anbys-movies-mockup.png'
publishDate: 2024-06-20
tags: ['Kotlin', 'Android', 'MVVM', 'REST API', 'Material Design', 'Gradle', 'Ktor']
category: 'academic'
teamSize: 3
featured: false
github: 'https://github.com/Samferos/anbys-movies'
---

## Présentation du Projet

Réalisé dans le cadre du module "Développement Mobile" (SAÉ 4 - R4.11), ce projet avait pour objectif de développer une **application Android native** fonctionnelle. Le but était de créer un outil de découverte de films interagissant avec l'API publique de **The Movie Database (TMDb)**.

Ce projet a été réalisé en équipe de trois avec **Samuel Amaral Antunes** et **Théo Phan**.

## Fonctionnalités

L'application offre une expérience utilisateur complète pour naviguer parmi les films :

- **Intégration API :** Recherche de films en temps réel via l'API TMDb.
- **Interface Dynamique :** Affichage des résultats dans une `RecyclerView` personnalisée avec chargement dynamique optimisé des affiches de films.
- **Vue Détaillée :** Un écran dédié pour chaque film affichant le résumé, le titre, la date de sortie, la note, etc.

### Implémentations Avancées

Afin d'approfondir certains aspects du développement Android, nous avons ajouté des fonctionnalités supplémentaires :

- **Tri :** Possibilité de trier les résultats par popularité, note ou date.
- **Internationalisation (i18n) :** Support complet du Français et de l'Anglais selon la configuration de l'appareil.
- **Persistance Locale :** Implémentation d'une fonctionnalité de "Favoris" permettant de sauvegarder des données localement sur l'appareil.

## Architecture Technique

L'application repose sur une base technique moderne et robuste :

- **Style :** Utilise **Material Design 3** pour une interface utilisateur moderne et cohérente.
- **Architecture :** Suit le patron **MVVM (Model-View-ViewModel)** pour une séparation claire des responsabilités.
  - **Modèles de Données :** Classes de données Kotlin (`Movie`, `Genre`) définissant la structure.
  - **Couche DAO :** Gère la désérialisation JSON des réponses de l'API.
- **Structure UI :** Construite en utilisant une combinaison d'Activités et de **Fragments** pour la modularité (vues Recherche, Liste, Détail).

## Contraintes et Défis

Une contrainte majeure était d'assurer la compatibilité avec les machines spécifiques de l'IUT. Cela a nécessité une gestion rigoureuse de la configuration de build. Nous avons dû spécifiquement rétrograder la version du plugin **Android Gradle (AGP)** vers la `8.5.2` dans le fichier `libs.versions.toml` pour garantir la compilation et l'exécution réussies dans l'environnement cible.
