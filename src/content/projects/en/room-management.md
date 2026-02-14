---
title: 'Room Management Microservices'
image: '../../../assets/projets/room-management-architecture.png'
description: 'A distributed architecture composed of three Kotlin Spring Boot services implementing a BFF pattern for managing users and room reservations.'
publishDate: 2025-01-25
tags: ['Kotlin', 'Spring Boot', 'Microservices', 'REST API', 'H2', 'Bruno']
category: 'academic'
teamSize: 2
featured: false
github: 'https://github.com/lboeglin/Lycaon'
---

## Project Overview

This academic project focused on building a modular **Room Management System** using a **Microservices Architecture**. The goal was to separate concerns into distinct services while orchestrating them through a **Backend For Frontend (BFF)** layer.

The project was developed in a pair with **Samuel Amaral Antunes**.

## Architecture

The system is divided into three distinct Spring Boot applications, plus a provided "Rooms" service:

1.  **Peoples Service:** Handles user identity and profile management.
2.  **Reservation Service:** Manages room booking logic and validation.
3.  **BFF (Back For Front):** Acts as a proxy and aggregator, handling security and exposing unified endpoints to the client.

### 1. Peoples Service

A specialized registry for users.

- **Constraint Challenge:** We were restricted from using standard Spring annotations (`@Service`, `@Repository`) to enforce understanding of manual bean wiring and layered architecture in Kotlin.
- **Dual Data Source:** Implements a switchable storage engine (H2 for production, `HashMap` for DEV profiles).

### 2. Reservation Service

The core logic engine.

- **Tech Stack:** Uses `WebClient` exclusively for communication between services.
- **Logic:** Handles complex temporal validation (overlapping dates, start/end time logic) and interacts with the Peoples and Rooms services to validate IDs.

### 3. BFF & Aggregation

The entry point for the frontend.

- **Security:** Implements Spring Security to manage `ADMIN` access for creating resources.
- **Aggregation:** Synthesizes data from multiple microservices into single response objects (Data Classes). For example, fetching a User automatically aggregates their detailed reservation history.
- **Header Injection:** Enforces strict header passing (`X-User`) to downstream services.

## Testing Strategy

To ensure the robustness of the distributed architecture, comprehensive test coverage was implemented across **each of the three services**:

- **Unit Tests (JUnit):** Isolated validation of business logic and management rules (e.g., schedule overlaps).
- **Integration Tests (`@SpringBootTest`):** Verification of Spring context loading and dependency injection chains.
- **API Validation:** Use of **Bruno** collections to certify compliance with the expected interface contracts (inputs/outputs).
