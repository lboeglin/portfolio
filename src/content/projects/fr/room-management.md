---
title: 'Microservices de Gestion de Salles'
image: '../../../assets/projets/room-management-architecture.png'
description: 'Une architecture distribuée composée de trois services Spring Boot en Kotlin implémentant un pattern BFF pour gérer les utilisateurs et les réservations de salles.'
publishDate: 2025-01-25
tags: ['Kotlin', 'Spring Boot', 'Microservices', 'REST API', 'H2', 'Bruno']
category: 'academic'
teamSize: 2
featured: false
github: 'https://github.com/lboeglin/Lycaon'
---

## Présentation du Projet

Ce projet académique consistait à construire un **Système de Gestion de Salles** modulaire utilisant une **Architecture Microservices**. L'objectif était de séparer les responsabilités en services distincts tout en les orchestrant via une couche **Backend For Frontend (BFF)**.

Le projet a été réalisé en binôme avec **Samuel Amaral Antunes** et **Lohan Boëglin**.

## Architecture

Le système est divisé en trois applications Spring Boot distinctes, plus un service "Rooms" fourni :

1.  **Service Peoples :** Gère l'identité des utilisateurs et leurs profils.
2.  **Service Reservation :** Gère la logique de réservation des salles et les validations.
3.  **BFF (Back For Front) :** Agit comme un proxy et un agrégateur, gérant la sécurité et exposant des endpoints unifiés au client.

### 1. Service Peoples

Un registre spécialisé pour les utilisateurs.

- **Défi de Contrainte :** Interdiction d'utiliser les annotations Spring standard (`@Service`, `@Repository`) pour forcer la compréhension de l'injection de dépendances manuelle et de l'architecture en couches en Kotlin.
- **Source de Données Double :** Implémente un moteur de stockage commutable (H2 pour la production, `HashMap` pour les profils DEV).

### 2. Service Reservation

Le moteur logique central.

- **Tech Stack :** Utilise exclusivement `WebClient` pour la communication entre les services.
- **Logique :** Gère une validation temporelle complexe (chevauchement de dates, logique début/fin) et interagit avec les services Peoples et Rooms pour valider les IDs.

### 3. BFF & Agrégation

Le point d'entrée pour le frontend.

- **Sécurité :** Implémente Spring Security pour gérer l'accès `ADMIN` nécessaire à la création de ressources.
- **Agrégation :** Synthétise les données de plusieurs microservices en objets de réponse uniques (Data Classes). Par exemple, récupérer un utilisateur agrège automatiquement son historique détaillé de réservations.
- **Injection de Header :** Impose le passage strict des headers (`X-User`) aux services en aval.

## Stack Technique

- **Langage :** Kotlin
- **Framework :** Spring Boot 3
- **Communication :** REST, WebClient
- **Base de Données :** H2 (In-memory), HashMaps
- **Tests :** Bruno (Collections API), JUnit
