---
theme: none
title: "04 - Données"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 04 -- Données

Chargement, formats, manipulation

---
layout: section
---

# Rappel

---
layout: default
---

# Cours précédent : D3.js

<v-clicks>

- Method chaining : enchainer les appels de méthodes
- `d3.select()` / `d3.selectAll()` : sélectionner des elements
- `selection.attr()` : modifier des attributs
- `selection.append()` : créer des elements
- `selection.on()` : ecouter des événements
- `selection.data().join()` : lier des données au DOM (enter, update, exit)

</v-clicks>

<div class="footer">Rappel cours 03 · <a href="https://d3js.org/d3-selection">d3-selection</a></div>

---
layout: section
---

# Types de données

---
layout: default
---

# Classification des données

| Categorie | Type | Exemples |
|-----------|------|----------|
| **Qualitative** | Nominal | Couleurs, pays, catégories |
| **Qualitative** | Ordinal | Taille (S, M, L), satisfaction (1-5) |
| **Quantitative** | Discret | Nombre d'enfants, nombre de votes |
| **Quantitative** | Continu | Température, poids, revenus |

<v-clicks>

- **Qualitative** : decrit une qualite, une categorie
- **Quantitative** : mesure une quantite, un nombre
- **Nominal** : pas d'ordre naturel entre les valeurs
- **Ordinal** : ordre naturel mais intervalles non constants
- Le type de données influence le choix de la visualisation

</v-clicks>

<div class="footer">Source · Stevens, <em>On the Theory of Scales of Measurement</em> (1946)</div>

---
layout: section
---

# Charger des données

---
layout: default
---

# d3-fetch

```bash
npm install d3-fetch
```

```javascript
import { csv, json } from "d3-fetch"
```

Reference : [d3js.org/d3-fetch](https://d3js.org/d3-fetch)

<v-clicks>

- Module D3 pour charger des fichiers de données
- Supporte CSV, TSV, JSON, XML, texte, images
- Retourne une **Promise** (utiliser `await` ou `.then()`)
- Basé sur l'API `fetch` du navigateur

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: default
---

# Charger un fichier CSV

```javascript
import { csv } from "d3-fetch"

// Avec async/await
const data = await csv("data/population.csv")
console.log(data)
// [{ name: "Lausanne", population: "140000" }, ...]

// Avec une fonction d'accesseur (type conversion)
const data = await csv("data/population.csv", d => ({
  name: d.name,
  population: +d.population  // conversion en nombre
}))
```

<v-clicks>

- `d3.csv(url)` : charge et parse un fichier CSV
- Retourne un tableau d'objets (cle = nom de colonne)
- **Attention** : toutes les valeurs sont des **chaines** par defaut
- Utiliser un accesseur ou `+` pour convertir en nombre

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: default
---

# Charger du JSON

```javascript
import { json } from "d3-fetch"

// Avec d3-fetch
const data = await json("data/cities.json")

// Avec l'API fetch native
const response = await fetch("data/cities.json")
const data = await response.json()
```

```json
[
  { "name": "Lausanne", "population": 140000, "lat": 46.52 },
  { "name": "Geneve", "population": 200000, "lat": 46.20 }
]
```

<v-clicks>

- `d3.json(url)` : charge et parse un fichier JSON
- Les types sont **preserves** (nombres, booleens, tableaux)
- Alternative : l'API `fetch` native du navigateur
- JSON est le format le plus courant pour les APIs web

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-fetch">d3-fetch</a></div>

---
layout: section
---

# Manipuler des données

---
layout: default
---

# d3-array

```bash
npm install d3-array
```

```javascript
import { max, min, sum, extent, mean } from "d3-array"
```

Reference : [d3js.org/d3-array](https://d3js.org/d3-array)

<div class="footer">Source · <a href="https://d3js.org/d3-array">d3-array</a></div>

---
layout: default
---

# Statistiques avec d3-array

```javascript
const data = [10, 25, 30, 45, 50, 15, 35]

max(data)              // 50
min(data)              // 10
sum(data)              // 210
mean(data)             // 30
extent(data)           // [10, 50]

// Avec un accesseur
const cities = [{ name: "A", pop: 100 }, { name: "B", pop: 200 }]
max(cities, d => d.pop)     // 200
extent(cities, d => d.pop)  // [100, 200]
```

<v-clicks>

- `max(data, accessor)` : valeur maximale
- `min(data, accessor)` : valeur minimale
- `sum(data, accessor)` : somme des valeurs
- `mean(data, accessor)` : moyenne arithmetique
- `extent(data, accessor)` : retourne `[min, max]`

</v-clicks>

<div class="footer">Source · <a href="https://d3js.org/d3-array">d3-array</a></div>

---
layout: default
---

# Array.map() -- transformer

Créer un nouveau tableau en transformant chaque element.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Geneve", population: 200000 }
]

const names = data.map(d => d.name)
// ["Lausanne", "Geneve"]

const enriched = data.map(d => ({
  ...d,
  label: `${d.name} (${d.population})`
}))
```

<v-clicks>

- `map` retourne un **nouveau** tableau (pas de mutation)
- La fonction recoit chaque élément `d` et son index `i`
- Utile pour extraire, renommer ou enrichir des champs

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN — Array.map()</a></div>

---
layout: default
---

# Array.filter() -- filtrer

Créer un nouveau tableau avec les éléments qui passent un test.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Yverdon", population: 30000 },
  { name: "Geneve", population: 200000 }
]

const grandes = data.filter(d => d.population > 100000)
// [{ name: "Lausanne", ... }, { name: "Geneve", ... }]
```

<v-clicks>

- `filter` retourne un **nouveau** tableau (pas de mutation)
- La fonction recoit chaque élément et doit retourner `true` ou `false`
- Peut etre chaine avec `map` : `data.filter(...).map(...)`

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">MDN — Array.filter()</a></div>

---
layout: default
---

# Array.reduce() -- agreger

Reduire un tableau a une seule valeur en accumulant un resultat.

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

<v-clicks>

- `reduce(callback, initialValue)` : accumule une valeur
- `acc` : accumulateur, `d` : élément courant
- Le deuxième argument est la **valeur initiale** de l'accumulateur
- Utile pour les sommes, les regroupements, les comptages

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">MDN — Array.reduce()</a></div>

---
layout: default
---

# Array.sort() -- trier

Trier un tableau en place.

```javascript
const data = [
  { name: "Lausanne", population: 140000 },
  { name: "Yverdon", population: 30000 },
  { name: "Geneve", population: 200000 }
]

// Tri croissant par population
data.sort((a, b) => a.population - b.population)

// Tri decroissant par population
data.sort((a, b) => b.population - a.population)

// Tri alphabetique
data.sort((a, b) => a.name.localeCompare(b.name))
```

<v-clicks>

- `sort` modifie le tableau **en place** (mutation)
- La fonction de comparaison retourne un nombre negatif, zero ou positif
- `a - b` : ordre croissant
- `b - a` : ordre decroissant
- Pour eviter la mutation : `[...data].sort(...)`

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">MDN — Array.sort()</a></div>

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
