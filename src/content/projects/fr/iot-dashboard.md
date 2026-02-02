---
title: 'Tableau de Bord IoT & Domotique'
description: 'Plateforme centralisée pour la surveillance de capteurs climatiques en temps réel via MQTT.'
publishDate: 2023-11-15
tags: ['React', 'Node.js', 'Docker', 'MQTT', 'InfluxDB']
category: 'academic'
github: 'https://github.com/lboeglin/iot-dashboard'
demo: 'https://iot-demo.lboeglin.dev'
---

### Contexte

Dans le cadre de ma 3ème année de BUT, nous devions concevoir une solution complète pour relever des températures et taux d'humidité dans les salles serveurs de l'IUT.

### Architecture Technique

- **Frontend**: React avec Recharts pour la visualisation des données.
- **Backend**: API Express.js qui s'abonne à un broker MQTT (Mosquitto).
- **Base de données**: InfluxDB pour le stockage des séries temporelles (Time Series).
- **Déploiement**: Conteneurisation complète avec Docker Compose.

### Mes Responsabilités

J'étais en charge de l'architecture backend et de la mise en place du pipeline CI/CD sur GitHub Actions pour automatiser les tests unitaires.
