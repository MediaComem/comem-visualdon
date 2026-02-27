---
theme: default
title: "12 - Alternatives a D3.js"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">12 — Alternatives à D3.js</h1>
    <p class="cover-subtitle">Autres outils de visualisation</p>
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

# Écosystème

---
layout: default
---

# Paysage de la visualisation de données

<v-clicks>

Le choix d'un outil depend de plusieurs facteurs :

| Critere | Question |
|---------|----------|
| **Complexite** | Graphique standard ou sur mesure ? |
| **Volume** | Dizaines ou millions de points ? |
| **Interactivite** | Statique, survol, ou exploration complete ? |
| **Rendu** | SVG, Canvas, ou WebGL ? |
| **Courbe d'apprentissage** | Combien de temps pour etre productif ? |

D3 est la reference, mais ce n'est pas toujours le bon choix.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/">D3.js</a> · <a href="https://observablehq.com/plot/">Observable Plot</a></div>

---
layout: section
---

# Les alternatives

---
layout: default
---

# Observable Plot

Haut niveau, concis, construit sur D3. Ideal pour l'exploration rapide.

```js
import * as Plot from '@observablehq/plot'

Plot.plot({
  marks: [
    Plot.barY(data, { x: 'category', y: 'value', fill: 'steelblue' }),
    Plot.ruleY([0])
  ]
})
```

<v-clicks>

- API declarative : decrire **quoi**, pas **comment**
- Gestion automatique des axes, échelles, legendes
- Ideal pour le prototypage et les notebooks
- Lien : [observablehq.com/plot](https://observablehq.com/plot/)

</v-clicks>

<div class="footer">Source · <a href="https://observablehq.com/plot/">Observable Plot</a></div>

---
layout: default
---

# Chart.js

Simple, base sur Canvas, 8 types de graphiques intégres.

```js
import { Chart } from 'chart.js/auto'

new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [{ label: 'Ventes', data: [12, 19, 3] }]
  }
})
```

<v-clicks>

- Prise en main rapide, documentation claire
- Rendu Canvas (performant pour beaucoup de points)
- Animations intégrees
- Flexibilite limitee pour les visualisations non standard
- Lien : [chartjs.org](https://www.chartjs.org/)

</v-clicks>

<div class="footer">Source · <a href="https://www.chartjs.org/">Chart.js</a></div>

---
layout: default
---

# Vega / Vega-Lite

Specification declarative en JSON. Grammaire de la visualisation.

```json
{
  "mark": "bar",
  "encoding": {
    "x": { "field": "category", "type": "nominal" },
    "y": { "field": "value", "type": "quantitative" }
  }
}
```

<v-clicks>

- Separation complete entre données, encodage et rendu
- Excellente documentation et exemples
- Editeur interactif en ligne (Vega Editor)
- Moins adapté aux visualisations tres personnalisees
- Lien : [vega.github.io/vega-lite](https://vega.github.io/vega-lite/)

</v-clicks>

<div class="footer">Source · <a href="https://vega.github.io/vega-lite/">Vega-Lite</a></div>

---
layout: section
---

# Au-dela des graphiques 2D

---
layout: default
---

# p5.js

Creative coding, HTML Canvas, art generatif.

```js
function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)
  ellipse(mouseX, mouseY, 50, 50)
}
```

<v-clicks>

- Heritier de Processing (Java)
- Ideal pour les visualisations artistiques et experimentales
- Mode immediat : redessine tout a chaque frame
- Grande communaute, beaucoup de tutoriels
- Lien : [p5js.org](https://p5js.org/)

</v-clicks>

<div class="footer">Source · <a href="https://p5js.org/">p5.js</a></div>

---
layout: default
---

# three.js

Graphiques 3D, WebGL, haute performance.

<v-clicks>

- Rendu 3D dans le navigateur via WebGL
- Scenes, cameras, lumieres, materiaux
- Visualisations immersives et data art
- Courbe d'apprentissage significative
- Lien : [threejs.org](https://threejs.org/)

**Cas d'usage en visualisation :**

- Globes interactifs
- Nuages de points 3D
- Visualisations architecturales
- Terrain et données geospatiales en relief

</v-clicks>

<div class="footer">Source · <a href="https://threejs.org/">three.js</a></div>

---
layout: default
---

# Deck.gl

Données massives, WebGL2, focus geospatial.

<v-clicks>

- Developpe par Uber / OpenJS Foundation
- Rendu de millions de points en temps reel
- Couches (layers) : ScatterplotLayer, ArcLayer, HexagonLayer, ...
- Integration avec MapLibre GL et Google Maps
- Lien : [deck.gl](https://deck.gl/)

**Quand l'utiliser :**

- Datasets de plus de 100 000 points
- Visualisations geospatiales complexes
- Besoin de performance sur gros volumes

</v-clicks>

<div class="footer">Source · <a href="https://deck.gl/">deck.gl</a></div>

---
layout: section
---

# Autres approches

---
layout: default
---

# roughViz.js

Style dessin a la main, construit sur rough.js + D3.

<v-clicks>

```js
new roughViz.Bar({
  element: '#chart',
  data: { labels: ['A', 'B', 'C'], values: [10, 20, 30] },
  roughness: 2,
  color: 'skyblue'
})
```

- Aesthetic "fait main" (sketch, croquis)
- Ideal pour des presentations informelles ou pedagogiques
- Pas adapté aux données serieuses ou officielles
- Lien : [github.com/jwilber/roughViz](https://github.com/jwilber/roughViz)

</v-clicks>

<div class="footer">Source · <a href="https://github.com/jwilber/roughViz">roughViz</a></div>

---
layout: default
---

# Svelte + D3

Framework reactif + manipulation de données.

```svelte
<script>
  import { scaleLinear } from 'd3-scale'

  let data = [10, 25, 40, 60]
  const y = scaleLinear().domain([0, 60]).range([200, 0])
</script>

{#each data as d, i}
  <rect x={i * 50} y={y(d)} width="40" height={200 - y(d)} />
{/each}
```

<v-clicks>

- Svelte gere le DOM (reactivite, transitions)
- D3 gere les données (échelles, generateurs, formats)
- Pas besoin de `d3.select()` ni `.join()`
- Approche utilisée par The Pudding, Reuters Graphics, NYT

</v-clicks>

<div class="footer">Source · <a href="https://svelte.dev/">Svelte</a> · <a href="https://d3js.org/">D3.js</a></div>

---
layout: section
---

# Bilan

---
layout: two-cols
---

# D3 : pour et contre

### Pourquoi D3 ?

<v-clicks>

- Flexibilite totale sur le rendu
- Manipulation fine du DOM et du SVG
- Fondation sur laquelle d'autres outils sont construits
- Communaute massive, milliers d'exemples
- Comprendre D3 = comprendre la visualisation web

</v-clicks>

::right::

<div class="mt-12">

### Pourquoi PAS D3 ?

<v-clicks>

- Verbeux pour des graphiques standards
- Documentation parfois difficile d'acces
- Courbe d'apprentissage abrupte
- Overkill pour un bar chart simple
- Gros datasets : Canvas ou WebGL preferable

</v-clicks>

</div>

<div class="footer">Source · <a href="https://d3js.org/">D3.js</a></div>

---
layout: default
---

# Matrice de decision

| Outil | Ideal pour | Complexite | Interactivite |
|-------|------------|------------|---------------|
| **D3.js** | Visualisations sur mesure | Elevee | Totale |
| **Observable Plot** | Exploration rapide | Faible | Moyenne |
| **Chart.js** | Dashboards classiques | Faible | Moyenne |
| **Vega-Lite** | Specification declarative | Moyenne | Bonne |
| **p5.js** | Art generatif, creative coding | Moyenne | Totale |
| **three.js** | 3D, WebGL | Elevee | Totale |
| **Deck.gl** | Big data geospatial | Moyenne | Bonne |
| **Leaflet** | Cartes interactives | Faible | Bonne |

<div class="footer">Source · <a href="https://d3js.org/">D3.js</a> · <a href="https://observablehq.com/plot/">Observable Plot</a> · <a href="https://www.chartjs.org/">Chart.js</a></div>

---
layout: section
---

# Conclusion du cours

---
layout: default
---

# Ce que nous avons couvert

| Semaine | Thème |
|---------|-------|
| 01-02 | Introduction, SVG |
| 03-04 | D3.js, données et chargement |
| 05-06 | Échelles, axes, interaction |
| 07-08 | Interaction avancee, introduction cartographie |
| 09-10 | Cartographie web, éthique et biais |
| 11-12 | Scrollytelling, alternatives a D3 |

<v-clicks>

**Competences acquises :**

- Manipuler le SVG et le DOM avec D3
- Charger, transformer et visualiser des données
- Créer des cartes interactives
- Raconter des histoires avec les données
- Porter un regard critique sur les données et les visualisations

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/">D3.js</a> · <a href="https://observablehq.com/plot/">Observable Plot</a> · <a href="https://www.chartjs.org/">Chart.js</a></div>

---
layout: statement
---

# Bonne chance pour vos projets

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
