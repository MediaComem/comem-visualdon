---
theme: none
title: "08 - Introduction a la cartographie"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 08 -- Introduction a la cartographie

Des premières cartes a la contre-cartographie

---
layout: section
---

# Un peu d'histoire

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/0/02/Archaeopark_Pavlov_I_mammoth_tusk_map_1.jpg
---

# ~25 000 av. J.-C.

**Carte gravee sur defense de mammouth**

*Pavlov, Republique tcheque*

<v-clicks>

- Plus ancienne carte connue
- Représentation d'un paysage local
- Riviere, montagne, chemins
- Preuve que cartographier est un besoin humain fondamental

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Pavlov_site">Wikipedia — Pavlov site</a></div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/9/9b/Anaximander_world_map-en.svg
---

# Anaximandre (~600 av. J.-C.)

**Première carte du monde** (reconstruction)

<v-clicks>

- Centre : Grece
- Monde entoure d'eau (Ocean)
- Symetrie, ordre cosmique
- **Biais** : vision eurocentree des l'origine

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Anaximander">Wikipedia — Anaximander</a></div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/a/a1/TabulaRogeriana_upside-down.jpg
---

# Al-Idrisi (1154)

**Tabula Rogeriana**

*Sud en haut, tradition arabe*

<v-clicks>

- Une des cartes les plus precises du Moyen Age
- Commandee par Roger II de Sicile
- Basee sur des temoignages de voyageurs
- L'orientation "Nord en haut" est une convention, pas une verite

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Tabula_Rogeriana">Wikipedia — Tabula Rogeriana</a></div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/b/b2/Mercator_1569.png
---

# Mercator (1569)

**La projection qui a défini notre vision du monde**

<v-clicks>

**Avantages :**
- Angles preserves (navigation)
- Lignes droites = caps constants

**Problemes :**
- Deforme les surfaces
- Groenland = Afrique (en realite 14x plus petit)
- Europe au centre, agrandie

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Mercator_projection">Wikipedia — Mercator projection</a></div>

---
layout: quote
---

# "Les cartes sont des arguments sur le monde."

Denis Wood, *The Power of Maps* (1992)

---
layout: section
---

# Types de cartes

---
layout: default
---

# Cartes de reference vs thématiques

| Type | Objectif | Exemples |
|------|----------|----------|
| **Reference** | Localisation, navigation | Google Maps, OSM, Swisstopo |
| **Thématique qualitative** | Categories distinctes | Langues, regions, partis |
| **Choroplethe** | Intensite par zone | Votations, densite, revenus |
| **Cartogramme** | Surface = variable | Population, PIB |
| **Flowmap** | Flux, migrations | flowmap.blue |
| **Heatmap** | Densite de points | Strava, criminalite |
| **Isochrone** | Temps de trajet | TravelTime API |

<div class="footer">Source · Monmonier, <em>How to Lie with Maps</em> (1991)</div>

---
layout: default
---

# Projection : le probleme insoluble

<v-clicks>

On ne peut pas aplatir une sphere sans distordre :
- **Les surfaces** (equivalent)
- **Les formes** (conforme)
- **Les distances** (equidistant)
- **Les directions** (azimutal)

**Choisir une projection = choisir ce qu'on déforme**

</v-clicks>

| Projection | Preserve | Usage |
|------------|----------|-------|
| Mercator | Angles | Navigation, web tiles |
| Equal Earth | Surfaces | Cartes mondiales equitables |
| Albers | Surfaces locales | USA, regions |
| CH1903+ | Distances locales | Swisstopo |

<div class="footer">Source · <a href="https://d3js.org/d3-geo/projection">d3-geo — Projections</a></div>

---
layout: section
---

# L'angle critique

La contre-cartographie

---
layout: quote
---

# "Cartographier, c'est exercer un pouvoir sur le territoire et ses habitants."

J.B. Harley, *Deconstructing the Map* (1989)

---
layout: default
---

# Qu'est-ce que la contre-cartographie ?

<v-clicks>

**Définition** : Pratique de cartographie qui remet en question les cartes officielles et dominantes.

**Objectifs** :
- Rendre visible l'invisible
- Donner voix aux communautes marginalisées
- Contester les recits officiels
- Documenter ce que les cartes commerciales ignorent

</v-clicks>

<div class="footer">Source · Kollektiv Orangotango, <em>This Is Not an Atlas</em> (2018)</div>

---
layout: default
---

# Exemples de contre-cartographie

| Projet | Thème | Lien |
|--------|-------|------|
| **Native Land Digital** | Territoires autochtones | [native-land.ca](https://native-land.ca) |
| **Decolonial Atlas** | Noms et territoires effaces | [decolonialatlas.wordpress.com](https://decolonialatlas.wordpress.com) |
| **This Is Not an Atlas** | 40+ projets militants | [notanatlas.org](https://notanatlas.org) |
| **Forensic Architecture** | Violations des droits humains | [forensic-architecture.org](https://forensic-architecture.org) |
| **Environmental Justice Atlas** | Conflits environnementaux | [ejatlas.org](https://ejatlas.org) |

<div class="footer">Source · Kollektiv Orangotango, <em>This Is Not an Atlas</em> (2018)</div>

---
layout: default
---

# Principes de la contre-cartographie

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### 1. Questionner les sources

D'ou viennent les données officielles ?
Qui les a collectées et pourquoi ?

</div>

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### 2. Cartographier l'invisible

Ce que Google Maps ne montre pas :
graffitis, fontaines, dangers, memoire

</div>

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### 3. Impliquer les concernes

Cartographie participative,
pas "pour" mais "avec"

</div>

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### 4. Assumer sa position

Pas de neutralite :
expliciter son point de vue

</div>

</div>

<div class="footer">Source · Kollektiv Orangotango, <em>This Is Not an Atlas</em> (2018)</div>

---
layout: section
---

# Données cartographiques

---
layout: two-cols
---

# Sources suisses

| Source | Type |
|--------|------|
| [Swisstopo API](https://api3.geo.admin.ch) | Fonds, geodonnées |
| [opendata.swiss](https://opendata.swiss) | Datasets ouverts |
| [Viageo](https://viageo.ch) | Suisse romande |
| [BFS/OFS](https://www.bfs.admin.ch) | Statistiques |

::right::

<div class="mt-12">

# Sources mondiales

| Source | Type |
|--------|------|
| [Natural Earth](https://naturalearthdata.com) | Frontieres, reliefs |
| [OpenStreetMap](https://overpass-turbo.eu) | Tout |
| [GADM](https://gadm.org) | Frontieres admin |
| [HDX](https://data.humdata.org) | Données de crise |

</div>

<div class="footer">Source · <a href="https://opendata.swiss">opendata.swiss</a> · <a href="https://www.swisstopo.admin.ch/">swisstopo</a></div>

---
layout: default
---

# Formats de données géographiques

<div class="grid grid-cols-2 gap-4">

<div>

### GeoJSON

```json
{
  "type": "Feature",
  "géométry": {
    "type": "Point",
    "coordinates": [6.63, 46.78]
  },
  "properties": {
    "name": "HEIG-VD"
  }
}
```

</div>

<div>

### Autres formats

**TopoJSON**
- GeoJSON compresse (~80% plus léger)
- Arcs partages

**Shapefile**
- Format historique (ESRI)
- Plusieurs fichiers (.shp, .dbf, .prj)
- A convertir en GeoJSON

</div>

</div>

<div class="footer">Source · <a href="https://geojson.org/">geojson.org</a> · <a href="https://github.com/topojson/topojson">TopoJSON</a></div>

---
layout: section
---

# Outils de cartographie web

---
layout: default
---

# Stack technique

| Couche | Outils | Usage |
|--------|--------|-------|
| **Fonds de carte** | Mapbox, MapTiler, Stamen | Tiles |
| **Librairie 2D** | Leaflet, MapLibre GL, OpenLayers | Interaction |
| **Librairie 3D** | Deck.gl, Mapbox GL | 3D, gros volumes |
| **Données** | D3-geo, Turf.js | Projections, calculs |

<div class="footer">Source · <a href="https://leafletjs.com/">Leaflet</a> · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://maplibre.org/">MapLibre</a></div>

---
layout: default
---

# Leaflet : l'essentiel

```javascript
// Initialiser la carte
const map = L.map('map').setView([46.78, 6.64], 13)

// Ajouter un fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map)

// Ajouter un marqueur
L.marker([46.78, 6.64])
  .addTo(map)
  .bindPopup('HEIG-VD')

// Ajouter un GeoJSON
fetch('data/cantons.geojson')
  .then(r => r.json())
  .then(data => L.geoJSON(data).addTo(map))
```

<div class="footer">Source · <a href="https://leafletjs.com/reference.html">Leaflet API</a></div>

---
layout: two-cols
---

# Ressources cartographie

### Livres

- Monmonier, M. *How to Lie with Maps*
- Wood, D. *The Power of Maps*
- Harley, J.B. *The New Nature of Maps*
- Kollektiv Orangotango. *This Is Not an Atlas*

::right::

<div class="mt-12">

### En ligne

- [Leaflet](https://leafletjs.com)
- [MapLibre](https://maplibre.org)
- [D3-geo](https://d3js.org/d3-geo)
- [Turf.js](https://turfjs.org)
- [Natural Earth](https://naturalearthdata.com)
- [thetruesize.com](https://thetruesize.com)

</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://leafletjs.com/">Leaflet</a></div>

---
layout: statement
---

# Semaine prochaine

Cartographie web : Leaflet, MapLibre, D3-geo

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
