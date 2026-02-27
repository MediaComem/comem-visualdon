---
theme: default
download: true
title: "03 - JavaScript et manipulation DOM"
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Roboto Mono
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">03 - JavaScript et manipulation DOM</h1>
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

# Cours précédent : Dessiner avec du code

- **SVG** : un format vectoriel intégré dans le HTML
- Formes de base : `<rect>`, `<circle>`, `<line>`, `<path>`, `<g>`
- Attributs : `cx`, `cy`, `r`, `fill`, `stroke`, `transform`
- Système de coordonnées : origine en haut à gauche, `y` vers le bas
- Transformations : `translate`, `rotate`, `scale`

<div class="footer">Rappel cours 02 · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG</a></div>

---
layout: section
---

# JavaScript & DOM

---
layout: two-cols
---

# Le DOM

**Document Object Model** : le navigateur représente la page HTML (et SVG) comme un **arbre d'objets** que JavaScript peut lire et modifier

- Chaque balise = un **nœud** (`Element`)
- Chaque attribut = une **propriété** de ce nœud
- JavaScript peut ajouter, modifier ou supprimer des nœuds à la volée
- Le SVG est dans le DOM → on peut le manipuler exactement comme du HTML

::right::

<div class="col-center">

```sh
document
└── <html>
    └── <body>
        └── <svg>
            ├── <rect />
            ├── <circle />
            └── <g>
                └── <text />
```

</div>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">MDN - DOM</a></div>

---
layout: section
---

# D3.js

---
layout: two-cols
---

# Qu'est-ce que D3.js ?

- **Data-Driven Documents** : bibliothèque JavaScript pour manipuler des documents à partir de données
- Lie des données à des éléments du **DOM**
- Produit des visualisations en **SVG**, HTML ou Canvas
- Créé par **Mike Bostock** (2011), maintenu par **Observable**
- **Modulaire** : on installe uniquement les modules dont on a besoin

::right::

<div class="img-full">
  <iframe src="https://d3js.org/" title="D3.js" frameborder="0" allowfullscreen style="width:100%;height:100%"></iframe>
</div>

<div class="footer">Source · <a href="https://d3js.org/">d3js.org</a></div>

---
layout: two-cols
---

# Installation et import

```bash
# Terminal
npm install d3-selection
```

```javascript
// script.js
import { select, selectAll } from 'd3-selection'
```

- D3 est **modulaire** : `d3-selection` pour la manipulation du DOM
- `select` : sélectionner un élément
- `selectAll` : sélectionner plusieurs éléments
- Chaque méthode retourne la sélection → **chaînage** possible

::right::

<div class="col-center">
  <img src="/images/02-intro-d3/doc_annotation.svg" alt="Documentation D3" style="width:100%;max-height:360px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-selection">d3js.org - d3-selection</a> · <a href="https://d3js.org/api">API reference</a></div>

---
layout: two-cols
---

# Method chaining

D3 utilise le **chaînage de méthodes** : chaque appel retourne la sélection.

```javascript
// script.js
import { select } from 'd3-selection'

select('svg')
  .append('circle')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', 50)
  .attr('fill', 'black')
```


::right::

- Chaque méthode retourne la **sélection courante**
- Permet d'écrire du code **lisible** et **compact**
- Pattern courant dans les bibliothèques JS (jQuery, Lodash…)



<div class="footer">Source · <a href="https://d3js.org/d3-selection">d3-selection</a></div>

---
layout: section
---

# Manipulation du DOM

---
layout: four-cells
---

# Sélectionner des éléments

- `document.querySelector` → `select`
- `document.querySelectorAll` → `selectAll`
- Mêmes sélecteurs CSS - syntaxe D3 plus concise

::result::

```html
<!-- index.html -->
<svg id="chart">
  <rect class="barre" />
  <rect class="barre" />
  <circle id="mon-cercle" />
</svg>
```

::left::

**Vanilla JS**

```javascript
// script.js
const svg = document.querySelector('#chart')
const cercle = document.querySelector('#mon-cercle')
const barres = document.querySelectorAll('.barre')
```

::right::

**D3**

```javascript
// script.js
import { select, selectAll } from 'd3-selection'

const svg = select('#chart')
const cercle = select('#mon-cercle')
const barres = selectAll('.barre')
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/selecting">d3-selection - Selecting</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">MDN - querySelector</a></div>

---
layout: four-cells
---

# Modifier des éléments

- `.setAttribute()` → `.attr()`
- `.style.prop` → `.style()`
- `.textContent` → `.text()`
- D3 : tout enchaîné sur la même sélection

::result::

<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:130px;">
  <circle cx="60" cy="65" r="55" fill="steelblue" opacity="0.5"/>
  <text x="125" y="70" dominant-baseline="middle" font-size="10" font-family="Roboto, sans-serif" fill="#000">Bonjour</text>
</svg>

::left::

**Vanilla JS**

```javascript
// script.js
const cercle = document.querySelector('circle')

cercle.setAttribute('fill', 'steelblue')
cercle.setAttribute('r', 80)
cercle.style.opacity = 0.5

const label = document.querySelector('text')
label.textContent = 'Bonjour'
```

::right::

**D3**

```javascript
// script.js
import { select } from 'd3-selection'

select('circle')
  .attr('fill', 'steelblue')
  .attr('r', 80)
  .style('opacity', 0.5)

select('text')
  .text('Bonjour')
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/modifying">d3-selection - Modifying</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute">MDN - setAttribute</a></div>

---
layout: four-cells
---

# Créer des éléments SVG

- Vanilla : `createElementNS` requis pour SVG (namespace)
- D3 : `.append()` gère le namespace automatiquement
- D3 : l'élément créé est directement chaînable

::result::

<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:130px;">
  <rect x="0" y="0" width="180" height="130" fill="#f5f5f5" rx="4"/>
  <circle cx="90" cy="65" r="50" fill="coral"/>
</svg>

::left::

**Vanilla JS**

```javascript
// script.js
const NS = 'http://www.w3.org/2000/svg'
const svg = document.querySelector('svg')

const circle = document.createElementNS(NS, 'circle')
circle.setAttribute('cx', 100)
circle.setAttribute('cy', 80)
circle.setAttribute('r', 50)
circle.setAttribute('fill', 'coral')

svg.appendChild(circle)
```

::right::

**D3**

```javascript
// script.js
import { select } from 'd3-selection'

select('svg')
  .append('circle')
  .attr('cx', 100)
  .attr('cy', 80)
  .attr('r', 50)
  .attr('fill', 'coral')
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/modifying">d3-selection - Modifying</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS">MDN - createElementNS</a></div>

---
layout: four-cells
---

# Événements

- `.addEventListener()` → `.on()`
- `select(this)` dans la callback pour récupérer l'élément
- Attention : `this` ne fonctionne pas avec les arrow functions

::result::

<svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:140px;">
  <circle
    cx="90" cy="65" r="45"
    fill="#e0e0e0" stroke="#000" stroke-width="1.5"
    style="cursor:pointer"
    onclick="this.setAttribute('fill','green')"
    onmouseover="this.style.opacity=0.5"
    onmouseout="this.style.opacity=1"
  />

</svg>

::left::

**Vanilla JS**

```javascript
// script.js
const cercle = document.querySelector('circle')

cercle.addEventListener('click', function(event) {
  cercle.setAttribute('fill', 'green')
})

cercle.addEventListener('mouseover', function(event) {
  cercle.style.opacity = 0.5
})

cercle.addEventListener('mouseout', function(event) {
  cercle.style.opacity = 1
})
```

::right::

**D3**

```javascript
// script.js
import { select } from 'd3-selection'

select('circle')
  .on('click', function(event) {
    select(this).attr('fill', 'green')
  })
  .on('mouseover', function(event) {
    select(this).style('opacity', 0.5)
  })
  .on('mouseout', function(event) {
    select(this).style('opacity', 1)
  })
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/events">d3-selection - Events</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">MDN - addEventListener</a></div>

---
layout: section
---

# Data binding

---
layout: two-cols
---

# Le problème : données → DOM

On veut générer **N éléments depuis un tableau de données** et les **mettre à jour** quand elles changent.

```javascript
// Vanilla JS
const data = [30, 80, 45, 60, 20]

data.forEach((d, i) => {
  const rect = document.createElementNS(NS, 'rect')
  rect.setAttribute('height', d * 2)
  svg.appendChild(rect)
})

// Si data change → forEach crée des DOUBLONS
// Il faudrait vider le SVG et tout recréer…
// …mais alors on perd le suivi de chaque élément
```

- Pour **créer** des éléments : ça fonctionne
- Pour **mettre à jour** ou **supprimer** : problème

::right::

<div class="col-center">
  <img src="/images/02-intro-d3/data-enter-update-exit.svg" alt="Enter Update Exit" style="width:100%;max-height:380px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection - Joining data</a></div>

---
layout: two-cols
---

# `.join()` - la solution

D3 **lie** les données aux éléments existants et gère les 3 cas automatiquement.

```javascript
import { select } from 'd3-selection'

function update(data) {
  select('svg')
    .selectAll('rect')
    .data(data)    // lie données ↔ éléments existants
    .join('rect')  // crée / met à jour / supprime
    .attr('x',      (d, i) => i * 60)
    .attr('height', d => d * 2)
}

update([30, 80, 45])          // → crée 3 rects
update([30, 80, 45, 60, 20])  // → crée 2 de plus
update([30, 80])              // → supprime 3
```

- Appelle `update()` avec n'importe quelle donnée - D3 fait le reste
- `.join('rect')` est le raccourci : il appelle `append` sur les nouvelles données, met à jour les existantes, supprime les orphelines

::right::

<div class="col-center" style="flex-direction:column; gap:0.75rem;">
  <img src="/images/02-intro-d3/data-join-example-1.svg" style="width:100%;max-height:190px;object-fit:contain;" />
  <img src="/images/02-intro-d3/data-join-example-3.svg" style="width:100%;max-height:150px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection - Joining data</a></div>

---
layout: two-cols
---

# Personnaliser le join

Pour contrôler chaque état séparément, `.join()` accepte **3 callbacks** :

```javascript
select('svg')
  .selectAll('rect')
  .data(data)
  .join(
    enter  => enter.append('rect')
                   .attr('fill', 'black'),  // nouveaux
    update => update.attr('fill', 'gray'),  // existants
    exit   => exit.remove()                 // supprimés
  )
  .attr('x',      (d, i) => i * 60)
  .attr('height', d => d * 2)
```

- **Enter** : nouvelles données sans élément → créer
- **Update** : données + élément existant → mettre à jour
- **Exit** : éléments sans données → supprimer

::right::

<div class="col-center" style="flex-direction:column; gap:0.75rem;">
  <img src="/images/02-intro-d3/data-enter-update-exit.svg" style="width:100%;max-height:190px;object-fit:contain;" />
  <img src="/images/02-intro-d3/data-enter-update-exit-letters.svg" style="width:100%;max-height:150px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection - Joining data</a></div>

---
layout: default
---

<BubbleChart />

---
layout: section
---

# Et ensuite ?

---
layout: default
---

# D3 va bien au-delà de la sélection

Ce qu'on vient de voir (`d3-selection`) est **une** façon de manipuler le DOM.

Les vrais « superpouvoirs » de D3 sont ses **modules mathématiques** - indépendants de d3-selection, utilisables avec n'importe quelle approche.

| Module | Rôle | Cours |
|---|---|---|
| `d3-scale` | Convertir données → pixels / couleurs | 05 |
| `d3-axis` | Générer des axes | 05 |
| `d3-shape` | Générateurs de chemins (line, area, arc) | 06 |
| `d3-fetch` | Charger des fichiers CSV, JSON | 04 |
| `d3-array` | Statistiques (mean, extent, group…) | 04 |

<div class="footer">Source · <a href="https://d3js.org/">d3js.org</a></div>

---
layout: section
---

# Exercice en classe

---
layout: default
---

# Observable - d3-selection

Ouvre le notebook et complète les exercices dans l'ordre.

**[observablehq.com/d/fdf49f03eec10be6](https://observablehq.com/d/fdf49f03eec10be6)**

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;">

<div class="border-box">

**1. Sélectionner, créer, modifier**

Crée un SVG, ajoute un cercle, puis un rectangle à côté.

</div>

<div class="border-box">

**2. Événements**

Gère `mouseover` / `mouseout` sur un cercle - est-il nécessaire de resélectionner l'élément ?

</div>

<div class="border-box">

**3. Joindre les données**

Visualise les 5 plus grandes villes suisses avec des cercles proportionnels à la population.

</div>

<div class="border-box">

**4. Mise à jour dynamique**

Observe le cycle `enter` / `update` / `exit` lors de la mise à jour des données toutes les 3 secondes.

</div>

</div>

---
layout: two-cols
---

# Projet

### Thématique — <span style="color:#c0392b">8 mars 23h59</span>

- Repo GitHub + `README.md` (contexte, description, but, références)

<br>

<div style="display:flex;justify-content:center;padding:0.5rem 0 0.25rem;">
  <a href="https://github.com/MediaComem/comem-visualdon/blob/main/projet/README.md" style="display:inline-flex;align-items:center;gap:0.45rem;font-family:'Roboto Mono',monospace;font-size:1rem;color:#555;text-decoration:none;letter-spacing:0.05em;"><carbon-logo-github style="font-size:1rem;" /> ↗ Directives complètes</a>
</div>

<br>

- <carbon-chat style="vertical-align:middle;margin-right:0.3rem;" /> Chat de groupe avec moi + membres + lien GitHub

::right::

<div class="col-center">
  <div style="border:1px solid #e0e0e0;padding:1.5rem 2rem;display:flex;flex-direction:column;align-items:center;gap:1rem;width:100%;">
    <p style="font-family:'Roboto Mono',monospace;font-size:1;color:#999;letter-spacing:0.12em;text-transform:uppercase;margin:0;">Exemples inspirants</p>
    <div style="display:flex;flex-direction:column;align-items:center;gap:0.65rem;width:100%;">
      <a href="https://pudding.cool" style="font-family:'Roboto Mono',monospace;font-size:0.75rem;color:#000;text-decoration:none;">The Pudding</a>
      <a href="https://flowingdata.com/category/projects/" style="font-family:'Roboto Mono',monospace;font-size:0.75rem;color:#000;text-decoration:none;">Flowing Data</a>
      <a href="https://www.dear-data.com" style="font-family:'Roboto Mono',monospace;font-size:0.75rem;color:#000;text-decoration:none;">Dear Data · Lupi & Posavec</a>
      <a href="https://truth-and-beauty.net" style="font-family:'Roboto Mono',monospace;font-size:0.75rem;color:#000;text-decoration:none;">Truth & Beauty · Posavec</a>
      <a href="https://ferdio.com" style="font-family:'Roboto Mono',monospace;font-size:0.75rem;color:#000;text-decoration:none;">Ferdio</a>
    </div>
  </div>
</div>

---
layout: default
---

# Exercices

[Github - comem-visualdon/exercices](https://github.com/MediaComem/comem-visualdon/tree/main/exercices)

---
layout: statement
---

# Semaine prochaine

Données : chargement, formats, manipulation

---
layout: end
---

# Merci !

VisualDon - HEIG-VD / COMEM+
