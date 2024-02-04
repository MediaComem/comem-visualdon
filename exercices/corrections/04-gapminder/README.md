
## Installation
Comme la semaine dernière, le dossier d'exercice contient les élément nécéssaire pour démarrer un serveur [Node.js](https://nodejs.org/en/) en local et de *traduire* votre code ES6 dans un langage lisible par le navigateur avec [webpack](https://webpack.js.org/).  
* Rentrez dans le dossier *04-gapminder-1* ``cd 04-gapminder-1/``
* Installez les packages nécessaires et qui sont dans le package.json ```npm install```
* Démarrez le serveur ```npm start```

:rocket: Vous devriez avoir accès à votre serveur local sur [localhost:8080](http:localhost:8080) :rocket:

Comme la semaine passée, le fichier html se trouve dans ```public/index.html``` et l'exercice se déroulera dans le fichier ```src/ìndex.js```, où vous allez enfin charger et manipuler des données. 


## But
Pour les prochains trois exercices, vous utiliserez les données du projet [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1), un projet qui a pour but de mieux faire comprendre les tendances d'indicateurs sociaux, démographiques et économiques à travers des graphiques interactifs. 

Le but de ces trois travaux est de produire un graphique interactif des données d'espérance de vie en fonction du PIB par habitant au travers des années. 



## Données
Vous avez à disposition 3 jeux de données: 
* ```data/income_per_person_gdp_percapita.csv``` : PIB par habitant par pays et pour chaque année depuis 1800
* ```data/life_expectancy_years.csv``` : espérance de vie par pays et pour chaque année depuis 1800
* ```data/population_total.csv``` : population depuis 1800

## Graphique statique (délai 1 avril)
Le premier rendu implique la visualisation statique des données ```data/gapminder.csv``` pour l'année 2021 sous forme de [Scatter/Bubble Chart](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1). Vous aurez sur l'axe X les données de PIB par habitant et sur l'axe Y l'espérance de vie. La taille des cercles devra être proportionnelle à la population du pays. 


## Cartographie (délai 8 avril)
Représentez les valeurs d'espérance de vie sur une carte. 
Trouver des données géographiques en format *.geojson*, et visualiser l'espérance de vie sous forme de : 
* [Carte choroplète](https://d3-graph-gallery.com/graph/choropleth_hover_effect.html)
* [Cartogramme](https://d3-graph-gallery.com/cartogram)

## Animation (délai 22 avril)
Animer les données selon les années. En bref : faite le premier graphique, mais pour chaque année! Cela doit ressembler à la visualisation proposée par [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1).