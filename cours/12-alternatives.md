---
theme: default
title: "12 - Alternatives à D3.js"
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
    <h1 class="cover-title">12 - Alternatives à D3.js</h1>
    <p class="cover-subtitle">Visualisation de Données</p>
    <div class="cover-links">
      <a href="https://github.com/MediaComem/comem-visualdon" target="_blank"><carbon-logo-github /> GitHub</a>
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" style="height: 14px;" /></a>
    </div>
    <div class="cover-meta">
      <span class="cover-author">Noemi Romano</span>
      <a href="mailto:noemi.romano@heig-vd.ch" target="_blank" class="cover-email">noemi.romano@heig-vd.ch</a>
      <span class="cover-date"></span>
    </div>
  </div>
</div>

---
layout: section
---

# Écosystème

---
layout: two-cols
---

# Paysage de la visualisation de données

Le choix d'un outil dépend de plusieurs facteurs :

| Critère | Question |
|---------|----------|
| **Complexité** | Graphique standard ou sur mesure ? |
| **Volume** | Dizaines ou millions de points ? |
| **Interactivité** | Statique, survol, ou exploration complète ? |
| **Rendu** | SVG, Canvas, ou WebGL ? |
| **Courbe d'apprentissage** | Combien de temps pour être productif ? |

D3 est la référence, mais ce n'est pas toujours le bon choix.

::right::

<div class="col-center">
  <img src="/images/12-alternatives-d3/data-viz-libraries.svg" style="width:100%;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/" target="_blank">D3.js</a> · <a href="https://observablehq.com/plot/" target="_blank">Observable Plot</a></div>

---
layout: section
---

# Les alternatives

---
layout: two-cols
---

# Observable Plot

Haut niveau, concis, construit sur D3. Idéal pour l'exploration rapide.

```js
import * as Plot from '@observablehq/plot'

Plot.plot({
  marks: [
    Plot.barY(data, { x: 'category', y: 'value', fill: 'steelblue' }),
    Plot.ruleY([0])
  ]
})
```

- API déclarative : décrire **quoi**, pas **comment**
- Gestion automatique des axes, échelles, légendes
- Idéal pour le prototypage et les notebooks
- Lien : [observablehq.com/plot](https://observablehq.com/plot/)

::right::

<div class="col-center">
  <img src="/images/12-alternatives-d3/plot.png" style="width:100%;object-fit:contain;border-radius:6px;" />
</div>

<div class="footer">Source · <a href="https://observablehq.com/plot/" target="_blank">Observable Plot</a></div>

---
layout: two-cols
---

# Chart.js

Simple, basé sur Canvas, 8 types de graphiques intégrés.

```js
import { Chart } from 'chart.js/auto'

new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fév', 'Mar'],
    datasets: [{ label: 'Ventes', data: [12, 19, 3] }]
  }
})
```

- Prise en main rapide, documentation claire
- Rendu Canvas (performant pour beaucoup de points)
- Animations intégrées
- Flexibilité limitée pour les visualisations non standard
- Lien : [chartjs.org](https://www.chartjs.org/)

::right::

<div class="col-center">
  <img src="/images/12-alternatives-d3/chartjs.svg" style="width:50%;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://www.chartjs.org/" target="_blank">Chart.js</a></div>

---
layout: two-cols
---

# Vega / Vega-Lite

Spécification déclarative en JSON. Grammaire de la visualisation.

```json
{
  "mark": "bar",
  "encoding": {
    "x": { "field": "category", "type": "nominal" },
    "y": { "field": "value", "type": "quantitative" }
  }
}
```

- Séparation complète entre données, encodage et rendu
- Excellente documentation et exemples
- Éditeur interactif en ligne (Vega Editor)
- Moins adapté aux visualisations très personnalisées
- Lien : [vega.github.io/vega-lite](https://vega.github.io/vega-lite/)

::right::

<div class="col-center">
  <img src="/images/12-alternatives-d3/vega.png" style="width:50%;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://vega.github.io/vega-lite/" target="_blank">Vega-Lite</a></div>

---
layout: section
---

# Au-delà des graphiques 2D

---
layout: two-cols
---

# p5.js

Creative coding, HTML Canvas, art génératif.

```js
function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)
  ellipse(mouseX, mouseY, 50, 50)
}
```

- Héritier de Processing (Java)
- Idéal pour les visualisations artistiques et expérimentales
- Mode immédiat : redessine tout à chaque frame
- Grande communauté, beaucoup de tutoriels
- Lien : [p5js.org](https://p5js.org/)

::right::

<div class="col-center" style="flex-direction:column;gap:0.75rem;">
  <img src="/images/12-alternatives-d3/p5js.svg" style="width:50%;object-fit:contain;" />
  <video src="/images/12-alternatives-d3/p5js.webm" autoplay loop muted playsinline style="width:90%;border-radius:6px;object-fit:cover;" />
</div>

<div class="footer">Source · <a href="https://p5js.org/" target="_blank">p5.js</a></div>

---
layout: two-cols
---

# three.js

Graphiques 3D, WebGL, haute performance.

- Rendu 3D dans le navigateur via WebGL
- Scènes, caméras, lumières, matériaux
- Visualisations immersives et data art
- Courbe d'apprentissage significative
- Lien : [threejs.org](https://threejs.org/)

**Cas d'usage en visualisation :**

- Globes interactifs
- Nuages de points 3D
- Visualisations architecturales
- Terrain et données géospatiales en relief

::right::

<div class="col-center" style="flex-direction:column;gap:0.75rem;">
  <img src="/images/12-alternatives-d3/three-js-logo.png" style="width:20%;object-fit:contain;" />
  <img src="/images/12-alternatives-d3/threejs.png" style="width:90%;object-fit:contain;border-radius:6px;" />
</div>

<div class="footer">Source · <a href="https://threejs.org/" target="_blank">three.js</a></div>

---
layout: two-cols
---

# Deck.gl

Données massives, WebGL2, focus géospatial.

- Développé par Uber / OpenJS Foundation
- Rendu de millions de points en temps réel
- Couches (layers) : ScatterplotLayer, ArcLayer, HexagonLayer, ...
- Intégration avec MapLibre GL et Google Maps
- Lien : [deck.gl](https://deck.gl/)

**Quand l'utiliser :**

- Datasets de plus de 100 000 points
- Visualisations géospatiales complexes
- Besoin de performance sur gros volumes

::right::

<div class="col-center">
  <img src="/images/09-web-cartography/examples-deckgl.png" style="width:100%;object-fit:contain;border-radius:6px;" />
</div>

<div class="footer">Source · <a href="https://deck.gl/" target="_blank">deck.gl</a></div>

---
layout: section
---

# Autres approches

---
layout: two-cols
---

# roughViz.js

Style dessin à la main, construit sur rough.js + D3.

```js
new roughViz.Bar({
  element: '#chart',
  data: { labels: ['A', 'B', 'C'], values: [10, 20, 30] },
  roughness: 2,
  color: 'skyblue'
})
```

- Esthétique "fait main" (sketch, croquis)
- Idéal pour des présentations informelles ou pédagogiques
- Pas adapté aux données sérieuses ou officielles
- Lien : [github.com/jwilber/roughViz](https://github.com/jwilber/roughViz)

::right::

<div class="col-center" style="flex-direction:column;gap:0.75rem;">
  <img src="/images/12-alternatives-d3/rough.png" style="width:40%;object-fit:contain;" />
  <img src="/images/12-alternatives-d3/rough-3.png" style="width:100%;object-fit:contain;border-radius:6px;" />
  <img src="/images/12-alternatives-d3/roughViz.gif" style="width:100%;object-fit:contain;border-radius:6px;" />
</div>

<div class="footer">Source · <a href="https://github.com/jwilber/roughViz" target="_blank">roughViz</a></div>

---
layout: two-cols
---

# Frameworks frontend + D3

Combiner D3 avec un framework réactif : le meilleur des deux mondes !

- Le **framework** gère le DOM, la réactivité et les transitions
- **D3** gère les données : échelles, générateurs, formats, projections
- Plus besoin de `d3.select()` ni `.join()` : le template s'en charge
- Approche utilisée par The Pudding, Reuters Graphics, NYT

**Principe :** D3 calcule, le framework affiche

::right::

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;align-items:center;align-content:center;justify-items:center;padding:1rem;height:100%;">
  <img src="/images/12-alternatives-d3/react.svg" style="width:80px;height:80px;object-fit:contain;" />
  <img src="/images/12-alternatives-d3/vue.svg" style="width:80px;height:80px;object-fit:contain;" />
  <img src="/images/12-alternatives-d3/svelte.svg" style="width:80px;height:80px;object-fit:contain;" />
  <img src="/images/12-alternatives-d3/angular.svg" style="width:80px;height:80px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://svelte.dev/" target="_blank">Svelte</a> · <a href="https://react.dev/" target="_blank">React</a> · <a href="https://vuejs.org/" target="_blank">Vue</a> · <a href="https://angular.dev/" target="_blank">Angular</a> · <a href="https://d3js.org/" target="_blank">D3.js</a></div>

---
layout: section
---

# Bilan

---
layout: two-cols
---

# D3 : pour et contre

### Pourquoi D3 ?

- Flexibilité totale sur le rendu
- Manipulation fine du DOM et du SVG
- Fondation sur laquelle d'autres outils sont construits
- Communauté massive, milliers d'exemples
- Comprendre D3 = comprendre la visualisation web

::right::

<div class="mt-12">

### Pourquoi PAS D3 ?

- Verbeux pour des graphiques standards
- Documentation parfois difficile d'accès
- Courbe d'apprentissage abrupte
- Overkill pour un bar chart simple
- Gros datasets : Canvas ou WebGL préférable

</div>

---
layout: section
---

# Pas de bon ou mauvais outil

---
layout: default
---

# L'outil au service de l'intention

La question n'est pas **"quel est le meilleur outil ?"**

La vraie question est : **"quelle expérience est-ce que je veux créer ?"**

Un graphique est toujours une médiation entre des données et un lecteur. L'outil choisi influence profondément la nature de cette médiation.

| Expérience visée | Ce qu'elle implique |
|-----------------|---------------------|
| **Exploration** | Le lecteur navigue librement, découvre à son rythme |
| **Narration** | Le lecteur est guidé à travers une histoire |
| **Immersion** | Le lecteur est plongé dans les données, les ressent |

Chaque expérience appelle des outils différents : aucun n'est universellement supérieur !

---
layout: default
---

# Les vraies questions à se poser

<div class="q-grid">
  <div class="q-card">
    <span class="q-label">Audience</span>
    <p class="q-text">À qui s'adresse cette visualisation ? Grand public, journalistes, experts, décideurs ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Compétences</span>
    <p class="q-text">Quelles compétences sont disponibles dans l'équipe : JavaScript, design, data engineering ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Intention</span>
    <p class="q-text">Que doit ressentir ou comprendre le lecteur : une tendance, une anomalie, une histoire ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Maintenance</span>
    <p class="q-text">Mise à jour quotidienne ou pièce unique ? Qui maintient le code après livraison ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Canal</span>
    <p class="q-text">Article web, application, dashboard, présentation projetée, impression ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Performance</span>
    <p class="q-text">Quelques centaines de points ou plusieurs millions ? SVG, Canvas ou WebGL ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Délai</span>
    <p class="q-text">Prototype en une heure ou pièce de fond sur six semaines ?</p>
  </div>
  <div class="q-card">
    <span class="q-label">Design</span>
    <p class="q-text">Charte graphique stricte à respecter, ou liberté totale d'expression visuelle ?</p>
  </div>
</div>

<style>
.q-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.85rem; margin-top: 0.8rem; }
.q-card { border: 1px solid #e0e0e0; border-radius: 6px; padding: 1.2rem 1.3rem; }
.q-label { font-family: 'Roboto Mono', monospace; font-size: 0.65rem; color: #aaa; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 0.5rem; }
.q-text { font-size: 0.85rem; margin: 0; line-height: 1.55; }
</style>

---
layout: default
---

# Ce que maîtriser D3 vous donne

Apprendre D3 n'était pas une fin en soi, c'était apprendre à **penser la visualisation**.

- Comprendre les **échelles** et les encodages visuels
- Saisir la relation entre **données, transformations et rendu**
- Maîtriser le SVG et le DOM au niveau fondamental
- Savoir quand un outil de plus haut niveau **suffit**, et quand il ne suffit pas

**Avec ces bases, vous pouvez maintenant :**

- Lire la documentation de n'importe quel outil de visualisation
- Débugger des comportements inattendus dans Chart.js ou Vega
- Comprendre pourquoi Observable Plot fait ce qu'il fait
- Et choisir **en connaissance de cause**, pas par habitude ou par défaut

---
layout: section
---

# Conclusion du cours

---
layout: default
---

# Ce que vous emportez

<div class="obj-grid">
  <div class="obj-card">
    <div class="obj-title">01 · La forme</div>
    <p class="obj-body">SVG, DOM, D3. Comprendre comment une donnée devient un pixel à l'écran.</p>
  </div>
  <div class="obj-card">
    <div class="obj-title">02 · La grammaire</div>
    <p class="obj-body">Échelles, axes, encodages visuels. Le vocabulaire de Bertin mis en code.</p>
  </div>
  <div class="obj-card">
    <div class="obj-title">03 · L'interaction</div>
    <p class="obj-body">Zoom, brush, transitions. Inviter le lecteur à explorer plutôt que subir.</p>
  </div>
  <div class="obj-card">
    <div class="obj-title">04 · L'espace</div>
    <p class="obj-body">Projections, GeoJSON, cartes web. Situer les données dans le monde réel.</p>
  </div>
  <div class="obj-card">
    <div class="obj-title">05 · Le regard critique</div>
    <p class="obj-body">Biais, données manquantes, algorithmes. Les données ne sont jamais neutres.</p>
  </div>
  <div class="obj-card">
    <div class="obj-title">06 · La narration</div>
    <p class="obj-body">Scrollytelling, rythme, intention. Raconter une histoire, pas juste afficher un résultat.</p>
  </div>
</div>

<p class="conclusion-note">Le projet est l'occasion de réunir les deux dimensions du cours : une <strong>approche rationnelle</strong> (choisir les bons encodages, structurer les données, soigner la lisibilité) et une <strong>approche sensible</strong> (choisir une histoire à raconter, une expérience à créer, une émotion à transmettre).</p>

<style>
.obj-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.85rem; margin-top: 0.8rem; }
.obj-card { border: 1px solid #e0e0e0; border-radius: 6px; padding: 1.2rem 1.3rem; }
.obj-title { font-family: 'Roboto Mono', monospace; font-size: 0.65rem; color: #aaa; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem; }
.obj-body { font-size: 0.85rem; margin: 0; line-height: 1.55; }
.conclusion-note { margin-top: 0.85rem; font-size: 0.78rem; color: #555; line-height: 1.6; border-left: 3px solid #e0e0e0; padding-left: 0.75rem; }
</style>

---
layout: end
---

# Merci !

VisualDon · HEIG-VD / COMEM+
