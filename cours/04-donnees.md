---
theme: default
title: "04 - Données"
download: true
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
codeCopy: false
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">04 - Données</h1>
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

# Cours précédent : JavaScript et manipulation DOM


- **DOM** : arbre d'objets que JavaScript peut lire et modifier
- `querySelector` / `querySelectorAll` : sélectionner des éléments
- `setAttribute`, `style` : modifier des attributs
- `createElementNS` + `appendChild` : créer des éléments SVG
- **D3-selection** : raccourci : même chose, syntaxe plus concise


<div class="footer">Rappel cours 03 · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">MDN DOM</a> · <a href="https://d3js.org/d3-selection">d3-selection</a></div>

---
layout: section
---

# Types de données

---
layout: two-cols
---

# Types de données


- **Qualitative** : décrit une qualité, une catégorie
  - *Nominale* : pas d'ordre naturel (couleurs, pays)
  - *Ordinale* : ordre naturel, intervalles non constants (S, M, L)
  - *Binaire* : deux catégories (oui/non, vrai/faux)
- **Quantitative** : mesure une quantité, un nombre
  - *Discrète* : valeurs entières (nombre d'élèves)
  - *Continue* : valeurs réelles (température, poids)



::right::

<div class="col-center" style="gap:0.75rem; ">
  <img src="/images/04-donnees/nominal_ordinal_binary.png" alt="Nominal / Ordinal / Binaire" style="width:100%; max-height: 200px;object-fit:contain;" />
  <img src="/images/04-donnees/continuous_discrete.png" alt="Continu / Discret" style="width:100%; max-height: 200px; object-fit:contain;" />
</div>

<div class="footer">Source images · Allison Horst <a href="https://allisonhorst.com/data-science-art"> Data Science illustrations </a></div>

---
layout: section
---

# Formats de données

---
layout: two-cols
---

# CSV : Comma-Separated Values


- Format texte, une ligne par enregistrement
- Première ligne = en-têtes (noms de colonnes)
- Valeurs séparées par des **virgules**
- Simple et universel : Excel, Google Sheets
- D3 : `d3.csv()` retourne un tableau d'objets


::right::

<div class="col-center">
  <img src="/images/04-donnees/csv.svg" alt="CSV" style="width:100%;max-height:380px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://datatracker.ietf.org/doc/html/rfc4180">RFC 4180 : CSV</a> · <a href="https://d3js.org/d3-dsv">d3-dsv</a></div>

---
layout: two-cols
---

# JSON : JavaScript Object Notation


- Format texte structuré, nativement JavaScript
- Types **préservés** : nombres, booléens, tableaux, objets
- Peut représenter des structures **imbriquées**
- Format standard pour les APIs web
- D3 : `d3.json()` retourne l'objet parsé directement


::right::

<div class="col-center">
  <img src="/images/04-donnees/json.svg" alt="JSON" style="width:100%;max-height:380px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://www.json.org">json.org</a> · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: two-cols
---

# TSV : Tab-Separated Values


- Comme CSV mais séparateur = **tabulation** `\t`
- Utile quand les données contiennent des virgules
- Mêmes conventions que CSV (en-têtes en première ligne)
- D3 : `d3.tsv()` : syntaxe identique à `d3.csv()`


::right::

<div class="col-center">
  <img src="/images/04-donnees/tsv.svg" alt="TSV" style="width:100%;max-height:380px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-dsv">d3-dsv</a></div>

---
layout: two-cols
---

# XML : eXtensible Markup Language


- Format de balisage : balises comme HTML
- Verbeux mais très expressif et auto-descriptif
- Utilisé dans certains exports OpenData / GIS
- Rarement utilisé directement en D3
- D3 : `d3.xml()` pour les cas particuliers


::right::

<div class="col-center">
  <img src="/images/04-donnees/xml.svg" alt="XML" style="width:100%;max-height:380px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction">MDN : XML</a></div>

---
layout: section
---

# Charger des données

---
layout: two-cols-header
---

# Charger un CSV

`csv()` charge, parse et retourne un **tableau d'objets** · Clés = colonnes · ⚠ Valeurs = **chaînes** par défaut → convertir avec `+`

::left::

**Vanilla JS**

```javascript
const res = await fetch("data/cities.csv")
const text = await res.text()

const [header, ...rows] = text.trim().split("\n")
const keys = header.split(",")

const data = rows.map(row =>
  Object.fromEntries(
    row.split(",").map((v, i) => [keys[i], v])
  )
)
// [{ city: "Zurich", population: "421878" }, ...]
```

::right::

**D3**

```javascript
import { csv } from "d3-fetch"

const data = await csv("data/cities.csv", d => ({
  city: d.city,
  population: +d.population,
  area: +d.area
}))
// [{ city: "Zurich", population: 421878, area: 87.88 }, ...]
```

<div class="footer">Source · <a href="https://d3js.org/d3-fetch">d3-fetch</a> · <a href="https://datatracker.ietf.org/doc/html/rfc4180">RFC 4180</a></div>

---
layout: two-cols-header
---

# Charger du JSON

`json()` est un wrapper autour de `fetch` · Les types sont **préservés** (nombres, booléens, tableaux) · Idéal pour les APIs web

::left::

**Vanilla JS**

```javascript
const response = await fetch("data/cities.json")
const data = await response.json()

// [{ city: "Zurich", population: 421878 }, ...]
```

::right::

**D3**

```javascript
import { json } from "d3-fetch"

const data = await json("data/cities.json")

// [{ city: "Zurich", population: 421878 }, ...]
```

<div class="footer">Source · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: two-cols
---

# Import statique — Vite DSV

Plugin `@rollup/plugin-dsv` : le CSV est importé **comme module JS** et parsé à la compilation — pas de requête réseau, pas d'`await`.

```bash
npm install @rollup/plugin-dsv
```

```javascript
// vite.config.js
import dsv from '@rollup/plugin-dsv'
export default { plugins: [dsv()] }
```

```javascript
// script.js — synchrone, disponible immédiatement
import data from './data/cities.csv'
// [{ city: "Zurich", population: "421878" }]
// ⚠ Valeurs = chaînes (pas d'accesseur possible)
```

::right::

**vs Runtime — `fetch`**

```javascript
import { csv } from "d3-fetch"

// Requête réseau, chargé au runtime
const data = await csv("data/cities.csv", d => ({
  city: d.city,
  population: +d.population
}))
```

- Données **dynamiques** (URLs, APIs)
- Types **convertibles** via accesseur
- Requiert `await`

<div class="footer">Source · <a href="https://github.com/rollup/plugins/tree/master/packages/dsv">@rollup/plugin-dsv</a> · <a href="https://vitejs.dev/">vitejs.dev</a></div>

---
layout: section
---

# Manipuler des données

---
layout: two-cols
---

# d3-array

```bash
npm install d3-array
```

```javascript
import { max, min, sum, extent, mean } from "d3-array"
```



::right::


- Fonctions statistiques optimisées pour les données
- Travaille avec des tableaux et des **accesseurs**
- Compatible avec les données chargées via d3-fetch



<div class="footer">Source · <a href="https://d3js.org/d3-array">d3-array</a></div>

---
layout: two-cols
---

# Statistiques avec d3-array

```javascript
import { max, min, sum, extent, mean } from "d3-array"

const data = [10, 25, 30, 45, 50, 15, 35]

max(data)    // 50
min(data)    // 10
sum(data)    // 210
mean(data)   // 30
extent(data) // [10, 50]

// Avec un accesseur
const cities = [{ name: "A", pop: 100 }, { name: "B", pop: 200 }]
max(cities, d => d.pop)     // 200
extent(cities, d => d.pop)  // [100, 200]
```

::right::


- `max(data, accessor)` : valeur maximale
- `min(data, accessor)` : valeur minimale
- `sum(data, accessor)` : somme des valeurs
- `mean(data, accessor)` : moyenne arithmétique
- `extent(data, accessor)` : retourne `[min, max]`
- L'accesseur est **optionnel** pour les tableaux de nombres


<div class="footer">Source · <a href="https://d3js.org/d3-array">d3-array</a></div>

---
layout: two-cols
---

# Array.map() : transformer

Créer un nouveau tableau en transformant chaque élément.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Genève",   population: 200000 }
]

const names = data.map(d => d.name)
// ["Lausanne", "Genève"]

const enriched = data.map(d => ({
  ...d,
  label: `${d.name} (${d.population})`
}))
```

::right::


- `map` retourne un **nouveau** tableau (sans mutation)
- La fonction reçoit chaque élément `d` et son index `i`
- Utile pour extraire, renommer ou enrichir des champs



<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN : Array.map()</a></div>

---
layout: two-cols
---

# Array.filter() : filtrer

Créer un nouveau tableau avec les éléments qui passent un test.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Yverdon",  population:  30000 },
  { name: "Genève",   population: 200000 }
]

const grandes = data.filter(d => d.population > 100000)
// [{ name: "Lausanne", ... }, { name: "Genève", ... }]

const words = ["spray", "limit", "elite", "exuberant"]
const longs = words.filter(w => w.length > 5)
// ["exuberant"]
```

::right::


- `filter` retourne un **nouveau** tableau (sans mutation)
- La fonction reçoit chaque élément et retourne `true` ou `false`
- Peut être chaîné avec `map` : `data.filter(...).map(...)`



<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">MDN : Array.filter()</a></div>

---
layout: two-cols
---

# Array.includes() : vérifier

Vérifier si un tableau contient une valeur spécifiée.

```javascript
const array1 = [1, 2, 3]
array1.includes(2)  // true
array1.includes(4)  // false

const pets = ["cat", "dog", "bat"]
pets.includes("cat")  // true
pets.includes("at")   // false

// Utilisation typique : filtrer par liste
const selected = ["Lausanne", "Genève"]
data.filter(d => selected.includes(d.name))
```

::right::


- `includes(value)` : retourne `true` ou `false`
- Comparaison **stricte** (`===`)
- Très utile combiné avec `filter` pour les sélections multiples



<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">MDN : Array.includes()</a></div>

---
layout: two-cols
---

# Array.reduce() : agréger

Réduire un tableau à une seule valeur en accumulant un résultat.

```javascript
const data = [10, 20, 30, 40, 50]

const total = data.reduce((acc, d) => acc + d, 0)
// 150

// Compter les occurrences
const fruits = ["pomme", "banane", "pomme", "orange", "banane", "pomme"]
const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})
// { pomme: 3, banane: 2, orange: 1 }
```

::right::


- `reduce(callback, initialValue)` : accumule une valeur
- `acc` : accumulateur, `d` : élément courant
- Le 2e argument est la **valeur initiale** de l'accumulateur
- Utile pour les sommes, regroupements, comptages



<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">MDN : Array.reduce()</a></div>

---
layout: two-cols
---

# Array.forEach() : itérer

Exécuter une fonction sur chaque élément du tableau.

```javascript
const array1 = ["a", "b", "c"]

array1.forEach(element => console.log(element))
// "a"
// "b"
// "c"

// Utilisation typique : effets de bord
data.forEach(d => {
  select(`#city-${d.name}`)
    .attr("r", d.pop / 5000)
})
```

::right::


- `forEach` exécute la fonction pour chaque élément
- Ne retourne **rien** (contrairement à `map`)
- Utile pour les effets de bord (DOM, log, mutations externes)
- Préférer `map` quand on veut transformer en nouveau tableau


<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">MDN : Array.forEach()</a></div>

---
layout: two-cols
---

# Array.sort() : trier

Trier un tableau en place.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Yverdon",  population:  30000 },
  { name: "Genève",   population: 200000 }
]

// Tri croissant par population
data.sort((a, b) => a.population - b.population)

// Tri décroissant par population
data.sort((a, b) => b.population - a.population)

// Tri alphabétique
data.sort((a, b) => a.name.localeCompare(b.name))
```

::right::


- `sort` modifie le tableau **en place** (mutation)
- La fonction de comparaison retourne un nombre négatif, zéro ou positif
- `a - b` : ordre croissant · `b - a` : ordre décroissant
- Pour éviter la mutation : `[...data].sort(...)`



<div class="footer">Source · <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">MDN : Array.sort()</a></div>

---
layout: section
---

# Data binding

---
layout: two-cols
---

# `selection.data().join()`

**Data binding** : lier un tableau de données à des éléments du DOM.

```javascript
import { select } from 'd3-selection'

const data = [10, 30, 50, 20, 40]

select('svg')
  .selectAll('circle')
  .data(data)
  .join('circle')
    .attr('r',  d => d)
    .attr('cx', (d, i) => i * 60 + 40)
    .attr('cy', 60)
    .attr('fill', 'steelblue')
```

::right::


- `selectAll` : sélection (vide ou non) des éléments cibles
- `.data(data)` : associe chaque valeur à un élément DOM
- `.join('circle')` : crée les éléments manquants, supprime les excédents
- `d` = la donnée liée, `i` = l'index



<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection - Joining data</a></div>

---
layout: two-cols
---

# Enter / Update / Exit

Quand les données changent, D3 distingue trois cas :


- **Enter** : données sans élément DOM → **créer**
- **Update** : données avec élément existant → **modifier**
- **Exit** : éléments sans donnée → **supprimer**



```javascript
const sel = select('svg').selectAll('circle').data(data)

sel.join(
  enter  => enter.append('circle').attr('fill', 'steelblue'),
  update => update.attr('fill', 'orange'),
  exit   => exit.remove()
)
```


::right::

<div class="col-center">
  <img src="/images/04-donnees/data-enter-update-exit-letters.svg" alt="Enter / Update / Exit" style="width:100%;max-height:360px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://d3js.org/d3-selection/joining">d3-selection - Joining data</a></div>

---
layout: default
---

<BubbleChart />


---
layout: section
---

# Exercice en classe

---
layout: default
---

# Observable — d3-fetch & d3-array

Ouvre le notebook et complète les exercices dans l'ordre.

**[observablehq.com/d/c6452b640ad09152](https://observablehq.com/d/c6452b640ad09152)**

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;">

<div class="border-box">

**0. Mise à jour dynamique** _(cours précédent)_

Si tu n'as pas terminé la question 4 du notebook précédent, commence par là : observe le cycle `enter` / `update` / `exit`.

</div>

<div class="border-box">

**1. Station la plus à l'ouest**

Trouve la station de mobilité partagée la plus à l'ouest dans le jeu de données.

</div>

<div class="border-box">

**2. Partenaire avec le plus de véhicules**

Trouve le partenaire qui opère le plus grand nombre de véhicules dans la zone filtrée.

</div>

<div class="border-box">

**3. Labels sur le bar chart**

Rajoute un `<text>` au-dessus de chaque rectangle affichant le nombre de véhicules.

</div>

</div>

---
layout: two-cols
---

# Projet

### Wireframe : <span style="color:#c0392b">22 mars 23h59</span>

Faites un croquis de votre visualisation : sur papier ou avec un outil comme **Figma** :

- **Tous les éléments** : graphiques, boutons, textes, couleurs prévus
- **L'interactivité** : si je clique, que se passe-t-il ? Si je scroll, quoi apparaît ?
- Rajouter le croquis dans votre **README.md**

<br>

> Ce n'est pas grave si tout ne se retrouve pas dans le produit final : cette étape est là pour stimuler votre créativité

::right::

<div class="col-center" style="gap:0.75rem;">
  <img src="/images/04-donnees/sketch1.jpg" alt="Exemple croquis papier" style="width:100%;border-radius:4px;object-fit:cover;max-height:200px;" />
  <img src="/images/04-donnees/figma.png" alt="Exemple wireframe Figma" style="width:100%;border-radius:4px;object-fit:contain;max-height:100px;" />
</div>

<div class="footer">Source · <a href="https://github.com/MediaComem/comem-visualdon/blob/main/projet/README.md">Directives projet</a> · <a href="https://www.figma.com/">figma.com</a></div>

---
layout: statement
---

# Semaine prochaine

Échelles et axes

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
