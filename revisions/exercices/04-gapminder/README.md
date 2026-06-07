# 04 · Gapminder

> **Prérequis**
> - [03 · JavaScript et manipulation DOM](../../../cours/03-js-dom.md) : D3 selection, data binding
> - [04 · Données](../../../cours/04-donnees.md) : chargement CSV, manipulation de données
> - [05 · Échelles et axes](../../../cours/05-echelles-axes.md) : d3-scale, d3-axis, convention des marges
> - [06 · Interaction et animation](../../../cours/06-interaction-1.md) : d3-transition (partie animation)
> - [08 · Introduction à la cartographie](../../../cours/08-intro-cartographie.md) : types de cartes
> - [09 · Cartographie web](../../../cours/09-cartographie-web.md) : MapLibre GL JS, sources, couches, expressions

## Installation

- Rentrez dans le dossier _04-gapminder_ `cd 04-gapminder/`
- Installez les packages nécessaires et qui sont dans le package.json `npm install`
- Démarrez le serveur `npm run dev`

:rocket: Vous devriez avoir accès à votre serveur local sur [localhost:5173](http:localhost:5173) :rocket:

Comme la semaine passée, le fichier html se trouve dans `index.html` et l'exercice se déroulera dans le fichier `src/ìndex.js`, où vous allez enfin charger et manipuler des données.

## But

Pour les prochains trois exercices, vous utiliserez les données du projet [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1), un projet qui a pour but de mieux faire comprendre les tendances d'indicateurs sociaux, démographiques et économiques à travers des graphiques interactifs.

Le but de ces trois travaux est de produire un graphique interactif des données d'espérance de vie en fonction du PIB par habitant au travers des années.

## Données

Vous avez à disposition 3 jeux de données:

- `data/income_per_person_gdp_percapita.csv` : PIB par habitant par pays et pour chaque année depuis 1800
- `data/life_expectancy_years.csv` : espérance de vie par pays et pour chaque année depuis 1800
- `data/population_total.csv` : population depuis 1800

## Graphique statique

Le premier rendu implique la visualisation statique des données `data/gapminder.csv` pour l'année 2021 sous forme de [Scatter/Bubble Chart](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1). Vous aurez sur l'axe X les données de PIB par habitant et sur l'axe Y l'espérance de vie. La taille des cercles devra être proportionnelle à la population du pays.

## Cartographie

Représentez les valeurs d'espérance de vie sur une carte choroplète. Deux approches sont possibles :

**Approche 1 · d3-geo** : rendu SVG statique avec `geoMercator`, `geoPath` et une échelle de couleur `scaleLinear`.

**Approche 2 · MapLibre GL JS** : carte interactive avec `addSource`, `addLayer` et une expression `interpolate` pour la couleur.

Dans les deux cas :
- Chargez un fichier GeoJSON des pays du monde
- Fusionnez les données d'espérance de vie (2021) par nom de pays
- Encodez la valeur `life` dans la couleur de remplissage de chaque pays

## Animation

Animer les données selon les années. En bref : faite le premier graphique, mais pour chaque année! Cela doit ressembler à la visualisation proposée par [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1).
