---
title: 'Conteneurisation & Migration MVC'
description: "Migration d'une application PHP monolithique vers une architecture Cloud-Native sous Podman. Inclut une migration complète MySQL vers PostgreSQL et l'intégration d'un registre OCI."
publishDate: 2024-04-10
tags: ['podman', 'postgresql', 'php', 'apache', 'linux', 'bash', 'docker']
category: 'academic'
github: 'https://github.com/votreusername/podman-mvc-migration'
featured: false
teamSize: 3
---

## Contexte du Projet

Ce projet s'inscrit dans le module de virtualisation (SAE). Bien que l'application PHP originale ait été développée en équipe de trois, j'ai pris la responsabilité de la phase **DevOps et Infrastructure**. L'objectif était de transformer un environnement de développement local "legacy" en un déploiement conteneurisé professionnel, compatible avec les registres OCI privés.

## Défis Techniques

### 1. Migration du Moteur de Base de Données

L'application d'origine était fortement couplée à MariaDB (MySQL). J'ai piloté la migration vers **PostgreSQL**, nécessitant :

- **Refactoring SQL :** Réécriture des requêtes incompatibles et ajustement des types de données.
- **Transition du Driver :** Mise à jour de la couche d'abstraction PHP PDO pour utiliser le pilote `pgsql`.
- **Peuplement Automatisé :** Création de scripts SQL idempotents dans `/docker-entrypoint-initdb.d` pour initialiser le schéma automatiquement au démarrage du conteneur.

### 2. Architecture Podman

Au lieu d'utiliser des conteneurs Docker standards liés par un réseau bridge, j'ai mis en œuvre une architecture **Podman Pod**.

- **Namespace Partagé :** Les conteneurs Web et Base de données partagent le même namespace réseau (`localhost`), imitant le pattern "Sidecar" utilisé dans Kubernetes.
- **Sécurité :** Seul le port HTTP (8080) est exposé à l'hôte ; le trafic de la base de données reste strictement interne au Pod.

### 3. Ingénierie d'Images Personnalisées

Les images standard Docker Hub ne suffisaient pas pour notre framework MVC personnalisé. J'ai conçu un processus de build spécifique :

- **Configuration Apache :** Activation de `mod_rewrite` pour gérer la logique de routage du framework.
- **Gestion des Dépendances :** Intégration locale du script `install-php-extensions` pour garantir la reproductibilité du build, même dans des environnements réseau restreints ou hors ligne.

## Infrastructure as Code

Le déploiement complet est défini par le code, permettant un démarrage en une seule commande :

```bash
# Déploie la stack complète avec la configuration réseau pré-établie
podman pod create --name mvc-pod -p 8080:80 -p 5432:5432
podman run --pod mvc-pod -d postgres-db
podman run --pod mvc-pod -d mvc-app
```
