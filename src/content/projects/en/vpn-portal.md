---
title: 'WireGuard VPN Portal'
image: '../../../assets/projets/vpn-architecture.png'
description: 'A self-hosted web portal for managing WireGuard VPN configurations. Features automated CI/CD, rootless Podman deployment, and secure native key generation.'
publishDate: 2025-06
tags: ['python', 'flask', 'wireguard', 'podman', 'linux', 'ci-cd', 'github-actions']
category: 'personal'
github: 'https://github.com/lboeglin/vpn-portal'
demo: 'https://free-cities-hub.duckdns.org/'
featured: true
teamSize: 1
---

## Project Context

I developed this self-hosted web portal to simplify WireGuard VPN management. The goal was to eliminate command-line configuration for end-users by providing a clean UI where they can view, download, and scan their VPN profiles via QR codes, while giving administrators a centralized dashboard to manage access.

## Technical Architecture & Challenges

### 1. Secure Key Generation

Instead of executing `wg` shell commands from the web server (which poses command-injection risks), the application generates X25519 keypairs natively server-side using Python's `cryptography` library.

- **Security:** The backend includes brute-force protection via `Flask-Limiter` and secures sessions with `Flask-Login` and `Flask-Bcrypt`.

### 2. Container-to-Host Boundary

WireGuard runs in the host kernel, but the web app runs isolated inside a Podman container. To bridge this securely:

- The container writes peer configurations to a shared volume (`/var/lib/vpn-portal/peers.conf`).
- A lightweight `systemd` path unit on the Rocky Linux host watches this file and automatically triggers `wg addconf` to apply changes to the live `wg0` interface without exposing host privileges to the container.

### 3. Zero-Downtime CI/CD Pipeline

I built a fully automated deployment pipeline using GitHub Actions:

1. **Build & Push:** On every push to `main`, GitHub Actions builds the image and pushes it to the GitHub Container Registry (GHCR).
2. **Automated Deploy:** The runner connects to the VPS via SSH, pulls the new image, and executes `podman-compose up -d`.
3. **Database Migrations:** An entrypoint script handles SQLite database migrations (`Flask-Migrate`) automatically on startup.
