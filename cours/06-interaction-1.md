---
theme: default
title: "06 - Interaction et animation"
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
    <h1 class="cover-title">06 - Interaction et animation</h1>
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

# Rappel

---
layout: default
---

# Cours précédent


- **Échelles** : `scaleLinear().domain([min, max]).range([0, width])`
- **Axes** : `axisBottom(scale)`, `axisLeft(scale)`
- **Marges** : `{ top: 20, right: 30, bottom: 40, left: 50 }`
- **Dessiner un axe** : `svg.append('g').call(axis)`


<div class="footer">Rappel cours 05 · <a href="https://d3js.org/d3-scale">d3-scale</a> · <a href="https://d3js.org/d3-axis">d3-axis</a></div>

---
layout: section
---

# d3-transition



---
layout: two-cols
---

# Qu'est-ce qu'une transition ?

Une transition est une **interpolation animée** d'un état à un autre.

D3 interpole automatiquement les valeurs (nombres, couleurs, positions…).
```bash
npm install d3-transition
```

```javascript
import { transition } from 'd3-transition'

// Sans transition — changement instantané
circle.attr('r', 40)

// Avec transition — changement animé
circle
  .transition()
  .attr('r', 40)
```

::right::

<img src="/images/06-interaction-animation-1/transition.svg" alt="transition" style="width:100%;margin-bottom:0.5rem;" />
<TransitionBasic />

<div class="footer">Source · <a href="https://d3js.org/d3-transition">d3-transition</a></div>

---
layout: two-cols-bottom
---

# Durée

Par défaut, une transition dure **250ms**. On peut la modifier avec `.duration()`.

```javascript
circle
  .transition()
  .duration(1000)  // 1 seconde
  .attr('r', 50)
  .attr('fill', '#E92528')
```

La durée est exprimée en **millisecondes**.

::right::

Chaque balle tombe avec une durée différente — la vitesse dépend de `.duration()`.

::bottom::

<DurationDemo />

<div class="footer">Source · <a href="https://d3js.org/d3-transition/timing">d3-transition — Timing</a></div>

---
layout: two-cols-bottom
---

# Easing
```bash
npm install d3-ease
```
```javascript
import { easeBounce, easeElastic,
         easeCubic, easeLinear } from 'd3-ease'

circle
  .transition()
  .duration(1000)
  .ease(easeBounce)
  .attr('cy', 400)
```

::right::

La fonction d'easing contrôle l'**accélération** de la transition.

<ul style="font-size:0.85em;margin-top:0.75em;">
  <li><code>easeLinear</code> — vitesse constante</li>
  <li><code>easeCubic</code> — accélération/décélération (défaut)</li>
  <li><code>easeBounce</code> — effet de rebond</li>
  <li><code>easeElastic</code> — effet élastique</li>
</ul>

::bottom::

<EasingDemo />

<div class="footer">Source · <a href="https://d3js.org/d3-ease">d3-ease</a></div>

---
layout: two-cols-bottom
---

# Délai

Le délai décale le début de la transition — utile pour des animations en **cascade**.

```javascript
bars
  .transition()
  .duration(650)
  .delay((d, i) => i * 100)
  .attr('y', d => yScale(d.value))
  .attr('height', d => height - yScale(d.value))
```


::right::
* Le callback reçoit `d` (la donnée) et `i` (l'index).

* Chaque barre démarre `i × 100ms` après la précédente.

::bottom::

<DelayDemo />

<div class="footer">Source · <a href="https://d3js.org/d3-transition/timing">d3-transition — Timing</a></div>

---
layout: section
---

# Retour sur l'exercice précédent

---
layout: two-cols
---

# Exercice cours précédent


**[observablehq.com/d/9759665d742894dd](https://observablehq.com/d/9759665d742894dd)**

- Comment as-tu choisi les échelles ?
- Comment as-tu construit les axes ?
- Qu'est-ce qui était difficile ?


::right::

<a href="https://observablehq.com/d/9759665d742894dd" target="_blank">
  <img src="/images/06-interaction-animation-1/observable.png" style="width:100%;border-radius:4px;" />
</a>

<div class="footer">Rappel exercice 05 · <a href="https://observablehq.com/d/9759665d742894dd">d3-scale & d3-axis</a></div>

---
layout: section
---

# Exercice en classe

---
layout: default
---

# Observable | d3-transition

Ouvre le notebook et complète les exercices dans l'ordre.

**[observablehq.com/d/3b44fccdf8827628](https://observablehq.com/d/3b44fccdf8827628)**

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1.5rem;">

<div class="border-box">

**1. Échelle adaptée**

Trouve une échelle plus adaptée pour minimiser les différences entre les valeurs et explorer des méthodes de représentation alternatives.

</div>

<div class="border-box">

**2. Légende**

Ajoute une légende pour clarifier la correspondance entre les couleurs et les langages.

</div>

<div class="border-box">

**3. Transition d'entrée**

Crée une transition pour l'entrée des cercles de haut en bas, avec la fonction d'easing de ton choix.

</div>

</div>

---
layout: statement
---

# Semaine prochaine

Interaction et animation (suite)

---
layout: end
---

# Merci !

VisualDon 2026 - HEIG-VD / COMEM+
