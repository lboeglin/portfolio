---
title: 'Smart IoT Dashboard'
description: 'Centralized platform for real-time climate sensor monitoring via MQTT.'
publishDate: 2023-11-15
tags: ['React', 'Node.js', 'Docker', 'MQTT', 'InfluxDB']
category: 'academic'
github: 'https://github.com/lboeglin/iot-dashboard'
demo: 'https://iot-demo.lboeglin.dev'
teamSize: 10
---

### Context

During my 3rd year of Bachelor's, we designed a complete solution to monitor temperature and humidity levels in the university server rooms.

### Technical Architecture

- **Frontend**: React using Recharts for data visualization.
- **Backend**: Express.js API subscribing to an MQTT broker (Mosquitto).
- **Database**: InfluxDB for Time Series storage.
- **Deployment**: Full containerization using Docker Compose.

### My Responsibilities

I was responsible for the backend architecture and implementing the CI/CD pipeline on GitHub Actions to automate unit tests.
