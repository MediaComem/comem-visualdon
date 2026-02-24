---
theme: default
title: "07 - Interaction et animation"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">07 — Interaction et animation</h1>
    <p class="cover-subtitle">Deuxième partie</p>
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

# d3-zoom

---
layout: default
---

# Installation

```bash
npm install d3-zoom
```

Documentation : [https://d3js.org/d3-zoom](https://d3js.org/d3-zoom)

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: default
---

# Initialisation du zoom

```javascript
import { zoom } from 'd3-zoom'

const zoomBehavior = zoom()
  .on('zoom', (event) => {
    g.attr('transform', event.transform)
  })

svg.call(zoomBehavior)
```

<v-clicks>

Le zoom capture les événements de la souris (scroll, drag) et applique une transformation géométrique (translation + echelle) au groupe `<g>` contenant les éléments.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: default
---

# Événements de zoom

```javascript
const zoomBehavior = zoom()
  .on('start', (event) => {
    console.log('Zoom commence')
  })
  .on('zoom', (event) => {
    // event.transform contient { x, y, k }
    // x, y : translation
    // k : facteur d'echelle
    g.attr('transform', event.transform)
  })
  .on('end', (event) => {
    console.log('Zoom termine')
  })
```

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: default
---

# Contraintes du zoom

```javascript
const zoomBehavior = zoom()
  .scaleExtent([1, 10])  // Zoom min x1, max x10
  .translateExtent([
    [0, 0],               // Coin superieur gauche
    [width, height]        // Coin inferieur droit
  ])
  .on('zoom', (event) => {
    g.attr('transform', event.transform)
  })
```

<v-clicks>

- `scaleExtent([min, max])` -- limite le niveau de zoom
- `translateExtent([[minX, minY], [maxX, maxY]])` -- limite le deplacement

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: default
---

# Méthodes de zoom programmatique

```javascript
// Zoomer de x2
svg.transition().call(zoomBehavior.scaleBy, 2)

// Zoomer a un niveau precis
svg.transition().call(zoomBehavior.scaleTo, 5)

// Deplacer de 100px a droite
svg.transition().call(zoomBehavior.translateBy, 100, 0)

// Centrer sur un point
svg.transition().call(
  zoomBehavior.translateTo, width / 2, height / 2
)
```

<v-clicks>

Ces méthodes permettent de contrôler le zoom via des boutons ou d'autres interactions, avec des transitions animees grace a `.transition()`.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: section
---

# d3-brush

---
layout: default
---

# Installation

```bash
npm install d3-brush
```

Documentation : [https://d3js.org/d3-brush](https://d3js.org/d3-brush)

<div class="footer">Source · <a href="https://d3js.org/d3-brush">d3-brush</a></div>

---
layout: default
---

# Initialisation du brush

Trois types de brush selon la direction de selection.

```javascript
import { brush, brushX, brushY } from 'd3-brush'

const myBrush = brushX()  // Selection horizontale
// const myBrush = brushY()  // Selection verticale
// const myBrush = brush()   // Selection 2D

svg.append('g')
  .call(myBrush)
```

<div class="footer">Source · <a href="https://d3js.org/d3-brush">d3-brush</a></div>

---
layout: default
---

# Événements du brush

```javascript
const myBrush = brushX()
  .extent([[0, 0], [width, height]])
  .on('start', brushStarted)
  .on('brush', brushed)
  .on('end', brushEnded)

function brushed(event) {
  // event.sélection retourne les bornes de la selection
  // Pour brushX : [x0, x1]
  // Pour brush 2D : [[x0, y0], [x1, y1]]
  const [x0, x1] = event.selection

  // Filtrer les données dans la selection
  const selected = data.filter(d =>
    xScale(d.date) >= x0 && xScale(d.date) <= x1
  )
}
```

<v-clicks>

Le brush est souvent utilisé pour filtrer des données, créer des vues detaillees (focus + context) ou sélectionner des plages de temps.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-brush">d3-brush</a></div>

---
layout: section
---

# Animation

---
layout: default
---

# setInterval / clearInterval

Animation par intervalle regulier.

```javascript
let step = 0

const intervalId = setInterval(() => {
  step++
  update(data[step])

  if (step >= data.length - 1) {
    clearInterval(intervalId)
  }
}, 1000)  // Toutes les secondes
```

<v-clicks>

- `setInterval(fn, ms)` -- execute la fonction a intervalle regulier
- `clearInterval(id)` -- arrete l'intervalle
- Utile pour des animations pas-a-pas (annee par annee, mois par mois)

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval">MDN — setInterval</a></div>

---
layout: default
---

# requestAnimationFrame

Alternative plus fluide, synchronisee avec le rafraichissement de l'ecran.

```javascript
let step = 0
let lastTime = 0
const interval = 1000  // 1 seconde entre chaque etape

function animate(timestamp) {
  if (timestamp - lastTime >= interval) {
    lastTime = timestamp
    step++
    update(data[step])
  }

  if (step < data.length - 1) {
    requestAnimationFrame(animate)
  }
}

requestAnimationFrame(animate)
```

<v-clicks>

`requestAnimationFrame` est plus performant que `setInterval` car il s'adapte au taux de rafraichissement du navigateur (typiquement 60fps).

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">MDN — requestAnimationFrame</a></div>

---
layout: default
---

# Scatter plot anime (style Gapminder)

Concept : animer un nuage de points a travers le temps, ou chaque point représenté un pays.

<v-clicks>

- Axe X : revenu par habitant (échelle log)
- Axe Y : esperance de vie
- Taille : population
- Couleur : continent
- Animation : progression annee par annee

Reference : [https://www.gapminder.org/tools/](https://www.gapminder.org/tools/)

Les transitions D3 permettent d'interpoler les positions, tailles et couleurs d'une annee a l'autre pour créer une animation fluide.

</v-clicks>

<div class="footer">Source · <a href="https://www.gapminder.org/">Gapminder</a> · <a href="https://d3js.org/d3-transition">d3-transition</a></div>

---
layout: statement
---

# Semaine prochaine

Introduction a la cartographie

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
