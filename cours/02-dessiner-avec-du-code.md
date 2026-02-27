---
theme: default
download: true
title: "02 - Dessiner avec du code"
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
    <h1 class="cover-title">02 — Dessiner avec du code</h1>
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
layout: default
---

# Avant le code, la main

La dataviz a été inventée à la main — longtemps avant les ordinateurs

<div class="masonry masonry-3" style="margin-top:0.75rem;">
  <figure>
    <img src="/images/01-intro-svg/1920px-Nightingale-mortality.jpg" alt="Nightingale" />
    <figcaption><strong>Florence Nightingale · 1858</strong> · Diagramme en rose, mortalité militaire</figcaption>
  </figure>
  <figure>
    <img src="/images/01-intro-svg/dubois.png" alt="Du Bois" />
    <figcaption><strong>W.E.B. Du Bois · 1900</strong> · Infographies, Exposition universelle de Paris</figcaption>
  </figure>
  <figure>
    <img src="/images/01-intro-svg/tufte.png" alt="Tufte" />
    <figcaption><strong>Edward Tufte · 1983</strong> · <em>The Visual Display of Quantitative Information</em> (couverture : Marey, 1885)</figcaption>
  </figure>
</div>

<div class="footer">Source · <a href="https://datajournalism.com/read/longreads/data-visualisation-by-hand">Data Journalism · Data Visualisation by Hand</a></div>

---
layout: default
---

# La main comme outil contemporain

<div class="masonry masonry-3" style="margin-top:0.75rem;">
  <figure>
    <img src="/images/01-intro-svg/dear-data.webp" alt="Dear Data" />
    <figcaption><strong><a href="https://www.dear-data.com/" target="_blank">Dear Data</a> · Lupi & Posavec · 2016</strong> · 52 semaines de données personnelles, une carte postale par semaine</figcaption>
  </figure>
  <figure>
    <img src="/images/01-intro-svg/giorgia_lupi.jpg" alt="Giorgia Lupi" />
    <figcaption><strong>Giorgia Lupi</strong> · Pionnière du "Data Humanism"</figcaption>
  </figure>
  <figure>
    <img src="/images/01-intro-svg/migrant-fragapane.webp" alt="Fragapane" />
    <figcaption><strong><a href="https://www.behance.net/federicafragapane" target="_blank">Federica Fragapane</a></strong> · Dataviz dessinée à la main, narration humaniste</figcaption>
  </figure>
  <figure>
    <img src="/images/01-intro-svg/mona_chalabi.avif" alt="Mona Chalabi" />
    <figcaption><strong><a href="https://monachalabi.com/" target="_blank">Mona Chalabi</a> · The Guardian</strong> · Illustrations à la main, fausse précision évitée</figcaption>
  </figure>
</div>

<div class="footer">Source · <a href="https://datajournalism.com/read/longreads/data-visualisation-by-hand">Data Journalism · Data Visualisation by Hand</a></div>

<style scoped>
figure img { max-height: 380px; object-fit: cover; width: 100%; }
</style>

---
layout: two-cols
---

# Esquisser avant de coder

<v-clicks>

- Dessiner à la main **force à penser** : quelles variables ? quel encodage visuel ? quelle échelle ?
- L'esquisse rapide (30 secondes) permet d'**itérer sans coût** · effacer > refactorer
- La main révèle les **décisions implicites** que le code cache : axes, proportions, hiérarchie
- Edward Tufte : *"Above all else show the data."*

</v-clicks>

<v-click>

<div class="accent-box" style="margin-top:1rem;">
  <strong>Pratique :</strong> avant d'écrire du code, posez-vous · crayon en main · <em>quelle forme devrait prendre cette donnée ?</em>
</div>

</v-click>

::right::

<div class="col-center">
  <img src="/images/01-intro-svg/data-drawing.webp" style="max-height:350px;object-fit:contain;width:100%;" />
  <p style="font-size:0.55rem;color:#888;text-align:center;margin-top:0.4rem;">Source · <a href="https://medium.com/@jonas.lowgren.64/the-value-of-hand-drawing-in-data-visualization-360536fd96fc">Jonas Löwgren · The value of hand drawing in data visualization</a></p>
</div>

---
layout: section
---

# Du crayon au pixel

La même intention · de nouveaux outils

---
layout: default
---

# Data journalism · Dataviz narrative

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem; height: calc(100% - 3.5rem);">
  <div style="display:flex; flex-direction:column; gap:0.3rem; min-height:0;">
    <img src="/images/01-intro-svg/ny_times.gif" style="flex:1; width:100%; object-fit:cover; border-radius:4px; min-height:0;" />
    <p style="font-size:0.65rem; color:#666; margin:0; font-family:'Roboto Mono',monospace;"><strong>NYT Graphics</strong> · <a href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html" target="_blank">Covid-19 spread (2020)</a></p>
  </div>
  <div style="display:flex; flex-direction:column; gap:0.3rem; min-height:0;">
    <video src="/images/01-intro-svg/bremer.webm" autoplay loop muted playsinline style="flex:1; width:100%; object-fit:cover; border-radius:4px; min-height:0;"></video>
    <p style="font-size:0.65rem; color:#666; margin:0; font-family:'Roboto Mono',monospace;"><strong>Nadieh Bremer</strong> · <a href="https://nbremer.github.io/ORCA/commit-history/" target="_blank">ORCA commit history</a></p>
  </div>
  <div style="display:flex; flex-direction:column; gap:0.3rem; min-height:0;">
    <video src="/images/01-intro-svg/climate_zones.webm" autoplay loop muted playsinline style="flex:1; width:100%; object-fit:cover; border-radius:4px; min-height:0;"></video>
    <p style="font-size:0.65rem; color:#666; margin:0; font-family:'Roboto Mono',monospace;"><strong>The Pudding</strong> · <a href="https://pudding.cool/2024/06/climate-zones/" target="_blank">Climate zones (2024)</a></p>
  </div>
</div>


---
layout: section
---

# SVG

Scalable Vector Graphics

---
layout: two-cols
---

# Vectoriel vs Matriciel

<v-clicks>

- **Matriciel** (PNG, JPG, Canvas) : grille de pixels · chaque pixel a une couleur fixe
- **Vectoriel** (SVG) : formes mathématiques · courbes, rayons, points
- Zoomer dans un matriciel → **pixelisation** visible
- Zoomer dans un vecteur → **toujours net**, recalculé à la volée
- SVG est **résolution-indépendant** : parfait pour écrans Retina, exports PDF, impressions

</v-clicks>



::right::

<div class="col-center" style="flex-direction:column;gap:1rem;">
  <div style="display:flex;flex-direction:row;gap:1.5rem;align-items:flex-start;justify-content:center;">
    <div style="text-align:center;">
      <div style="font-size:0.65rem;color:#666;margin-bottom:0.4rem;font-family:monospace;">Matriciel · zoom ×8</div>
      <iframe srcdoc="<body style='margin:0;background:white'><canvas id='c' style='width:140px;height:140px;image-rendering:pixelated;image-rendering:crisp-edges;display:block'></canvas><script>const c=document.getElementById('c');c.width=18;c.height=18;const ctx=c.getContext('2d');ctx.fillStyle='steelblue';ctx.beginPath();ctx.arc(9,9,7,0,Math.PI*2);ctx.fill();</script></body>" style="width:140px;height:140px;border:1px solid #e0e0e0;border-radius:4px;display:block;" />
    </div>
    <div style="text-align:center;">
      <div style="font-size:0.65rem;color:#666;margin-bottom:0.4rem;font-family:monospace;">Vectoriel SVG · zoom ×8</div>
      <iframe srcdoc="<body style='margin:0;background:white'><svg width='140' height='140' viewBox='2 2 14 14'><circle cx='9' cy='9' r='7' fill='steelblue'/></svg></body>" style="width:140px;height:140px;border:1px solid #e0e0e0;border-radius:4px;display:block;" />
    </div>
    
  </div>
  
  <img src="/images/01-intro-svg/svg_intro.png" style="max-height:180px;object-fit:contain;width:100%;" />
        <figcaption>Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">MDN · SVG Tutorial</a></figcaption>


</div>

---
layout: two-cols
---

# SVG · Système de coordonnées

<v-clicks>

- L'origine `(0, 0)` est en **haut à gauche**
- `x` croît vers la **droite**, `y` vers le **bas**
- Inverse du repère mathématique · pensez à une page imprimée
- Universel : SVG et Canvas partagent ce repère

</v-clicks>

::right::

<div class="col-center">
  <img src="/images/01-intro-svg/svg-coordinates-system.png" style="width:100%;max-height:340px;object-fit:contain;" />
        <figcaption>Source · <a href="https://vanseodesign.com/web-design/svg-viewport/">vanseodesign.com · SVG Coordinate Systems</a></figcaption>

</div>


---
layout: two-cols
---

# SVG · Formes de base

SVG utilise des **balises HTML** intégrées dans le DOM · chaque forme est un élément : `<rect>`, `<circle>`, `<line>`, `<polygon>` · Les attributs définissent position, taille et couleur

```html {monaco} {maxHeight:'280px'}
<svg width="280" height="190">

  <rect x="10" y="10"
        width="80" height="50"
        fill="steelblue" rx="4" />

  <circle cx="200" cy="45" r="40"
          fill="coral" />

  <polygon
    points="10,180 60,110 110,180"
    fill="#4caf50" />

  <line x1="140" y1="110"
        x2="270" y2="180"
        stroke="#333" stroke-width="2" />

</svg>
```

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes">MDN · SVG Basic Shapes</a></div>

::right::

<div class="col-center">
<svg viewBox="0 0 280 190" style="width:100%">
  <rect x="10" y="10" width="80" height="50" fill="steelblue" rx="4" />
  <circle cx="200" cy="45" r="40" fill="coral" />
  <polygon points="10,180 60,110 110,180" fill="#4caf50" />
  <line x1="140" y1="110" x2="270" y2="180" stroke="#333" stroke-width="2" />
</svg>
</div>

---
layout: two-cols
---

# SVG · Style

Les formes se stylent avec des **attributs SVG** · ou via **CSS**

```html {monaco} {maxHeight:'270px'}
<svg width="300" height="130">

  <!-- fill, stroke, stroke-width, opacity -->
  <circle cx="60" cy="65" r="45"
    fill="steelblue" stroke="#333"
    stroke-width="3" opacity="0.8" />

  <!-- fill:none → contour seulement -->
  <rect x="130" y="20" width="80" height="90"
    fill="none" stroke="coral"
    stroke-width="4" stroke-dasharray="8,4" />

  <!-- fill-opacity indépendant du stroke -->
  <circle cx="260" cy="65" r="40"
    fill="#4caf50" fill-opacity="0.4"
    stroke="#4caf50" stroke-width="2" />

</svg>
```

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes">MDN · SVG Fills & Strokes</a></div>

::right::

<div class="col-center">
<svg viewBox="0 0 300 130" style="width:100%;max-height:200px;">
  <circle cx="60" cy="65" r="45" fill="steelblue" stroke="#333" stroke-width="3" opacity="0.8" />
  <rect x="130" y="20" width="80" height="90" fill="none" stroke="coral" stroke-width="4" stroke-dasharray="8,4" />
  <circle cx="260" cy="65" r="40" fill="#4caf50" fill-opacity="0.4" stroke="#4caf50" stroke-width="2" />
</svg>
<div style="margin-top:0.75rem;font-size:0.7rem;color:#666;font-family:monospace;text-align:left;line-height:1.7;">
  <div><code style="color:#2563eb">fill</code> · couleur de remplissage</div>
  <div><code style="color:#2563eb">stroke</code> · couleur du contour</div>
  <div><code style="color:#2563eb">stroke-width</code> · épaisseur du contour</div>
  <div><code style="color:#2563eb">opacity</code> · transparence globale (0–1)</div>
  <div><code style="color:#2563eb">fill-opacity</code> · transparence du remplissage</div>
  <div><code style="color:#2563eb">stroke-dasharray</code> · contour en tirets</div>
</div>
</div>

---
layout: two-cols
---

# SVG · Le chemin `<path>`

L'élément le plus puissant · utilisé par **D3.js** pour les arcs, courbes et formes complexes

<v-clicks>

- `M x y` · **Move to** — déplace le curseur vers (x, y) sans tracer
- `L x y` · **Line to** — trace une ligne droite vers (x, y)
- `H x` · **Horizontal line** — ligne horizontale jusqu'à x
- `V y` · **Vertical line** — ligne verticale jusqu'à y
- `Z` · **Close path** — ferme le chemin vers le point de départ

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">MDN · SVG Paths</a></div>

::right::

```html {monaco} {maxHeight:'110px'}
<svg width="100" height="100">
  <path d="M 0 50
           L 50 0
           H 100
           V 100
           Z"
        fill="steelblue" />
</svg>
```

<div class="col-center">
  <img src="/images/01-intro-svg/path.svg" style="width:100%;max-height:195px;object-fit:contain;" />
</div>

---
layout: two-cols
---

# SVG · Groupes & transformations

`<g>` regroupe des éléments · les **attributs et transformations sont hérités**

```html {monaco} {maxHeight:'240px'}
<!-- Groupe avec attributs partagés -->
<g fill="steelblue" stroke="#333" stroke-width="1">
  <rect x="10" y="10" width="50" height="50" />
  <rect x="70" y="10" width="50" height="50" />
  <rect x="130" y="10" width="50" height="50" />
</g>

<!-- translate : déplacer -->
<g transform="translate(10, 90)">
  <circle cx="30" cy="30" r="25" fill="coral" />
  <text x="30" y="75" text-anchor="middle"
        font-size="11" fill="#666">translate</text>
</g>

<!-- rotate + scale -->
<g transform="translate(160, 120) rotate(30) scale(1.3)">
  <rect x="-25" y="-20" width="50" height="40"
        fill="#4caf50" rx="4"/>
</g>
```

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g">MDN · SVG g</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform">transform</a></div>

::right::

<div class="col-center">
  <img src="/images/01-intro-svg/groupe_translate.svg" style="width:100%;max-height:340px;object-fit:contain;" />
</div>

---
layout: section
---

# HTML Canvas

Dessiner pixel par pixel
```html
 <canvas width="200" height="100"></canvas> 
```


---
layout: two-cols
---

# Canvas · Mode impératif
Mode **impératif** : instructions au contexte 2D

- Les formes ne restent **pas dans le DOM** 
- Très **performant** pour animations haute fréquence

```javascript {monaco} {maxHeight:'100px'}
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Rectangle
ctx.fillStyle = 'steelblue';
ctx.fillRect(10, 10, 80, 50);

// Cercle
ctx.fillStyle = 'coral';
ctx.beginPath();
ctx.arc(200, 45, 40, 0, Math.PI * 2);
ctx.fill();

// Triangle (chemin libre)
ctx.fillStyle = '#4caf50';
ctx.beginPath();
ctx.moveTo(10, 180); ctx.lineTo(60, 110); ctx.lineTo(110, 180);
ctx.fill();
```

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial">MDN · Canvas API Tutorial</a></div>

::right::

<div class="col-center">
<iframe srcdoc="<body style='margin:0;background:white;display:flex;align-items:center;justify-content:center;height:100vh;'><canvas id='c'></canvas><script>const c=document.getElementById('c'),dpr=2;c.width=280*dpr;c.height=190*dpr;c.style.cssText='width:280px;height:190px;display:block;';const ctx=c.getContext('2d');ctx.scale(dpr,dpr);ctx.fillStyle='steelblue';ctx.fillRect(10,10,80,50);ctx.fillStyle='coral';ctx.beginPath();ctx.arc(200,45,40,0,Math.PI*2);ctx.fill();ctx.fillStyle='#4caf50';ctx.beginPath();ctx.moveTo(10,180);ctx.lineTo(60,110);ctx.lineTo(110,180);ctx.fill();ctx.strokeStyle='#333';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(140,110);ctx.lineTo(270,180);ctx.stroke();</script></body>" style="background:white;" />
</div>

---
layout: section
---

# Même exemple · deux approches

Un mini bar chart · données `[40, 80, 60, 90]`

---
layout: two-cols
---

# Avec SVG

<<< @/snippets/02-svg/barchart.html {1|3-4|6-13|15-22|all} {monaco}

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN · SVG</a></div>

::right::

<div class="col-center">
<iframe srcdoc="<body style='margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:white'><svg viewBox='0 0 260 160' style='width:260px;height:160px;display:block;' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='140' x2='250' y2='140' stroke='#ccc' stroke-width='1'/><rect x='20' y='100' width='40' height='40' fill='steelblue'/><rect x='75' y='60' width='40' height='80' fill='steelblue'/><rect x='130' y='80' width='40' height='60' fill='steelblue'/><rect x='185' y='50' width='40' height='90' fill='steelblue'/><text x='40' y='156' text-anchor='middle' font-size='12' fill='#666'>A</text><text x='95' y='156' text-anchor='middle' font-size='12' fill='#666'>B</text><text x='150' y='156' text-anchor='middle' font-size='12' fill='#666'>C</text><text x='205' y='156' text-anchor='middle' font-size='12' fill='#666'>D</text></svg></body>" style="background:white;" />
</div>

---
layout: two-cols
---

# Avec Canvas

<<< @/snippets/02-svg/barchart-canvas.js {1|3-7|9-14|16-23|all} {monaco}

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial">MDN · Canvas API</a></div>

::right::

<div class="col-center">
<iframe srcdoc="<body style='margin:0;background:white;display:flex;align-items:center;justify-content:center;height:100vh;'><canvas id='c'></canvas><script>const c=document.getElementById('c'),dpr=2;c.width=260*dpr;c.height=160*dpr;c.style.cssText='width:260px;height:160px;display:block;';const ctx=c.getContext('2d');ctx.scale(dpr,dpr);ctx.strokeStyle='#ccc';ctx.beginPath();ctx.moveTo(10,140);ctx.lineTo(250,140);ctx.stroke();ctx.fillStyle='steelblue';ctx.fillRect(20,100,40,40);ctx.fillRect(75,60,40,80);ctx.fillRect(130,80,40,60);ctx.fillRect(185,50,40,90);ctx.fillStyle='#666';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText('A',40,156);ctx.fillText('B',95,156);ctx.fillText('C',150,156);ctx.fillText('D',205,156);</script></body>" style="background:white;" />
</div>

---
layout: section
---

# Comparaison

SVG · Canvas

---
layout: default
---

# Tableau comparatif

| Critère | SVG | Canvas |
|---------|:---:|:------:|
| **Paradigme** | Déclaratif | Impératif |
| **Type de rendu** | Vectoriel (DOM) | Bitmap (pixels) |
| **Accès DOM** | ✓ | ✗ |
| **Interactivité native** | ✓ CSS + events | ✗ manuel |
| **Perf. > 10k éléments** | ✗ | ✓ |
| **Zoom sans perte** | ✓ | ✗ |
| **Courbe d'apprentissage** | Faible | Moyenne |
| **Idéal pour** | Dataviz, D3.js | Temps réel, jeux |

---
layout: default
---

# Lequel choisir ?

<v-clicks>

**→ SVG** si tu veux utiliser **D3.js**, interagir avec les formes (hover, clic, tooltip), produire des graphiques scalables et accessibles

**→ Canvas** si tu travailles avec **de gros volumes** (> 10 000 éléments), des animations haute fréquence, ou du rendu WebGL

</v-clicks>

<v-click>

```
Dans ce cours → SVG + D3.js
```

La dataviz web s'appuie sur SVG pour ses capacités de liaison données–DOM.

</v-click>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">MDN Canvas</a></div>

---
layout: section
---

# Projet

Étape 1 · Thématique

---
layout: default
---

# Projet · Choisir sa thématique

Par **groupes de 2** · Délai **8 mars 23h59** · <span style="color:#e92528;font-weight:700;">10% de la note</span>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;font-size:0.85rem;">

<div class="border-box">

**Choisissez un sujet qui vous :**

- motive, touche ou révolte
- pose une question sans réponse claire
- rend visible ce qui ne l'est pas

*Les meilleures visualisations naissent d'une conviction !*

</div>

<div class="border-box">

**Livrables sur GitHub :**

- Repo GitHub avec `README.md`
- **Contexte** : d'où viennent les données ?
- **Description** : format, attributs, types
- **But** : explorer et/ou expliquer ?

</div>

</div>

---
layout: default
---

# Sources de données

<div style="margin-top:0.5rem;">

| Source | Description |
|--------|-------------|
| [opendata.swiss](https://opendata.swiss/fr/) | Open data suisse · données fédérales et cantonales |
| [Our World in Data](https://ourworldindata.org/) | Données sociales, climatiques, économiques mondiales |
| [Banque mondiale](https://datacatalog.worldbank.org/) | Indicateurs de développement par pays |
| [Kaggle](https://www.kaggle.com/datasets) | Large collection de datasets variés |
| [Google Dataset Search](https://datasetsearch.research.google.com/) | Moteur de recherche de datasets |
| [datahub.io](https://datahub.io/collections) | Données organisées par thématiques |
| [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) | Liste communautaire de données ouvertes |
| [BFS / OFS](https://www.bfs.admin.ch/) | Statistiques fédérales suisses |

</div>

---
layout: default
---

# Projet · Esquisser sa visualisation

**Aujourd'hui, crayon en main.** Avant d'écrire une ligne de code.

<v-clicks>

- Quelles **données** ? Quels attributs allez-vous montrer ?
- Quel **type de graphique** ? (carte, timeline, scatter, réseau, custom...)
- Pour **qui** ? Quel **message** portez-vous ?
- Quelle **interactivité** ? Hover, scroll, filtres ?

</v-clicks>

<v-click>

<div class="accent-box" style="margin-top:1rem;">
  Ce croquis deviendra votre <strong>wireframe</strong> · Étape 2 · 22 mars (10%). Ce n'est pas grave s'il évolue : l'important c'est d'explorer visuellement <em>avant</em> de coder.
</div>

</v-click>

<div class="footer">Source · <a href="https://github.com/MediaComem/comem-visualdon/blob/main/projet/README.md">Consignes du projet</a></div>

---
layout: default
---

# Exercice 1 · Dessiner avec du code

Réaliser chaque forme **deux fois** : en **SVG** et en **HTML Canvas**

<v-clicks>

- Rectangle, donut (arc), ligne · chemin libre de la première lettre de votre prénom
- Animations on click / on hover · animation le long d'un chemin
- Objectif : même forme, deux approches — déclaratif vs impératif

</v-clicks>

<v-click>

<div class="accent-box" style="margin-top:1rem;">
  <a href="https://github.com/MediaComem/comem-visualdon/tree/main/exercices/01-dessin"><strong>Exercice 1 sur GitHub</strong></a> · Les consignes SVG et Canvas sont côte à côte dans le README.
</div>

</v-click>

---
layout: statement
---

# Semaine prochaine

Introduction à D3.js · manipuler le DOM avec les données

---
layout: end
---

# Merci !

VisualDon — HEIG-VD / COMEM+
