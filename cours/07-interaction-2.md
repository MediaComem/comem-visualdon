---
theme: default
title: "07 - Interaction et animation"
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
    <h1 class="cover-title">07 - Interaction et animation</h1>
    <p class="cover-subtitle">Visualisation de Données</p>
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

# d3-zoom


---
layout: two-cols
---

# Initialisation du zoom


```bash
npm install d3-zoom
```



```javascript
import { zoom } from 'd3-zoom'

const zoomBehavior = zoom()
  .on('zoom', (event) => {
    g.attr('transform', event.transform)
  })

svg.call(zoomBehavior)
```

Le zoom capture les événements de la souris (scroll, drag) et applique une transformation géométrique (translation + échelle) au groupe `<g>`.

::right::

<ZoomBasic />

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: two-cols
---

# Événements de zoom

```javascript
const zoomBehavior = zoom()
  .on('start', () => {
    eventLabel.textContent = 'start'
  })
  .on('zoom', (event) => {
    g.attr('transform', event.transform)
    eventLabel.textContent = 'zoom'

    // event.transform contient { x, y, k }
    xLabel.textContent = event.transform.x.toFixed(1)
    yLabel.textContent = event.transform.y.toFixed(1)
    kLabel.textContent = event.transform.k.toFixed(2)
  })
  .on('end', () => {
    eventLabel.textContent = 'end'
  })
```

::right::

<ZoomEvents />

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: two-cols
---

# Contraintes

```javascript
const zoomBehavior = zoom()
  .scaleExtent([1, 5])   // Zoom min x1, max x5
  .translateExtent([
    [0, 0],               // Coin superieur gauche
    [width, height]        // Coin inferieur droit
  ])
  .on('zoom', (event) => {
    g.attr('transform', event.transform)
  })
```

- `scaleExtent([min, max])` : limite le niveau de zoom
- `translateExtent([[minX, minY], [maxX, maxY]])` : limite le déplacement

::right::

<ZoomConstraints />

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>

---
layout: two-cols
---

# Zoom programmatique

```javascript
btnScaleBy.on('click', () => {
  svg.transition().call(zoomBehavior.scaleBy, 2)
})

btnScaleTo.on('click', () => {
  svg.transition().call(zoomBehavior.scaleTo, 3)
})

btnTranslateBy.on('click', () => {
  svg.transition().call(zoomBehavior.translateBy, 80, 0)
})

btnReset.on('click', () => {
  svg.transition().call(zoomBehavior.transform, zoomIdentity)
})
```

Ces méthodes permettent de contrôler le zoom via des boutons ou d'autres interactions, avec des transitions animées grâce à `.transition()`.

::right::

<ZoomProgrammatic />

<div class="footer">Source · <a href="https://d3js.org/d3-zoom">d3-zoom</a></div>


---
layout: section
---

# Animation

---
layout: default
---

# Animation

<img src="/images/07-interaction-animation-2/animation-1.svg" alt="animation schema" class="mx-auto" style="max-height: 380px;" />

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval">MDN : setInterval()</a></div>

---
layout: two-cols
---

# setInterval / clearInterval

Animation par intervalle régulier.

```javascript
const years = [1990, 1995, 2000, 2005, 2010, 2015, 2020]
let step = 0

const intervalId = setInterval(() => {
  step = (step + 1) % years.length

  // Mise à jour du graphique avec la nouvelle année
  bars.data(dataByYear[years[step]])
    .transition().duration(700)
    .attr('y', d => yScale(d))
    .attr('height', d => innerH - yScale(d))
}, 1000)
```

- `setInterval(fn, ms)` : exécute la fonction à intervalle régulier
- `clearInterval(id)` : arrête l'intervalle
- Utile pour des animations pas-à-pas (année par année, mois par mois)

::right::

<AnimationInterval />

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval">MDN : setInterval</a></div>

---
layout: default
---

# setInterval | Exemple

<a href="https://codepen.io/romanoe/pen/rNZKjvB" target="_blank" rel="noopener noreferrer">
  <code>codepen.io/romanoe/pen/rNZKjvB</code>
</a>

---
layout: statement
---

# Semaine prochaine

Introduction à la cartographie

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
