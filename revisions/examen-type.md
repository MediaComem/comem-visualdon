# Examen type / Visualisation de données (VisualDon)

* **Durée** : 2h, sur papier
* **Documents autorisés** : formulaire A4 recto verso manuscrit ou sur ordinateur



---

## Partie 1 | QCM (20 pts | 2 pts par question)

**Une seule bonne réponse par question. Aucune justification requise.**

---

**Q1.** Que dessine ce code SVG ?
```svg
<rect x="20" y="40" width="60" height="60" fill="orange" stroke="black" stroke-width="2"/>
```
- [ ] A) Un rectangle orange de 60×60px avec contour noir, coin supérieur gauche à (20, 40)
- [ ] B) Un rectangle orange de 60×60px centré en (20, 40)
- [ ] C) Un carré noir de 60px de côté
- [ ] D) Une erreur : un carré doit utiliser `<square>` en SVG

---

**Q2.** Que vaut `d` dans ce code D3 ?
```javascript
svg.selectAll("rect").data([5, 15, 25]).join("rect").attr("width", d => d * 2)
```
- [ ] A) L'index de l'élément (0, 1 ou 2)
- [ ] B) La valeur du tableau liée à l'élément (5, 15 ou 25)
- [ ] C) Le tableau entier `[5, 15, 25]`
- [ ] D) L'élément SVG `<rect>`

---

**Q3.** Que retourne `d3.extent([3, 8, 1, 6, 2])` ?
- [ ] A) `8`
- [ ] B) `4` (la moyenne)
- [ ] C) `[1, 8]`
- [ ] D) `[3, 8, 1, 6, 2]`

---

**Q4.** Pourquoi écrit-on `+d.population` après un `d3.csv()` ?
- [ ] A) Pour arrondir la valeur à l'entier le plus proche
- [ ] B) Pour convertir la chaîne de caractères en nombre, car CSV retourne tout en string
- [ ] C) Pour s'assurer que la valeur est positive
- [ ] D) C'est une syntaxe propre à D3, sans équivalent en JavaScript standard

---

**Q5.** Quelle est la différence entre `scaleLinear` et `scaleBand` ?
- [ ] A) `scaleLinear` est pour les couleurs, `scaleBand` pour les tailles
- [ ] B) `scaleLinear` mappe des valeurs continues, `scaleBand` divise l'espace en catégories discrètes
- [ ] C) `scaleBand` est plus précise que `scaleLinear`
- [ ] D) Il n'y a aucune différence fonctionnelle

---

**Q6.** Que fait `.join("circle")` dans une sélection D3 ?
- [ ] A) Fusionne tous les cercles en un seul élément
- [ ] B) Crée les cercles manquants, met à jour les existants, supprime les superflus
- [ ] C) Sélectionne uniquement les cercles déjà présents dans le DOM
- [ ] D) Ajoute un cercle à la fin de la sélection

---

**Q7.** Pourquoi utilise-t-on `function(event, d)` plutôt que `(event, d) =>` dans un handler D3 ?
- [ ] A) Les arrow functions ne peuvent pas avoir deux paramètres
- [ ] B) `this` dans une arrow function ne pointe pas sur l'élément DOM concerné
- [ ] C) D3 interdit les arrow functions dans les événements
- [ ] D) Il n'y a aucune différence entre les deux syntaxes

---

**Q8.** Quel est le résultat de ce code JavaScript ?
```javascript
const data = [12, 5, 8, 20, 3];
const filtered = data.filter(d => d > 7);
```
- [ ] A) `[12, 8, 20]`
- [ ] B) `[12, 5, 8, 20, 3]`
- [ ] C) `[5, 3]`
- [ ] D) `3` (le nombre d'éléments > 7)

---

**Q9.** Dans un GeoJSON, dans quel ordre sont exprimées les coordonnées ?
- [ ] A) Latitude, Longitude
- [ ] B) Longitude, Latitude
- [ ] C) X, Y, Z obligatoirement
- [ ] D) L'ordre dépend du système de coordonnées utilisé

---

**Q10.** Quelle est la principale différence entre une carte choroplèthe et une carte à cercles proportionnels ?
- [ ] A) La choroplèthe utilise des points, les cercles proportionnels des couleurs
- [ ] B) La choroplèthe colore des zones selon une valeur ; les cercles proportionnels encodent la valeur dans la taille d'un symbole
- [ ] C) Les cercles proportionnels ne peuvent représenter que des données positives
- [ ] D) La choroplèthe est toujours plus lisible que les cercles proportionnels

---

## Partie 2 | D3.js (36 pts | 2 pts par affirmation)

**Pour chaque affirmation, indiquez si elle est vraie ou fausse. Si elle est fausse, justifiez brièvement.**

---

### Question 2.1 | Sélections & data binding

```javascript
const pays = [
  { nom: "Suisse", population: 8.7 },
  { nom: "France", population: 68.4 },
  { nom: "Allemagne", population: 84.1 },
  { nom: "Italie", population: 59.0 },
];

const svg = d3.select("#chart")
  .attr("width", 500)
  .attr("height", 200);

const groupes = svg.selectAll("g")
  .data(pays)
  .join("g")
  .attr("transform", (d, i) => `translate(10, ${i * 45 + 10})`);

groupes.append("rect")
  .attr("width", d => d.population * 5)
  .attr("height", 30)
  .attr("fill", "steelblue");

groupes.append("text")
  .attr("x", d => d.population * 5 + 8)
  .attr("y", 20)
  .text(d => `${d.nom} (${d.population}M)`);
```

**Q1.** La barre de la France est plus large que celle de l'Allemagne.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q2.** `translate(10, ${i * 45 + 10})` espace chaque groupe de 45px verticalement.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q3.** Si on retire un pays du tableau et qu'on re-exécute le code, une erreur JavaScript est levée.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q4.** Calculer la largeur avec `d.population * 5` est une mauvaise pratique car la barre peut dépasser le SVG sans tenir compte de l'espace disponible.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

### Question 2.2 | Échelles et axes

```javascript
const data = [
  { categorie: "Vélo", accidents: 142 },
  { categorie: "Piéton", accidents: 89 },
  { categorie: "Moto", accidents: 203 },
  { categorie: "Voiture", accidents: 310 },
  { categorie: "Trottinette", accidents: 67 },
];

const width = 500, height = 350;
const margin = { top: 20, right: 20, bottom: 50, left: 60 };

const xScale = d3.scaleBand()
  .domain(data.map(d => d.categorie))
  .range([margin.left, width - margin.right])
  .padding(0.25);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.accidents)])
  .range([height - margin.bottom, margin.top]);
```

**Q5.** `d3.max(data, d => d.accidents)` retourne `203`.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q6.** Le `range` de `yScale` est `[height - margin.bottom, margin.top]` car l'axe Y du SVG est orienté vers le bas (Y=0 est en haut).

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q7.** Pour dessiner une barre qui part du bas, la hauteur correcte est `d => height - margin.bottom - yScale(d.accidents)`.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q8.** Passer `.padding(0.25)` à `.padding(0.7)` rend les barres plus larges.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q9.** `margin.bottom` vaut 50 (contre 20 pour les autres) pour laisser de la place aux étiquettes de l'axe X.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

### Question 2.3 | Manipulation de données

```javascript
d3.csv("transports.csv").then(data => {

  const parsed = data.map(d => ({
    ville: d.ville,
    mode: d.mode,
    trajets: +d.trajets,
    annee: +d.annee
  }));

  const recents = parsed.filter(d => d.annee >= 2020);

  const totalParVille = recents.reduce((acc, d) => {
    acc[d.ville] = (acc[d.ville] || 0) + d.trajets;
    return acc;
  }, {});

  const top3 = Object.entries(totalParVille)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
});
```

**Q10.** Sans le `+` devant `d.trajets`, les trajets seraient additionnés comme des chaînes ("100" + "200" = "100200").

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q11.** `recents` contient toutes les entrées de `parsed`, triées par année croissante.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q12.** `totalParVille` est un tableau d'objets de type `[{ ville: "Lausanne", total: 4200 }, ...]`.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q13.** `top3` contient les 3 villes ayant le plus de trajets depuis 2020, sous forme de paires `[nom, total]`.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

### Question 2.4 | Interaction et animation

```javascript
barres
  .on("mouseover", function(event, d) {
    d3.select(this)
      .transition()
      .duration(150)
      .attr("fill", "orange");

    tooltip
      .style("opacity", 1)
      .style("left", event.pageX + 12 + "px")
      .style("top", event.pageY - 30 + "px")
      .html(`<strong>${d.categorie}</strong><br>${d.accidents} accidents`);
  })
  .on("mouseout", function(event, d) {
    d3.select(this)
      .transition()
      .duration(150)
      .attr("fill", "steelblue");

    tooltip.style("opacity", 0);
  });
```

**Q14.** Lors du `mouseover`, la barre change de couleur instantanément (sans animation).

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q15.** On utilise `.html(...)` plutôt que `.text(...)` pour pouvoir insérer des balises comme `<strong>` et `<br>` dans le tooltip.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q16.** Remplacer `function(event, d)` par `(event, d) =>` n'aurait aucun effet sur le comportement de `d3.select(this)`.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q17.** `event.pageX + 12` positionne le tooltip légèrement à droite du curseur pour ne pas le masquer.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

**Q18.** Remplacer `.duration(150)` par `.duration(1000)` sur le `mouseout` accélère la transition de retour vers le bleu.

- [ ] Vrai
- [ ] Faux

*Justification si faux :* _______________________________________________

---

## Partie 3 | Cartographie (25 pts)

### Question 3.1 | Projections (8 pts)

**a)** Qu'est-ce qu'une projection cartographique ? Pourquoi toute représentation plane de la Terre implique-t-elle des distorsions ? *(3 pts)*

**b)** Voici trois projections courantes :
- Mercator
- Equal-Area (équivalente)
- Natural Earth

Pour chacune des situations suivantes, indiquez quelle projection est la plus appropriée et justifiez : *(3 pts)*

- Visualiser la densité de population mondiale par pays
- Afficher une carte de navigation maritime
- Créer une carte du monde pour une infographie grand public

**c)** Une carte de la Suisse est centrée sur `[8.2, 46.8]`. Que représentent ces deux valeurs ? Dans quel ordre sont-elles exprimées ? *(2 pts)*

---

### Question 3.2 | GeoJSON (7 pts)

**a)** Qu'est-ce que le format GeoJSON ? Citez trois types de géométries avec un exemple d'usage pour chacun. *(3 pts)*

**b)** Donnez la structure minimale d'un objet GeoJSON représentant une station de vélos à Lausanne (lon: 6.63, lat: 46.52) avec les propriétés suivantes : nom "Riponne", nombre de vélos disponibles : 8. *(2 pts)*

**c)** Un étudiant écrit `[46.52, 6.63]` pour représenter Lausanne dans un GeoJSON. Quelle erreur commet-il et quelle en est la conséquence visuelle ? *(2 pts)*

---

### Question 3.3 | Types de cartes et choix de représentation (10 pts)

**a)** Un journaliste veut visualiser le taux de chômage par canton suisse. Il hésite entre une carte choroplèthe et une carte à cercles proportionnels. *(4 pts)*
- Décrivez le principe de chacune de ces deux représentations.
- Laquelle conseilleriez-vous pour ce cas précis et pourquoi ?

**b)** Une carte choroplèthe montre le nombre total de crimes par canton. Les cantons de Zurich et Genève apparaissent très foncés. Un lecteur conclut que ces cantons sont les plus dangereux. Quel est le problème et comment l'éviter ? *(3 pts)*

**c)** Vous devez visualiser la trajectoire de plusieurs cyclones dans l'océan Atlantique sur les 10 dernières années. Quel type de géométrie GeoJSON utiliseriez-vous et pourquoi ? Quel type de carte proposez-vous ? *(3 pts)*

---

## Partie 4 | Éthique et biais (15 pts)

### Question 4.1 | Identifier les biais (9 pts)

Pour chacun des cas suivants, identifiez le biais et proposez une correction :

**a)** Un graphique montre l'évolution du nombre d'abonnés d'un réseau social. L'axe Y commence à 950 000 au lieu de 0. La courbe semble exploser vers le haut alors que la progression réelle est de 952 000 à 1 005 000. *(3 pts)*

**b)** Une visualisation compare les budgets de santé de différents pays en valeurs absolues (milliards de dollars). Les États-Unis apparaissent comme le pays investissant de loin le plus dans la santé. *(3 pts)*

**c)** Un graphique en barres compare les performances de deux algorithmes sur 5 jeux de données différents. L'algorithme A gagne sur 4 jeux de données mais l'auteur choisit de mettre en évidence uniquement le jeu de données où l'algorithme B gagne, en le plaçant en premier et avec une couleur vive. *(3 pts)*

---

### Question 4.2 | Choix de représentation (6 pts)

**a)** Un·e chercheur·e veut montrer la corrélation entre le revenu médian et l'espérance de vie pour 150 pays. Quel type de graphique conseilleriez-vous et pourquoi ? *(2 pts)*

**b)** Quelle est la différence entre un biais dans les **données** et un biais dans la **représentation visuelle** ? Donnez un exemple de chaque. *(2 pts)*

**c)** Un graphique à bulles encode trois variables : position X, position Y et taille de la bulle. Un designer décide d'encoder la taille via le **rayon** de la bulle plutôt que sa **surface**. Quel problème cela pose-t-il ? *(2 pts)*

---

*Fin de l'examen | Bonne chance !*

