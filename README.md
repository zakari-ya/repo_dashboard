# Tableau de bord de repositories — Exercice Next.js

## 1. Compréhension du sujet

Ce projet répond à un exercice technique dont l’objectif est de développer une application **Next.js front-end uniquement**, sans back-end, permettant de présenter un tableau de bord de repositories de code.

L’application permet de consulter une liste de repositories simulés, d’ouvrir le détail d’un repository, d’afficher les fichiers associés et d’identifier rapidement les fichiers présentant un niveau de criticité élevé ou critique.

J’ai compris que le but principal de l’exercice n’était pas de créer une vraie connexion à GitHub, mais de démontrer ma capacité à structurer une application front-end claire, responsive, lisible et exploitable à partir de données locales simulées.

## 2. Choix techniques

Le projet utilise :

* **Next.js** pour la structure de l’application et la navigation entre les pages ;
* **React** pour la création des composants d’interface ;
* **TypeScript** pour typer les repositories, les fichiers et les niveaux de criticité ;
* **Tailwind CSS 4** pour construire rapidement une interface responsive, sobre et maintenable ;
* **des données locales simulées** dans un fichier TypeScript.

Aucun back-end n’a été développé.
Aucune base de données n’est utilisée.
Aucun appel API réel n’est effectué.
Aucune connexion à GitHub ou à un service externe n’est présente.

Ce choix permet de respecter strictement la consigne : produire une application front-end simple, fonctionnelle et centrée sur la qualité de l’interface.

## 3. Architecture du projet Next.js

Le projet est organisé de manière simple afin de séparer les pages, les composants, les données, les types et les fonctions utilitaires.

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

Les pages de l’application se trouvent dans `src/app`.
Les composants réutilisables sont regroupés dans `src/components`.
Les données simulées sont centralisées dans `src/data`.
Les types TypeScript sont définis dans `src/types`.
Les fonctions de filtrage, de formatage et de calcul de risque sont placées dans `src/lib`.

Cette organisation permet de garder le code lisible, maintenable et facile à parcourir.

## 4. Structure des données simulées

Les données sont définies localement dans `src/data/repositories.ts`.

Chaque repository contient les informations principales suivantes :

* un identifiant ;
* un slug ;
* un nom ;
* une description ;
* une liste de fichiers associés.

Chaque fichier contient les métadonnées demandées :

* le nom du fichier ;
* le chemin ;
* le langage ;
* le type ;
* la taille ;
* le niveau de criticité.

Les niveaux de criticité utilisés sont :

* faible ;
* moyenne ;
* élevée ;
* critique.

Les données sont entièrement fictives. Les fichiers sensibles comme `.env.local`, `auth.ts` ou `deploy.yml` sont uniquement des exemples simulés. Aucun vrai secret, token, mot de passe ou identifiant réel n’est présent dans le projet.

## 5. Pages et composants développés

L’application contient deux vues principales.

La première page affiche la liste des repositories. Chaque repository est présenté sous forme de carte avec ses informations essentielles : nom, description, nombre de fichiers, langages détectés, fichiers critiques et niveau global de risque.

La deuxième page correspond au détail d’un repository. Elle affiche un résumé du repository, les statistiques principales, les fichiers critiques et la liste complète des fichiers associés.

Les principaux composants développés sont :

* `AppHeader` : en-tête simple de l’application ;
* `PageShell` : structure globale des pages ;
* `RepositoryGrid` : grille responsive des repositories ;
* `RepositoryCard` : carte de présentation d’un repository ;
* `RepositoryStats` : statistiques synthétiques d’un repository ;
* `FileFilters` : recherche et filtres des fichiers ;
* `FileList` : gestion de l’affichage des fichiers ;
* `FileTable` : tableau desktop des fichiers ;
* `CriticalFileCard` : carte dédiée aux fichiers critiques ;
* `Badge` : badge visuel pour les niveaux de criticité ;
* `StatCard` : carte de statistique ;
* `EmptyState` : état vide lorsqu’aucun résultat n’est trouvé.

Les composants ont été séparés pour éviter d’avoir des pages trop longues et pour rendre le projet plus facile à comprendre.

## 6. Navigation et expérience utilisateur

La navigation est volontairement simple.

Depuis la page d’accueil, l’utilisateur peut consulter la liste des repositories et cliquer sur le lien **“Consulter le détail”** pour ouvrir la page d’un repository.

Sur la page détail, un lien de retour permet de revenir rapidement à la liste principale.

L’expérience utilisateur suit une logique claire :

1. voir les repositories disponibles ;
2. choisir un repository ;
3. consulter son niveau de risque ;
4. identifier les fichiers critiques ;
5. rechercher ou filtrer les fichiers selon le besoin.

Si aucun fichier ne correspond aux critères de recherche ou de filtre, un message clair est affiché afin d’éviter une interface vide ou confuse.

## 7. Recherche, filtres et affichage des criticités

La recherche permet de trouver un fichier à partir du début de son nom, de son langage ou de son niveau de criticité.

Par exemple :

* taper `p` peut trouver `package.json` ;
* taper `ty` peut trouver les fichiers en `TypeScript` ;
* taper `cr` peut trouver les fichiers avec une criticité `critique`.

La recherche est volontairement progressive afin d’éviter des résultats trop larges. Par exemple, un fichier nommé `zakariya.ts` ne doit pas apparaître simplement parce que l’utilisateur tape une lettre située au milieu du nom.

Deux filtres complètent la recherche :

* filtre par langage ;
* filtre par niveau de criticité.

Les fichiers critiques sont mis en évidence visuellement avec un badge et un style distinct. L’objectif est de permettre à l’utilisateur de les repérer rapidement sans rendre l’interface trop agressive.

Le niveau global de risque du repository est calculé à partir des fichiers associés selon des règles simples :

* au moins deux fichiers critiques : risque critique ;
* un fichier critique ou plusieurs fichiers élevés : risque élevé ;
* au moins un fichier moyen ou élevé : risque moyen ;
* sinon : risque faible.

## 8. Responsive design et qualité visuelle

L’interface a été pensée en mobile-first.

Sur mobile, les repositories et les fichiers sont affichés sous forme de cartes lisibles. Les filtres sont empilés verticalement pour rester faciles à utiliser sur petit écran.

Sur desktop, l’affichage utilise davantage l’espace disponible avec des grilles et un tableau de fichiers plus confortable pour comparer les métadonnées.

La direction visuelle reste sobre et professionnelle :

* fond clair ;
* cartes blanches ;
* bordures discrètes ;
* typographie lisible ;
* espacements réguliers ;
* badges de statut cohérents ;
* couleurs limitées aux informations importantes.

J’ai évité les effets décoratifs inutiles, les animations excessives et les styles trop génériques afin que l’application reste crédible pour un exercice de recrutement.

## 9. Vidéo de démonstration

Une vidéo de démonstration accompagne le rendu final.

Elle présente :

* le lancement du projet ;
* la page d’accueil ;
* la consultation du détail d’un repository ;
* la recherche d’un fichier ;
* l’utilisation des filtres ;
* l’affichage des fichiers critiques ;
* une vérification rapide du responsive ;
* une explication courte des choix techniques et graphiques ;
* une distinction claire entre l’aide de l’IA et le travail personnel.

Lien de la vidéo : **à ajouter après l’enregistrement**

Durée recommandée : entre 3 et 5 minutes.

## 10. Documentation d’installation et d’utilisation

Cloner le projet :

```bash
git clone <lien-du-repository>
cd <nom-du-projet>
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir ensuite l’application dans le navigateur :

```txt
http://localhost:3000
```

Vérifier le projet avant le rendu :

```bash
npm run lint
npm run build
```

Le projet ne nécessite aucune variable d’environnement, aucune base de données et aucun service externe.

## 11. Difficultés rencontrées

La principale difficulté a été de garder l’application simple tout en couvrant toutes les consignes demandées : liste de repositories, page détail, fichiers associés, métadonnées, recherche, filtres, criticités, résumé du risque et responsive design.

Un autre point important a été d’éviter de surcharger le code. Pour cela, j’ai séparé la logique métier de l’interface :

* les données simulées sont dans `src/data` ;
* les types sont dans `src/types` ;
* les fonctions de filtrage, de formatage et de risque sont dans `src/lib` ;
* les composants visuels sont dans `src/components`.

J’ai également fait attention à ne pas ajouter de fonctionnalités hors sujet comme une authentification, une vraie API GitHub, une base de données ou un back-end, afin de respecter précisément le périmètre de l’exercice.

## 12. Ce que j’ai fait avec l’aide de l’IA

J’ai utilisé l’IA comme assistant de travail pour m’aider à organiser le projet, structurer les étapes de développement et améliorer la clarté de certains éléments.

L’aide de l’IA a été utilisée pour :

* proposer une première structure de projet ;
* réfléchir au découpage des composants ;
* générer une base de données simulées ;
* proposer une logique simple de calcul du risque ;
* améliorer certains textes de documentation ;
* vérifier que les consignes principales étaient bien couvertes.

L’IA n’a pas été utilisée comme une solution automatique à copier sans vérification. Les propositions ont été relues, adaptées et corrigées pour respecter les contraintes du sujet.

J’ai notamment vérifié que le projet reste bien front-end uniquement, que les données sont locales, que l’interface est en français et qu’aucune fonctionnalité non demandée n’a été ajoutée.

Les limites de l’aide de l’IA sont les suivantes : elle peut générer du code trop générique, proposer une architecture trop complexe ou oublier certaines contraintes précises. Pour cette raison, chaque étape a nécessité une vérification humaine, des ajustements et des corrections.

## 13. Ce qui relève de mon travail personnel

Mon travail personnel a porté sur la compréhension du sujet, le choix d’une architecture simple, la validation des contraintes et l’adaptation du projet au besoin réel de l’exercice.

J’ai pris les décisions suivantes :

* garder l’application front-end uniquement ;
* utiliser des données locales plutôt qu’une API ;
* structurer le projet en pages, composants, données, types et fonctions utilitaires ;
* limiter le design à une interface sobre, claire et professionnelle ;
* mettre en avant les fichiers critiques sans rendre l’interface confuse ;
* privilégier une approche mobile-first ;
* simplifier la logique pour que le code reste lisible.

J’ai également relu et corrigé les parties générées avec assistance, ajusté les textes en français, contrôlé la cohérence des composants et vérifié que le projet reste conforme aux consignes du recruteur.

## 14. Conclusion et pistes d’amélioration

Le projet répond aux objectifs de l’exercice : présenter une liste de repositories simulés, consulter le détail d’un repository, afficher les fichiers associés, rechercher, filtrer et identifier les fichiers critiques.

L’application reste volontairement simple, locale et sans back-end, conformément aux contraintes demandées.

Les pistes d’amélioration possibles sont :

* ajouter des tests unitaires pour les fonctions de filtrage et de calcul du risque ;
* ajouter une option de tri des fichiers ;
* améliorer encore l’accessibilité clavier ;
* enrichir les données simulées avec plus de cas limites ;
* ajouter une page d’aide courte pour expliquer les niveaux de criticité ;

