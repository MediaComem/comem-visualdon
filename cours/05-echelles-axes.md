---
theme: default
title: "05 - Échelles et axes"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">05 - Échelles et axes</h1>
    <p class="cover-subtitle">Visualisation de Données</p>
    <div class="cover-links">
      <a href="https://github.com/MediaComem/comem-visualdon" target="_blank"><carbon-logo-github /> GitHub</a>
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" style="height: 14px;" /></a>
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
layout: default
---

# Cours précédent


- **Types de données** : qualitative (nominale, ordinale, binaire) · quantitative (discrète, continue)
- **Formats** : CSV, JSON, TSV, XML
- **Chargement** (`d3-fetch`) : `csv()`, `json()`
- **Statistiques** (`d3-array`) : `max()`, `min()`, `mean()`, `extent()`
- **Méthodes de tableaux** : `map()`, `filter()`, `includes()`, `reduce()`, `forEach()`, `sort()`
- **Data binding** : `.data().join()` · Enter / Update / Exit


<div class="footer">Rappel cours 04 · <a href="https://d3js.org/d3-array" target="_blank">d3-array</a> · <a href="https://d3js.org/d3-fetch" target="_blank">d3-fetch</a></div>

---
layout: section
---

# Le problème

---
layout: two-cols
---

# Données = Pixels ?

Jusqu'ici, nous avons utilisé les données directement comme coordonnées en pixels.


**Problème** : les données ne correspondent pas aux dimensions du canvas.

- Données de température : `[-10, 38]`
- Largeur du SVG : `800px`
- Données de population : `[8000, 8000000]`
- Hauteur du SVG : `500px`

Il faut **transformer** les données pour les adapter à l'espace disponible.


::right::

<div class="col-center" style="gap: 1rem;">
  <img src="/images/05-echelles-axes/data2pixel.svg" alt="Données vers pixels" style="width:100%;max-height:180px;object-fit:contain;" />
  <img src="/images/05-echelles-axes/data2not_fitting.svg" alt="Données qui ne correspondent pas" style="width:100%;max-height:200px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-scale" target="_blank">d3-scale</a></div>

---
layout: default
---

# La solution : les échelles

Une échelle est une **fonction** qui transforme une valeur du **domaine des données** vers un **intervalle visuel**.

- **domain** : l'étendue des données en entrée
- **range** : l'étendue visuelle souhaitée (pixels)

<div class="col-center">
  <img src="/images/05-echelles-axes/domain_range.svg" alt="Domain et Range" style="width:80%;max-height:180px;object-fit:contain; margin-top: -200px" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-scale" target="_blank">d3-scale</a></div>

---
layout: section
---

# d3-scale




<div class="footer">Source · <a href="https://d3js.org/d3-scale" target="_blank">d3-scale</a></div>

---
layout: two-cols
---

# Syntaxe générale
```bash
npm install d3-scale
```

```javascript
import { scaleLinear } from 'd3-scale'

const scale = scaleLinear()
  .domain([minData, maxData])  // Étendue des données
  .range([0, svgWidth])        // Étendue visuelle (pixels)
```


- **`domain`** : valeurs min et max des données
- **`range`** : valeurs min et max de l'espace visuel
- La fonction mappe linéairement du domaine au range

```javascript
scale(minData) // --> 0
scale(maxData) // --> svgWidth
```


::right::

<div class="col-center">
  <img src="/images/05-echelles-axes/domain_range.svg" alt="Domain et Range" style="width:100%;max-height:360px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-scale" target="_blank">d3-scale</a></div>

---
layout: two-cols-bottom
---

# Échelle linéaire

Pour les données numériques continues.

Utilisation typique : axes numériques, positions, tailles.

::right::

```javascript
import { scaleLinear } from 'd3-scale'

const x = scaleLinear()
  .domain([0, 100])
  .range([0, 800])

x(0)   // 0
x(50)  // 400
x(100) // 800
```

::bottom::

<img src="/images/05-echelles-axes/scaleLinear.svg" alt="Échelle linéaire" style="width:100%;max-height:200px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/linear" target="_blank">d3-scale - scaleLinear</a></div>

---
layout: two-cols-bottom
---

# Échelle temporelle

Pour les données de type date/temps.

Utilisation typique : séries temporelles, chronologies.

::right::

```javascript
import { scaleTime } from 'd3-scale'

const x = scaleTime()
  .domain([new Date('2020-01-01'), new Date('2025-01-01')])
  .range([0, 800])

x(new Date('2022-06-01')) // ~400
```

::bottom::

<img src="/images/05-echelles-axes/scaleTime.svg" alt="Échelle temporelle" style="width:100%;max-height:120px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/time" target="_blank">d3-scale - scaleTime</a></div>

---
layout: two-cols-bottom
---

# Échelle quantize

Transforme des données continues en catégories discrètes.

Utilisation typique : cartes choroplèthes, classification automatique.

::right::

```javascript
import { scaleQuantize } from 'd3-scale'

const color = scaleQuantize()
  .domain([0, 100])
  .range(['#f0f0f0', '#bdbdbd', '#636363'])

color(10)  // '#f0f0f0'
color(50)  // '#bdbdbd'
color(90)  // '#636363'
```

::bottom::

<img src="/images/05-echelles-axes/scaleQuantize.svg" alt="Échelle quantize" style="width:100%;max-height:160px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/quantize" target="_blank">d3-scale - scaleQuantize</a></div>

---
layout: two-cols-bottom
---

# Échelle threshold

Définit des seuils personnalisés pour catégoriser les données.

Utilisation typique : classifications avec seuils métier (ex. température, pollution).

::right::

```javascript
import { scaleThreshold } from 'd3-scale'

const color = scaleThreshold()
  .domain([30, 70])
  .range(['#d73027', '#fee08b', '#1a9850'])

color(20)  // '#d73027'  (< 30)
color(50)  // '#fee08b'  (>= 30 et < 70)
color(80)  // '#1a9850'  (>= 70)
```

::bottom::

<img src="/images/05-echelles-axes/scaleThreshold.svg" alt="Échelle threshold" style="width:100%;max-height:260px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/threshold" target="_blank">d3-scale - scaleThreshold</a></div>

---
layout: two-cols-bottom
---

# Échelle ordinale

Pour les données catégoriques (valeurs discrètes).

Utilisation typique : légendes, couleurs par catégorie.

::right::

```javascript
import { scaleOrdinal } from 'd3-scale'

const color = scaleOrdinal()
  .domain(['pomme', 'banane', 'cerise'])
  .range(['#e41a1c', '#ffff33', '#984ea3'])

color('pomme')  // '#e41a1c'
color('banane') // '#ffff33'
color('cerise') // '#984ea3'
```

::bottom::

<img src="/images/05-echelles-axes/scaleOrdinal.svg" alt="Échelle ordinale" style="width:100%;max-height:160px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/ordinal" target="_blank">d3-scale - scaleOrdinal</a></div>

---
layout: two-cols-bottom
---

# Échelle band

Pour les diagrammes en barres (répartition uniforme de l'espace).

Utilisation typique : bar charts, grouped bar charts.

::right::

```javascript
import { scaleBand } from 'd3-scale'

const x = scaleBand()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 800])
  .padding(0.1)

x('A')          // position x de la barre A
x.bandwidth()   // largeur de chaque barre
```

::bottom::

<img src="/images/05-echelles-axes/scaleBand.svg" alt="Échelle band" style="width:100%;max-height:160px;object-fit:contain;" />

<div class="footer">Source · <a href="https://d3js.org/d3-scale/band" target="_blank">d3-scale - scaleBand</a></div>

---
layout: section
---

# d3-axis



---
layout: two-cols
---

# Créer des axes

Les axes sont générés à partir d'une échelle.

```bash
npm install d3-axis
```

```javascript
import { axisBottom, axisLeft, axisTop, axisRight } from 'd3-axis'

const xAxis = axisBottom(xScale)  // Axe horizontal (ticks en bas)
const yAxis = axisLeft(yScale)    // Axe vertical (ticks à gauche)

// Moins courants
const xAxisTop = axisTop(xScale)     // Ticks en haut
const yAxisRight = axisRight(yScale) // Ticks à droite
```


Les axes sont dessinés dans un élément `<g>` via `.call()`.

```javascript
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(axisBottom(xScale))

svg.append('g')
  .call(axisLeft(yScale))
```


::right::

<div class="col-center">
  <img src="/images/05-echelles-axes/axis.svg" alt="Axes D3" style="width:100%;max-height:360px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-axis" target="_blank">d3-axis</a></div>

---
layout: two-cols
---

# Convention des marges

Pour positionner correctement les axes, on utilise un objet `margin`.

```javascript
const margin = { top: 20, right: 30, bottom: 40, left: 50 }
const width = 800 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
```


Cette convention réserve de l'espace pour les axes tout en gardant une zone de dessin propre de dimensions `width` × `height`.


::right::

<div class="col-center">
  <img src="/images/05-echelles-axes/margin_convention.svg" alt="Convention des marges" style="width:100%;max-height:360px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://observablehq.com/@d3/margin-convention" target="_blank">Observable - Margin Convention</a></div>

---
layout: statement
---

# Semaine prochaine

Interaction et animation

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
