---
theme: default
title: "10 - Éthique et biais"
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
    <h1 class="cover-title">10 - Éthique et biais</h1>
    <p class="cover-subtitle">Visualisation de Données</p>
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

# Dos and Don'ts classiques

Les règles de base

---
layout: default
---

<div style="position:relative;width:100%;height:100%;background:white;">
  <img src="/images/10-do-and-donts/truncated_axis.svg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">Couper l'axe Y</strong>
  </div>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;background:white;">
  <img src="/images/10-do-and-donts/truncated_axis2.svg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">Couper l'axe Y — correction</strong>
  </div>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;">
  <img src="/images/10-do-and-donts/comparer-pomme-et-poires.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">Comparer des pommes avec des poires</strong>
  </div>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;">
  <img src="/images/10-do-and-donts/consommation-de-chocolat-et-prix-nobel.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
</div>

---
layout: two-cols
---

# Corrélation ≠ Causalité

Des courbes qui se ressemblent ne prouvent aucun lien de cause à effet. D'autres facteurs non représentés peuvent influencer les deux variables simultanément.

**Exemple :** la consommation de chocolat par habitant·e et le nombre de prix Nobel suivent la même tendance — mais l'un n'explique pas l'autre.

**Règle :** toujours chercher un mécanisme explicatif, et nommer les limites de l'analyse.

<div class="footer">Source · <a href="https://www.tylervigen.com/spurious-correlations">tylervigen.com — Spurious Correlations</a> · <a href="https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/">EEA Design System</a></div>

::right::

<img src="/images/10-do-and-donts/Dont confuse correlation with causation.png" style="width:100%;height:100%;object-fit:contain;" />

---
layout: two-cols
---

<figure style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;">
  <img src="/images/10-do-and-donts/image-asset.png" style="max-height:380px;width:100%;object-fit:contain;" />
  <figcaption>Scarr · South China Morning Post · 2011</figcaption>
</figure>

::right::

<div v-click style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;">
  <figure style="margin:0;width:100%;">
    <img src="/images/10-do-and-donts/iraq_inverse.png" style="max-height:380px;width:100%;object-fit:contain;" />
    <figcaption>Cotgreave · 2014</figcaption>
  </figure>
</div>

---
layout: two-cols
---

# Même donnée, message opposé

- **Axe inversé** → barres « tombent » comme du sang (Scarr)
- **Axe conventionnel** → baisse des décès lisible (Cotgreave)
- **Orientation de l'axe** construit le récit
- **Couleur et métaphore visuelle** amplifient le message
- Données identiques — messages opposés

<div class="footer">Source · Simon Scarr · South China Morning Post (2011) · Andy Cotgreave (2014)</div>

::right::

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;height:100%;align-items:center;">
  <figure style="margin:0;">
    <img src="/images/10-do-and-donts/image-asset.png" style="width:100%;max-height:380px;object-fit:contain;" />
    <figcaption>Scarr · 2011</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/10-do-and-donts/iraq_inverse.png" style="width:100%;max-height:380px;object-fit:contain;" />
    <figcaption>Cotgreave · 2014</figcaption>
  </figure>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;">
  <img src="/images/10-do-and-donts/tumblr_p3utcdJEdu1sgh0voo1_1280.jpg" style="position:absolute;top:1.5rem;left:3rem;right:3rem;bottom:3rem;width:calc(100% - 6rem);height:calc(100% - 4.5rem);object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">Doser l'information</strong>
  </div>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;">
  <img src="/images/10-do-and-donts/aa959d6be07333834c540a138fecada9--line-chart-data-visualization.jpg" style="position:absolute;top:1.5rem;left:3rem;right:3rem;bottom:3rem;width:calc(100% - 6rem);height:calc(100% - 4.5rem);object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">La 3D déforme la perception</strong>
  </div>
</div>

---
layout: default
---

<div style="position:relative;width:100%;height:100%;">
  <img src="/images/10-do-and-donts/ventes-cumulées.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
  <div v-click style="position:absolute;bottom:0;left:0;right:0;background:white;border-top:2px solid #222;padding:0.6rem;text-align:center;">
    <strong style="font-size:1.3rem;color:#222;">Cumulation trompeuse</strong>
    <span style="display:block;font-size:0.8rem;color:#555;">Apple · Cumulative iPad sales chart · 2013</span>
  </div>
</div>

---
layout: two-cols
---

# Couleurs accessibles

Environ **8% des hommes** et **0,5% des femmes** présentent une forme de daltonisme.

**Stratégies :**

- Utiliser le contraste clair/foncé, pas uniquement la couleur
- Compléter avec des formes, motifs ou textures
- Éviter le rouge/vert seuls pour marquer une différence
- Tester avec des simulateurs : Coblis, Spectrum, Colorblinding

<div class="footer">Source · <a href="https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/">EEA Design System — Make charts easy to read</a></div>

::right::

<img src="/images/10-do-and-donts/Be aware of colour blindness 1.png" style="width:100%;height:100%;object-fit:contain;background:white;" />

---
layout: two-cols
---

# Orienter les barres

Tourner les barres horizontalement quand **les noms de catégories sont longs**.

**Pourquoi ?**

- Les étiquettes longues se chevauchent et deviennent illisibles à la verticale
- Le regard lit de gauche à droite — les barres horizontales facilitent la comparaison
- Plus d'espace pour les étiquettes sans rotation

<div class="footer">Source · <a href="https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/">EEA Design System — Make charts easy to read</a></div>

::right::

<img src="/images/10-do-and-donts/Rotate bar chart.png" style="width:100%;height:100%;object-fit:contain;background:white;" />

---
layout: two-cols
---

# Ordonner les données

Trier par **valeur de la donnée**, pas par ordre alphabétique ou arbitraire.

**Pourquoi ?**

- Facilite la comparaison et le repérage du maximum/minimum
- L'ordre alphabétique n'a aucun sens statistique
- Pour les camemberts : commencer à 12h avec la plus grande tranche

**Exception :** si l'ordre naturel a un sens (mois, tranches d'âge), le conserver.

<div class="footer">Source · <a href="https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/">EEA Design System — Make charts easy to read</a></div>

::right::

<img src="/images/10-do-and-donts/sort data for easy comparisons 1.png" style="width:100%;height:100%;object-fit:contain;background:white;" />

---
layout: section
---

# Au-delà des graphiques

Les biais plus profonds

---
layout: two-cols
---

# Les données ne sont jamais neutres

| Question | Observation | Exemple |
|----------|-------------|---------|
| **Qui collecte ?** | Données = priorités des financeur·euse·s | Statistiques coloniales pour administrer |
| **Qui est compté·e ?** | Populations marginalisées absentes | Sans-abri hors recensements classiques |
| **Qui est absent·e ?** | L'absence de données est une donnée | Pas de stats ethniques en Suisse |

<div class="footer">Source · <a href="https://data-feminism.mitpress.mit.edu/">D'Ignazio & Klein, <em>Data Feminism</em> (2020)</a></div>

::right::

<figure style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;">
  <img src="/images/01-introduction/data_feminism.avif" style="max-height:260px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3));" />
  <figcaption>D'Ignazio & Klein · Data Feminism · 2020</figcaption>
</figure>

---
layout: section
---

# Biais algorithmiques

Quand les machines reproduisent nos préjugés

---
layout: default
---

# Sources et conséquences des biais

**Sources de biais :**

| Source | Exemple |
|--------|---------|
| **Données d'entraînement** | Historique discriminatoire utilisé comme vérité |
| **Objectifs d'optimisation** | Maximiser l'engagement favorise le contenu extrême |
| **Boucles de rétroaction** | Les prédictions influencent la réalité qu'elles mesurent |
| **Choix de design** | Quelles variables inclure, lesquelles ignorer ? |

**Conséquences :**

- Discrimination systématique à grande échelle
- Opacité : décisions automatisées sans explication
- Difficulté à contester (boîte noire)

<div class="footer">Source · <a href="https://nyupress.org/9781479837243/algorithms-of-oppression/">Noble, <em>Algorithms of Oppression</em> (2018)</a></div>

---
layout: two-cols
---

# Le cas COMPAS

- Utilisé par les tribunaux américains
- Prédit le risque de récidive (score de 1 à 10)
- Influence les décisions de libération conditionnelle

**ProPublica (2016)** — enquête sur 7 000 détenu·e·s :

- Taux de faux positifs **2x plus élevé** pour les personnes racisées
- Taux de faux négatifs **2x plus élevé** pour les personnes non racisées
- Le score intégrait des variables corrélées au phénotype

<div class="footer">Source · <a href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing">ProPublica — Machine Bias (2016)</a></div>

::right::

<div style="display:flex;flex-direction:column;gap:1rem;height:100%;justify-content:center;">
  <figure style="margin:0;">
    <img src="/images/10-do-and-donts/compas.webp" style="width:100%;max-height:190px;object-fit:contain;" />
    <figcaption><a href="https://medium.com/@danaytaman/algorithmic-bias-in-data-and-machine-learning-models-cc3ac681b440">Dayana Taman · Medium</a></figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/10-do-and-donts/Risk3.png" style="width:100%;max-height:190px;object-fit:contain;" />
    <figcaption>Shoili · <a href="https://www.newsclick.in/algorithms-are-just-biased-and-wrong-humans">Newsclick</a></figcaption>
  </figure>
</div>

---
layout: section
---

# Biais cognitifs

Comment notre cerveau déforme l'interprétation des données

---
layout: two-cols
---

# Le Codex des biais cognitifs

**Buster Benson** et **John Manoogian III** ont recensé et catégorisé **180+ biais cognitifs** qui affectent notre façon de percevoir et d'interpréter l'information.

**4 grandes catégories :**

- **Trop d'information** → filtrage sélectif, on ne retient que ce qui confirme nos croyances
- **Manque de sens** → on comble les lacunes avec des hypothèses
- **Agir vite** → on simplifie pour décider rapidement
- **Se souvenir** → la mémoire reconstruit, elle ne reproduit pas

<div class="footer">Source · <a href="https://renaudfulconis.com/biais-cognitifs/">Renaud Fulconis</a> · <a href="https://medium.com/thinking-is-hard/4-conundrums-of-intelligence-2ab78d90740f">Buster Benson</a> · <a href="https://fr.wikipedia.org/wiki/Fichier:The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg">Wikimedia Commons</a></div>

::right::

<figure style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;">
  <a href="https://upload.wikimedia.org/wikipedia/commons/1/16/The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg" style="max-height:370px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.2));cursor:pointer;" />
  </a>
  <figcaption>The Cognitive Bias Codex · Manoogian III · cliquer pour agrandir</figcaption>
</figure>

---
layout: section
---

# Implications pour la visualisation

---
layout: two-cols
---

# Le Quartet d'Anscombe

Quatre datasets aux **statistiques identiques** (moyenne, variance, corrélation, droite de régression) mais aux formes radicalement différentes.

**Leçon :** les statistiques résumées masquent la réalité. Visualiser avant de conclure !

| Statistique | Valeur |
|-------------|--------|
| Moyenne x | 9.0 |
| Moyenne y | 7.5 |
| Variance x | 11.0 |
| Corrélation | 0.816 |

<div class="footer">Source · <a href="https://fr.wikipedia.org/wiki/Quartet_d%27Anscombe">Anscombe, F.J. (1973)</a> · <a href="https://en.wikipedia.org/wiki/Anscombe%27s_quartet">Wikipedia</a></div>

::right::

<figure style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Anscombe.svg" style="max-height:370px;width:100%;object-fit:contain;" />
  <figcaption>Anscombe's Quartet · Wikimedia Commons</figcaption>
</figure>

---
layout: two-cols
---

# La visualisation amplifie les biais

**Si les données sont biaisées, la visualisation l'est aussi :**

- Présenter des données non-représentatives comme universelles
- Masquer l'incertitude ou les limites de l'échantillon
- Choisir une échelle qui dramatise ou minimise un phénomène

<div class="footer">Source · <a href="https://data-feminism.mitpress.mit.edu/">D'Ignazio & Klein, <em>Data Feminism</em></a></div>

::right::

<div style="display:flex;flex-direction:column;gap:1rem;height:100%;justify-content:center;">
  <div style="border:2px solid #222;padding:0.75rem 1rem;border-radius:4px;">
    <strong>Questions à se poser avant de publier :</strong>
    <ul style="margin:0.5rem 0 0;">
      <li>Qui a collecté ces données, dans quel but ?</li>
      <li>Qui est absent·e de ces données ?</li>
      <li>Quel récit cette visualisation construit-elle ?</li>
      <li>Qui pourrait être lésé·e par cette représentation ?</li>
    </ul>
  </div>
  <figure style="margin:0;display:flex;justify-content:center;">
    <img src="/images/10-do-and-donts/megaphone.jpg" style="max-height:230px;object-fit:contain;" />
  </figure>
</div>

---
layout: default
---

# Bonnes pratiques

| Pratique | Pourquoi |
|----------|----------|
| **Sourcer les données** | Permet de vérifier et de contextualiser |
| **Montrer l'incertitude** | Intervalles de confiance, marges d'erreur |
| **Contextualiser les absences** | Nommer ce qui n'est pas mesuré |
| **Design accessible** | Daltonisme, contrastes, lisibilité |
| **Être transparent·e sur les choix** | Échelles, projections, filtres appliqués |

<div class="footer">Source · Cairo, <em>The Truthful Art</em> (2016)</div>

---
layout: two-cols
---

# Résumé — Dos and Don'ts

### À éviter

- Axes tronqués (couper l'axe Y)
- 3D inutile (distorsion visuelle)
- Camemberts à plus de 5 parts
- Double axe Y (corrélation illusoire)
- Légendes absentes ou ambiguës
- Couleurs non accessibles

::right::

<div>

### À privilégier

- Commencer les axes à 0
- 2D par défaut
- Barres plutôt que camemberts
- Annoter directement sur le graphique
- Sourcer les données
- Tester l'accessibilité (daltonisme)

</div>

<div class="footer">Source · Cairo, <em>The Truthful Art</em> (2016) · Tufte, <em>The Visual Display of Quantitative Information</em></div>

---
layout: two-cols
---

# Ressources

### Références

- [D'Ignazio & Klein — Data Feminism](https://data-feminism.mitpress.mit.edu/)
- [ProPublica — Machine Bias](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
- [Noble — Algorithms of Oppression](https://nyupress.org/9781479837243/algorithms-of-oppression/)
- [EEA Design System — Maps and Charts](https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/)
- [Tyler Vigen — Spurious Correlations](https://www.tylervigen.com/spurious-correlations)
- [Codex des biais cognitifs (FR)](https://fr.wikipedia.org/wiki/Fichier:The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg)
- [The Markup — Shadowbanning sur Instagram](https://themarkup.org/automated-censorship/2024/02/25/how-we-investigated-shadowbanning-on-instagram)

::right::

<div>

### Lectures complémentaires

- Cairo, *The Truthful Art* (2016)
- Tufte, *The Visual Display of Quantitative Information*
- [Buster Benson — 4 Conundrums of Intelligence](https://medium.com/thinking-is-hard/4-conundrums-of-intelligence-2ab78d90740f)
- [EFF — Electronic Frontier Foundation](https://www.eff.org/)
- [Citizen Lab](https://citizenlab.ca/)

</div>

<div class="footer">Source · <a href="https://data-feminism.mitpress.mit.edu/">Data Feminism</a> · <a href="https://eea.github.io/volto-eea-design-system/docs/category/maps-and-charts/">EEA Design System</a></div>

---
layout: statement
---

# Semaine prochaine

Scrollytelling

---
layout: end
---

# Merci !

VisualDon -- HEIG-VD / COMEM+
