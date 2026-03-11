---
title: "L'Ode aux Étoiles (Code Game Jam)"
description: 'A 2D platformer created for the Code Game Jam IUT 2025. Built with Godot, featuring custom assets and a focus on tight player kinematics under a strict time limit.'
image: '../../../assets/projets/ode-aux-etoiles-cover.png'
publishDate: 2025-01-15
tags: ['godot', 'gdscript', 'c#', 'game dev', 'teamwork']
category: 'personal'
github: 'https://github.com/Samferos/code_game_jam_2025'
demo: 'https://afissard.itch.io/lode-aux-etoiles'
featured: true
teamSize: 5
---

## Project Context

"L'Ode aux Étoiles" (Ode to the Stars) was developed by a team of 5 during the Code Game Jam IUT 2025. Based on the theme "Infinite Melody", the original concept was a procedurally generated infinite tower. However, to ensure we shipped a playable and polished game before the deadline, we successfully applied scope management to pivot into a focused, single-level 2D platformer.

## My Role & Engineering Challenges

I was primarily responsible for the core gameplay programming, focusing on physics and entity logic:

- **Player Kinematics:** Implemented responsive 2D platforming mechanics (jumping, gravity, collision detection) using GDScript.
- **Entity Movement:** Programmed the behavior and movement patterns for the game's enemies.

## Architecture & Post-Jam Rework

The initial jam version was built entirely in **GDScript** for rapid prototyping. Working alongside our artists and musicians, we integrated 100% custom-made assets (sprites and music) directly into the Godot pipeline.

Following the event, we initiated a technical rework to migrate the codebase to **C#**. While this branch remains a work in progress, it served as an excellent exercise in translating dynamically typed game logic into a strongly typed, object-oriented architecture.
