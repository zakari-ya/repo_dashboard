# AGENTS.md

## Project overview

This project is a technical selection exercise built with Next.js.

The application is a front-end-only dashboard for code repositories. It displays a list of simulated repositories, allows users to open a repository detail page, view associated files, search and filter files, and identify critical files.

The whole project must be in French: user interface, visible labels, README, documentation, and demo explanation.

## Setup commands

Use npm for this project.

```bash
npm install
npm run dev
```

The local development URL is:

```txt
http://localhost:3000
```

## Build and validation commands

Before considering a task complete, run:

```bash
npm run lint
npm run build
```

If a TypeScript or lint error appears, fix it before finishing the task.

## Project structure

Respect this project structure:

```txt
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── repositories/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   ├── repositories/
│   ├── files/
│   └── ui/
│
├── data/
│   └── repositories.ts
│
├── lib/
│   ├── filters.ts
│   ├── format.ts
│   └── risk.ts
│
└── types/
    └── repository.ts
```

Do not create extra folders unless they are clearly necessary.

## Code style

Write simple, readable, maintainable TypeScript.

Rules:

* Use React components with clear responsibilities.
* Keep components small and understandable.
* Avoid unnecessary abstraction.
* Avoid complex patterns.
* Avoid `any`.
* Keep business logic outside UI components when possible.
* Put reusable logic inside `src/lib`.
* Put TypeScript types inside `src/types`.
* Put simulated data inside `src/data`.
* Use clear names for files, components, variables, and functions.
* Do not duplicate logic.
* Do not add unnecessary comments.
* Add comments only when they help explain a non-obvious decision.

## UI and responsive rules

The application must be mobile-first.

The interface should be:

* clean;
* professional;
* responsive;
* easy to use;
* readable;
* simple;
* not visually generic;
* not obviously AI-generated.

Avoid:

* excessive gradients;
* random animations;
* too many shadows;
* oversized cards;
* decorative elements without purpose;
* complicated layouts;
* marketing-style text;
* English UI labels.

Use a sober visual direction:

* light background;
* white cards;
* subtle borders;
* clear spacing;
* readable typography;
* visible badges for criticity;
* strong visual emphasis for critical files.

On mobile:

* repositories should appear as cards;
* filters should stack vertically;
* file information should remain readable;
* avoid wide tables that break the layout.

On desktop:

* use grids and tables only when they improve readability;
* keep enough spacing;
* keep the dashboard clear and professional.

## Data rules

Use only local simulated data.

Allowed:

* local TypeScript data files;
* typed mock repositories;
* typed mock files.

Forbidden:

* real API calls;
* GitHub API;
* database;
* server actions for data fetching;
* API routes;
* authentication;
* backend logic;
* external storage.

The simulated data must include repositories and files with:

* file name;
* path;
* language;
* type;
* size;
* criticality.

## Functional requirements

The application must include:

* a repository list page;
* a repository detail page;
* repository summary statistics;
* file list;
* file search by name;
* filter by language;
* filter by criticality;
* visual highlight for critical files;
* global risk level for each repository;
* empty state when no file matches filters.

## French language rules

All user-facing text must be in French.

Examples:

* “Repositories”
* “Fichiers”
* “Langages détectés”
* “Fichiers critiques”
* “Niveau de risque”
* “Rechercher un fichier”
* “Filtrer par langage”
* “Filtrer par criticité”
* “Aucun fichier trouvé”

Do not use English labels in the UI.

## Forbidden actions

Never do the following:

* Do not create a backend.
* Do not create API routes.
* Do not add a database.
* Do not call external APIs.
* Do not connect to GitHub.
* Do not add authentication.
* Do not add unnecessary packages.
* Do not rewrite the whole project for a small change.
* Do not create files that were not requested.
* Do not make the code more complex than needed.
* Do not change the project structure without a clear reason.

## Task workflow

Before modifying code:

1. Read the relevant files.
2. Understand the current structure.
3. Modify only the files needed for the task.
4. Keep the solution simple.
5. Check that the UI remains responsive.
6. Run lint/build validation when relevant.

When implementing a task, follow this format internally:

* Goal: what needs to be built or changed.
* Context: which files are involved.
* Constraints: what must not be changed.
* Done when: what must be true at the end.

## README requirements

The README must be written in French and follow exactly this structure:

1. Compréhension du sujet
2. Choix techniques
3. Architecture du projet Next.js
4. Structure des données simulées
5. Pages et composants développés
6. Navigation et expérience utilisateur
7. Recherche, filtres et affichage des criticités
8. Responsive design et qualité visuelle
9. Vidéo de démonstration
10. Documentation d’installation et d’utilisation
11. Difficultés rencontrées
12. Ce que j’ai fait avec l’aide de l’IA
13. Ce qui relève de mon travail personnel
14. Conclusion et pistes d’amélioration

The AI usage section must clearly explain:

* what was done with AI help;
* what came from personal reasoning;
* what was understood, modified, or corrected manually;
* the limits of AI assistance.

## Final checklist

Before finishing any major task, verify:

* the project still runs;
* the project has no backend;
* the project has no real API calls;
* the data is local;
* the UI is in French;
* the layout is mobile-first;
* the code is simple and maintainable;
* critical files are visually highlighted;
* search and filters work;
* README structure is respected.
