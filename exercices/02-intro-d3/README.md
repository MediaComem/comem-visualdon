# Introduction à D3

## Installation

- Installez **Node.js** et **npm** si vous ne les avez pas encore sur votre machine ([tutoriel](https://kinsta.com/blog/how-to-install-node-js/)). Apprendre Node.js ce n'est pas le but du cours mais ça vous permettra de faire tourner un server en local et manager vos paquets en toute facilité 😏
- Allez dans le dossier de l'exercice `cd 02-intro-d3`
- Installez les packages nécessaires et qui sont dans le package.json `npm install`
- Démarrez le serveur `npm run dev`

:rocket: Vous devriez avoir accès à votre serveur local sur [localhost:5173](http:localhost:5173) :rocket:

Le fichier html se trouve dans `index.html` et l'exercice se déroulera dans le fichier `src/index.js`, où vous allez écrire vos premières lignes de code avec d3!

**Important**: dans cet exercice seulement les méthodes du module [d3-selection](https://github.com/d3/d3-selection) pourront être utilisées.

## Manipuler les DOM

Créez 3 cercles de 40px de rayon et placez-les respectivement à : (50,50), (150,150), (250,250)

## Attributs

- Changez la couleur du deuxième cercle
- Déplacez de 50px vers la droite le premier et le deuxième cercle

## Append

Rajoutez du texte en dessous de chaque cercle

## Événements

Alignez verticalement les cercles en cliquant sur le dernier cercle

## Données

Vous avez à disposition les données suivantes: `[20, 5, 25, 8, 15]`

Ces données représentent la hauteur des rectangles que vous allez dessiner avec la méthode `data([data]).join(enter)` que nous avons vue en cours. Les rectangles auront une largeur fixe de 20px et doivent être alignés en bas l'un à côté de l'autre (comme un graphique en batons ! :bar_chart: )
