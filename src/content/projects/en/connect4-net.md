---
title: 'Networked Connect 4 (Go)'
description: 'Implementation of multiplayer netcode in Go: Client-Server architecture, custom binary TCP protocol, and concurrency management via Goroutines.'
image: '../../../assets/projets/connect4-net-arch.png'
publishDate: 2024-01-15
tags: ['Go', 'Concurrency', 'TCP', 'Network Programming', 'Game Dev']
category: 'academic'
teamSize: 2
featured: false
github: 'https://github.com/lboeglin/go-connect4-net'
---

## Project Context

Developed as part of the **System Programming (R3.05)** module, this project aimed to transform a local Connect 4 game (built with **Ebitengine**) into a fully functional online multiplayer game.

The main challenge was not the game logic, but designing the **"net code"** allows two remote clients to synchronize their states via a central server.

## Technical Architecture

The application relies on a strict **Client-Server** architecture where the server acts as the authority on the game flow.

### 1. Concurrency Management (Go)

The core of the project leverages Go's powerful concurrency primitives:

- **Goroutines:** Each connected client is handled by an independent lightweight goroutine on the server side (in `handlers.go`), ensuring the main loop remains non-blocking.
- **Channels:** Heavily used for thread-safe communication between network reading processes and the game update logic (`update.go`).

### 2. Communication Protocol

We designed a **custom binary protocol** over TCP to minimize latency. Messages are structured as `[Data Byte, Type Byte]`:

- `0x01`: Sending selected color (`OctetPlayerColor`).
- `0x02`: Sending player move (column index) (`OctetOpponentMove`).
- `0x03`: State synchronization (Ready / Waiting) (`OctetOpponentState`).

### 3. State Synchronization

The server orchestrates the different game phases to ensure both players see the same state:

- **Lobby:** Waiting for the second player to connect.
- **Selection:** Synchronizing color choices (preventing duplicate colors).
- **Gameplay:** Relaying moves in real-time.
- **Endgame:** Handling game restart (Re-match) logic.

## Improvements & Extensions

Beyond the initial requirements, we enriched the application to enhance the multiplayer experience:

### Architecture & Network

- **Concurrent Handling:** The server manages each client in a dedicated **goroutine**, effectively separating game logic from network communication management.
- **Easy Configuration:** Implemented a startup screen for Server IP input (replacing the previous command-line flag method).

### Advanced Synchronization (Selection Phase)

We made the color selection screen interactive in real-time:

- **Visualization:** The opponent's cursor movements are visible live while they are making their selection.
- **Game Constraints:** Locking system preventing both players from picking the same color.
- **Flexibility:** Ability to change color selection as long as the opponent hasn't confirmed theirs.
