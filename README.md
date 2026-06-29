# Tableau de bord des repositories

## 1. Compréhension du sujet

Ce projet est un exercice de sélection réalisé avec Next.js. L’objectif est de construire une application front-end uniquement permettant de consulter une liste de repositories simulés, d’ouvrir une page de détail, d’afficher les fichiers associés et d’identifier rapidement les fichiers critiques.

Le projet ne se connecte à aucun service réel. Toutes les données sont locales, fictives et typées. L’interface, la documentation et les libellés visibles sont en français.

## 2. Choix techniques

Le projet utilise Next.js avec l’App Router, React, TypeScript et Tailwind CSS 4. Ces choix permettent de structurer l’application simplement, de garder un typage strict et de construire une interface responsive sans ajouter de dépendance inutile.

L’application reste volontairement front-end : pas de backend, pas de route API, pas de base de données, pas d’authentification et aucun appel réseau vers GitHub ou un autre service.

## 3. Architecture du projet Next.js

L’architecture suit une séparation simple :

```txt
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── repositories/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   ├── repositories/
│   ├── files/
│   └── ui/
├── data/
│   └── repositories.ts
├── lib/
│   ├── filters.ts
│   ├── format.ts
│   └── risk.ts
└── types/
    └── repository.ts
```

Les pages sont dans `src/app`, les composants réutilisables dans `src/components`, les données simulées dans `src/data`, les fonctions utilitaires dans `src/lib` et les types TypeScript dans `src/types`.

## 4. Structure des données simulées

Les repositories sont définis localement dans `src/data/repositories.ts`. Chaque repository contient un identifiant, un slug, un nom, une description et une liste de fichiers.

Chaque fichier simulé contient :

- un nom ;
- un chemin ;
- un langage ;
- un type ;
- une taille ;
- une criticité.

Les données incluent plusieurs langages comme TypeScript, JavaScript, CSS, JSON, Markdown et YAML. Les fichiers sensibles sont fictifs : aucun vrai secret, token ou identifiant réel n’est présent.

## 5. Pages et composants développés

La page d’accueil affiche la liste des repositories avec leurs informations principales : description, nombre de fichiers, langages détectés, fichiers critiques et niveau de risque global.

La page détail `/repositories/[slug]` affiche un résumé du repository, ses statistiques, la liste des fichiers, les filtres et une section dédiée aux fichiers critiques.

Les principaux composants développés sont :

- `AppHeader` et `PageShell` pour la structure globale ;
- `RepositoryGrid`, `RepositoryCard` et `RepositoryStats` pour les repositories ;
- `FileList`, `FileFilters`, `FileTable` et `CriticalFileCard` pour les fichiers ;
- `Badge`, `StatCard` et `EmptyState` pour les éléments UI réutilisables.

## 6. Navigation et expérience utilisateur

Depuis la page d’accueil, chaque carte de repository propose un lien “Consulter le détail”. La page détail contient un lien de retour vers l’accueil.

L’expérience est pensée pour rester directe : l’utilisateur voit d’abord les informations importantes, puis peut analyser les fichiers plus précisément grâce à la recherche et aux filtres.

Si un repository demandé n’existe pas, la page affiche un message clair indiquant que le repository est introuvable.

## 7. Recherche, filtres et affichage des criticités

La recherche permet de filtrer les fichiers par nom ou par chemin. Deux filtres supplémentaires permettent de filtrer par langage et par criticité.

Un bouton “Réinitialiser” remet les filtres à leur état initial. Si aucun fichier ne correspond aux critères sélectionnés, un état vide affiche “Aucun fichier trouvé”.

Les criticités disponibles sont : faible, moyenne, élevée et critique. Les fichiers critiques sont mis en avant avec un style visuel distinct, sans rendre l’interface agressive.

Le niveau de risque global est calculé dans `src/lib/risk.ts` selon des règles simples :

- au moins deux fichiers critiques : risque critique ;
- un fichier critique ou plusieurs fichiers élevés : risque élevé ;
- au moins un fichier moyen ou élevé : risque moyen ;
- sinon : risque faible.

## 8. Responsive design et qualité visuelle

L’interface est mobile-first. Sur mobile, les repositories et les fichiers sont affichés sous forme de cartes lisibles. Les filtres sont empilés verticalement pour rester faciles à utiliser.

Sur desktop, la liste des fichiers utilise un tableau pour améliorer la lecture comparative des métadonnées. Les espacements, les bordures, les badges et les états de focus ont été harmonisés pour obtenir une interface sobre et professionnelle.

La direction visuelle reste volontairement discrète : fond clair, cartes blanches, bordures subtiles, typographie lisible et couleurs de statut limitées.

## 9. Vidéo de démonstration

La vidéo de démonstration est prévue comme élément de rendu final. Elle doit montrer :

- l’ouverture de la page d’accueil ;
- la consultation d’un repository ;
- la recherche d’un fichier ;
- l’utilisation des filtres ;
- l’affichage des fichiers critiques ;
- la vérification du responsive mobile.

Lien vidéo : à ajouter après l’enregistrement de la démonstration.

## 10. Documentation d’installation et d’utilisation

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir ensuite :

```txt
http://localhost:3000
```

Vérifier le projet :

```bash
npm run lint
npm run build
```

## 11. Difficultés rencontrées

La principale difficulté a été de garder l’application simple tout en couvrant toutes les fonctionnalités demandées : liste, détail, statistiques, criticités, recherche, filtres et responsive.

Un autre point d’attention a été la séparation entre logique métier et composants UI. Les calculs de risque, le filtrage et le formatage ont été placés dans `src/lib` pour éviter de surcharger les composants.

Enfin, le build Next.js avec Turbopack peut échouer dans certains environnements sandboxés à cause d’une restriction locale liée au binding de port. Le build passe correctement lorsqu’il est exécuté hors de cette restriction.

## 12. Ce que j’ai fait avec l’aide de l’IA

L’IA a été utilisée comme assistance pour structurer progressivement le projet, proposer des composants simples, vérifier la cohérence des fichiers et améliorer la qualité visuelle.

Elle a aidé à :

- découper le travail en étapes ;
- générer une première version des types, données simulées et composants ;
- repérer les incohérences d’interface ;
- améliorer la lisibilité mobile et desktop ;
- rédiger une documentation claire en français.

L’IA n’a pas remplacé la compréhension du sujet. Les propositions ont été relues, adaptées et corrigées pour respecter les contraintes du projet : pas de backend, pas d’API, pas de dépendance inutile et interface entièrement en français.

Les limites de cette aide sont importantes : l’IA peut proposer du code trop générique, ajouter de la complexité inutile ou oublier une contrainte. Chaque étape doit donc être vérifiée manuellement avec le cahier des charges, le lint et le build.

## 13. Ce qui relève de mon travail personnel

Le travail personnel porte sur la compréhension des besoins, le choix de garder une architecture simple, la validation des contraintes et les corrections manuelles nécessaires pour obtenir un rendu cohérent.

J’ai vérifié que les données restent locales et fictives, que les textes visibles sont en français, que les composants restent lisibles et que la logique métier est séparée de l’interface.

J’ai également ajusté les choix visuels pour obtenir une interface sobre, professionnelle et adaptée à un exercice de recrutement plutôt qu’une interface décorative.

## 14. Conclusion et pistes d’amélioration

Le projet répond aux besoins principaux : afficher des repositories simulés, consulter leur détail, voir les fichiers associés, rechercher, filtrer et identifier les fichiers critiques.

Les pistes d’amélioration possibles seraient :

- ajouter des tests unitaires pour les fonctions de filtrage et de risque ;
- ajouter une option de tri des fichiers ;
- améliorer l’accessibilité avec une passe dédiée clavier/lecteur d’écran ;
- enrichir les données simulées avec davantage de cas limites ;
- ajouter une capture ou une vidéo finale dans le rendu.
