---
title: "Automatisation d'Infrastructure Réseau Linux"
description: "Transformation d'un projet réseau manuel en solution Infrastructure as Code (IaC). Orchestration par scripts Bash idempotents pour le déploiement de VLANs, Routage, NAT et Services."
publishDate: 2024-06-15
tags: ['Linux', 'Bash', 'Debian', 'Réseaux', 'Wireshark', 'Automatisation', 'Sécurité']
category: 'academic'
github: 'https://github.com/lboeglin/linux-network-infrastructure'
image: '../../../assets/projets/architecture-diagram.png'
featured: true
teamSize: 1
---

## Contexte

Ce projet constitue une refonte complète d'un projet réseau de première année. Bien que la topologie initiale ait été conçue en binôme, j'ai entièrement reconstruit l'implémentation de manière individuelle pour moderniser le processus de déploiement.

J'ai remplacé les étapes de configuration manuelle par des **scripts Bash robustes et idempotents**, illustrant les pratiques d'**Infrastructure as Code (IaC)** pour garantir la fiabilité et la reproductibilité du réseau.

## Architecture

L'infrastructure simule un réseau d'entreprise segmenté utilisant des machines virtuelles Debian, divisé en deux zones de sécurité :

1.  **Zone VLAN (ID 117) :** Réseau interne isolé pour les postes Clients et le serveur DHCP.
2.  **Zone LAN (Management) :** Héberge les services critiques dont le serveur Mail SMTP et l'autorité DNS.
3.  **Nœud Routeur :** Une passerelle centrale gérant le **NAT (Masquerade)**, les règles de **Pare-feu Stateful (iptables)** et le routage inter-VLAN.

## Implémentation Technique

### Automatisation & Scripting

J'ai développé un script d'orchestration unifié (`network-config.sh`) qui automatise le provisionnement de n'importe quel nœud du réseau.

- **Idempotence :** Le script effectue des vérifications préalables (ex: `iptables -C`, `ip link show`) pour éviter les duplications, permettant une ré-exécution sans risque.
- **Persistance :** Configuration de `netfilter-persistent` et `sysctl.d` pour assurer que les tables de routage et les règles de sécurité survivent au redémarrage.
- **Config Dynamique :** Génération automatique des fichiers de configuration pour `isc-dhcp-server` et `postfix` basée sur les variables d'environnement.

### Analyse Réseau

Pour valider l'intégrité du réseau, j'ai effectué une analyse approfondie des paquets via **Wireshark** :

- Vérification du **marquage VLAN 802.1Q** dans les trames ICMP.
- Analyse du handshake **DHCP DORA** à 4 étapes (Discover, Offer, Request, Acknowledge).
- Traçage de la résolution DNS et des handshakes TCP pour le trafic SMTP.

## Résultats Clés

- Transition d'une configuration manuelle propice aux erreurs vers un **déploiement en une seule commande**.
- Mise en place d'un **Pare-feu Stateful** autorisant le trafic retour établi tout en bloquant les accès non autorisés.
- Production d'une documentation technique professionnelle et de diagrammes d'architecture.
