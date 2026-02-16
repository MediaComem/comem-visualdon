---
theme: none
title: "03 - Introduction a D3.js"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 03 -- Introduction a D3.js

Données et DOM

---
layout: section
---

# Rappel

---
layout: default
---

# Cours précédent : SVG

<v-clicks>

- Formes de base : `<rect>`, `<circle>`, `<line>`, `<ellipse>`, `<polygon>`
- Chemins : `<path>` avec les commandes `M`, `L`, `H`, `V`, `C`, `Z`
- Texte : `<text>` avec `text-anchor` et `dominant-baseline`
- Groupes : `<g>` pour organiser et heriter des attributs
- Transformations : `translate`, `rotate`, `scale`
- Animations : SMIL natif ou CSS

</v-clicks>

<div class="footer">Rappel cours 02 · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG</a></div>

---
layout: section
---

# D3.js

---
layout: default
---

# Qu'est-ce que D3.js ?

**Data-Driven Documents**

<v-clicks>

- Bibliotheque JavaScript pour manipuler des documents a partir de **données**
- Lie des données a des éléments du **DOM**
- Produit des visualisations en **SVG**, **HTML** ou **Canvas**
- Ne fournit pas de graphiques preconstruits : c'est une boite a outils
- Creee par **Mike Bostock** (2011), maintenue par **Observable**

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/">d3js.org</a> · Mike Bostock (2011)</div>

---
layout: default
---

# Documentation

<v-clicks>

- Site officiel : [d3js.org](https://d3js.org/)
- Reference API : [d3js.org/d3-selection](https://d3js.org/d3-selection)
- Exemples : [observablehq.com/@d3](https://observablehq.com/@d3)
- D3 est **modulaire** : chaque fonctionnalité est un module independant

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/">d3js.org</a> · <a href="https://observablehq.com/@d3">Observable @d3</a></div>

---
layout: default
---

# Method chaining

D3 utilisé le chainage de méthodes : chaque méthode retourne la selection, ce qui permet d'enchainer les appels.

```javascript
d3.select("svg")
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "black")
```

<v-clicks>

- Chaque méthode retourne la **selection** courante
- Permet d'ecrire du code **lisible** et **compact**
- Similaire a jQuery dans sa philosophie

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection">d3-selection</a></div>

---
layout: section
---

# d3-selection

---
layout: default
---

# Installation

```bash
npm install d3-selection
```

```javascript
import { select, selectAll } from "d3-selection"
```

Reference : [d3js.org/d3-selection](https://d3js.org/d3-selection)

<div class="footer">Source · <a href="https://d3js.org/d3-selection">d3-selection</a></div>

---
layout: default
---

# Sélectionner des elements

```javascript
// Sélectionner le premier élément correspondant
d3.select("circle")        // par type
d3.select(".bar")          // par classe
d3.select("#chart")        // par ID

// Sélectionner tous les éléments correspondants
d3.selectAll("rect")       // tous les rectangles
d3.selectAll(".data-point") // tous les .data-point
```

<v-clicks>

- `d3.select()` retourne le **premier** élément trouve
- `d3.selectAll()` retourne **tous** les éléments correspondants
- Utilise les memes sélecteurs CSS que `document.querySelector`
- Retourne une **sélection D3** (pas un élément DOM natif)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/selecting">d3-selection — Selecting</a></div>

---
layout: default
---

# Modifier des elements

```javascript
// Modifier un attribut
d3.select("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "black")

// Modifier un style CSS
d3.select("rect")
  .style("opacity", 0.5)

// Modifier le contenu texte
d3.select("text")
  .text("Nouvelle valeur")
```

<v-clicks>

- `selection.attr(name, value)` : définit un attribut SVG/HTML
- `selection.style(name, value)` : définit un style CSS inline
- `selection.text(value)` : définit le contenu textuel
- `selection.html(value)` : définit le contenu HTML

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/modifying">d3-selection — Modifying</a></div>

---
layout: default
---

# Créer des elements

```javascript
// Ajouter un élément enfant
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300)

// Ajouter un cercle dans le SVG
svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 150)
  .attr("r", 50)
  .attr("fill", "black")
```

<v-clicks>

- `selection.append(element)` : ajoute un élément enfant a la fin
- `selection.insert(element, before)` : insere avant un élément existant
- `selection.remove()` : supprime les éléments sélectionnes
- `append` retourne la **nouvelle** sélection (l'element cree)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/modifying">d3-selection — Modifying</a></div>

---
layout: default
---

# Événements

```javascript
d3.select("circle")
  .on("click", function(event, d) {
    console.log("Clique !", d)
  })
  .on("mouseover", function(event, d) {
    d3.select(this).attr("fill", "gray")
  })
  .on("mouseout", function(event, d) {
    d3.select(this).attr("fill", "black")
  })
```

<v-clicks>

- `selection.on(eventType, callback)` : attache un ecouteur
- Types courants : `click`, `mouseover`, `mouseout`, `mousemove`, `mouseenter`, `mouseleave`
- Le callback recoit `event` (événement DOM) et `d` (donnee liee)
- `this` fait reference a l'element DOM (pas avec les arrow functions)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/events">d3-selection — Events</a></div>

---
layout: section
---

# Data binding

---
layout: default
---

# Lier des données aux elements

```javascript
const data = [10, 20, 30, 40, 50]

d3.selectAll("rect")
  .data(data)
```

<v-clicks>

- `selection.data(arrayData)` lie un tableau de données aux éléments sélectionnes
- Chaque élément du DOM est associe a un élément du tableau
- Optionnel : `selection.data(data, keyFunction)` pour définir une clé d'identification
- Apres `.data()`, on peut acceder a la donnee via le parametre `d` dans les callbacks

</v-clicks>

```javascript
d3.selectAll("rect")
  .data(data)
  .attr("width", d => d * 10)  // d = la donnee liee
  .attr("fill", d => d > 30 ? "black" : "gray")
```

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection — Joining Data</a></div>

---
layout: default
---

# Enter, Update, Exit

Le pattern `join` (D3 v6+) gere les trois cas :

```javascript
const data = [10, 20, 30, 40, 50]

d3.select("svg")
  .selectAll("rect")
  .data(data)
  .join(
    enter => enter.append("rect")
      .attr("fill", "black"),
    update => update
      .attr("fill", "gray"),
    exit => exit.remove()
  )
  .attr("x", (d, i) => i * 60)
  .attr("y", d => 300 - d * 5)
  .attr("width", 50)
  .attr("height", d => d * 5)
```

<v-clicks>

- **Enter** : données sans élément DOM correspondant (creation)
- **Update** : données avec un élément existant (mise a jour)
- **Exit** : éléments sans donnee correspondante (suppression)

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection — Joining Data</a></div>

---
layout: default
---

# Comparaison D3 vs Observable Plot

| Critere | D3.js | Observable Plot |
|---------|-------|-----------------|
| Lignes de code | ~50 pour un bar chart | ~10 |
| Contrôle | Total | Limite |
| Courbe d'apprentissage | Raide | Douce |
| Usage | Production, cas complexes | Prototypage, exploration |

<v-click>

<div class="mt-4 text-sm">

**Conseil** : Apprenez D3 pour comprendre les fondamentaux. Utilisez Plot pour aller vite.

</div>

</v-click>

<div class="footer">Source · <a href="https://d3js.org/">D3.js</a> · <a href="https://observablehq.com/plot/">Observable Plot</a></div>

---
layout: two-cols
---

# Ressources D3

### Documentation

- [D3.js Official](https://d3js.org/)
- [D3 Graph Gallery](https://d3-graph-gallery.com/)
- [Observable D3](https://observablehq.com/collection/@d3/learn-d3)

::right::

<div class="mt-12">

### Livres

- Murray, S. *Interactive Data Visualization for the Web* (2nd ed)
- Meeks, E. *D3.js in Action*

</div>

<div class="footer">Source · <a href="https://d3js.org/">d3js.org</a> · <a href="https://d3-graph-gallery.com/">D3 Graph Gallery</a></div>

---
layout: statement
---

# Semaine prochaine

Données : chargement, formats, manipulation

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
