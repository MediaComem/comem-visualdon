# Corrigé | Examen type 3

---

## Partie 1 | QCM

| Q | Réponse | Justification courte |
|---|---------|----------------------|
| 1 | **A** | `x/y` = coin supérieur gauche, `width/height` = dimensions |
| 2 | **B** | `d` = la valeur de la donnée liée à l'élément |
| 3 | **C** | `d3.extent` retourne `[min, max]` |
| 4 | **B** | CSV retourne tout en string ; `+` convertit en nombre |
| 5 | **B** | `scaleLinear` = continu, `scaleBand` = catégories discrètes |
| 6 | **B** | `.join()` gère enter/update/exit automatiquement |
| 7 | **B** | Arrow function capture `this` du contexte parent |
| 8 | **A** | `filter(d => d > 7)` garde 12, 8, 20 |
| 9 | **B** | GeoJSON : `[longitude, latitude]` |
| 10 | **B** | Choroplèthe = couleur de zone ; cercles proportionnels = taille de symbole |

---

## Partie 2 | D3.js

| Q | Réponse | Justification si faux |
|---|---------|----------------------|
| 1 | **Faux** | France : 68.4 × 5 = 342px ; Allemagne : 84.1 × 5 = 420.5px → l'Allemagne a la barre la plus large |
| 2 | **Vrai** | — |
| 3 | **Faux** | `.join("g")` gère automatiquement la suppression (exit) : le groupe correspondant est retiré du DOM sans erreur |
| 4 | **Vrai** | — |
| 5 | **Faux** | `d3.max` retourne la valeur maximale du tableau, soit `310` (Voiture), pas 203 (Moto) |
| 6 | **Vrai** | — |
| 7 | **Vrai** | — |
| 8 | **Faux** | `padding` représente la fraction de l'espace réservée aux écarts entre barres ; augmenter le padding rend les barres plus **fines**, pas plus larges |
| 9 | **Vrai** | — |
| 10 | **Vrai** | — |
| 11 | **Faux** | `filter` retourne uniquement les entrées dont `annee >= 2020` ; ce n'est pas un tri, c'est un filtre (sous-ensemble) |
| 12 | **Faux** | `totalParVille` est un **objet** (pas un tableau) avec les noms de villes comme clés : `{ "Lausanne": 4200, "Genève": 3800, ... }` |
| 13 | **Vrai** | — |
| 14 | **Faux** | `.transition().duration(150)` produit une animation de 150ms ; la couleur change progressivement, pas instantanément |
| 15 | **Vrai** | — |
| 16 | **Faux** | Avec une arrow function, `this` pointe sur le contexte parent (pas la barre survolée) ; `d3.select(this)` ne ciblerait plus le bon élément |
| 17 | **Vrai** | — |
| 18 | **Faux** | `duration(1000)` = 1 seconde → la transition est plus **lente** (150ms → 1000ms), pas plus rapide |

---

## Partie 3 | Cartographie

### 3.1 Projections

**a)** Une projection est une transformation mathématique qui convertit des coordonnées sphériques (longitude, latitude) en coordonnées planes (x, y). La Terre est une sphère à courbure non nulle : toute mise à plat déforme nécessairement les surfaces, les angles ou les distances | on ne peut pas tout préserver simultanément.

**b)**
- **Densité de population** → Equal-Area : les surfaces des pays sont respectées, la comparaison visuelle est honnête.
- **Navigation maritime** → Mercator : elle préserve les angles, essentielle pour tracer des routes.
- **Infographie grand public** → Natural Earth : compromis équilibré, visuellement familier et agréable, sans trop déformer ni les surfaces ni les formes.

**c)** `[8.2, 46.8]` = `[longitude, latitude]`. La longitude (axe est-ouest) est toujours en premier dans GeoJSON et D3, la latitude (axe nord-sud) en second. Ces coordonnées correspondent approximativement au centre géographique de la Suisse.

---

### 3.2 GeoJSON

**a)** GeoJSON est un format JSON standard pour représenter des données géographiques. Trois types :
- `Point` : coordonnée unique | ex. position d'une station météo
- `LineString` : suite de points reliés | ex. tracé d'une route ou d'une rivière
- `Polygon` : surface fermée | ex. frontière d'un pays ou d'un canton

**b)**
```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [6.63, 46.52]
  },
  "properties": {
    "nom": "Riponne",
    "velos_disponibles": 8
  }
}
```

**c)** Il inverse longitude et latitude. Le point sera placé quelque part en mer Caspienne (lon=46.52, lat=6.63) au lieu de Lausanne. La carte affichera le point au mauvais endroit, sans message d'erreur.

---

### 3.3 Types de cartes et choix de représentation

**a)**
- **Choroplèthe** : chaque canton est coloré selon une échelle de couleurs proportionnelle au taux de chômage.
- **Cercles proportionnels** : un cercle est placé sur chaque canton, dont la taille est proportionnelle à la valeur.
- Pour le **taux de chômage**, la choroplèthe est plus appropriée : c'est une valeur relative (%) qui s'applique à toute la surface du canton. Les cercles proportionnels conviennent mieux aux valeurs absolues (nombre de chômeurs), pour éviter de favoriser visuellement les grands cantons.

**b)** Zurich et Genève sont les cantons les plus peuplés | ils ont mécaniquement plus de crimes en valeur absolue. La carte reflète la population, pas la dangerosité. Correction : utiliser le taux de criminalité (crimes pour 1 000 habitants).

**c)** Les trajectoires sont des lignes → géométrie `LineString`. On proposerait une **carte de flux** ou simplement une carte avec des lignes tracées sur fond géographique, une couleur ou épaisseur variant selon l'intensité ou la période.

---

## Partie 4 | Éthique et biais

### 4.1

**a)** Biais d'axe tronqué : la progression de 52 000 abonnés semble énorme visuellement. Correction : axe Y commençant à 0, ou annotation explicite du zoom.

**b)** Biais de valeurs absolues : les grands pays dépensent plus en valeur absolue mécaniquement. Correction : ramener au PIB (% du PIB consacré à la santé) ou à la dépense par habitant.

**c)** Cherry-picking et biais de mise en page : l'auteur manipule l'ordre et les couleurs pour influencer la perception. Correction : présenter tous les jeux de données avec une mise en forme uniforme et un ordre neutre.

---

### 4.2

**a)** Un **scatter plot** (nuage de points) : il permet de visualiser directement la corrélation entre deux variables continues pour de nombreux pays, avec un point par pays.

**b)** Biais dans les **données** : les données collectées sont biaisées (ex. sondage ne représentant pas certains groupes). Biais dans la **représentation** : les données sont correctes mais la visualisation les déforme (ex. axe tronqué, mauvais type de graphique).

**c)** Si le rayon est proportionnel à la valeur, la surface (πr²) croît au carré : une valeur deux fois plus grande produit une bulle quatre fois plus grande visuellement. L'œil perçoit les surfaces, pas les rayons | les différences sont fortement exagérées.
