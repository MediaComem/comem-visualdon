---
theme: default
title: "09 - Cartographie web"
download: true
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">09 - Cartographie web</h1>
    <p class="cover-subtitle">Visualisation de données</p>
    <div class="cover-links">
      <a href="https://github.com/MediaComem/comem-visualdon"><carbon-logo-github /> GitHub</a>
      <a href="https://creativecommons.org/licenses/by/4.0/"><img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" style="height: 14px;" /></a>
    </div>
    <div class="cover-meta">
      <span class="cover-author">Noemi Romano</span>
      <a href="mailto:noemi.romano@heig-vd.ch" class="cover-email">noemi.romano@heig-vd.ch</a>
      <span class="cover-date"></span>
    </div>
  </div>
</div>

---
layout: section
---

# Rappel

---
layout: two-cols
---

# Cours précédent

**Histoire** · Mammouth → Anaximandre → Ptolémée → Al-Idrisi → Mercator

**Types de cartes** · Référence · Qualitative · Choroplète · Cartogramme · Bulles · Flowmap · Heatmap · Topographique · Topologique

**Variables visuelles** *(Bertin, 1967)* · Taille · Valeur · Grain · Couleur · Orientation · Forme

**Projections** · Chaque projection déforme quelque chose (surfaces, angles, distances)

**Le pouvoir de la carte** · Nommer c'est exister · Biais de centrage · Contre-cartographie · Cartographies participatives

**Cartographie & médias** · Journalisme de données · RTS votations · Story maps · Forensic Architecture

::right::

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;height:100%;padding-top:0.25rem;">
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/rts_cartes.gif"
      style="width:100%;height:100px;object-fit:cover;" />
    <figcaption>Choroplète · RTS Votations</figcaption>
  </figure>
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/cartogramme.png"
      style="width:100%;height:100px;object-fit:cover;" />
    <figcaption>Cartogramme · Borzakian</figcaption>
  </figure>
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/flowmap.png"
      style="width:100%;height:100px;object-fit:cover;" />
    <figcaption>Flowmap · flowmap.blue</figcaption>
  </figure>
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/cholera_map.jpg"
      style="width:100%;height:100px;object-fit:cover;" />
    <figcaption>Points · John Snow, 1854</figcaption>
  </figure>
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/lausanne-transport-map.jpg"
      style="width:100%;height:100px;object-fit:cover;" />
    <figcaption>Topologique · TL Lausanne</figcaption>
  </figure>
  <figure style="margin:0;overflow:hidden;border-radius:4px;">
    <img src="/images/08-intro-cartography/variables-visuelles-de-Bertin.png"
      style="width:100%;height:100px;object-fit:contain;background:#f5f5f5;" />
    <figcaption>Variables visuelles · Bertin, 1967</figcaption>
  </figure>
</div>

<div class="footer">Sources · <a href="https://www.rts.ch/info/suisse/12849342">RTS</a> · Borzakian · <a href="https://flowmap.blue">flowmap.blue</a> · Wikipedia · TL · Bertin, <em>Sémiologie graphique</em> (1967)</div>

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
    "coordinates": [6.6416, 46.7818]
  },
  "properties": {
    "name": "HEIG-VD",
    "city": "Yverdon-les-Bains"
  }
}
```

- **Type** : `Point`, `LineString`, `Polygon`, `MultiPolygon`, ...
- **FeatureCollection** : tableau de Features
- **Coordonnées** : `[longitude, latitude]` (attention à l'ordre)

<div class="footer">Source · <a href="https://geojson.org/">geojson.org</a> · <a href="https://datatracker.ietf.org/doc/html/rfc7946">RFC 7946</a></div>

---
layout: default
---

# Autres formats

| Format | Description |
|--------|-------------|
| **TopoJSON** | Extension de GeoJSON, topologie partagée, compression ~80% |
| **Shapefile** | Format ESRI historique (.shp, .dbf, .shx), encore très répandu |
| **WKT** | Well-Known Text, représentation textuelle de géométries |
| **GeoParquet** | Format colonnaire performant, adapté au big data géospatial |

- **GeoJSON** reste le format de référence pour le web
- **TopoJSON** est recommandé quand la taille compte (cartes complexes)
- **Shapefile** est le format d'échange historique (SIG, administrations)

<div class="footer">Source · <a href="https://github.com/topojson/topojson">TopoJSON</a> · <a href="https://geoparquet.org/">GeoParquet</a></div>

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
| **Overture Maps** | Données géo ouvertes structurées (Meta, Microsoft, Amazon, TomTom) | [overturemaps.org](https://overturemaps.org/) |
| **Natural Earth** | Données vectorielles et raster libres | [naturalearthdata.com](https://www.naturalearthdata.com/) |
| **GADM** | Limites administratives mondiales | [gadm.org](https://gadm.org/) |
| **HDX** | Humanitarian Data Exchange (OCHA) | [data.humdata.org](https://data.humdata.org/) |

<div class="footer">Source · <a href="https://naturalearthdata.com">Natural Earth</a> · <a href="https://overturemaps.org/">Overture Maps</a> · <a href="https://overpass-turbo.eu">Overpass Turbo</a></div>

---
layout: default
---

# Sources suisses

| Source | Description | Lien |
|--------|-------------|------|
| **opendata.swiss** | Portail open data de la Confédération | [opendata.swiss](https://opendata.swiss/) |
| **Swisstopo** | Office fédéral de topographie | [swisstopo.admin.ch](https://www.swisstopo.admin.ch/) |
| **Viageo** | Géodonnées du canton de Vaud | [viageo.ch](https://www.viageo.ch/) |
| **BFS / OFS** | Office fédéral de la statistique | [bfs.admin.ch](https://www.bfs.admin.ch/) |

<div class="footer">Source · <a href="https://opendata.swiss">opendata.swiss</a> · <a href="https://www.swisstopo.admin.ch/">swisstopo</a> · <a href="https://www.viageo.ch/">Viageo</a></div>

---
layout: section
---

# OpenStreetMap

---
layout: two-cols
---

# OpenStreetMap

- **Projet collaboratif ouvert** : la "Wikipedia des cartes"
- Plus de 10 millions de contributeurs
- Données libres sous licence ODbL

**Méthodes de récupération des données :**

- Export direct (petites zones)
- API Overpass (requêtes ciblées)
- Geofabrik (extractions régionales complètes)
- Nominatim (géocodage)

::right::

<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=6.5999%2C46.7537%2C6.6999%2C46.8037&layer=mapnik&marker=46.7818%2C6.6416"
  style="width:100%;height:100%;border:none;border-radius:6px;"
  allowfullscreen
/>

<div class="footer">Source · <a href="https://www.openstreetmap.org/">OpenStreetMap</a></div>

---
layout: two-cols
---

# Overpass Turbo

Interface web pour interroger les données OSM : [overpass-turbo.osm.ch](https://overpass-turbo.osm.ch/)

**Étapes :**

1. Naviguer vers la zone d'intérêt
2. Utiliser le **Wizard** (ex: `amenity=drinking_water in Yverdon`)
3. Exécuter et visualiser le résultat
4. **Exporter** en GeoJSON

```bash
[out:json];
area["name"="Yverdon-les-Bains"]->.a;
node["amenity"="drinking_water"](area.a);
out body;
```

::right::

<iframe
  src="https://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%3B%0Aarea%5B%22name%22%3D%22Yverdon-les-Bains%22%5D-%3E.a%3B%0Anode%5B%22amenity%22%3D%22drinking_water%22%5D(area.a)%3B%0Aout%20body%3B&C=46.78%3B6.64%3B14"
  style="width:100%;height:100%;border:none;border-radius:6px;"
  allowfullscreen
/>

<div class="footer">Source · <a href="https://overpass-turbo.eu">Overpass Turbo</a> · <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a></div>

---
layout: two-cols
---

# Géocodage avec Nominatim

Convertir une adresse en coordonnées (et inversement) : [nominatim.org](https://nominatim.org/)

```bash
https://nominatim.openstreetmap.org/search?q=HEIG-VD&format=json
```

- **Géocodage** : adresse vers coordonnées
- **Géocodage inverse** : coordonnées vers adresse
- Gratuit, basé sur les données OSM
- Limite de requêtes : 1 requête par seconde

::right::

<div style="display:flex;flex-direction:column;gap:1.4rem;padding:1.2rem 0.8rem;font-size:0.82em;">

  <div style="text-align:left;font-size:0.78em;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#E92528;">Géocodage</div>

  <div style="display:flex;align-items:center;gap:0.5rem;">
    <div style="border:1px solid #ddd;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.72em;color:#999;margin-bottom:0.1rem;">adresse</div>
      <div style="color:#333;font-size:0.88em;">"HEIG-VD, Yverdon"</div>
    </div>
    <div style="color:#bbb;font-size:1em;">→</div>
    <div style="border:1px solid #E92528;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.78em;color:#E92528;font-weight:600;letter-spacing:0.04em;">Nominatim</div>
      <div style="font-size:0.68em;color:#aaa;">OSM API</div>
    </div>
    <div style="color:#bbb;font-size:1em;">→</div>
    <div style="border:1px solid #ddd;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.72em;color:#999;margin-bottom:0.1rem;">coordonnées</div>
      <div style="color:#333;font-size:0.85em;">46.7818, 6.6416</div>
    </div>
  </div>

  <div style="border-top:1px solid #eee;"></div>

  <div style="text-align:left;font-size:0.78em;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#888;">Géocodage inverse</div>

  <div style="display:flex;align-items:center;gap:0.5rem;">
    <div style="border:1px solid #ddd;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.72em;color:#999;margin-bottom:0.1rem;">coordonnées</div>
      <div style="color:#333;font-size:0.85em;">46.7818, 6.6416</div>
    </div>
    <div style="color:#bbb;font-size:1em;">→</div>
    <div style="border:1px solid #ccc;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.78em;color:#666;font-weight:600;letter-spacing:0.04em;">Nominatim</div>
      <div style="font-size:0.68em;color:#aaa;">reverse</div>
    </div>
    <div style="color:#bbb;font-size:1em;">→</div>
    <div style="border:1px solid #ddd;border-radius:4px;padding:0.45rem 0.7rem;flex:1;text-align:center;">
      <div style="font-size:0.72em;color:#999;margin-bottom:0.1rem;">adresse</div>
      <div style="color:#333;font-size:0.88em;">"HEIG-VD, Yverdon"</div>
    </div>
  </div>

</div>

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
| [**d3-geo**](https://d3js.org/d3-geo) | Bas niveau | SVG | Cartes personnalisées |
| [**MapLibre GL JS**](https://maplibre.org/) | Vector tiles | WebGL | Cartes interactives vectorielles |
| [**OpenLayers**](https://openlayers.org/) | Slippy map | Canvas | SIG web |
| [**Deck.gl**](https://deck.gl/) | Big data | WebGL | Données massives |
| [**Kepler.gl**](https://kepler.gl/) | No-code | WebGL | Exploration géospatiale |
| [**Leaflet**](https://leafletjs.com/) | Slippy map | DOM | Cartes raster légères |

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://maplibre.org/">MapLibre GL JS</a></div>

---
layout: section
---

# d3-geo

---
layout: two-cols
---

# d3-geo : installation

```bash
npm install d3-geo
```

Dessiner des **cartes en SVG** à partir de données GeoJSON, directement dans le navigateur.

- Contrôle total sur le rendu (couleurs, styles, animations)
- Intégration naturelle avec D3 (scales, transitions...)
- Idéal pour les choroplèthes et cartes statiques

::right::

<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0.75rem;">
  <img src="/images/09-web-cartography/d3-geo.png"
    style="max-width:100%;max-height:80%;object-fit:contain;" />
  <a href="https://observablehq.com/collection/@d3/d3-geo"
    style="font-size:0.72em;color:#555;text-decoration:underline;">
    observablehq.com/@d3/d3-geo
  </a>
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a></div>

---
layout: two-cols
---

# d3-geo : des features aux chemins SVG

Un fichier GeoJSON contient des **features**, chacune avec une géométrie (coordonnées).

L'objectif : transformer chaque feature en un élément `<path>` SVG.

`d3.geoPath()` est le **générateur de chemins** qui fait cette conversion :

```js
const path = d3.geoPath().projection(projection)

svg.selectAll('path')
  .data(geojsonData.features)  // une feature → un <path>
  .join('path')
  .attr('d', path)             // génère l'attribut "d" du chemin
  .attr('fill', '#E92528')
  .attr('stroke', '#fff')
```

::right::

<img src="/images/09-web-cartography/geojson2path.svg"
  style="width:100%;border-radius:6px;" />

<div class="footer">Source · <a href="https://d3js.org/d3-geo/path">d3-geo — geoPath</a></div>

---
layout: two-cols
---

# d3-geo : projections

Les coordonnées GeoJSON sont en degrés (lon, lat). La **projection** les convertit en pixels (x, y) pour l'écran.

```js
const projection = d3.geoEqualEarth()
const path = d3.geoPath().projection(projection)
```

Projections disponibles :

- `d3.geoEqualEarth()` — surfaces préservées, compromis visuel ← *demo*
- `d3.geoMercator()` — angles préservés, surfaces déformées
- `d3.geoOrthographic()` — vue globe
- `d3.geoConicConformal()` — projection suisse (CH1903+)

::right::

<div class="map-cover">
  <D3GeoMap />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo/projection">d3-geo — Projections</a></div>

---
layout: two-cols
---

# d3-geo : ajuster la projection

**Réglage automatique (recommandé) :**

```js
const projection = d3.geoEqualEarth()
  .fitExtent([[12, 12], [width - 12, height - 12]], geojsonData)
```

**Réglage manuel :**

```js
const projection = d3.geoEqualEarth()
  .scale(150)
  .translate([width / 2, height / 2])
  .center([6.64, 46.78])
```

- `.fitSize(size, geojson)` : adapte aux dimensions du SVG
- `.fitExtent([[gauche, haut], [droite, bas]], geojson)` : idem avec marges

::right::

<div class="map-cover">
  <D3GeoMap />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo/projection">d3-geo — Projections</a></div>


---
layout: section
---

# MapLibre GL JS

---
layout: two-cols
---

# MapLibre GL JS : présentation

- Fork open-source de Mapbox GL JS (licence BSD)
- Rendu **WebGL** : performant, cartes 3D, inclinaison
- **Tuiles vectorielles** : données allégées, style côté client
- Fonds de carte gratuits : [OpenFreeMap](https://openfreemap.org/), [MapTiler](https://www.maptiler.com/), [Stadia Maps](https://stadiamaps.com/)
- Référence : [maplibre.org/maplibre-gl-js/docs](https://maplibre.org/maplibre-gl-js/docs/)

::right::

<div style="display:flex;align-items:center;justify-content:center;height:100%;">
  <img src="/images/09-web-cartography/MAPLIBRE.png"
    style="max-width:80%;max-height:200px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://maplibre.org/">MapLibre GL JS</a></div>

---
layout: default
---

# MapLibre GL JS : installation

```bash
npm install maplibre-gl
```

```js
// Importer la librairie ET le CSS (obligatoire)
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
```

- Le CSS est **indispensable** : sans lui, la carte ne s'affiche pas correctement
- Le container HTML doit avoir une hauteur explicite

```html
<div id="map" style="width: 100%; height: 500px;"></div>
```

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/">MapLibre GL JS Docs</a></div>

---
layout: default
---

# MapLibre GL JS : styles

Le paramètre `style` est une URL vers un fichier JSON qui définit l'apparence complète de la carte.

| Fournisseur | Style | URL |
|-------------|-------|-----|
| **Carto** | Voyager | `https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json` |
| **Carto** | Positron (minimal) | `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json` |
| **Carto** | Dark Matter | `https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json` |
| **OpenFreeMap** | Liberty / Positron / Bright | `https://tiles.openfreemap.org/styles/liberty` |
| **Protomaps** | Light / Dark | `https://api.protomaps.com/styles/v4/light/en.json?key=<KEY>` |
| **MapTiler** | Streets / Satellite | `https://api.maptiler.com/maps/streets/style.json?key=<KEY>` |

- **Carto & OpenFreeMap** : gratuits, sans clé API ← *utilisés dans ce cours*
- **Protomaps / MapTiler** : clé API requise, styles plus variés

<div class="footer">Source · <a href="https://carto.com/basemaps">Carto Basemaps</a> · <a href="https://openfreemap.org/">OpenFreeMap</a> · <a href="https://protomaps.com/">Protomaps</a></div>

---
layout: two-cols
---

# MapLibre GL JS : syntaxe de base

```js
const STYLE = 'https://tiles.openfreemap.org/styles/positron'

// 1. Créer la carte
const map = new maplibregl.Map({
  container: 'map',
  style: STYLE,
  center: [6.64, 46.78], // [longitude, latitude]
  zoom: 11
})

// 2. Ajouter un marqueur
new maplibregl.Marker({ color: '#E92528' })
  .setLngLat([6.64, 46.78])
  .setPopup(new maplibregl.Popup({ offset: 25 })
    .setHTML('<b>HEIG-VD</b><br>Yverdon-les-Bains'))
  .addTo(map)
```

::right::

<div class="map-cover">
  <MapLibreBasic />
</div>

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/">MapLibre GL JS Docs</a> · <a href="https://openfreemap.org/">OpenFreeMap</a></div>

---
layout: two-cols
---

# Camera : flyTo et vue 3D

```js
// Animation fluide vers un lieu
map.flyTo({
  center: [7.45, 46.95],  // [lon, lat]
  zoom: 12,
  pitch: 60,              // inclinaison 0–85°
  bearing: -30,           // rotation 0–360°
  duration: 2000          // ms
})

// Transition douce (sans changer le centre)
map.easeTo({
  pitch: 60,
  bearing: 45,
  duration: 1000
})

// Réinitialiser la vue
map.flyTo({
  center: [6.64, 46.78],
  zoom: 11, pitch: 0, bearing: 0
})
```

- `flyTo` : animation de type vol (accélération/décélération)
- `easeTo` : transition linéaire douce
- `pitch` : inclinaison pour la vue 3D des bâtiments

::right::

<div class="map-cover">
  <MapLibreBasic />
</div>

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto">flyTo</a> · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#easeto">easeTo</a></div>

---
layout: two-cols
---

# Sources et couches (layers)

MapLibre sépare **données** (sources) et **rendu** (couches) :

```js
map.on('load', async () => {
  const res = await fetch('europe.geojson')
  const geojson = await res.json()

  // 1. Déclarer la source de données
  map.addSource('europe', { type: 'geojson', data: geojson })

  // 2. Couche de remplissage
  map.addLayer({
    id: 'europe-fill',
    type: 'fill',
    source: 'europe',
    paint: { 'fill-color': '#E92528', 'fill-opacity': 0.7 }
  })
  // 3. Couche de contour
  map.addLayer({
    id: 'europe-outline',
    type: 'line',
    source: 'europe',
    paint: { 'line-color': '#fff', 'line-width': 1 }
  })
})
```

- Une source → **plusieurs couches** possibles
- Attendre `'load'` avant d'ajouter des données

::right::

<div class="map-cover">
  <MapLibreGeoJSON />
</div>

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addsource">addSource</a> · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addlayer">addLayer</a></div>

---
layout: two-cols
---

# Expressions et style dynamique

MapLibre lie les propriétés visuelles aux données via des **expressions** :

```js
map.addLayer({
  id: 'europe-choropleth',
  type: 'fill',
  source: 'europe',
  paint: {
    'fill-color': [
      'interpolate', ['linear'],
      ['get', 'population'],
      1000000,  '#fadadb',
      15000000, '#E92528',
      85000000, '#7a0c0e',
    ],
    'fill-opacity': 0.9
  }
})
```

- `['get', 'prop']` : lire une propriété de la feature
- `['interpolate', ...]` : choroplèthe continu
- `['match', ...]` : correspondance par catégorie

::right::

<div class="map-cover">
  <MapLibreExpressions />
</div>

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/style-spec/expressions/">MapLibre — Expressions</a></div>

---
layout: two-cols
---

# MapLibre GL JS : interactivité

```js
// Couleur conditionnelle selon feature-state
map.addLayer({
  id: 'europe-fill', type: 'fill', source: 'europe',
  paint: {
    'fill-color': ['case',
      ['boolean', ['feature-state', 'hover'], false],
      '#7a0c0e',   // survolé
      '#E92528'    // normal
    ],
    'fill-opacity': 0.85
  }
})

// Hover : activer / désactiver l'état
map.on('mousemove', 'europe-fill', (e) => {
  map.setFeatureState({ source: 'europe', id: e.features[0].id }, { hover: true })
  popup.setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.NAME)
    .addTo(map)
})
map.on('mouseleave', 'europe-fill', () => {
  map.setFeatureState({ source: 'europe', id: hoveredId }, { hover: false })
  popup.remove()
})
```

::right::

<div class="map-cover">
  <MapLibreInteractive />
</div>

<div class="footer">Source · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Popup/">MapLibre — Popup</a> · <a href="https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setfeaturestate">setFeatureState</a></div>

---
layout: section
---

# MapLibre + Deck.gl

---
layout: two-cols
---

# Deck.gl

Bibliothèque de visualisation **WebGL haute performance**, conçue pour les données massives et les rendus 3D.

S'intègre à MapLibre via `MapboxOverlay` pour superposer des couches par-dessus un fond de carte.

**Couches disponibles :**

- `HexagonLayer` — densité agrégée en hexagones 3D
- `ArcLayer` — flux et connexions entre points
- `ScatterplotLayer` — millions de points
- `HeatmapLayer` — carte de chaleur continue
- `TripsLayer` — animation temporelle de trajets

```bash
npm install @deck.gl/core @deck.gl/layers @deck.gl/mapbox
```

::right::

<div style="position:absolute;top:0;right:0;bottom:0;width:50%;border-left:6px solid #fff;display:flex;flex-direction:column;overflow:hidden;">
  <img src="/images/09-web-cartography/examples-deckgl.png"
    style="width:100%;flex:1;min-height:0;object-fit:cover;" />
  <div style="background:#fff;padding:0.35rem 0.75rem;text-align:center;font-size:0.72em;border-top:1px solid #eee;flex-shrink:0;">
    <a href="https://deck.gl/examples">deck.gl/examples</a>
  </div>
</div>

<div class="footer">Source · <a href="https://deck.gl/">Deck.gl</a></div>

---
layout: default
---

# Quand choisir quoi ?

| Besoin | Librairie recommandée |
|--------|----------------------|
| Carte statique / infographie | **d3-geo** (SVG, contrôle total) |
| Carte interactive avec fond de carte | **MapLibre GL JS** (vector tiles) |
| Données massives (millions de points) | **Deck.gl** seul ou en overlay |
| Combinaison fond + couches complexes | **MapLibre + Deck.gl** |
| Exploration rapide sans code | **Kepler.gl** |

- **d3-geo** : idéal pour les choroplèthes SVG intégrées dans une page web
- **MapLibre** : fond de carte riche + données GeoJSON interactives
- **Deck.gl** : rendu WebGL haute performance, arcs, hexagones, heatmaps...

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://maplibre.org/">MapLibre</a> · <a href="https://deck.gl/">Deck.gl</a></div>

---
layout: default
---

# Observable | Cartographie web

Ouvre le notebook et complète les exercices dans l'ordre.

**[https://observablehq.com/d/e95a07bb2e4347c1](https://observablehq.com/d/e95a07bb2e4347c1)**


---
layout: two-cols
---


# Ressources

### Documentation

- [d3-geo (d3js.org)](https://d3js.org/d3-geo)
- [MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js/docs/)
- [MapLibre Style Spec](https://maplibre.org/maplibre-style-spec/)
- [Deck.gl Docs](https://deck.gl/docs)
- [GeoJSON RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946)

::right::

<div class="mt-12">

### Tutoriels & exemples

- [Observable : Galerie d3 — Cartes](https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=hero&utm_campaign=try-observable#maps)
- [Observable : Choropleth (d3)](https://observablehq.com/@d3/choropleth)
- [Mike Bostock : Let's Make a Map](https://bost.ocks.org/mike/map/)
- [MapLibre GL JS Examples](https://maplibre.org/maplibre-gl-js/docs/examples/)
- [Deck.gl Examples](https://deck.gl/examples)
- [OpenFreeMap](https://openfreemap.org/)

</div>

<div class="footer">Source · <a href="https://d3js.org/d3-geo">d3-geo</a> · <a href="https://maplibre.org/">MapLibre GL JS</a> · <a href="https://deck.gl/">Deck.gl</a></div>

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
