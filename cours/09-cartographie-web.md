---
theme: default
title: "09 - Cartographie web"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">09 — Cartographie web</h1>
    <p class="cover-subtitle">Données géographiques et librairies</p>
    <div class="cover-meta">
      <span class="cover-author">Noemi Romano</span>
      <a href="mailto:noemi.romano@heig-vd.ch" class="cover-email">noemi.romano@heig-vd.ch</a>
      <span class="cover-date"></span>
    </div>
  </div>
</div>

<div class="footer" style="display: flex; align-items: center; gap: 1rem;">
  <a href="https://github.com/MediaComem/comem-visualdon" style="display: flex; align-items: center; gap: 0.3rem;"><carbon-logo-github /> GitHub</a>
  <a href="https://creativecommons.org/licenses/by/4.0/" style="line-height: 0;"><img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" style="height: 14px;" /></a>
</div>

---
layout: section
---

# Rappel

---
layout: default
---

# Cours précédent

<v-clicks>

- **Types de cartes** : choropletres, cartogrammes, points, flux
- **Projections** : Mercator, Peters, Robinson, compromis surface/angle
- **Contre-cartographie** : cartes comme outils de pouvoir, cartographies alternatives, cartographies participatives

</v-clicks>

<div class="footer">Rappel cours 08 · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://leafletjs.com/">Leaflet</a></div>

---
layout: section
---

# Formats de données

---
layout: default
---

# GeoJSON

Le format standard pour les données géographiques sur le web.

```json
{
  "type": "Feature",
  "géométry": {
    "type": "Point",
    "coordinates": [6.6323, 46.5197]
  },
  "properties": {
    "name": "HEIG-VD",
    "city": "Yverdon-les-Bains"
  }
}
```

<v-clicks>

- **Type** : `Point`, `LineString`, `Polygon`, `MultiPolygon`, ...
- **FeatureCollection** : tableau de Features
- **Coordonnées** : `[longitude, latitude]` (attention a l'ordre)

</v-clicks>

<div class="footer">Source · <a href="https://geojson.org/">geojson.org</a> · <a href="https://datatracker.ietf.org/doc/html/rfc7946">RFC 7946</a></div>

---
layout: default
---

# Autres formats

| Format | Description |
|--------|-------------|
| **TopoJSON** | Extension de GeoJSON, topologie partagee, compression ~80% |
| **Shapefile** | Format ESRI historique (.shp, .dbf, .shx), encore tres repandu |
| **WKT** | Well-Known Text, représentation textuelle de géométries |
| **GeoParquet** | Format colonnaire performant, adapté au big data geospatial |

<v-clicks>

- **GeoJSON** reste le format de reference pour le web
- **TopoJSON** est recommande quand la taille compte (cartes complexes)
- **Shapefile** est le format d'echange historique (SIG, administrations)

</v-clicks>

<div class="footer">Source · <a href="https://github.com/topojson/topojson">TopoJSON</a></div>

---
layout: section
---

# Sources de données

---
layout: default
---

# Sources mondiales

| Source | Description | Lien |
|--------|-------------|------|
| **OpenStreetMap** | Carte collaborative mondiale | [openstreetmap.org](https://www.openstreetmap.org/) |
| **Natural Earth** | Données vectorielles et raster libres | [naturalearthdata.com](https://www.naturalearthdata.com/) |
| **GADM** | Limites administratives mondiales | [gadm.org](https://gadm.org/) |
| **HDX** | Humanitarian Data Exchange (OCHA) | [data.humdata.org](https://data.humdata.org/) |

<div class="footer">Source · <a href="https://naturalearthdata.com">Natural Earth</a> · <a href="https://overpass-turbo.eu">Overpass Turbo</a></div>

---
layout: default
---

# Sources suisses

| Source | Description | Lien |
|--------|-------------|------|
| **opendata.swiss** | Portail open data de la Confederation | [opendata.swiss](https://opendata.swiss/) |
| **Swisstopo** | Office federal de topographie | [swisstopo.admin.ch](https://www.swisstopo.admin.ch/) |
| **Viageo** | Geodonnées du canton de Vaud | [viageo.ch](https://www.viageo.ch/) |
| **BFS / OFS** | Office federal de la statistique | [bfs.admin.ch](https://www.bfs.admin.ch/) |

<div class="footer">Source · <a href="https://opendata.swiss">opendata.swiss</a> · <a href="https://www.swisstopo.admin.ch/">swisstopo</a></div>

---
layout: section
---

# OpenStreetMap

---
layout: default
---

# OpenStreetMap

<v-clicks>

- **Projet collaboratif ouvert** : la "Wikipedia des cartes"
- Plus de 10 millions de contributeurs
- Données libres sous licence ODbL

**Méthodes de recuperation des données :**

- Export direct (petites zones)
- API Overpass (requetes ciblees)
- Geofabrik (extractions regionales completes)
- Nominatim (geocodage)

</v-clicks>

<div class="footer">Source · <a href="https://www.openstreetmap.org/">OpenStreetMap</a></div>

---
layout: default
---

# Overpass Turbo

Interface web pour interroger les données OSM : [overpass-turbo.osm.ch](https://overpass-turbo.osm.ch/)

<v-clicks>

**Etapes :**

1. Naviguer vers la zone d'interet
2. Utiliser le **Wizard** pour construire la requete (ex: `amenity=drinking_water in Yverdon`)
3. Executer et visualiser le resultat
4. **Exporter** en GeoJSON

```
// Exemple : fontaines a Yverdon-les-Bains
[out:json];
area["name"="Yverdon-les-Bains"]->.a;
node["amenity"="drinking_water"](area.a);
out body;
```

</v-clicks>

<div class="footer">Source · <a href="https://overpass-turbo.eu">Overpass Turbo</a> · <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a></div>

---
layout: default
---

# Geocodage avec Nominatim

Convertir une adresse en coordonnées (et inversement) : [nominatim.org](https://nominatim.org/)

```
https://nominatim.openstreetmap.org/search?q=HEIG-VD&format=json
```

<v-clicks>

- **Geocodage** : adresse vers coordonnées
- **Geocodage inverse** : coordonnées vers adresse
- Gratuit, base sur les données OSM
- Limite de requetes : 1 requete par seconde

</v-clicks>

<div class="footer">Source · <a href="https://nominatim.org/">Nominatim</a></div>

---
layout: section
---

# Librairies JavaScript

---
layout: default
---

# Panorama des librairies

| Librairie | Type | Rendu | Usage principal |
|-----------|------|-------|-----------------|
| [**d3-geo**](https://d3js.org/d3-geo) | Bas niveau | SVG | Cartes personnalisees |
| [**Leaflet**](https://leafletjs.com/) | Slippy map | DOM | Cartes interactives |
| [**OpenLayers**](https://openlayers.org/) | Slippy map | Canvas | SIG web |
| [**Deck.gl**](https://deck.gl/) | Big data | WebGL | Données massives |
| [**MapLibre GL**](https://maplibre.org/) | Vector tiles | WebGL | Cartes vectorielles |
| [**Kepler.gl**](https://kepler.gl/) | No-code | WebGL | Exploration geospatiale |

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://leafletjs.com/">Leaflet</a> · <a href="https://maplibre.org/">MapLibre GL</a></div>

---
layout: section
---

# d3-geo

---
layout: default
---

# d3-geo : installation et projections

```bash
npm install d3-geo
```

<v-clicks>

**Projections** : transformer des coordonnées 3D (lon, lat) en coordonnées 2D (x, y).

- `d3.geoMercator()` -- angles preserves, surfaces déformees
- `d3.geoEqualEarth()` -- surfaces preservees, compromis visuel
- `d3.geoOrthographic()` -- vue globe
- `d3.geoConicConformal()` -- projection suisse (CH1903+)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-geo/projection">d3-geo — Projections</a></div>

---
layout: default
---

# Transformations de projection

**Reglage manuel :**

```js
const projection = d3.geoMercator()
  .scale(150)
  .translate([width / 2, height / 2])
  .center([6.63, 46.52])
```

<v-clicks>

**Reglage automatique (recommande) :**

```js
const projection = d3.geoMercator()
  .fitSize([width, height], geojsonData)

// Ou avec des marges :
const projection = d3.geoMercator()
  .fitExtent([[20, 20], [width - 20, height - 20]], geojsonData)
```

- `.fitSize()` : la projection s'adapte aux dimensions du SVG
- `.fitExtent()` : idem, avec marges interieures

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-geo/projection">d3-geo — Projections</a></div>

---
layout: default
---

# Geopath : dessiner des cartes

```js
// 1. Definir la projection
const projection = d3.geoMercator()
  .fitSize([width, height], geojsonData)

// 2. Créer le generateur de chemins
const path = d3.geoPath().projection(projection)

// 3. Dessiner les chemins
svg.selectAll('path')
  .data(geojsonData.features)
  .join('path')
  .attr('d', path)
  .attr('fill', '#ccc')
  .attr('stroke', '#333')
```

<v-clicks>

- `d3.geoPath()` convertit des géométries GeoJSON en chemins SVG
- Chaque `Feature` devient un élément `<path>`
- On peut mapper des données sur `fill`, `stroke`, `opacity`, ...

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-geo/path">d3-geo — Paths</a></div>

---
layout: section
---

# Leaflet

---
layout: default
---

# Leaflet : installation

```bash
npm install leaflet
```

<v-clicks>

- Librairie de cartes interactives la plus populaire
- Legere (~42 KB gzip), mobile-friendly
- Tuiles raster (OpenStreetMap, Mapbox, ...)
- Reference : [leafletjs.com/reference.html](https://leafletjs.com/reference.html)

</v-clicks>

<div class="footer">Source · <a href="https://leafletjs.com/reference.html">Leaflet API</a></div>

---
layout: default
---

# Leaflet : syntaxe de base

```js
// 1. Créer un div dans le HTML : <div id="map"></div>

// 2. Generer la carte
const map = L.map('map').setView([46.52, 6.63], 13)

// 3. Ajouter un fond de carte (basemap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map)

// 4. Ajouter des elements
L.marker([46.52, 6.63])
  .addTo(map)
  .bindPopup('HEIG-VD')

// 5. Ecouter des événements
map.on('click', (e) => console.log(e.latlng))
```

<div class="footer">Source · <a href="https://leafletjs.com/reference.html">Leaflet API</a></div>

---
layout: default
---

# Leaflet avec GeoJSON

```js
// Ajouter une couche GeoJSON (choroplethe)
L.geoJSON(geojsonData, {
  style: (feature) => ({
    fillColor: getColor(feature.properties.population),
    weight: 1,
    color: '#333',
    fillOpacity: 0.7
  }),
  onEachFeature: (feature, layer) => {
    layer.bindPopup(feature.properties.name)
  }
}).addTo(map)
```

<v-clicks>

- `style` : fonction qui retourne un objet de style par feature
- `onEachFeature` : ajouter des interactions (popup, tooltip, ...)
- `pointToLayer` : personnaliser le rendu des points (markers, cercles)

</v-clicks>

<div class="footer">Source · <a href="https://leafletjs.com/reference.html">Leaflet API</a></div>

---
layout: two-cols
---

# Ressources

### Documentation

<v-clicks>

- [d3-geo (d3js.org)](https://d3js.org/d3-geo)
- [Leaflet Reference](https://leafletjs.com/reference.html)
- [GeoJSON RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946)

</v-clicks>

::right::

<div class="mt-12">

### Tutoriels

<v-clicks>

- [Observable : Choropleth](https://observablehq.com/@d3/choropleth)
- [Leaflet Quick Start](https://leafletjs.com/examples/quick-start/)
- [Mike Bostock : Let's Make a Map](https://bost.ocks.org/mike/map/)

</v-clicks>

</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://leafletjs.com/">Leaflet</a></div>

---
layout: statement
---

# Semaine prochaine

Éthique et biais

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
