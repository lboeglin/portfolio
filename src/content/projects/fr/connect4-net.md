---
title: 'Puissance 4 en Réseau (Go)'
description: "Implémentation du netcode d'un jeu multijoueur en Go : architecture Client-Serveur, protocole binaire TCP et gestion de la concurrence via Goroutines."
image: '../../../assets/projets/connect4-net-arch.png'
publishDate: 2024-01-15
tags: ['Go', 'Concurrency', 'TCP', 'Network Programming', 'Game Dev']
category: 'academic'
teamSize: 2
featured: false
github: 'https://github.com/lboeglin/go-connect4-net'
---

## Contexte du Projet

Réalisé dans le cadre du module de **Programmation Système (R3.05)**, ce projet avait pour objectif de transformer un jeu local de Puissance 4 (basé sur la bibliothèque **Ebitengine**) en un jeu multijoueur en ligne fonctionnel.

Le défi principal n'était pas la logique du jeu, mais la conception du **"net code"** permettant à deux clients distants de synchroniser leurs états via un serveur central.

## Architecture Technique

L'application repose sur une architecture **Client-Serveur** stricte où le serveur fait autorité sur le déroulement de la partie.

### 1. Gestion de la Concurrence (Go)

Le cœur du projet exploite la puissance des primitives de concurrence de Go :

- **Goroutines :** Chaque client connecté est géré par une goroutine légère indépendante côté serveur (dans `handlers.go`), permettant de ne pas bloquer la boucle principale.
- **Channels :** Utilisés intensivement pour la communication thread-safe entre les processus de lecture réseau et la logique de mise à jour du jeu (`update.go`).

### 2. Protocole de Communication

Nous avons conçu un **protocole binaire personnalisé** sur TCP pour minimiser la latence. Les messages sont structurés sous la forme `[Octet de Donnée, Octet de Type]` :

- `0x01` : Envoi de la couleur choisie (`OctetPlayerColor`).
- `0x02` : Envoi du coup joué (colonne) (`OctetOpponentMove`).
- `0x03` : Synchronisation d'état (Prêt / En attente) (`OctetOpponentState`).

### 3. Synchronisation des États

Le serveur orchestre les différentes phases du jeu pour garantir que les deux joueurs voient la même chose :

- **Lobby :** Attente de la connexion du second joueur.
- **Sélection :** Synchronisation du choix des couleurs (interdiction de prendre la même couleur).
- **Jeu :** Relais des coups joués en temps réel.
- **Fin :** Gestion du redémarrage de la partie (Re-match).

## Améliorations & Extensions

Au-delà du cahier des charges initial, nous avons enrichi l'application pour améliorer l'expérience multijoueur :

### Architecture & Réseau

- **Gestion Concurrente :** Le serveur gère chaque client dans une **goroutine** dédiée, séparant ainsi la logique pure du jeu de la gestion des communications réseau.
- **Configuration Facile :** Implémentation d'un écran d'accueil permettant la saisie de l'IP du serveur (remplaçant l'utilisation de flags en ligne de commande).

### Synchronisation Avancée (Phase de Sélection)

Nous avons rendu l'écran de choix des couleurs interactif en temps réel :

- **Visualisation :** Les déplacements du curseur de l'adversaire sont visibles en direct pendant qu'il fait son choix.
- **Contraintes de Jeu :** Système de verrouillage empêchant les deux joueurs de choisir la même couleur.
- **Flexibilité :** Possibilité de changer son choix de couleur tant que l'adversaire n'a pas validé le sien.
