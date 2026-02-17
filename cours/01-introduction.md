---
theme: default
download: true
title: "01 - Introduction"
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
    <h1 class="cover-title">01 — Introduction</h1>
    <p class="cover-subtitle">Visualisation de données</p>
    <div class="cover-meta">
      <span class="cover-author">Noemi Romano</span>
      <a href="mailto:noemi.romano@heig-vd.ch" class="cover-email">noemi.romano@heig-vd.ch</a>
      <span class="cover-date">17.02.2026</span>
    </div>
  </div>
</div>


---
layout: section
---
# Qu'est-ce que la visualisation de données ?


---
layout: image
image: /images/01-intro-svg/wooclap.png
---



---
layout: fact
---


**Représentation graphique** (visualisation) de l'**information** (données)

<v-clicks>

La visualisation transforme des **données abstraites** en **formes visuelles** interprétables. Elle permet de révéler des **structures**, des **tendances** et des **anomalies** qui resteraient invisibles dans un tableau de chiffres.

</v-clicks>


---
layout: section
---

# Pourquoi visualiser ?



---
layout: image
image: https://upload.wikimedia.org/wikipedia/commons/1/17/Nightingale-mortality.jpg
---

<div class="image-caption">
  <strong>Diagram of the Causes of Mortality</strong><br>
  Florence Nightingale · 1858
</div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/1/17/Nightingale-mortality.jpg
---

# Explorer : trouver les tendances

**Florence Nightingale** (1858)

_Diagram of the causes of mortality in the army in the East_

<v-clicks>

- Premier diagramme en rose (coxcomb)
- A convaincu le gouvernement britannique de réformer l'hygiène militaire
- **Impact** : réduction drastique des décès par maladie

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Florence_Nightingale#Statistics_and_sanitary_reform">Wikipedia — Florence Nightingale</a></div>

---
layout: image
image: /images/01-intro-svg/cholera_map.jpg
---

<div class="image-caption">
  <strong>Cholera Map of Broad Street</strong><br>
  John Snow · 1854
</div>

---
layout: image-right
image: /images/01-intro-svg/cholera_map.jpg
---

# Analyser : tester une hypothèse

**John Snow** (1854)

_Épidémie de choléra de Broad Street, Londres_

<v-clicks>

- Carte des cas de choléra
- Hypothèse : contamination par l'eau (pas l'air)
- **Preuve visuelle** : concentration autour de la pompe
- Naissance de l'épidémiologie moderne

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak">Wikipedia — 1854 Broad Street cholera outbreak</a></div>

---
layout: image
image: https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png
---

<div class="image-caption">
  <strong>Carte figurative des pertes de l'Armée française</strong><br>
  Charles Joseph Minard · 1869
</div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png
---

# Présenter : raconter une histoire

**Charles Joseph Minard** (1869)

_Carte figurative des pertes de l'Armée française_

<v-clicks>

- 6 variables sur une seule image
- Géographie, direction, effectifs
- Température, dates, rivières
- Considérée comme la meilleure visualisation statistique jamais créée (Tufte)

</v-clicks>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/Charles_Joseph_Minard">Wikipedia — Charles Joseph Minard</a> · Tufte, <em>The Visual Display of Quantitative Information</em></div>

---
layout: section
---

# La donnée : un dilemme entre subjectivité et objectivité

---
layout: default
---

# Objectivité et subjectivité dans la visualisation

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 border rounded text-sm">

### Approche rationnelle

- **Bertin** : la sémiologie graphique comme **grammaire universelle** — variables visuelles (position, taille, couleur, forme)
- **Tufte** : maximiser le **data-ink ratio**, éliminer le superflu
- Objectif : **informer avec précision**, reproductibilité

</div>

<div class="p-3 border rounded text-sm">

### Approche sensible

- **Lupi** : _« data-driven ne veut pas dire incontestablement vrai »_ — le **Data Humanism**
- **Fragapane** : _« les données ne sont pas neutres »_ — chaque visualisation porte la trace de son auteur
- Objectif : **faire ressentir**, créer de l'empathie

</div>

</div>

<v-clicks>

Ces deux approches ne s'opposent pas — elles se **complètent**. Une bonne visualisation choisit sa posture en fonction de son **audience** et de son **intention**.

</v-clicks>

<div class="footer">Source · Bertin, <em>Sémiologie graphique</em> (1967) · Tufte, <em>The Visual Display of Quantitative Information</em> (1983) · <a href="http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold">Lupi, <em>Data Humanism</em></a> · <a href="https://www.internimagazine.com/features/interviews/federica-fragapane-lumanizzazione-dei-dati-per-combattere-le-disuguaglianze/">Fragapane</a></div>

---
layout: quote
---

# "Les données ne sont jamais brutes. Elles sont toujours déjà cuisinées."

Geoffrey C. Bowker, _Memory Practices in the Sciences_ (2005)

---
layout: default
---

# Approche rationnelle

<div class="grid grid-cols-3 gap-3 mt-2 text-sm">

<div>

**Jacques Bertin** — _Sémiologie graphique_ (1967)

- 7 **variables visuelles** : position, taille, valeur, grain, couleur, orientation, forme
- Une grammaire pour **encoder l'information** de manière non ambiguë

</div>

<div>

**Edward Tufte** — _The Visual Display of Quantitative Information_ (1983)

- Maximiser le **data-ink ratio**
- Éliminer le **chartjunk** — chaque pixel doit informer

</div>

<div>

**Nicolas Lambert & Christine Zanin** — _Manuel de cartographie_ (2016)

- Principes de **sémiologie cartographique**
- Méthodes de **discrétisation** et de mise en classe

</div>

</div>

<div class="mosaic mosaic-3 mosaic-books mt-4" style="height: 200px;">
<figure>
  <img src="/images/01-intro-svg/bertin-semiologie-graphique.jpg" />
  <figcaption>Bertin · Sémiologie graphique (1967)</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/edward-tufte-visual-display-of-quantitative-information.jpg" />
  <figcaption>Tufte · The Visual Display of Quantitative Information (1983)</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/manuel-de-cartographie.jpg" />
  <figcaption>Lambert & Zanin · Manuel de cartographie (2016)</figcaption>
</figure>
</div>

<div class="footer">Source · Bertin, <em>Sémiologie graphique</em> (1967) · Tufte, <em>The Visual Display of Quantitative Information</em> (1983) · Lambert & Zanin, <em>Manuel de cartographie</em> (2016)</div>

---
layout: default
---

# Exemples : visualisation quantitative

<div class="grid grid-cols-3 gap-3 mt-2 text-sm">

<div>

**John Snow** — _Cholera Map_ (1854)

Carte des cas de choléra à Londres — preuve visuelle de la contamination par l'eau

</div>

<div>

**Jacques Bertin** — _Sémiologie graphique_ (1967)

Variables visuelles appliquées à la population et aux médecins en France

</div>

<div>

**Interactive Things** — _Federal Popular Vote Dashboard_

Tableau de bord interactif des votations fédérales suisses

</div>

</div>

<div class="mosaic mosaic-3 mt-4" style="height: 200px;">
<figure>
  <img src="/images/01-intro-svg/cholera_map.jpg" style="object-fit: contain !important;" />
  <figcaption>Snow · Cholera Map (1854)</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/bertin_F_Population_et_me_decin.jpg" style="object-fit: contain !important;" />
  <figcaption>Bertin · Population et médecins</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/interactive-things-dashboard.png" style="object-fit: contain !important;" />
  <figcaption>Interactive Things · Federal Popular Vote Dashboard</figcaption>
</figure>
</div>

<div class="footer">Source · <a href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak">John Snow</a> · Bertin, <em>Sémiologie graphique</em> · <a href="https://www.interactivethings.com/">Interactive Things</a></div>

---
layout: default
---

# Approche sensible

<div class="grid grid-cols-4 gap-3 mt-2 text-xs">

<div>

**Giorgia Lupi** — _Data Humanism_

_« data-driven ne veut pas dire incontestablement vrai »_

</div>

<div>

**Giorgia Lupi & Stefanie Posavec** — _Dear Data_

52 cartes postales dessinées à la main, collection du **MoMA**

</div>

<div>

**Federica Fragapane**

_« les données ne sont pas neutres »_ — formes organiques, collection du **MoMA**

</div>

<div>

**Philippe Rekacewicz** — _Cartographie sensible_

_« Pour une cartographie sensible et décentrée »_ — esquisses, croquis, émotions

</div>

</div>

<div class="mosaic mosaic-4 mt-4" style="height: 200px;">
<figure>
  <img src="/images/01-intro-svg/datahumanism.webp" />
  <figcaption>Lupi · Data Humanism (2017)</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/dear-data.webp" />
  <figcaption>Lupi & Posavec · Dear Data (2016)</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/migrant-fragapane.webp" />
  <figcaption>Fragapane · Humanizing data to fight inequalities</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/philippe-reka-fuzzy-borders.jpg" />
  <figcaption>Rekacewicz · Europe Fuzzy Borders</figcaption>
</figure>
</div>

<div class="footer">Source · <a href="http://www.printmag.com/information-design/data-humanism-future-of-data-visualization/">Lupi, Data Humanism</a> · <a href="http://www.dear-data.com/theproject">Dear Data</a> · <a href="https://www.internimagazine.com/features/interviews/federica-fragapane-lumanizzazione-dei-dati-per-combattere-le-disuguaglianze/">Fragapane</a> · Rekacewicz</div>

---
layout: default
---

# Domestic Data Streamers

_Données traduites en objets physiques_

<div class="mosaic mosaic-3 mt-4" style="height: 250px;">
<figure>
  <img src="/images/01-intro-svg/data-streamers-surveillance.webp" />
  <figcaption>An installation to explore how algorithms look right back at us</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/data-streamers.webp" />
  <figcaption>A visualisation of life and death</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/data-streamers-strings.webp" />
  <figcaption>A physical visualisation of opinions to use wherever and whenever</figcaption>
</figure>
</div>

<v-clicks>

- Installations **immersives** et participatives
- Données transformées en **expériences émotionnelles**
- La donnée devient **matière, espace, corps**

</v-clicks>

<div class="footer">Source · <a href="https://www.domesticstreamers.com/art-research/work/">Domestic Data Streamers — Art & Research</a></div>

---
layout: default
---

# Cartographie critique, sensible et radicale

<div class="mosaic mosaic-3 mt-4" style="height: 250px;">
<figure class="mosaic-books">
  <img src="/images/01-intro-svg/cartographie_radicale.jpg" />
  <figcaption>Nepthys Zwer · Cartographie radicale</figcaption>
</figure>
<figure class="mosaic-books">
  <img src="/images/01-intro-svg/ceci-nest-pas-un-atlas.jpeg" />
  <figcaption>Ceci n'est pas un atlas</figcaption>
</figure>
<figure>
  <img src="/images/01-intro-svg/carte_sensible.jpg" />
  <figcaption>Élise Olmedo · Carte sensible</figcaption>
</figure>
</div>

<v-clicks>

- **Nepthys Zwer** : cartographie comme outil de **contre-pouvoir** et de résistance
- **Ceci n'est pas un atlas** : recueil de cartographies **critiques** et participatives
- **Élise Olmedo** : cartes **sensibles** — l'expérience corporelle du territoire
- La carte n'est plus descriptive, elle est **stratégique et incarnée**

</v-clicks>

<div class="footer">Source · Zwer, <em>Cartographie radicale</em> · <em>Ceci n'est pas un atlas</em> · Olmedo, <em>Cartographie sensible</em></div>



---
layout: section
---

# Fonctions et formes

---
layout: image-right
image: /images/01-intro-svg/good-dataviz.png
backgroundSize: contain
---

# Qu'est-ce qu'une bonne visualisation ?

4 piliers selon _Information is Beautiful_ :

<v-clicks>

- **Information** : données exactes, pertinentes, complètes
- **Fonction** : objectif clair, utile au public
- **Forme visuelle** : design efficace, esthétique soignée
- **Histoire** : narration qui donne du sens aux données

</v-clicks>

<div class="footer">Source · <a href="https://informationisbeautiful.net/visualizations/what-makes-a-good-data-visualization/">Information is Beautiful — What Makes a Good Visualization</a></div>



---
layout: image-right
image: /images/01-intro-svg/form_and_function_1.svg
backgroundSize: contain
---

# Fonctions et formes de visualisation

<v-clicks>

- **Exploratoire** : pour soi, itérations rapides
- **Explicative** : pour les autres, storytelling
- Le choix de la forme dépend de l'**audience** et de l'**objectif**

</v-clicks>

<div class="footer">Source · <a href="https://urban-institute.medium.com/form-and-function-let-your-audiences-needs-drive-your-data-visualization-choices-3c0603145822">Urban Institute — Form and Function</a></div>



---
layout: image-right
image: /images/01-intro-svg/everest-summit-hillary.jpg
backgroundSize: contain
---

# Statique

<figure>
  <img src="/images/01-intro-svg/form_and_function_2.svg" class="w-80" />
  <figcaption>Mount Everest · South China Morning Post</figcaption>
</figure>

<div class="footer">Source · <a href="https://www.scmp.com/infographics/article/1248804/allure-climbing-mount-everest">Mount Everest, South China Morning Post</a></div>

---
layout: image-right
image: /images/01-intro-svg/giorgia_lupi.jpg
backgroundSize: contain
---

# Infographie

<figure>
  <img src="/images/01-intro-svg/form_and_function_3.svg" class="w-80" />
  <figcaption>Giorgia Lupi · Information design</figcaption>
</figure>

---
layout: image-right
image: /images/01-intro-svg/ny_times.gif
backgroundSize: contain
---

# Interactive

<figure>
  <img src="/images/01-intro-svg/form_and_function_4.svg" class="w-80" />
  <figcaption>How the Virus Got Out · The New York Times</figcaption>
</figure>

<div class="footer">Source · <a href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html">The New York Times — How the Virus Got Out</a></div>

---
layout: image-right
image: /images/01-intro-svg/rts_cartes.gif
backgroundSize: contain
---

# Interactive

<figure>
  <img src="/images/01-intro-svg/form_and_function_5.svg" class="w-80" />
  <figcaption>Votations fédérales · RTS</figcaption>
</figure>

<div class="footer">Source · <a href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html">RTS — Cartes des votations fédérales</a></div>

---
layout: section
---

# Outils et objectifs

---
layout: default
---

# Outils de visualisation de données interactive

<img src="/images/01-intro-svg/data-viz-libraries.svg" style="width: 100%; max-height: 380px; object-fit: contain;" />

---
layout: image-right
image: /images/01-intro-svg/form_and_function_objectif.svg
backgroundSize: contain
---

# Objectifs du cours

<v-clicks>

- Connaître différentes technologies de visualisation de données dans un navigateur web
- Maîtriser la librairie **d3.js**
- Connaître une librairie de **cartographie web**
- Maîtriser la **manipulation des données** avec JavaScript
- Développer un **esprit critique** sur la visualisation de données : questionner les choix, les biais et les intentions derrière chaque représentation

</v-clicks>

---
layout: default
---

# Évaluation

<img src="/images/01-intro-svg/evaluation.svg" class="w-full mt-4" />

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**Projet (50%)**
Par groupes de 2 — plus de détails au slide suivant

</div>

<div>

**Examen (50%)**
Sur ordinateur · 3h · Session d'examen

</div>

</div>

---
layout: default
---

# Projet

Par **groupes de 2** · Thématique au choix

<div class="text-sm mt-2 mb-4">

Choisissez un sujet qui vous **motive**, qui vous **touche**, qui vous **révolte** ou qui vous **réjouit**. Votre visualisation doit porter un **message** : dénoncer une injustice, célébrer quelque chose de beau, vulgariser un sujet complexe, rendre visible ce qui ne l'est pas. L'important c'est que ça **fasse sens pour vous** — les meilleures visualisations naissent d'une vraie conviction.

</div>

<div class="grid grid-cols-4 gap-4 mt-2 text-xs">

<div class="border-box text-center">

**1** · 8 mars

Formation groupes · 
Jeu de données · 
Problématique

<span style="color: #e92528; font-weight: 700;">Thématique (10%)</span>

</div>

<div class="border-box text-center">

**2** · 22 mars

Design

<span style="color: #e92528; font-weight: 700;">Wireframe (10%)</span>

</div>

<div class="border-box text-center">

**3** · 17 mai

Implémentation technique

<span style="color: #e92528; font-weight: 700;">Site web (50%)</span>

</div>

<div class="border-box text-center">

**4** · 11 mai

Présentation

<span style="color: #e92528; font-weight: 700;">Post Insta/TikTok (10%)
Présentation (20%)</span>

</div>

</div>

---
layout: default
---

# Supports

<div class="flex items-center gap-3 mt-6 mb-4">
  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  <a href="https://github.com/MediaComem/comem-visualdon/" class="text-xl font-medium">MediaComem/comem-visualdon</a>
</div>

Cours · Exercices · Projet

---
layout: section
---

# Atelier

---
layout: default
---

# Si vous pouviez rendre visible n'importe quoi...

**En groupes de 4** — vous dessinez quoi ?

<v-clicks>

Pas besoin de données réelles. Pas besoin que ce soit faisable. Juste : **qu'est-ce que vous aimeriez voir, comprendre, montrer ?**

</v-clicks>

<div class="grid grid-cols-2 gap-3 mt-6">

<div class="p-3 border rounded text-sm">

### Pistes

- Quelque chose que vous vivez au quotidien
- Un phénomène que vous trouvez mal compris
- Une question à laquelle vous n'avez jamais eu de réponse claire
- Un sujet qui vous tient à cœur

</div>

<div class="p-3 border rounded text-sm">

### Pensez à...

- **Pour qui** cette visualisation serait utile ?
- **Qu'est-ce qu'on verrait** qu'on ne voit pas aujourd'hui ?
- Ça ressemblerait à quoi ? (carte, graphe, timeline, installation, autre ?)

</div>

</div>

---
layout: default
---

# Table ronde (30 min)

Chaque groupe présente son idée en **2 minutes**.

<v-clicks>

- Qu'est-ce que vous voulez **rendre visible** ?
- À **qui** ça s'adresse ?
- Pourquoi c'est **important** pour vous ?

</v-clicks>

<div class="accent-box mt-6">

Une bonne visualisation part d'une **vraie question** — pas d'un dataset. Les données, on les trouvera au cours 2.

</div>

---
layout: end
---

# Questions ?
