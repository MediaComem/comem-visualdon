---
theme: default
title: "08 - Introduction a la cartographie"
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
    <h1 class="cover-title">08 - Introduction à la cartographie</h1>
    <p class="cover-subtitle">Visualisation de données</p>
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

# Un peu d'histoire

---
layout: image
image: /images/08-intro-cartography/1280px-Engraving_on_a_mammoth_tusk,_map,_Gravettian,_076872x.jpg
---

<div class="image-caption">
  <strong>Carte gravée sur défense de mammouth</strong><br>
  Pavlov, République tchèque · ~25 000 av. J.-C.
</div>

---
layout: image-right
image: /images/08-intro-cartography/1280px-Engraving_on_a_mammoth_tusk,_map,_Gravettian,_076872x.jpg
backgroundSize: contain
---

# ~25 000 av. J.-C.

**Carte gravée sur défense de mammouth**

*Pavlov, République tchèque*

- Plus ancienne carte connue
- Représentation d'un paysage local
- Rivière, montagne, chemins

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Pavlov_site">Wikipedia - Pavlov site</a></div>

---
layout: image
image: /images/08-intro-cartography/800px-anaximander_world_map-en.svg_.png
---

<div class="image-caption">
  <strong>Première carte du monde</strong><br>
  Anaximandre · ~600 av. J.-C.
</div>

---
layout: image-right
image: /images/08-intro-cartography/800px-anaximander_world_map-en.svg_.png
backgroundSize: contain
---

# Anaximandre (~600 av. J.-C.)

**Première carte du monde** (reconstruction)

- Centre : Grèce
- Monde entouré d'eau (Océan)
- Symétrie, ordre cosmique
- **Biais** : vision eurocentrée dès l'origine

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Anaximander">Wikipedia - Anaximander</a></div>

---
layout: image
image: /images/08-intro-cartography/PtolemyWorldMap.jpg
---

<div class="image-caption">
  <strong>Geographia</strong><br>
  Claude Ptolémée · II<sup>e</sup> siècle ap. J.-C.
</div>

---
layout: image-right
image: /images/08-intro-cartography/PtolemyWorldMap.jpg
backgroundSize: contain
---

# Ptolémée (II<sup>e</sup> siècle)

**Geographia**

- Première tentative de projection mathématique
- Coordonnées de 8 000 lieux du monde connu
- Redécouvert au XV<sup>e</sup> siècle : influence la cartographie de la Renaissance
- Centre : Méditerranée, vision gréco-romaine

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Ptolemy%27s_world_map">Wikipedia — Ptolemy's World Map</a></div>

---
layout: image
image: /images/08-intro-cartography/TabulaRogeriana_upside-down.jpg
---

<div class="image-caption">
  <strong>Tabula Rogeriana</strong><br>
  Al-Idrisi · 1154 : Sud en haut, tradition arabe
</div>

---
layout: image-right
image: /images/08-intro-cartography/TabulaRogeriana_upside-down.jpg
backgroundSize: contain
---

# Al-Idrisi (1154)

**Tabula Rogeriana**

*Sud en haut, tradition arabe*

- Une des cartes les plus précises du Moyen Âge
- Commandée par Roger II de Sicile
- Remet en cause la centralité européenne

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Tabula_Rogeriana">Wikipedia — Tabula Rogeriana</a></div>

---
layout: image
image: /images/08-intro-cartography/Mercator_1569.png
---

<div class="image-caption">
  <strong>Projection de Mercator</strong><br>
  Gerardus Mercator · 1569
</div>

---
layout: image-right
image: /images/08-intro-cartography/Mercator_1569.png
backgroundSize: contain
---

# Mercator (1569)

**La projection qui a défini notre vision du monde**

**Avantages :**
- Angles préservés (navigation)
- Lignes droites = caps constants

**Problèmes :**
- Déforme les surfaces
- Groenland = Afrique (en réalité 14× plus petit)
- Europe au centre, agrandie

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Mercator_projection">Wikipedia — Mercator projection</a></div>

---
layout: section
---

# Types de cartes

---
layout: default
---

# Vue d'ensemble

| Type | Objectif | Exemples |
|------|----------|----------|
| **Référence** | Localisation, navigation | Google Maps, OSM, Swisstopo |
| **Qualitative** | Catégories distinctes | Langues, régions, cantons |
| **Choroplète** | Intensité par zone | Votations, densité, revenus |
| **Cartogramme** | Surface = variable | Population, PIB |
| **À bulles** | Taille = variable quantitative | Populations, votes |
| **Flowmap** | Flux, migrations | flowmap.blue |
| **Heatmap** | Densité de points | Strava, criminalité |
| **Topographique** | Relief, altitude | Swisstopo, cartes de randonnée |
| **Topologique** | Relations, réseaux | Transports, métro |

<div class="footer">Source · Monmonier, <em>How to Lie with Maps</em> (1991)</div>

---
layout: default
---

# Carte de référence

_Localisation, navigation, orientation_

<iframe
  width="100%"
  height="380"
  frameborder="0"
  scrolling="no"
  src="https://www.openstreetmap.org/export/embed.html?bbox=6.6391754150390625%2C46.77801443128393%2C6.652565002441406%2C46.78450913603134&layer=mapnik"
  style="border: 1px solid #ccc; border-radius: 4px;"
  title="OpenStreetMap — HEIG-VD"
></iframe>

<div class="footer">Source · <a href="https://www.openstreetmap.org">OpenStreetMap</a> · Google Maps, Swisstopo</div>

---
layout: image-right
image: /images/08-intro-cartography/26cantons.png
backgroundSize: contain
---

# Carte qualitative

_Catégories distinctes encodées par la couleur ou le symbole_

- Pas de hiérarchie entre les valeurs : juste des **catégories**
- Langues, religions, partis politiques, types de zones
- Choix des couleurs : doivent être **perceptuellement équidistants**

**Exemples** : cantons suisses, langues du monde, résultats électoraux par parti

<div class="footer">Source · <a href="https://opendata.swiss">opendata.swiss</a></div>

---
layout: image-right
image: /images/08-intro-cartography/rts_cartes.gif
backgroundSize: contain
---

# Carte choroplète

_Intensité d'une variable encodée par la couleur d'une zone_

- Zone colorée selon une valeur (taux, densité, résultat…)
- Discrétisation : choix des classes = choix politique
- Très répandue en journalisme de données

**Exemples** : résultats de votations, revenus cantonaux, densité de population

<div class="footer">Source · <a href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html">RTS — Votations fédérales</a></div>

---
layout: image-right
image: /images/08-intro-cartography/cartogramme.png
backgroundSize: contain
---

# Cartogramme

_Surface de chaque zone proportionnelle à une variable_

- La géographie est **déformée** pour refléter les données
- Corrige les biais visuels de la choroplète (grands pays peu peuplés)
- Force l'attention sur la donnée, pas le territoire

**Exemples** : population mondiale, PIB, émissions de CO₂, géographie électorale suisse

<div class="footer">Source · Borzakian, <em>Vraies et fausses évidences de la géographie électorale suisse</em></div>

---
layout: default
---

# Carte à bulles

_Taille des symboles proportionnelle à une variable quantitative_

<img src="/images/08-intro-cartography/IMPEACH-THIS.png" style="width: 100%; max-height: 390px; object-fit: contain;" />

<div class="footer">Source · Karim Douieb, <em>Try to impeach this</em> (2019) · <a href="https://try-to-impeach-this.jetpack.ai">try-to-impeach-this.jetpack.ai</a></div>

---
layout: image-right
image: /images/08-intro-cartography/flowmap.png
backgroundSize: contain
---

# Flowmap

_Flux et mouvements entre lieux_

- Lignes dont l'épaisseur = volume du flux
- Migratoire, commercial, informationnel
- Peut rapidement devenir illisible (overplotting)

**Exemples** : migrations, exports, déplacements pendulaires

<div class="footer">Source · <a href="https://flowmap.blue/15kwLB4baXZ7jpip8q0JjgR6zDoS5Gt3gMLCTUAboQxk">flowmap.blue — Migration en Suisse 2016</a></div>

---
layout: default
---

# Heatmap (carte de chaleur)

_Densité d'événements ou de points dans l'espace_

<iframe
  width="100%"
  height="380"
  frameborder="0"
  src="https://public.carto.com/viz/872476d9-f3e4-4c66-bcf6-b3dda156a782/embed_map"
  allowfullscreen
  title="CARTO Heatmap"
  style="border: 1px solid #ccc; border-radius: 4px;"
></iframe>

<div class="footer">Source · <a href="https://carto.com">CARTO Heat Maps</a></div>

---
layout: image-right
image: /images/08-intro-cartography/relief.jpg
backgroundSize: contain
---

# Carte topographique

_Relief, altitude, terrain_

- Représente la **forme physique** du territoire
- Courbes de niveau, ombrage, couleurs hypsométriques
- Indispensable pour la randonnée, l'ingénierie, l'armée

**Exemples** : Swisstopo, cartes de randonnée, cartes militaires

<div class="footer">Source · <a href="https://www.reddit.com/r/Switzerland/comments/jav2xv/">Reddit — Relief map of Switzerland</a></div>

---
layout: image-right
image: /images/08-intro-cartography/lausanne-transport-map.jpg
backgroundSize: contain
---

# Carte topologique

_Relations et réseaux, sans respect des distances_

- La **géométrie est simplifiée** pour la lisibilité
- Les distances ne sont pas proportionnelles à la réalité
- Priorité aux connexions et à la hiérarchie

**Exemples** : plans de métro, transports publics, diagrammes de réseau

<div class="footer">Source · Transports Publics Lausannois</div>

---
layout: two-cols
---

# Pourquoi des cartes ?

**Comprendre l'espace et les organisations physiques / humaines**

- Outil essentiel : vue "macro" d'un phénomène
- Processus exploratoire et démonstratif
- Applications diverses : sciences, journalisme, politique, humanitaire
- Un domaine en constante évolution

::right::

<img src="/images/08-intro-cartography/domaines_application.png" style="width: 100%; height: 100%; object-fit: contain;" />

<div class="footer">Source · Lambert & Zanin, <em>Manuel de cartographie</em> (2016) — Concevoir une carte</div>

---
layout: image-right
image: /images/08-intro-cartography/demarche_carto(1).jpg
backgroundSize: contain
---

# Deux démarches

**Explorer**

- Pour soi, itérations, hypothèses
- La carte comme outil de pensée

**Communiquer**

- Pour les autres, convaincre, raconter
- La carte comme argument

<div class="footer">Source · Lambert & Zanin, <em>Manuel de cartographie</em> (2016) — Concevoir une carte</div>

---
layout: default
---

# Variables visuelles

_Jacques Bertin, Sémiologie graphique (1967)_

<img src="/images/08-intro-cartography/variables-visuelles-de-Bertin.png" style="width: 100%; max-height: 400px; object-fit: contain;" />

<div class="footer">Source · Bertin, <em>Sémiologie graphique</em> (1967)</div>

---
layout: section
---

# Le pouvoir de la carte

---
layout: default
---

# La carte comme outil de pouvoir

Toute carte fait des **choix** : et ces choix ont des conséquences.

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### Ce qu'on met sur la carte

- Nommer = exister
- Les cartes coloniales **effaçaient** les noms autochtones
- Les frontières **créent** des États autant qu'elles les décrivent
- Choisir un centre, c'est décider qui est la périphérie

</div>

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### Ce qu'on laisse de côté

- Ce qui n'est pas cartographié n'existe pas officiellement
- Quartiers informels, routes non reconnues, peuples sans territoire
- La carte légitime, ou nie, ce qu'elle représente

</div>

</div>

<div class="footer">Source · Harley, <em>The New Nature of Maps</em> · Wood, <em>The Power of Maps</em></div>

---
layout: image-right
image: /images/08-intro-cartography/rts_golfe_mexique.png
backgroundSize: contain
---

# Nommer, c'est exercer un pouvoir

**Golfe du Mexique : "Golfe d'Amérique"**

En janvier 2025, Google Maps a renommé le Golfe du Mexique en *Gulf of America* pour les utilisateurs américains, suite à un décret de l'administration Trump.

- Un nom sur une carte = une affirmation politique
- Les grandes plateformes cartographiques ont un **pouvoir d'influence mondial**
- Le Mexique et de nombreux pays ont protesté officiellement

<div class="footer">Source · <a href="https://www.rts.ch/info/monde/2025/article/google-maps-le-golfe-du-mexique-devient-golfe-d-amerique-aux-etats-unis-28771805.html">RTS — Google Maps, le golfe du Mexique devient golfe d'Amérique (2025)</a></div>

---
layout: image-right
image: /images/08-intro-cartography/Mercator_1569.png
backgroundSize: contain
---

# Mercator comme outil politique

**Au-delà de la navigation : une vision du monde**

- L'Europe au centre et agrandie, l'Afrique réduite
- Le Groenland semble aussi grand que l'Afrique (14× plus petit en réalité)
- Cette projection a **façonné 400 ans de représentation mentale du monde**
- Encore utilisée par défaut dans Google Maps jusqu'en 2018

<a href="https://www.youtube.com/watch?v=kIID5FDi2JQ" target="_blank">▶ Why All Maps Are Wrong · Vox</a>

<div class="footer">Source · <a href="https://thetruesize.com">thetruesize.com</a> · <a href="https://www.youtube.com/watch?v=kIID5FDi2JQ">Vox — Why All Maps Are Wrong</a></div>

---
layout: image-right
image: /images/08-intro-cartography/cholera_map.jpg
backgroundSize: contain
---

# La carte comme outil de libération

**John Snow : Épidémie de choléra, Londres (1854)**

- Cartographie des cas de choléra rue par rue
- Hypothèse : contamination par l'eau, pas l'air
- La carte comme **preuve visuelle** face aux autorités
- Conduit à la fermeture de la pompe de Broad Street
- Naissance de l'épidémiologie moderne

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak">Wikipedia — John Snow</a></div>

---
layout: default
---

# La carte au service de causes

| Projet | Objectif | Lien |
|--------|----------|------|
| **Native Land Digital** | Rendre visibles les territoires autochtones | [native-land.ca](https://native-land.ca) |
| **Environmental Justice Atlas** | Documenter les conflits environnementaux | [ejatlas.org](https://ejatlas.org) |
| **Forensic Architecture** | Prouver des violations des droits humains | [forensic-architecture.org](https://forensic-architecture.org) |
| **Missing Maps** | Cartographier les zones de crise humanitaire | [missingmaps.org](https://www.missingmaps.org) |
| **This Is Not an Atlas** | 40+ projets de cartographies alternatives | [notanatlas.org](https://notanatlas.org) |

<div class="footer">Source · Kollektiv Orangotango, <em>This Is Not an Atlas</em> (2018)</div>

---
layout: default
---

# Cartographie radicale et sensible

<div class="mosaic mosaic-3 mt-4" style="height: 230px;">
<figure class="mosaic-books">
  <img src="/images/01-introduction/cartographie_radicale.jpg" />
  <figcaption>Nepthys Zwer · Cartographie radicale</figcaption>
</figure>
<figure class="mosaic-books">
  <img src="/images/01-introduction/ceci-nest-pas-un-atlas.jpeg" />
  <figcaption>Ceci n'est pas un atlas</figcaption>
</figure>
<figure>
  <img src="/images/01-introduction/carte_sensible.jpg" />
  <figcaption>Élise Olmedo · Carte sensible</figcaption>
</figure>
</div>

- **Nepthys Zwer** : la cartographie comme outil de résistance et de contre-pouvoir
- **Ceci n'est pas un atlas** : recueil de 40+ cartographies critiques et participatives
- **Élise Olmedo** : cartes sensibles : l'expérience corporelle et émotionnelle du territoire

<div class="footer">Source · Zwer, <em>Cartographie radicale</em> · <em>Ceci n'est pas un atlas</em> · Olmedo, <em>Cartographie sensible</em></div>

---
layout: section
---

# Cartographie et médias

---
layout: default
---

# La carte dans le journalisme

La carte est devenue un **format journalistique** à part entière.

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### Pourquoi les médias cartographient

- Ancrer un événement dans l'espace
- Rendre visible ce que le texte ne peut pas dire
- Montrer des inégalités géographiques
- Guider le lecteur dans un conflit, une crise, une élection

</div>

<div class="p-3 bg-gray-100 rounded-lg text-sm">

### [visionscarto.net](https://visionscarto.net)

Revue de cartographie critique fondée par **Philippe Rekacewicz** et **Philippe Rivière** (ex-*Monde diplomatique*)

- Cartes engagées, esquissées, sensibles
- Frontières floues, migrations, violence, mémoire
- La carte comme geste politique et poétique

</div>

</div>

<div class="footer">Source · Cairo, <em>How Charts Lie</em> (2019) · <a href="https://visionscarto.net">visionscarto.net</a></div>

---
layout: image-right
image: /images/08-intro-cartography/rts_cartes.gif
backgroundSize: contain
---

# Votations fédérales · RTS

**Cartes choroplètes interactives en temps réel**

- Résultats commune par commune, canton par canton
- Zoom, survol, filtre par scrutin
- Produit par l'équipe data de la RTS chaque jour de vote

La carte comme tableau de bord démocratique.

<div class="footer">Source · <a href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html">RTS — Votations fédérales</a></div>

---
layout: image-right
image: /images/08-intro-cartography/interactive-story-maps.gif
backgroundSize: contain
---

# Story maps

**Narration guidée ancrée dans l'espace**

- La carte devient le **fil conducteur** d'un récit
- Scroll : déplacement géographique
- Combinaison de texte, photos, vidéos, données
- Formats : ArcGIS StoryMaps, Scrollytelling custom (Mapbox GL, D3)

**Usages :** reportages de guerre, crises humanitaires, mémoire, patrimoine

<div class="footer">Source · ArcGIS StoryMaps · <a href="https://www.nytimes.com/interactive/">NYT Interactive</a></div>

---
layout: default
---

# Exemples médias à retenir

| Média | Format | Thème |
|-------|--------|-------|
| **New York Times** | Story map interactive | Covid, guerres, élections |
| **Le Monde** | Choroplète temps réel | Élections françaises |
| **RTS** | Carte interactive | Votations fédérales |
| **Guardian** | Scrollytelling cartographique | Migrations, climat |
| **Forensic Architecture** | Reconstitution spatiale | Violations droits humains |
| **Reuters Graphics** | Cartes animées | Conflits, catastrophes |

<div class="footer">Source · <a href="https://www.nytimes.com/interactive/">NYT Interactive</a> · <a href="https://www.theguardian.com/interactive">The Guardian Interactive</a></div>

---
layout: two-cols
---

# Ressources cartographie

### Livres

- Monmonier, M. *How to Lie with Maps*
- Wood, D. *The Power of Maps*
- Harley, J.B. *The New Nature of Maps*
- Kollektiv Orangotango. *This Is Not an Atlas*
- Zwer, N. *Cartographie radicale*
- Lambert & Zanin. *Manuel de cartographie*

::right::

<div class="mt-12">

### En ligne

- [thetruesize.com](https://thetruesize.com)
- [visionscarto.net](https://visionscarto.net)
- [native-land.ca](https://native-land.ca)
- [notanatlas.org](https://notanatlas.org)
- [flowmap.blue](https://flowmap.blue)

</div>

<div class="footer">Source · Lambert & Zanin, <em>Manuel de cartographie</em> (2016)</div>

---
layout: statement
---

# Semaine prochaine

Cartographie web : Leaflet, MapLibre, D3-geo

---
layout: end
---

# Merci !

VisualDon 2026 -- HEIG-VD / COMEM+
