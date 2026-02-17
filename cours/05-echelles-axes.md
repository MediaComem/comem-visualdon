---
theme: default
title: "05 - Échelles et axes"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 05 -- Échelles et axes

Mapper les données aux pixels

---
layout: section
---

# Rappel

---
layout: default
---

# Cours précédent

<v-clicks>

- **Chargement de données** : `json()`, `csv()`
- **Statistiques** : `mean()`, `max()`, `extent()`
- **Méthodes de tableaux** : `map()`, `filter()`, `reduce()`

</v-clicks>

<div class="footer">Rappel cours 04 · <a href="https://d3js.org/d3-array">d3-array</a> · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: section
---

# Le probleme

---
layout: default
---

# Données = Pixels ?

Jusqu'ici, nous avons utilisé les données directement comme coordonnées en pixels.

<v-clicks>

**Probleme** : les données ne correspondent pas aux dimensions du canvas.

- Données de température : `[-10, 38]`
- Largeur du SVG : `800px`
- Données de population : `[8000, 8000000]`
- Hauteur du SVG : `500px`

Il faut **transformer** les données pour les adaptér a l'espace disponible.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale">d3-scale</a></div>

---
layout: default
---

# La solution : les échelles

```
Données  -->  Échelle  -->  Pixels
```

<v-clicks>

Une échelle est une **fonction** qui transforme une valeur du **domaine des données** vers un **intervalle visuel**.

```
valeur d'entree (donnee)  -->  scale()  -->  valeur de sortie (pixel)
```

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale">d3-scale</a></div>

---
layout: section
---

# d3-scale

---
layout: default
---

# Installation

```bash
npm install d3-scale
```

Documentation : [https://d3js.org/d3-scale](https://d3js.org/d3-scale)

<div class="footer">Source · <a href="https://d3js.org/d3-scale">d3-scale</a></div>

---
layout: default
---

# Syntaxe generale

```javascript
import { scaleLinear } from 'd3-scale'

const scale = scaleLinear()
  .domain([minData, maxData])  // Etendue des données
  .range([0, svgWidth])        // Etendue visuelle (pixels)
```

<v-clicks>

- **domain** : les valeurs minimale et maximale des données
- **range** : les valeurs minimale et maximale de l'espace visuel (pixels)
- La fonction retournee mappe lineairement du domain au range

```javascript
scale(minData) // --> 0
scale(maxData) // --> svgWidth
```

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale">d3-scale</a></div>

---
layout: default
---

# Échelle lineaire

Pour les données numeriques continues.

```javascript
import { scaleLinear } from 'd3-scale'

const x = scaleLinear()
  .domain([0, 100])
  .range([0, 800])

x(0)   // 0
x(50)  // 400
x(100) // 800
```

<v-clicks>

Utilisation typique : axes numeriques, positions, tailles.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/linear">d3-scale — scaleLinear</a></div>

---
layout: default
---

# Échelle temporelle

Pour les données de type date/temps.

```javascript
import { scaleTime } from 'd3-scale'

const x = scaleTime()
  .domain([new Date('2020-01-01'), new Date('2025-01-01')])
  .range([0, 800])

x(new Date('2022-06-01')) // ~400
```

<v-clicks>

Utilisation typique : series temporelles, chronologies.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/time">d3-scale — scaleTime</a></div>

---
layout: default
---

# Échelle quantize

Transforme des données continues en catégories discretes.

```javascript
import { scaleQuantize } from 'd3-scale'

const color = scaleQuantize()
  .domain([0, 100])
  .range(['#f0f0f0', '#bdbdbd', '#636363'])

color(10)  // '#f0f0f0'
color(50)  // '#bdbdbd'
color(90)  // '#636363'
```

<v-clicks>

Utilisation typique : cartes choroplethes, classification automatique.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/quantize">d3-scale — scaleQuantize</a></div>

---
layout: default
---

# Échelle threshold

Definit des seuils personnalises pour categoriser les données.

```javascript
import { scaleThreshold } from 'd3-scale'

const color = scaleThreshold()
  .domain([30, 70])
  .range(['#d73027', '#fee08b', '#1a9850'])

color(20)  // '#d73027'  (< 30)
color(50)  // '#fee08b'  (>= 30 et < 70)
color(80)  // '#1a9850'  (>= 70)
```

<v-clicks>

Utilisation typique : classifications avec seuils metier (ex. température, pollution).

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/threshold">d3-scale — scaleThreshold</a></div>

---
layout: default
---

# Échelle ordinale

Pour les données categoriques (valeurs discretes).

```javascript
import { scaleOrdinal } from 'd3-scale'

const color = scaleOrdinal()
  .domain(['pomme', 'banane', 'cerise'])
  .range(['#e41a1c', '#ffff33', '#984ea3'])

color('pomme')  // '#e41a1c'
color('banane') // '#ffff33'
color('cerise') // '#984ea3'
```

<v-clicks>

Utilisation typique : legendes, couleurs par categorie.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/ordinal">d3-scale — scaleOrdinal</a></div>

---
layout: default
---

# Échelle band

Pour les diagrammes en barres (repartition uniforme de l'espace).

```javascript
import { scaleBand } from 'd3-scale'

const x = scaleBand()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 800])
  .padding(0.1)

x('A')          // position x de la barre A
x.bandwidth()   // largeur de chaque barre
```

<v-clicks>

Utilisation typique : bar charts, grouped bar charts.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-scale/band">d3-scale — scaleBand</a></div>

---
layout: section
---

# d3-axis

---
layout: default
---

# Installation

```bash
npm install d3-axis
```

Documentation : [https://d3js.org/d3-axis](https://d3js.org/d3-axis)

<div class="footer">Source · <a href="https://d3js.org/d3-axis">d3-axis</a></div>

---
layout: default
---

# Créer des axes

Les axes sont generes a partir d'une échelle.

```javascript
import { axisBottom, axisLeft, axisTop, axisRight } from 'd3-axis'

const xAxis = axisBottom(xScale)  // Axe horizontal (ticks en bas)
const yAxis = axisLeft(yScale)    // Axe vertical (ticks a gauche)

// Moins courants
const xAxisTop = axisTop(xScale)     // Ticks en haut
const yAxisRight = axisRight(yScale) // Ticks a droite
```

<div class="footer">Source · <a href="https://d3js.org/d3-axis">d3-axis</a></div>

---
layout: default
---

# Dessiner les axes

Les axes sont dessines dans un élément `<g>` via `.call()`.

```javascript
// Axe horizontal
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(axisBottom(xScale))

// Axe vertical
svg.append('g')
  .call(axisLeft(yScale))
```

<v-clicks>

La méthode `.call()` appelle la fonction d'axe sur la selection, ce qui généré automatiquement les ticks, les labels et la ligne de l'axe.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-axis">d3-axis</a></div>

---
layout: default
---

# Convention des marges

Pour positionner correctement les axes, on utilisé un objet `margin`.

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

<v-clicks>

Cette convention permet de reserver de l'espace pour les axes tout en gardant une zone de dessin propre de dimensions `width` x `height`.

</v-clicks>

<div class="footer">Source · <a href="https://observablehq.com/@d3/margin-convention">Observable — Margin Convention</a></div>

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
