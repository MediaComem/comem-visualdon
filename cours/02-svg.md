---
theme: none
title: "02 - SVG"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

# 02 -- SVG

Dessiner avec du code

---
layout: quote
---

# "D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG and CSS."

d3js.org

---
layout: section
---

# SVG

---
layout: default
---

# Qu'est-ce que SVG ?

**Scalable Vector Graphics**

<v-clicks>

- Format d'image base sur **XML**
- Images **vectorielles** (pas bitmap)
- Resolution independante : pas de pixelisation au zoom
- Manipulable via le **DOM** (comme du HTML)
- Stylable avec **CSS**
- Standard W3C depuis 2001

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN — SVG</a> · <a href="https://www.w3.org/Graphics/SVG/">W3C SVG</a></div>

---
layout: default
---

# Syntaxe SVG

Un document SVG est du balisage XML intégre dans une page HTML.

```html
<svg width="400" height="300" viewBox="0 0 400 300">
  <!-- Les éléments graphiques vont ici -->
  <rect x="10" y="10" width="100" height="50" fill="black" />
</svg>
```

<v-clicks>

- `width` / `height` : dimensions du conteneur en pixels
- `viewBox` : système de coordonnées interne (`min-x min-y width height`)
- Le `viewBox` permet de rendre le SVG responsive

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">MDN — SVG Tutorial</a></div>

---
layout: default
---

# Système de coordonnées

```
(0,0) -----> x
  |
  |
  |
  v
  y
```

<v-clicks>

- L'origine `(0, 0)` est en **haut a gauche**
- L'axe **x** va de gauche a droite
- L'axe **y** va de haut en bas (inverse du système mathématique classique)
- Toutes les positions sont définies dans ce repere

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Positions">MDN — SVG Positions</a></div>

---
layout: section
---

# Formes et texte

---
layout: default
---

# Formes de base

```html
<!-- Rectangle -->
<rect x="10" y="10" width="100" height="50" />

<!-- Cercle -->
<circle cx="200" cy="50" r="40" />

<!-- Ligne -->
<line x1="10" y1="120" x2="200" y2="120" stroke="black" />

<!-- Ellipse -->
<ellipse cx="100" cy="200" rx="80" ry="40" />

<!-- Polygone -->
<polygon points="300,10 350,90 250,90" />
```

<v-clicks>

- `rect` : position (`x`, `y`), dimensions (`width`, `height`)
- `circle` : centre (`cx`, `cy`), rayon (`r`)
- `line` : point de depart (`x1`, `y1`), point d'arrivee (`x2`, `y2`)
- `ellipse` : centre (`cx`, `cy`), rayons (`rx`, `ry`)
- `polygon` : liste de points (`points`)

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes">MDN — SVG Basic Shapes</a></div>

---
layout: default
---

# Texte

```html
<text x="50" y="50" font-family="Roboto" font-size="16">
  Texte dans SVG
</text>

<text x="50" y="80" text-anchor="middle" dominant-baseline="central">
  Texte centre
</text>
```

<v-clicks>

- `x`, `y` : position du texte
- `font-family`, `font-size` : typographie
- `text-anchor` : alignement horizontal (`start`, `middle`, `end`)
- `dominant-baseline` : alignement vertical

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text">MDN — SVG text</a></div>

---
layout: default
---

# Couleurs et styles

```html
<rect x="10" y="10" width="100" height="50"
      fill="#333333"
      stroke="black"
      stroke-width="2"
      opacity="0.8" />
```

<v-clicks>

- `fill` : couleur de remplissage (nom, hex, rgb, `none`)
- `stroke` : couleur du contour
- `stroke-width` : epaisseur du contour
- `opacity` : transparence globale (0 a 1)
- `fill-opacity` / `stroke-opacity` : transparence separee
- Les styles peuvent aussi etre définis en CSS

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes">MDN — SVG Fills and Strokes</a></div>

---
layout: section
---

# Chemins et groupes

---
layout: default
---

# L'element path

Le `<path>` est l'element le plus puissant de SVG. Son attribut `d` contient une serie de commandes.

```html
<path d="M 10 10 L 100 10 L 100 100 Z" fill="none" stroke="black" />
```

<v-clicks>

| Commande | Signification |
|----------|---------------|
| `M x y` | Move to (deplacer sans tracer) |
| `L x y` | Line to (tracer une ligne) |
| `H x` | Horizontal line to |
| `V y` | Vertical line to |
| `C x1 y1 x2 y2 x y` | Courbe de Bezier cubique |
| `Z` | Fermer le chemin |

Les commandes en minuscules (`m`, `l`, `h`, `v`, `c`) utilisent des coordonnées **relatives**.

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">MDN — SVG Paths</a></div>

---
layout: default
---

# Groupes

L'element `<g>` permet de regrouper des éléments SVG.

```html
<g fill="gray" stroke="black" stroke-width="1">
  <rect x="10" y="10" width="50" height="50" />
  <rect x="70" y="10" width="50" height="50" />
  <rect x="130" y="10" width="50" height="50" />
</g>
```

<v-clicks>

- Les attributs du groupe sont **herites** par les enfants
- Utile pour appliquer des **transformations** communes
- Permet d'organiser le code SVG de manière logique
- Equivalent d'un `<div>` en HTML

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g">MDN — SVG g element</a></div>

---
layout: section
---

# Transformations

---
layout: default
---

# translate, rotate, scale

```html
<!-- Deplacer de 100px a droite et 50px en bas -->
<rect transform="translate(100, 50)" width="50" height="50" />

<!-- Rotation de 45 degres autour du point (75, 75) -->
<rect transform="rotate(45, 75, 75)" x="50" y="50" width="50" height="50" />

<!-- Agrandir 2x -->
<rect transform="scale(2)" x="10" y="10" width="50" height="50" />

<!-- Combiner des transformations -->
<g transform="translate(200, 100) rotate(30) scale(1.5)">
  <circle r="20" />
</g>
```

<v-clicks>

- `translate(x, y)` : deplace l'element
- `rotate(angle, cx, cy)` : rotation autour d'un point
- `scale(sx, sy)` : mise a l'echelle
- Les transformations se **combinent** de droite a gauche

</v-clicks>

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform">MDN — SVG transform</a></div>

---
layout: default
---

# Animations SVG

Deux approches possibles :

```html
<!-- Avec SMIL (natif SVG) -->
<circle cx="50" cy="50" r="20">
  <animate attributeName="cx" from="50" to="300" dur="2s"
           repeatCount="indefinite" />
</circle>

<!-- Avec animateTransform -->
<rect width="50" height="50">
  <animateTransform attributeName="transform" type="rotate"
                    from="0 25 25" to="360 25 25" dur="3s"
                    repeatCount="indefinite" />
</rect>
```

```css
/* Alternative CSS */
circle {
  transition: cx 0.3s ease;
}
circle:hover {
  cx: 300px;
}
```

<div class="footer">Source · <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL">MDN — SVG SMIL Animation</a></div>

---
layout: statement
---

# Semaine prochaine

D3.js : manipuler le DOM avec les données

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
