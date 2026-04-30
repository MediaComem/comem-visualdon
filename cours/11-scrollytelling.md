---
theme: default
title: "11 - Scrollytelling"
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
    <h1 class="cover-title">11 - Scrollytelling</h1>
    <p class="cover-subtitle">Visualisation de Données</p>
    <div class="cover-links">
      <a href="https://github.com/MediaComem/comem-visualdon" target="_blank"><carbon-logo-github /> GitHub</a>
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" style="height: 14px;" /></a>
    </div>
    <div class="cover-meta">
      <span class="cover-author">Noemi Romano</span>
      <a href="mailto:noemi.romano@heig-vd.ch" target="_blank" class="cover-email">noemi.romano@heig-vd.ch</a>
      <span class="cover-date"></span>
    </div>
  </div>
</div>

---
layout: section
---

# Concepts

---
layout: default
---

# Qu'est-ce que le scrollytelling ?

**Scroll** + **Storytelling** = narration guidée par le défilement.

Le lecteur progresse dans un récit en scrollant. Des éléments visuels (graphiques, cartes, images) **se synchronisent** avec le texte au fur et à mesure qu'il défile.

**Pourquoi ça fonctionne :** le scroll est un geste naturel · le rythme est contrôlé par le lecteur · l'attention est maintenue par les transitions visuelles · le contexte narratif donne du sens aux données.

<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0.5rem;margin-top:0.6rem;">

  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <video src="/images/11-scrollytelling/nyt1_480.mp4" autoplay loop muted playsinline style="width:100%;border-radius:4px;object-fit:cover;aspect-ratio:4/3;" />
    <a href="https://www.nytimes.com/interactive/2016/07/07/world/americas/bolivia-climate-change-lake-poopo.html" target="_blank" style="font-size:0.45rem;color:#888;font-family:'Roboto Mono',monospace;line-height:1.4;">NYT : Bolivia Climate Change</a>
  </div>

  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <video src="/images/11-scrollytelling/nyt2_480.mp4" autoplay loop muted playsinline style="width:100%;border-radius:4px;object-fit:cover;aspect-ratio:4/3;" />
    <a href="https://www.nytimes.com/interactive/2016/11/08/us/elections/how-trump-pushed-the-election-map-to-the-right.html" target="_blank" style="font-size:0.45rem;color:#888;font-family:'Roboto Mono',monospace;line-height:1.4;">NYT : Trump Election Map</a>
  </div>

  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <video src="/images/11-scrollytelling/guardian_480.mp4" autoplay loop muted playsinline style="width:100%;border-radius:4px;object-fit:cover;aspect-ratio:4/3;" />
    <a href="https://www.theguardian.com/us-news/ng-interactive/2015/oct/19/homan-square-chicago-police-detainees" target="_blank" style="font-size:0.45rem;color:#888;font-family:'Roboto Mono',monospace;line-height:1.4;">The Guardian : Homan Square</a>
  </div>

  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <video src="/images/11-scrollytelling/polygraph_480.mp4" autoplay loop muted playsinline style="width:100%;border-radius:4px;object-fit:cover;aspect-ratio:4/3;" />
    <a href="http://polygraph.cool/redraft/" target="_blank" style="font-size:0.45rem;color:#888;font-family:'Roboto Mono',monospace;line-height:1.4;">Polygraph : Redraft</a>
  </div>

</div>

<div class="footer">Source · <a href="https://www.nytimes.com/spotlight/graphics" target="_blank">NYT Graphics</a> · <a href="https://www.theguardian.com/" target="_blank">The Guardian</a> · <a href="http://polygraph.cool/redraft/" target="_blank">Polygraph</a> · <a href="https://pudding.cool/process/how-to-implement-scrollytelling/" target="_blank">The Pudding : How to implement scrollytelling</a></div>

---
layout: two-cols
---

# Deux patterns principaux

### Trigger-based (Scrollama)



- L'animation se déclenche **quand une étape est atteinte**
- Discret : l'animation joue une fois
- Idéal pour les **mises à jour de données** (D3, etc.)
- Chaque step = un état du graphique



::right::

<div class="mt-8">

### Scrub-based (GSAP ScrollTrigger)



- L'animation est **liée à la position du scroll**
- Continue : position 0% → 100% = début → fin
- Idéal pour les **animations fluides** (morphing, parallaxe)
- La vitesse du scroll contrôle la vitesse de l'animation



</div>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a> · <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank">GSAP ScrollTrigger</a></div>

---
layout: section
---

# Scrollama

---
layout: two-cols
---

# Scrollama : Installation

```bash
npm install scrollama
```

- Librairie légère (3 kB) pour le scrollytelling
- Basée sur l'**Intersection Observer API** native du navigateur
- Gère la détection des étapes (steps) avec `offset` configurable
- Référence : [github.com/russellsamora/scrollama](https://github.com/russellsamora/scrollama)

**Principe :** Scrollama observe quand chaque `.step` entre/sort du viewport, et déclenche un callback.

::right::

<div class="col-center">
  <img src="/images/11-scrollytelling/scrollama.png" style="height:150px;object-fit:contain;margin-bottom:0.3rem;" />
  <video src="/images/11-scrollytelling/sticky-graphic-pattern.mp4" autoplay loop muted playsinline style="width:100%;flex:1;border-radius:6px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://pudding.cool/process/introducing-scrollama/" target="_blank">The Pudding : Introducing Scrollama</a></div>

---
layout: two-cols
---

# Scrollama : Setup de base

```js
import scrollama from 'scrollama'

// On crée une instance Scrollama
const scroller = scrollama()

scroller
  .setup({
    step: '.step',    // sélecteur CSS des blocs de texte (les étapes)
    offset: 0.5,      // la ligne de déclenchement est au milieu du viewport
    debug: true,      // affiche la ligne de déclenchement (à retirer en prod)
  })
  .onStepEnter((response) => {
    // Déclenché quand une étape entre dans la zone
    // response.element   → l'élément HTML de l'étape
    // response.index     → son numéro (0, 1, 2, ...)
    // response.direction → 'down' si on scrolle vers le bas, 'up' vers le haut
    console.log('Entrée étape', response.index)
  })
  .onStepExit((response) => {
    // Déclenché quand une étape sort de la zone
    console.log('Sortie étape', response.index)
  })
```

::right::

<div class="mt-6">

**L'offset** définit où la ligne de déclenchement se trouve :

```
offset: 0    → haut du viewport
offset: 0.5  → milieu du viewport  ← recommandé
offset: 1    → bas du viewport
```

**HTML minimal :**

```html
<div class="scrolly">
  <figure class="sticky"> ... </figure>
  <section>
    <div class="step">Étape 1</div>
    <div class="step">Étape 2</div>
  </section>
</div>
```

</div>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a></div>

---
layout: two-cols-bottom
---

# Scrollama : Mise à jour D3

```js
import * as d3 from 'd3'
import scrollama from 'scrollama'

// Un état du graphique par étape de scroll
const states = [
  { data: [10, 25], color: '#4a90d9' },
  { data: [10, 25, 40], color: '#f5a623' },
  { data: [10, 25, 40, 70], color: '#E92528' },
]

// Fonction qui met à jour le graphique D3 selon l'étape
function update(stepIndex) {
  const s = states[stepIndex]
  svg.selectAll('rect')
    .data(s.data)
    .join('rect')
    .transition().duration(600) // animation fluide
    .attr('height', d => yScale(d))
    .attr('fill', s.color)
}
```

::right::

```js
scrollama()
  .setup({ step: '.step', offset: 0.5 })
  .onStepEnter(({ index, element }) => {

    // On met à jour le graphique avec les données de cette étape
    update(index)

    // On marque visuellement l'étape active en CSS
    d3.selectAll('.step').classed('active', false)
    d3.select(element).classed('active', true)

  })
  .onStepExit(({ index, direction }) => {

    // Si on remonte, on revient à l'étape précédente
    if (direction === 'up' && index > 0) {
      update(index - 1)
    }

  })
```

::bottom::

<div style="font-size:0.6rem;color:#888;margin-bottom:0.25rem;">
  Exemple complet : <a href="https://github.com/edriessen/scrollytelling-scrollama-d3-demo" target="_blank" style="color:#4a90d9;">github.com/edriessen/scrollytelling-scrollama-d3-demo</a>
</div>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a> · <a href="https://d3js.org/" target="_blank">D3.js</a> · <a href="https://github.com/edriessen/scrollytelling-scrollama-d3-demo" target="_blank">edriessen/scrollytelling-scrollama-d3-demo</a></div>

---
layout: default
---

# Démo : Sticky scroller

<iframe
  src="https://codepen.io/romanoe/embed/qBJjVaR?default-tab=result"
  style="width:100%;height:420px;border:1px solid #e0e0e0;border-radius:6px;"
  allowfullscreen
/>

<div class="footer">Source · <a href="https://codepen.io/romanoe/pen/qBJjVaR" target="_blank">Codepen | romanoe</a> · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a></div>

---
layout: section
---

# GSAP

---
layout: two-cols
---

# GSAP : c'est quoi ?

GSAP permet d'**animer n'importe quel élément HTML** avec une ligne de code.

```bash
npm install gsap
```

C'est la librairie d'animation la plus utilisée sur le web. Elle est rapide, fiable, et fonctionne partout.

Deux usages principaux dans ce cours :

- **Animer des éléments** : déplacements, rotations, apparitions
- **Lier une animation au scroll** avec le plugin ScrollTrigger

::right::

<div class="col-center">
  <img src="/images/11-scrollytelling/gsap.png" style="height:150px;object-fit:contain;margin-bottom:0.3rem;" />
  <video src="/images/11-scrollytelling/gsap.webm" autoplay loop muted playsinline style="width:100%;flex:1;border-radius:6px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://gsap.com/" target="_blank">gsap.com</a></div>

---
layout: default
---

# GSAP : trois mots à retenir

Il y a trois façons de lancer une animation.

<div class="gsap-trio">
  <div class="trio-card">
    <code>gsap.to()</code>
    <p><strong>Va là</strong></p>
    <p class="trio-sub">L'élément part de son état actuel et arrive à la destination.</p>
  </div>
  <div class="trio-card">
    <code>gsap.from()</code>
    <p><strong>Viens de là</strong></p>
    <p class="trio-sub">L'élément apparaît depuis un état invisible. Parfait pour les entrées.</p>
  </div>
  <div class="trio-card">
    <code>gsap.fromTo()</code>
    <p><strong>De A vers B</strong></p>
    <p class="trio-sub">On contrôle à la fois le départ et l'arrivée. Contrôle total.</p>
  </div>
</div>

<style>
.gsap-trio { display: flex; gap: 1rem; margin-top: 1.5rem; }
.trio-card { flex: 1; border: 1px solid #e0e0e0; border-radius: 6px; padding: 1.25rem 1rem; }
.trio-card code { font-family: 'Roboto Mono', monospace; font-size: 0.8rem; background: #f0f0f0; padding: 0.2rem 0.5rem; border-radius: 3px; }
.trio-card p { margin: 0.6rem 0 0; font-size: 0.85rem; }
.trio-sub { color: #888 !important; font-size: 0.75rem !important; margin-top: 0.3rem !important; line-height: 1.5; }
</style>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/" target="_blank">GSAP Docs</a></div>

---
layout: two-cols
---

# gsap.to() et gsap.from()

```js
import gsap from 'gsap'

// Va là : anime VERS un état final
gsap.to('.boite', {
  x: 200,         // bouge de 200px à droite
  rotation: 180,  // tourne de 180°
  duration: 1,    // en 1 seconde
  ease: 'power2.inOut',
})
```

```js
// Viens de là : anime DEPUIS un état de départ
// Parfait pour faire apparaître un élément
gsap.from('.titre', {
  y: -40,      // vient du haut
  opacity: 0,  // commence invisible
  duration: 0.8,
  ease: 'back.out(1.7)',
})
```

::right::

<div class="mt-6">

**Ce qu'on peut animer :**

| Propriété | Effet |
|-----------|-------|
| `x`, `y` | déplacement horizontal / vertical |
| `rotation` | rotation en degrés |
| `scale` | zoom |
| `opacity` | transparence (0 à 1) |
| `duration` | durée en secondes |
| `ease` | style du mouvement |

L'`ease` change complètement le ressenti de l'animation. Voir [gsap.com/docs/v3/Eases](https://gsap.com/docs/v3/Eases/) pour les tester visuellement.

</div>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/" target="_blank">GSAP Docs</a></div>

---
layout: two-cols
---

# La Timeline : animations étape par étape

Quand on veut enchaîner plusieurs animations, on utilise une **timeline**. C'est comme une recette : étape 1, puis étape 2, puis étape 3.

```js
const tl = gsap.timeline()

tl.to('.boite', { x: 200, duration: 0.5 })         // étape 1 : bouge à droite
  .to('.boite', { rotation: 360, duration: 0.5 })   // étape 2 : tourne
  .to('.boite', { scale: 1.5, duration: 0.4 })      // étape 3 : grossit
  .to('.boite', { x: 0, scale: 1, duration: 0.6 })  // étape 4 : revient
```

Par défaut, chaque étape attend que la précédente soit finie. Pour les faire se chevaucher :

```js
tl.to('.a', { x: 100 })
  .to('.b', { y: 100 }, '<')          // en même temps
  .to('.c', { opacity: 0 }, '-=0.2')  // 0.2s avant la fin
```

::right::

<div class="col-center">
  <video src="/images/11-scrollytelling/timeline.webm" autoplay loop muted playsinline style="width:100%;flex:1;border-radius:6px;object-fit:contain;" />
</div>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/GSAP/Timeline/" target="_blank">GSAP Timeline</a></div>

---
layout: default
---

# Démo : GSAP animations

<div class="h-[360px] mt-1">
  <GSAPBasicDemo />
</div>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/" target="_blank">GSAP Docs</a></div>

---
layout: two-cols
---

# ScrollTrigger : l'animation suit le scroll

```js
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// On prépare l'animation — elle ne se lance pas toute seule (paused: true)
const tween = gsap.to('.boite', { x: 400, paused: true })

ScrollTrigger.create({
  trigger: '.boite',     // l'élément qu'on surveille
  start: 'top 80%',     // haut de .boite atteint 80% du viewport → départ
  end: 'bottom 20%',    // bas de .boite atteint 20% du viewport → fin
  scrub: 1,             // l'animation suit le scroll avec 1s de délai
  markers: true,        // affiche les repères visuels (debug)
  animation: tween,     // l'animation à piloter

  // callbacks : déclenchés à des moments précis du scroll
  onEnter:     () => { console.log('entré (scroll bas)') },
  onLeave:     () => { console.log('sorti (scroll bas)') },
  onEnterBack: () => { console.log('entré (scroll haut)') },
  onLeaveBack: () => { console.log('sorti (scroll haut)') },
})
```

::right::

<div style="display:flex;align-items:center;justify-content:center;height:100%;">
  <iframe
    src="https://www.youtube.com/embed/X7IBa7vZjmo?start=62"
    style="width:100%;aspect-ratio:16/9;border:none;border-radius:6px;"
    allowfullscreen
  />
</div>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank">GSAP ScrollTrigger</a></div>

---
layout: default
---

# ScrollTrigger : les paramètres

<div style="font-size:0.72rem;margin-top:0.75rem;">

| Paramètre | Exemple | Rôle |
|-----------|---------|------|
| `trigger` | `'.boite'` | Élément dont on surveille la position |
| `start` | `'top 80%'` | `"bord-trigger bord-viewport"` : quand démarrer |
| `end` | `'bottom 20%'` | Même syntaxe : quand s'arrêter |
| `scrub` | `false` / `true` / `1` | `false` joue une fois · `true` suit le scroll · `1` suit avec délai |
| `markers` | `true` | Affiche les lignes de debug à l'écran |
| `animation` | `tween` | Animation GSAP à contrôler |
| `onEnter` | `() => {}` | Scroll vers le bas : on entre dans la zone |
| `onLeave` | `() => {}` | Scroll vers le bas : on sort de la zone |
| `onEnterBack` | `() => {}` | Scroll vers le haut : on entre à nouveau |
| `onLeaveBack` | `() => {}` | Scroll vers le haut : on sort par le haut |

</div>

<div class="footer">Source · <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank">GSAP ScrollTrigger docs</a></div>

---
layout: default
---

# Démo : GSAP ScrollTrigger

<video src="/images/11-scrollytelling/gsap-codepen-demos.webm" autoplay loop muted playsinline style="width:100%;height:395px;border-radius:6px;object-fit:contain;" />

<div class="footer">Source · <a href="https://codepen.io/collection/DkvGzg" target="_blank">CodePen : GSAP ScrollTrigger collection</a> · <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank">GSAP ScrollTrigger</a></div>

---
layout: section
---

# Scrollama vs GSAP ScrollTrigger

---
layout: default
---

# Quand utiliser quoi ?

<div style="font-size:0.72em">

| Critère | Scrollama | GSAP ScrollTrigger |
|---------|-----------|-------------------|
| **Paradigme** | Trigger discret (enter/exit) | Scrub continu |
| **Mise à jour D3** | ✅ Idéal | ⚠️ Possible mais complexe |
| **Animation fluide** | ⚠️ Manuelle | ✅ Natif |
| **Poids** | 3 kB | 60 kB (avec plugin) |
| **Licence** | MIT (gratuit) | Gratuit (usage perso/open source) |
| **Courbe d'apprentissage** | Faible | Moyenne |
| **Pin / Parallaxe** | ❌ | ✅ |

</div>

> Utilisez **Scrollama** pour synchroniser des étapes narratives avec des graphiques D3.
> Utilisez **GSAP ScrollTrigger** pour des animations visuelles continues et du parallaxe.



<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a> · <a href="https://gsap.com/" target="_blank">GSAP</a></div>

---
layout: section
---

# Autres outils

---
layout: default
---

# Autres outils de scrollytelling

| Outil | Description | Lien |
|-------|-------------|------|
| **Intersection Observer** | API native du navigateur, base de Scrollama | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |
| **ScrollMagic** | Scènes configurables, ancêtre de ScrollTrigger | [scrollmagic.io](https://scrollmagic.io/) |
| **Locomotive Scroll** | Smooth scroll + effets de parallaxe | [locomotivemtl.github.io](https://locomotivemtl.github.io/locomotive-scroll/) |
| **Lenis** | Smooth scroll ultra-léger, compatible GSAP | [lenis.dev](https://lenis.dev/) |



**Recommandation pour ce cours :**

- **Scrollama + D3** → scrollytelling narratif avec données
- **GSAP ScrollTrigger** → animations visuelles avancées
- **Intersection Observer** → si pas de dépendances souhaitées



<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a> · <a href="https://gsap.com/" target="_blank">GSAP</a> · <a href="https://lenis.dev/" target="_blank">Lenis</a></div>

---
layout: two-cols
---

# Ressources

### Documentation



- [Scrollama (GitHub)](https://github.com/russellsamora/scrollama)
- [GSAP Docs](https://gsap.com/docs/v3/)
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/)
- [Intersection Observer (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)



::right::

<div class="mt-12">

### Galeries & tutoriels



- [The Pudding : How to](https://pudding.cool/process/how-to-implement-scrollytelling/)
- [NYT Graphics](https://www.nytimes.com/spotlight/graphics)
- [Reuters Graphics](https://graphics.reuters.com/)
- [Scrollama + D3 demo (GitHub)](https://github.com/edriessen/scrollytelling-scrollama-d3-demo)
- [GSAP ScrollTrigger démos](https://gsap.com/showcase/)



</div>

<div class="footer">Source · <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a> · <a href="https://gsap.com/" target="_blank">GSAP</a></div>

---
layout: statement
---

# Semaine prochaine

Alternatives à D3

---
layout: end
---

# Merci !

VisualDon : HEIG-VD / COMEM+
