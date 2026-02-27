---
theme: default
title: "10 - Éthique et biais"
drawings:
  persist: false
transition: slide-left
mdc: true
layout: none
---

<div class="cover-custom">
  <img src="/images/logo.png" class="cover-logo" />
  <div class="cover-content">
    <h1 class="cover-title">10 — Éthique et biais</h1>
    <p class="cover-subtitle">Visualiser de manière responsable</p>
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

Les regles de base

---
layout: two-cols
---

# Erreurs classiques vs bonnes pratiques

### A eviter

<v-clicks>

- Axes tronques (couper l'axe Y)
- 3D inutile (distorsion visuelle)
- Camemberts a plus de 5 parts
- Double axe Y (correlation illusoire)
- Legendes absentes ou ambigues
- Couleurs non accessibles

</v-clicks>

::right::

<div class="mt-12">

### A privilegier

<v-clicks>

- Commencer les axes a 0
- 2D par defaut
- Barres plutot que camemberts
- Annoter directement sur le graphique
- Sourcer les données
- Tester l'accessibilité (daltonisme)

</v-clicks>

</div>

<div class="footer">Source · Cairo, <em>The Truthful Art</em> (2016) · Tufte, <em>The Visual Display of Quantitative Information</em></div>

---
layout: quote
---

# "Raw data is an oxymoron."

Lisa Gitelman, *Raw Data Is an Oxymoron* (2013)

---
layout: section
---

# Au-dela des graphiques

Les biais plus profonds

---
layout: default
---

# Les données ne sont jamais neutres

<v-clicks>

**Qui collecté ?**
- Les données refletent les priorites de ceux qui les financent
- Exemple : les statistiques coloniales servaient a administrer, pas a comprendre

**Qui est compte ?**
- Les populations marginalisées sont systematiquement sous-représentées
- Exemple : les sans-abri sont absents des recensements classiques

**Qui est absent ?**
- L'absence de données est elle-meme une donnee
- Exemple : pas de statistiques ethniques en Suisse -- invisibilite des discriminations ?

</v-clicks>

<div class="footer">Source · <a href="https://data-feminism.mitpress.mit.edu/">D'Ignazio & Klein, <em>Data Feminism</em></a></div>

---
layout: section
---

# Biais algorithmiques

Quand les machines reproduisent nos préjugés

---
layout: default
---

# Sources et consequences des biais

<v-clicks>

**Sources de biais :**

| Source | Exemple |
|--------|---------|
| **Données d'entrainement** | Historique discriminatoire utilisé comme verite |
| **Objectifs d'optimisation** | Maximiser l'engagement favorise le contenu extreme |
| **Boucles de retroaction** | Les predictions influencent la realite qu'elles mesurent |
| **Choix de design** | Quelles variables inclure, lesquelles ignorer ? |

**Consequences :**

- Discrimination systematique a grande echelle
- Opacite : decisions automatisees sans explication
- Difficulte a contester (boite noire)

</v-clicks>

<div class="footer">Source · <a href="https://nyupress.org/9781479837243/algorithms-of-oppression/">Noble, <em>Algorithms of Oppression</em> (2018)</a></div>

---
layout: two-cols
---

# Le cas COMPAS

### Le système

<v-clicks>

- Utilise par les tribunaux americains
- Predit le risque de recidive
- Score de 1 a 10
- Influence les decisions de liberation conditionnelle

</v-clicks>

::right::

<div class="mt-12">

### Les biais decouverts

<v-clicks>

- **ProPublica (2016)** : enquete sur 7 000 detenus
- Taux de faux positifs 2x plus eleve pour les Noirs
- Taux de faux negatifs 2x plus eleve pour les Blancs
- Le score intégrait des variables correlees a la race
- Northpointe (editeur) a conteste en utilisant d'autres metriques

Source : [ProPublica, *Machine Bias*](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)

</v-clicks>

</div>

<div class="footer">Source · <a href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing">ProPublica — Machine Bias (2016)</a></div>

---
layout: section
---

# Moderation algorithmique

Le cas des réseaux sociaux

---
layout: default
---

# Biais documentes

| Plateforme | Biais documente | Source |
|------------|-----------------|--------|
| **Instagram / Meta** | Algorithme favorise les corps minces et blancs dans l'onglet Explorer | The Intercept, 2024 |
| **TikTok** | Suppression de contenus de personnes handicapees, LGBTQ+, "laides" | The Intercept, 2020 |
| **YouTube** | Radicalisation par recommandation : contenu de plus en plus extreme | Ribeiro et al., 2020 |
| **Facebook** | Amplification de contenus divisifs car plus d'engagement | WSJ, *Facebook Files*, 2021 |

<div class="footer">Source · <a href="https://www.eff.org/">EFF</a> · <a href="https://citizenlab.ca/">Citizen Lab</a></div>

---
layout: default
---

# Shadowban

<v-clicks>

**Définition :** réduction de la visibilite d'un compte ou d'un contenu sans notification a l'utilisateur.

**Qui est affecte ?**

- Travailleuses du sexe (suppression de revenus)
- Militants politiques (réduction de la portee)
- Communautes LGBTQ+ (contenus classes comme "sensibles")
- Createurs racises (moindre visibilite dans les recommandations)

**Probleme fondamental :** absence de transparence et d'appel possible.

</v-clicks>

<div class="footer">Source · <a href="https://www.eff.org/">EFF</a> · <a href="https://citizenlab.ca/">Citizen Lab</a></div>

---
layout: default
---

# Algospeak

<v-clicks>

**Définition :** langage code utilisé pour contourner la moderation algorithmique.

**Exemples :**

| Terme original | Algospeak |
|----------------|-----------|
| Mort / suicide | "unalive" |
| Sexe | "seggs" |
| Drogue | "spicy lettuce" |
| COVID | "Miss Rona" |
| Racisme | "le mot en R" |

**Paradoxe :** les plateformes apprennent a detecter l'algospeak, ce qui pousse a inventer de nouveaux codes -- course sans fin entre utilisateurs et algorithmes.

</v-clicks>

<div class="footer">Source · <a href="https://www.eff.org/">EFF</a> · <a href="https://citizenlab.ca/">Citizen Lab</a></div>

---
layout: section
---

# Implications pour la visualisation

---
layout
