# Visualisation de données (_VisualDon_)

Bienvenue dans le dépôt git du cours _Visualisation de données_ [@MEI](https://heig-vd.ch/formation/bachelor/filieres/ingenierie-des-medias). Ce dépôt contient les différentes ressources du cours tels que les exercices et les différentes directives du projet.

Ce document sera mis à jour au fur et à mesure du semestre avec les informations du cours (exercices, projet) ainsi que les corrections des exercices. Bon cours!

![Good luck](https://media.giphy.com/media/j1Xyt3DHfJcmk/giphy.gif)

## Objectifs

- Connaître différentes technologies de visualisation de données dans un navigateur Web
- Connaître la pyramide de productivité de ces technologies
- Comprendre le fonctionnement du langage SVG avec JavaScript
- Utiliser la librairie d3.js pour créer des visualisations de divers types
- Utiliser Javascript avec cette librairie pour ajouter de l'animation et de l'interaction
- Utiliser une librairie de cartographie en ligne (ex. Leaflet, OpenLayers)
- Connaître quelques plateformes de données ouvertes et les formats principaux en vigueur
- Utiliser des services de données ouvertes pour créer des visualisations

## Evaluation

Le cours fait l’objet d’une note de projet (50%) et d’une note d’examen (50%).

## Cours

- [COURS 1](https://comem-visualdon.onrender.com/01-intro) - Introduction [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/01-intro.pdf)]
- [COURS 2](https://comem-visualdon.onrender.com/02-svg) - Scalable Vector Graphics (SVG) [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/02-svg.pdf)]
- [COURS 3](https://comem-visualdon.onrender.com/03-intro-d3) - Introduction à D3.js [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/03-intro-d3.pdf)]

- [COURS 4](https://comem-visualdon.onrender.com/04-data) - Données [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/04-data.pdf)]

- [COURS 5](https://comem-visualdon.onrender.com/05-axis-scales) - Échelles et axes [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/05-axis-scales.pdf)]

- [COURS 6](https://comem-visualdon.onrender.com/06-interaction-animation-1) - Interaction et animation (partie 1) [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/06-interaction-animation-1.pdf)]

- [COURS 7](https://comem-visualdon.onrender.com/07-interaction-animation-2) - Interaction et animation (partie 2) [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/07-interaction-animation-2.pdf)]

- [COURS 8](https://comem-visualdon.onrender.com/08-intro-cartographie) - Introduction à la cartographie [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/08-intro-cartographie.pdf)]

- [COURS 9](https://comem-visualdon.onrender.com/09-cartographie-web) - Cartographie web [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/09-cartographie-web.pdf)]

- [COURS 10](https://comem-visualdon.onrender.com/10-dos-and-donts) - Dos and dont's en visualisation de données [[PDF](https://raw.githubusercontent.com/MediaComem/comem-visualdon/main/cours/pdf/10-dos-and-donts.pdf)]

## Projet

### But

- Créer une visualisation interactive à partir d'un ou plusieurs jeux de données
- Le choix de types, et le nombre de visualisations est libre
- Le tout doit faire passer un message, raconter une histoire

### Délais

- Vendredi 8 mars 23h59: Thématique (10%)
- Vendredi 15 mars 23h59: Wireframe (10%)
- Vendredi 17 mai: Présentation (20%)
- Lundi 20 mai 23h59: Site web (60%)

### Format

- Le produit final doit être sous forme de site publié
- Le code source du site et la méthode de préparation des données doit être accessible sur Github

## Exercices

- [Exercice 1](https://github.com/MediaComem/comem-visualdon/tree/main/exercices/01-SVG): Dessiner et animer des formes SVG
- [Exercice 2](https://github.com/MediaComem/comem-visualdon/tree/main/exercices/02-intro-d3) : Introduction à D3
- [Exercice 3](https://github.com/MediaComem/comem-visualdon/tree/main/exercices/03-d3-data) : Données
- [Exercice 4](https://github.com/MediaComem/comem-visualdon/tree/main/exercices/04-gapminder)
  - Visualisation statique
  - Cartographie
  - Animation

### Notebooks

- [COMEM+ | Visualisation de données](https://observablehq.com/collection/@romanoe/heig-vd-visualisation-de-donnees)

## Ressources

### SVG

- [Cours 2021](https://observablehq.com/@idris-maps/svg)
- [Tutoriel MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

### D3

- [d3-selection](https://d3js.org/d3-selection)
- [d3-fetch](https://d3js.org/d3-fetch)
- [d3-array](https://d3js.org/d3-array)
- [d3-scale](https://d3js.org/d3-scale)
- [d3-axis](https://d3js.org/d3-axis)
- [d3-zoom](https://d3js.org/d3-zoom)
- [d3-brush](https://d3js.org/d3-brush)
- [d3-geo](https://d3js.org/d3-geo)

### Géographique

**2D**

- [Leaflet](https://leafletjs.com/)
- [OpenLayers](https://openlayers.org/)
- [MapLibre GL](https://maplibre.org/)

**3D**

- [deck.gl](https://deck.gl/examples)
- [kepler.gl](https://kepler.gl/demo)
- [Giro3D](https://giro3d.org/examples/index.html)
- [Three.js](https://threejs.org)
- [Potree](https://potree.github.io/)

**Données**

- [opendata.swiss](https://opendata.swiss/fr/dataset?q=swissboundaries&sort=score+desc%2C+metadata_modified+desc) (Suisse)
- [swisstopo](https://api3.geo.admin.ch/api/faq/index.html#which-layers-are-available) (Suisse)
- [Viageo](https://viageo.ch/") (Suisse romande)
- [Natural Earth](https://www.naturalearthdata.com/downloads/) (Monde)
- [Overpass Turbo](https://overpass-turbo.osm.ch/) (Monde)
- [Données cartographiques, Anders | Observable](https://observablehq.com/@idris-maps/donnees-cartographiques) (Format de données)

### Autres

- [Cours 2021](https://observablehq.com/@idris-maps/introduction-a-d3)
- [D3 - Getting started](https://d3js.org/getting-started)
- [D3 graph gallery](https://www.d3-graph-gallery.com/)
- [Learn D3 - Observable](https://observablehq.com/collection/@d3/learn-d3)
- [MDN - Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
