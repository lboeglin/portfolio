---
title: "Anby's Movies"
description: 'A native Android movie discovery app built with Kotlin and Material Design 3, following the MVVM architecture and consuming the TMDb API.'
image: '../../../assets/projets/anbys-movies-mockup.png'
publishDate: 2024-06-20
tags: ['Kotlin', 'Android', 'MVVM', 'REST API', 'Material Design', 'Gradle', 'Ktor']
category: 'academic'
teamSize: 3
featured: false
github: 'https://github.com/Samferos/anbys-movies'
---

## Project Overview

Developed as part of the "Mobile Development" module (SAÉ 4 - R4.11), this project aimed to create a fully functional **native Android application**. The goal was to build a movie discovery tool that fetches and displays data from the public **The Movie Database (TMDb) API**.

The project was developed in a team of three with **Samuel Antunes** and **Théo Phan**.

## Features

The application offers a complete user experience for browsing movies:

- **API Integration:** Real-time movie search via the TMDb API.
- **Dynamic UI:** Search results are displayed in a customized `RecyclerView` with efficient dynamic image loading for posters.
- **Detailed View:** A dedicated screen for each movie showing synopsis, release date, rating, and more.

### Advanced Implementations

To deepen our understanding of Android development, we added several advanced features:

- **Sorting:** Users can sort results by popularity, rating, or release date.
- **Internationalization (i18n):** Full support for both English and French, depending on the device's language settings.
- **Local Persistence:** Implementation of a "Favorites" feature, saving data locally on the device.

## Technical Architecture

The application is built on a robust and modern technical foundation:

- **Style:** Utilizes **Material Design 3** for a modern and consistent UI.
- **Architecture:** Follows the **MVVM (Model-View-ViewModel)** pattern for clear separation of concerns.
  - **Data Models:** Kotlin data classes (`Movie`, `Genre`) defining the structure.
  - **DAO Layer:** Handles JSON deserialization from API responses.
- **UI Structure:** Built using a combination of Activities and **Fragments** for modularity (Search, List, Detail views).

## Constraints & Challenges

A key constraint was ensuring compatibility with specific university laboratory machines. This required careful management of the build configuration. We had to specifically downgrade the **Android Gradle Plugin (AGP)** version to `8.5.2` in the `libs.versions.toml` file to ensure successful compilation and execution in the target environment.
