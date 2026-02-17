---
theme: default
title: "06 - Interaction et animation"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 06 -- Interaction et animation

Première partie

---
layout: section
---

# Rappel

---
layout: default
---

# Cours précédent

<v-clicks>

- **Échelles** : `scaleLinear().domain([min, max]).range([0, width])`
- **Axes** : `axisBottom(scale)`, `axisLeft(scale)`
- **Marges** : `{ top: 20, right: 30, bottom: 40, left: 50 }`
- **Dessiner un axe** : `svg.append('g').call(axis)`

</v-clicks>

<div class="footer">Rappel cours 05 · <a href="https://d3js.org/d3-scale">d3-scale</a> · <a href="https://d3js.org/d3-axis">d3-axis</a></div>

---
layout: section
---

# d3-transition

---
layout: default
---

# Installation

```bash
npm install d3-transition
```

Documentation : [https://d3js.org/d3-transition](https://d3js.org/d3-transition)

<div class="footer">Source · <a href="https://d3js.org/d3-transition">d3-transition</a></div>

---
layout: default
---

# Qu'est-ce qu'une transition ?

Une transition est une **interpolation animee** d'un etat a un autre.

```javascript
import 'd3-transition'

// Sans transition : changement instantane
circle.attr('r', 50)

// Avec transition : changement anime
circle
  .transition()
  .attr('r', 50)
```

<v-clicks>

D3 interpole automatiquement les valeurs entre l'etat actuel et l'etat cible (nombres, couleurs, positions).

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-transition">d3-transition</a></div>

---
layout: default
---

# Duree

Par defaut, une transition dure 250ms. On peut la modifier avec `.duration()`.

```javascript
circle
  .transition()
  .duration(1000)  // 1 seconde
  .attr('r', 50)
  .attr('fill', '#333')
```

<v-clicks>

La duree est exprimee en millisecondes. Toutes les propriétés de la transition s'animent sur cette duree.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-transition/timing">d3-transition — Timing</a></div>

---
layout: default
---

# Easing

La fonction d'easing contrôle l'acceleration de la transition.

```javascript
import { easeBounce, easeElastic, easeCubic } from 'd3-ease'

circle
  .transition()
  .duration(1000)
  .ease(easeBounce)
  .attr('cy', 400)
```

<v-clicks>

Fonctions d'easing courantes :

- `easeLinear` -- vitesse constante
- `easeCubic` -- acceleration/deceleration douce (par defaut)
- `easeBounce` -- effet de rebond
- `easeElastic` -- effet elastique

Documentation : [https://d3js.org/d3-ease](https://d3js.org/d3-ease)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-ease">d3-ease</a></div>

---
layout: default
---

# Delai

Le delai permet de decaler le debut de la transition, utile pour des animations en cascade.

```javascript
bars
  .transition()
  .duration(800)
  .delay((d, i) => i * 100)  // Chaque barre demarre 100ms après la précédente
  .attr('height', d => yScale(d.value))
```

<v-clicks>

La fonction de callback recoit la donnee `d` et l'index `i`, ce qui permet de créer des effets de decalage progressif.

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-transition/timing">d3-transition — Timing</a></div>

---
layout: section
---

# Événements

---
layout: default
---

# Événements de souris

Les selections D3 permettent d'ecouter les événements du navigateur.

```javascript
selection
  .on('mouseover', function(event, d) {
    d3.select(this).attr('fill', '#666')
    tooltip
      .style('opacity', 1)
      .html(`Valeur : ${d.value}`)
  })
  .on('mouseout', function(event, d) {
    d3.select(this).attr('fill', '#333')
    tooltip.style('opacity', 0)
  })
  .on('mousemove', function(event) {
    tooltip
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 20) + 'px')
  })
  .on('click', function(event, d) {
    console.log('Clicked:', d)
  })
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/events">d3-selection — Events</a></div>

---
layout: default
---

# Transitions et événements

Combiner les transitions avec les événements pour créer des effets interactifs.

```javascript
bars
  .on('mouseover', function() {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('fill', '#666')
      .attr('transform', 'scale(1.05)')
  })
  .on('mouseout', function() {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('fill', '#333')
      .attr('transform', 'scale(1)')
  })
```

<div class="footer">Source · <a href="https://d3js.org/d3-transition">d3-transition</a> · <a href="https://d3js.org/d3-selection/events">d3-selection — Events</a></div>

---
layout: section
---

# Exemple complet

---
layout: default
---

# Bar chart avec transitions

```javascript
// Animation d'entree
bars.enter()
  .append('rect')
  .attr('x', d => xScale(d.name))
  .attr('width', xScale.bandwidth())
  .attr('y', height)          // Depart : en bas
  .attr('height', 0)          // Depart : hauteur 0
  .attr('fill', '#333')
  .transition()
  .duration(800)
  .delay((d, i) => i * 100)
  .attr('y', d => yScale(d.value))            // Arrivee
  .attr('height', d => height - yScale(d.value))

// Transition de mise a jour
bars.transition()
  .duration(500)
  .attr('y', d => yScale(d.value))
  .attr('height', d => height - yScale(d.value))
```

<div class="footer">Source · <a href="https://d3js.org/d3-transition">d3-transition</a></div>

---
layout: statement
---

# Semaine prochaine

Interaction et animation (suite)

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
