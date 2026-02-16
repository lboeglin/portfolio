---
title: 'Legacy App Containerization & Migration'
description: 'Migration of a monolithic PHP MVC application to a cloud-native Podman architecture. Features a complete MySQL-to-PostgreSQL database migration and OCI registry integration.'
publishDate: 2024-04-10
tags: ['podman', 'postgresql', 'php', 'apache', 'linux', 'bash', 'docker']
category: 'academic'
github: 'https://github.com/yourusername/podman-mvc-migration'
featured: false
teamSize: 3
---

## Project Context

This project was part of a university virtualization module (SAE). While the original PHP application was developed in a team of three, I took the lead on the **DevOps and Infrastructure** phase. The goal was to transform a "legacy" local development setup into a professional, containerized deployment compatible with private OCI registries.

## Key Technical Challenges

### 1. Database Engine Migration

The original application was tightly coupled to MariaDB (MySQL). I managed the migration to **PostgreSQL**, which involved:

- **SQL Refactoring:** Rewriting incompatible queries and adjusting data types.
- **Driver Transition:** updating the PHP PDO abstraction layer to use the `pgsql` driver.
- **Automated Seeding:** Creating idempotent SQL scripts in `/docker-entrypoint-initdb.d` to initialize the schema automatically upon container startup.

### 2. Podman Pod Architecture

Instead of using standard Docker containers linked via a bridge network, I implemented a **Podman Pod** architecture.

- **Shared Namespace:** The Web and Database containers share the same network namespace (`localhost`), mimicking the "Sidecar" pattern often used in Kubernetes.
- **Security:** Only the HTTP port (8080) is exposed to the host; database traffic remains strictly internal to the Pod.

### 3. Custom Image Engineering

Standard Docker Hub images were insufficient for our custom MVC framework. I engineered a specific build process:

- **Apache Configuration:** Enabled `mod_rewrite` to handle the framework's routing logic.
- **Dependency Management:** Bundled the `install-php-extensions` script locally to ensure build reproducibility even in offline or restricted network environments.

## Infrastructure as Code

The entire deployment is defined via code, allowing for a single-command startup:

```bash
# Deploys the entire stack with networking pre-configured
podman pod create --name mvc-pod -p 8080:80 -p 5432:5432
podman run --pod mvc-pod -d postgres-db
podman run --pod mvc-pod -d mvc-app
```
