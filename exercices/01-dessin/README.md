# 01 · Dessiner avec du code

Chaque exercice est à réaliser **deux fois** : une fois en **SVG** (déclaratif) et une fois en **HTML Canvas** (impératif). L'objectif est de comprendre concrètement la différence entre les deux approches sur les mêmes formes.

---

## 1. Formes de base

### Rectangle

**SVG** — Dessiner un rectangle rouge de 800px de largeur et 300px de hauteur.

```html
<svg width="800" height="300">
  <rect ... />
</svg>
```

**Canvas** — Dessiner le même rectangle avec `ctx.fillRect()`.

```javascript
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// à compléter
```

---

### Donut 🍩

**SVG** — Dessiner un donut avec contours noirs, sans remplissage, centré en (100, 100), rayon intérieur 30px et extérieur 60px.

Astuce : utiliser `<path>` avec deux arcs, ou `<circle>` avec `clip-path`.

**Canvas** — Même donut avec `ctx.arc()`. Pour créer le trou : tracer l'arc extérieur dans le sens horaire, puis l'arc intérieur dans le sens antihoraire.

```javascript
ctx.beginPath();
ctx.arc(100, 100, 60, 0, Math.PI * 2);        // cercle extérieur (horaire)
ctx.arc(100, 100, 30, 0, Math.PI * 2, true);  // cercle intérieur (antihoraire = trou)
ctx.strokeStyle = 'black';
ctx.stroke();
```

---

### Ligne

**SVG** — Créer une ligne passant par A (70px, 90px), d'une longueur de 100px et d'une pente de 5.

```html
<line x1="70" y1="90" x2="..." y2="..." stroke="black" />
```

**Canvas** — Même ligne avec `ctx.moveTo()` et `ctx.lineTo()`.

```javascript
ctx.beginPath();
ctx.moveTo(70, 90);
ctx.lineTo(/* x2 */, /* y2 */);
ctx.stroke();
```

---

### Chemin libre

**SVG** — Écrire la première lettre de votre prénom avec `<path>` en combinant `M`, `L`, `H`, `V`, `C`.

**Canvas** — Tracer la même lettre avec `ctx.beginPath()`, `ctx.moveTo()`, `ctx.lineTo()`, `ctx.bezierCurveTo()`.

```javascript
ctx.beginPath();
ctx.moveTo(/* ... */);
ctx.lineTo(/* ... */);
// autant de segments que nécessaire
ctx.stroke();
```

---

## 2. Animer des formes

### On click — changer de couleur

**SVG** — Changer la couleur du rectangle au clic (revenir à la couleur initiale au deuxième clic).

```javascript
const rect = document.querySelector('rect');
rect.addEventListener('click', () => {
  // à compléter
});
```

**Canvas** — Même comportement : détecter le clic, vérifier si les coordonnées tombent dans le rectangle, effacer et redessiner avec la nouvelle couleur.

```javascript
let isRed = true;
canvas.addEventListener('click', (e) => {
  const { offsetX, offsetY } = e;
  // vérifier si le clic est dans le rectangle
  // ctx.clearRect(...) puis redessiner
});
```

---

### On hover — agrandir le donut

**SVG** — Agrandir le rayon extérieur du donut au survol.

**Canvas** — Au `mousemove`, calculer si la souris est dans la zone annulaire (distance au centre entre rayon intérieur et extérieur), effacer et redessiner avec le rayon agrandi.

```javascript
canvas.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  const dist = Math.sqrt((offsetX - 100) ** 2 + (offsetY - 100) ** 2);
  const isHovered = dist >= 30 && dist <= 60;
  // ctx.clearRect(...) puis redessiner avec le bon rayon
});
```

---

### Animation le long d'un chemin

**SVG** — Faire bouger une forme le long de la lettre tracée avec `<animateMotion>`.

```html
<animateMotion dur="2s" repeatCount="indefinite">
  <mpath href="#ma-lettre" />
</animateMotion>
```

**Canvas** — Faire bouger une forme le long du même chemin avec `requestAnimationFrame`. Paramétrer la position avec un `t` (entre 0 et 1) progressant le long des segments.

```javascript
let t = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // calculer la position courante sur le chemin selon t
  // dessiner la lettre + la forme mobile
  t = (t + 0.005) % 1;
  requestAnimationFrame(animate);
}
animate();
```
