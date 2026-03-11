---
title: 'Portail VPN WireGuard'
image: '../../../assets/projets/vpn-architecture.png'
description: 'Un portail web auto-hébergé pour gérer les configurations VPN WireGuard. Intègre une pipeline CI/CD, un déploiement Podman et une génération de clés sécurisée.'
publishDate: 2025-06
tags: ['python', 'flask', 'wireguard', 'podman', 'linux', 'ci-cd', 'github-actions']
category: 'personal'
github: 'https://github.com/lboeglin/vpn-portal'
demo: 'https://free-cities-hub.duckdns.org/'
featured: true
teamSize: 1
---

## Contexte du Projet

J'ai développé ce portail web auto-hébergé pour simplifier la gestion d'un VPN WireGuard. L'objectif était d'éliminer la configuration en ligne de commande pour les utilisateurs finaux en leur fournissant une interface épurée pour voir, télécharger et scanner (via QR code) leurs profils VPN, tout en offrant aux administrateurs un tableau de bord centralisé.

## Architecture Technique & Défis

### 1. Génération Sécurisée des Clés

Au lieu d'exécuter des commandes shell `wg` depuis le serveur web (ce qui pose des risques d'injection de commandes), l'application génère les paires de clés X25519 de manière native côté serveur en utilisant la bibliothèque Python `cryptography`.

- **Sécurité :** Le backend inclut une protection contre le brute-force via `Flask-Limiter` et sécurise les sessions avec `Flask-Login` et `Flask-Bcrypt`.

### 2. Frontière Conteneur / Hôte

WireGuard s'exécute dans le noyau de l'hôte, mais l'application web tourne de manière isolée dans un conteneur Podman. Pour relier les deux en toute sécurité :

- Le conteneur écrit les configurations des pairs dans un volume partagé (`/var/lib/vpn-portal/peers.conf`).
- Une unité `systemd path` sur l'hôte Rocky Linux surveille ce fichier et déclenche automatiquement `wg addconf` pour appliquer les changements à l'interface `wg0` en direct, sans exposer les privilèges de l'hôte au conteneur.

### 3. Pipeline CI/CD Automatisée

J'ai construit une pipeline de déploiement entièrement automatisée via GitHub Actions :

1. **Build & Push :** À chaque push sur `main`, GitHub Actions construit l'image et la pousse sur le GitHub Container Registry (GHCR).
2. **Déploiement :** Le runner se connecte au VPS via SSH, récupère la nouvelle image et exécute `podman-compose up -d`.
3. **Migrations :** Un script d'entrypoint gère les migrations de la base de données SQLite (`Flask-Migrate`) automatiquement au démarrage.
