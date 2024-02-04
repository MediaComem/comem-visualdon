<script>
  import Slide from "../lib/Slide.svelte";
  import Title from "../lib/Title.svelte";
  import Code from "../lib/Code.svelte";
</script>

<Title title="1. SVG"></Title>

<Slide>
  <h3>D3 & SVG</h3>
  <blockquote cite="https://d3js.org/">
    D3.js is a JavaScript library for manipulating documents based on data. D3
    helps you bring data to life using HTML, <b class="red">SVG</b> and CSS
  </blockquote>
</Slide>

<Slide>
  <div class="row no-margin-top center">
    <div class="col-50">
      <h3 class="red">SVG</h3>
      <span class="red">S</span>calable <span class="red">V</span>ector
      <span class="red">G</span>raphics <br />
      (<em>graphique vectoriel adaptable</em>)
    </div>
    <div class="col-50">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Bitmap_VS_SVG_Fr.svg"
        alt="bitmap_svg"
      />
    </div>
  </div>
  <small
    ><a href="https://developer.mozilla.org/en-US/docs/Web/SVG"
      ><p>
        <code class="red"> ↳ MDN: Scalable Vector Graphics (SVG)</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <div class="row no-margin-top center">
    <div class="col-40">
      <h3 class="red">Syntaxe SVG</h3>
      <ul>
        <li class="small">
          Langage de balisage XML (eXtensible Markup Language)
        </li>
        <li class="small">
          Le document SVG est délimité par la balise <code class="red"
            >&lt;svg&gt;</code
          >
        </li>
        <li class="small">
          <b>Attributs</b> : <code class="red">width</code> et
          <code class="red">height</code>
          définissent la largeur et la hauteur du conteneur SVG.
          <code class="red">viewBox</code> spécifie la boîte englobante utilisée
          pour définir la vue sur le contenu SVG
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img src="assets/01-intro-svg/svg_syntax.png" alt="svg-syntax" />
    </div>
  </div>
</Slide>

<Slide>
  <div class="row no-margin-top center">
    <div class="col-50">
      <h3>Système de coordonnées</h3>
      <ul>
        <li class="small">
          L'<span class="red">origine</span> du système de coordonnées SVG est
          située dans le <span class="red">coin supérieur gauche </span> du conteneur
          SVG. Les coordonnées (0,0) représentent ce point.
        </li>

        <li class="small">
          L'<span class="red">axe horizontal</span> est appelé l'axe X. Les
          valeurs augmentent <span class="red">de gauche à droite</span>
        </li>

        <li class="small">
          L'<span class="red">axe vertical</span> est appelé l'axe Y. Les
          valeurs augmentent <span class="red">de haut en bas</span>
        </li>

        <li class="small">
          Par défaut, les unités de mesure sont les <span class="red"
            >pixels</span
          >, mais vous pouvez spécifier d'autres unités comme em, cm, mm, etc.
        </li>
      </ul>
    </div>

    <div class="col-50">
      <svg width="500" viewBox="0 0 100 100">
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="90"
          stroke="black"
          stroke-width="0.5"
        />
        <line
          x1="10"
          y1="10"
          x2="90"
          y2="10"
          stroke="black"
          stroke-width="0.5"
        />
        <line
          x1="50"
          y1="8"
          x2="50"
          y2="10"
          stroke="black"
          stroke-width="0.5"
        />
        <line
          x1="8"
          y1="50"
          x2="10"
          y2="50"
          stroke="black"
          stroke-width="0.5"
        />
        <circle cx="10" cy="10" r="2" fill="red" />
        <text x="8" y="5" font-size="3">Origine</text>
        <text x="49" y="5" font-size="3">5</text>
        <text x="5" y="51" font-size="3">5</text>
        <circle cx="42" cy="50" r="2" fill="red" />
        <text x="46" y="50" font-size="3">x: 4 y: 5</text>
      </svg>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Formes et textes</h3>
      <ul>
        <li class="small">
          <b>Formes</b>: Les éléments graphiques tels que
          <code class="red">&lt;rect&gt;</code>,
          <code class="red">&lt;circle&gt;</code>,
          <code class="red">&lt;line&gt;</code>, etc., sont utilisés pour créer
          des formes.
        </li>

        <li class="small">
          <b>Texte</b> : Utilisez l'élément
          <code class="red">&lt;text&gt;</code> pour afficher du texte.
        </li>

        <li class="small">
          <b>Couleurs et Styles</b> : l'attribut <code class="red">fill</code>
          définit la couleur de remplissage d'une forme. L'attribut
          <code class="red">stroke</code> définit la couleur de la bordure d'une
          forme.
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img src="assets/01-intro-svg/code_formes_textes.png" alt="gif" />
      <svg width="1000" height="100">
        <rect x="0" y="0" width="100" height="100" fill="steelblue" />
        <circle cx="150" cy="50" r="40" fill="indianred" />
        <ellipse cx="250" cy="50" rx="30" ry="20" />
        <line x1="300" y1="0" x2="500" y2="100" stroke="red" />
        <text x="500" y="80">Et bien d'autres !</text>
      </svg>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Path</h3>

      <ul>
        <li class="small">
          L'élément <code class="red">&lt;path&gt;</code> est utilisé pour définir
          des trajectoires ou des contours de formes complexes.
        </li>
        <li class="small">
          L'attribut principal utilisé est <code class="red">d</code> (pour "data"),
          qui contient une séquence de commandes et de paramètres qui décrivent la
          forme du chemin.
        </li>
      </ul>
      <p><span class="red">M</span>ove to (<code>M x y</code>)</p>
      <p><span class="red">L</span>ine to (<code>L x y</code>)</p>
      <p><span class="red">H</span>orizontal line (<code>H x</code>)</p>
      <p><span class="red">V</span>ertical line (<code>V y</code>)</p>
    </div>
    <div class="col-50">
      <img src="assets/01-intro-svg/code_path.png" alt="path_png" />
      <img src="assets/01-intro-svg/path.svg" alt="path_svg" />
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Groupe</h3>
      <ul>
        <li class="small">
          L'élément <code class="red">&lt;g&gt;</code> est utilisé pour regrouper
          plusieurs éléments SVG.
        </li>
        <li class="small">
          Facilite la manipulation et la transformation d'un ensemble d'éléments
          en tant qu'unité.
        </li>
      </ul>
    </div>

    <div class="col-50">
      <img src="assets/01-intro-svg/groupe.png" alt="code-groupe" />
      <img src="assets/01-intro-svg/grouping-bird.svg" alt="groupe" />
    </div>
  </div></Slide
>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Transformations</h3>
      <ul>
        <li class="small">
          <code class="red">translate(x,y)</code> : déplace un élément le long de
          l'axe X et Y
        </li>
        <li class="small">
          <code class="red">rotate(angle, cx, cy)</code> : fait pivoter un élément
          autour du point (cx, cy)
        </li>
        <li class="small">
          <code class="red">scale(facteur_echelle)</code> : redimensionne un élément
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img
        src="assets/01-intro-svg/code_groupe_translate.png"
        alt="code-transformations"
      />
      <img
        src="assets/01-intro-svg/groupe_translate.png"
        alt="groupe_translate"
      />
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-40">
      <h3>Animations</h3>
      <ul>
        <li class="small">
          Prend en charge les animations avec des éléments tels que <code
            class="red">&lt;animate&gt;</code
          >
          et <code class="red">&lt;animateTransform&gt;</code>.
        </li>
        <li class="small">Permet la création d'effets visuels dynamiques.</li>
        <li class="small">
          Les navigateurs préfèrent les animations avec CSS &#128540
        </li>
      </ul>
    </div>
    <div class="col-60">
      <img
        src="assets/01-intro-svg/code_animations.png"
        alt="code-animations"
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <!-- Cercle avec animation de translation horizontale -->
        <circle cx="50" cy="100" r="30" fill="blue">
          <animate
            attributeName="cx"
            from="50"
            to="250"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <!-- Rectangle avec animation de translation verticale -->
        <rect x="100" y="50" width="60" height="60" fill="green">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 80; 0 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  </div>
</Slide>

<Slide>
  <h3>Exercices</h3>
  Rendez-vous sur
  <a href="https://github.com/romanoe/visualdon-exercices">
    <code class="red">GitHub</code> <i class="fa-brands fa-github"></i></a
  >
</Slide>
