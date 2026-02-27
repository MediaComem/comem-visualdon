---
theme: default
title: "11 - Scrollytelling"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">11 — Scrollytelling</h1>
    <p class="cover-subtitle">Raconter des histoires avec les données</p>
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

# Exemples

---
layout: default
---

# Exemples de scrollytelling

<v-clicks>

| Projet | Auteur | Lien |
|--------|--------|------|
| **The Unlikely Death of Wikipedia** | The Pudding | [pudding.cool](https://pudding.cool/2018/08/wiki-death/) |
| **COVID-19 in NZ** | Stuff.co.nz | [stuff.co.nz](https://interactives.stuff.co.nz/2020/05/coronavirus-covid-19-data-new-zealand/) |
| **Mapbox Storytelling** | Mapbox Labs | [labs.mapbox.com](https://labs.mapbox.com/storytelling/) |
| **The Pudding** | The Pudding | [pudding.cool](https://pudding.cool/) |
| **Reuters Graphics** | Reuters | [graphics.reuters.com](https://graphics.reuters.com/) |

</v-clicks>

<div class="footer">Source · <a href="https://pudding.cool/">The Pudding</a> · <a href="https://graphics.reuters.com/">Reuters Graphics</a></div>

---
layout: section
---

# Concepts

---
layout: default
---

# Qu'est-ce que le scrollytelling ?

<v-clicks>

**Scroll** + **Storytelling** = narration guidée par le defilement.

Le lecteur progresse dans un recit en scrollant. Des éléments visuels (graphiques, cartes, images) se mettent a jour au fur et a mesure que le texte defile.

**Pourquoi ca fonctionne :**

- Le scroll est un geste naturel et universel
- Le rythme est contrôle par le lecteur
- L'attention est maintenue par les transitions visuelles
- Le contexte narratif donne du sens aux données

</v-clicks>

<div class="footer">Source · <a href="https://pudding.cool/">The Pudding</a></div>

---
layout: default
---

# Composants cles

<v-clicks>

| Composant | Role | Implementation |
|-----------|------|----------------|
| **Sticky container** | Element visuel qui reste fixe a l'ecran | `position: sticky` |
| **Steps** | Blocs de texte qui defilent devant le visuel | Elements HTML successifs |
| **Triggers** | Points ou le visuel se met a jour | Intersection Observer |

**Architecture type :**

```
<div class="scrollytelling">
  <div class="sticky">         <!-- graphique fixe -->
    <svg>...</svg>
  </div>
  <div class="steps">          <!-- texte qui defile -->
    <div class="step">Etape 1</div>
    <div class="step">Etape 2</div>
    <div class="step">Etape 3</div>
  </div>
</div>
```

</v-clicks>

<div class="footer">Source · <a href="https://pudding.cool/process/introducing-scrollama/">Introducing Scrollama</a></div>

---
layout: section
---

# Scrollama

---
layout: default
---

# Scrollama : installation

```bash
npm install scrollama intersection-observer
```

<v-clicks>

- Librairie légere pour le scrollytelling
- Basee sur l'Intersection Observer API
- Gere la detection des etapes (steps)
- Reference : [github.com/russellsamora/scrollama](https://github.com/russellsamora/scrollama)

</v-clicks>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama">Scrollama</a></div>

---
layout: default
---

# Scrollama : configuration de base

```js
import scrollama from 'scrollama'

// 1. Initialiser
const scroller = scrollama()

// 2. Configurer
scroller
  .setup({
    step: '.step',       // sélecteur des etapes
    offset: 0.5,         // point de declenchement (50% du viewport)
    debug: true           // afficher les lignes de debug
  })
  .onStepEnter((response) => {
    // response.element : l'element DOM de l'etape
    // response.index : l'index de l'etape (0, 1, 2, ...)
    // response.direction : 'up' ou 'down'
    console.log('Entree etape', response.index)
  })
  .onStepExit((response) => {
    console.log('Sortie etape', response.index)
  })
```

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama">Scrollama</a></div>

---
layout: default
---

# Scrollama + D3 : mise a jour du graphique

```js
import * as d3 from 'd3'
import scrollama from 'scrollama'

const svg = d3.select('#chart')
const data = [10, 25, 40, 60, 80]

function updateChart(stepIndex) {
  svg.selectAll('rect')
    .data(data.slice(0, stepIndex + 1))
    .join('rect')
    .transition()
    .duration(600)
    .attr('x', (d, i) => i * 50)
    .attr('y', d => 200 - d * 2)
    .attr('width', 40)
    .attr('height', d => d * 2)
}

scrollama()
  .setup({ step: '.step', offset: 0.5 })
  .onStepEnter(({ index }) => updateChart(index))
```

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama">Scrollama</a> · <a href="https://d3js.org/">D3.js</a></div>

---
layout: section
---

# GSAP

---
layout: default
---

# GSAP : installation

```bash
npm install gsap
```

<v-clicks>

- GreenSock Animation Platform
- Librairie d'animation JavaScript haute performance
- Fonctionne avec le DOM, SVG, Canvas, WebGL
- Reference : [gsap.com](https://gsap.com/)

</v-clicks>

<div class="footer">Source · <a href="https://gsap.com/">GSAP</a></div>

---
layout: default
---

# GSAP : les bases

```js
import gsap from 'gsap'

// Animer VERS un etat
gsap.to('.box', { x: 200, opacity: 0.5, duration: 1 })

// Animer DEPUIS un etat
gsap.from('.box', { y: -100, opacity: 0, duration: 1 })

// Animer D'UN etat VERS un autre
gsap.fromTo('.box',
  { scale: 0, rotation: -180 },
  { scale: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.7)' }
)
```

<v-clicks>

- `to()` : etat final
- `from()` : etat initial (l'element revient a son etat CSS actuel)
- `fromTo()` : contrôle total sur debut et fin
- `ease` : courbe d'acceleration (ex: `power2.inOut`, `elastic`, `back`)

</v-clicks>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/">GSAP Docs</a></div>

---
layout: default
---

# GSAP ScrollTrigger

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.to('.chart', {
  x: 400,
  rotation: 360,
  scrollTrigger: {
    trigger: '.chart',      // élément declencheur
    start: 'top center',    // debut de l'animation
    end: 'bottom center',   // fin de l'animation
    scrub: true,            // lie l'animation au scroll
    markers: true           // debug
  }
})
```

<v-clicks>

- **scrub** : l'animation suit la position du scroll (pas de lecture automatique)
- **pin** : fixer un élément pendant le scroll (`pin: true`)
- **start / end** : définir la zone d'activation

</v-clicks>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">GSAP ScrollTrigger</a></div>

---
layout: section
---

# Autres outils

---
layout: default
---

# Autres outils de scrollytelling

| Outil | Description | Lien |
|-------|-------------|------|
| **ScrollMagic** | Declenchement d'animations au scroll, scenes configurables | [scrollmagic.io](https://scrollmagic.io/) |
| **Locomotive Scroll** | Scroll fluide (smooth scroll), effets de parallaxe | [locomotivemtl.github.io](https://locomotivemtl.github.io/locomotive-scroll/) |
| **Intersection Observer** | API native du navigateur, pas de dependance | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |

<v-clicks>

- **Scrollama** et **GSAP ScrollTrigger** couvrent la majorite des besoins
- **Intersection Observer** est la base sur laquelle Scrollama est construit
- Pour un projet simple, l'API native peut suffire

</v-clicks>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama">Scrollama</a> · <a href="https://gsap.com/">GSAP</a></div>

---
layout: two-cols
---

# Ressources

### Documentation

<v-clicks>

- [Scrollama (GitHub)](https://github.com/russellsamora/scrollama)
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Intersection Observer (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

</v-clicks>

::right::

<div class="mt-12">

### Galeries d'exemples

<v-clicks>

- [The Pudding](https://pudding.cool/)
- [Reuters Graphics](https://graphics.reuters.com/)
- [NYT Interactive](https://www.nytimes.com/interactive/)
- [Scrollytelling.io](https://scrollytelling.io/)

</v-clicks>

</div>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama">Scrollama</a> · <a href="https://gsap.com/">GSAP</a></div>

---
layout: statement
---

# Semaine prochaine

Alternatives a D3

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
