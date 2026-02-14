---
title: 'Quadtree Terrain Engine'
description: 'A high-performance 2D infinite terrain engine built in Go using Ebitengine, featuring recursive Quadtree spatial partitioning.'
publishDate: 2024-01-10
tags: ['Go', 'Algorithms', 'Game Dev', 'Optimization']
category: 'academic'
github: 'https://github.com/lboeglin/go-quadtree-engine'
image: '../../../assets/projets/quadtree-debug.png'
featured: true
teamSize: 1
---

This project was developed as part of the "Introduction to Development" and "Client Needs Implementation" courses in the first year of BUT Informatique. The objective was to develop a library capable of representing and storing a large 2D game terrain compactly in memory using a Quadtree data structure.

## Core Features

The core of the project relies on a recursive Quadtree implementation. Unlike a standard 2D array, which consumes significant memory for large maps, the Quadtree divides space into four quadrants, creating child nodes only when the terrain logic requires detail.

I implemented the following critical functions:

- **File Parsing (`ReadFromFile`):** Parses text files representing terrain layouts, handling whitespace and formatting to generate the initial map data.
- **Construction (`MakeFromArray`):** Converts raw array data into a recursive Quadtree structure. The algorithm specifically handles map sizes that are powers of 2 ($2^n$).
- **Rendering (`GetContent`):** Traverses the tree to extract and render only the specific nodes currently visible to the camera.
- **Update Loop (`Update`):** Manages dynamic display updates based on character movement and relative camera position.

## Implemented Extensions

Going beyond the initial requirements, I implemented several extensions configurable via a `config.json` file:

- **Procedural Generation:** Algorithms to randomly generate terrain maps, allowing for infinite replayability.
- **Save System:** Serialization of the Quadtree state to a file, allowing the generated terrain topology to be saved and reloaded.
- **Collision & Physics:** Implementation of blocking biomes. The system detects specific terrain types (e.g., Water) and prevents character movement across them.
