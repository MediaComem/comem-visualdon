<script>
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";
  import DataVizLibraries from "$lib/assets/01-intro-svg/data-viz-libraries.svg";
  import p5Logo from "$lib/assets/11-d3-alternatives-scrollytelling/p5js.png";
  import threejsLogo from "$lib/assets/11-d3-alternatives-scrollytelling/three-js-logo.png";
  import ChartJsLogo from "$lib/assets/11-d3-alternatives-scrollytelling/chartjs.svg";
  import VegaLogo from "$lib/assets/11-d3-alternatives-scrollytelling/vega.png";
  import roughVizLogo from "$lib/assets/11-d3-alternatives-scrollytelling/roughViz.gif";
  import Reference from "$lib/Reference.svelte";
</script>

<Title title="12 - Alternatives à d3.js"></Title>

<Slide>
  <h3>Outils</h3>
  <div class="center">
    <img
      src={DataVizLibraries}
      alt="datavizlibraries"
      width="800"
      height="400"
      class="center"
    />
  </div>
</Slide>

<Slide>
  <div class="center">
    <a href="https://p5js.org/examples/"
      ><img src={p5Logo} alt="p5" width="400" height="200" /></a
    >
  </div>
  <ul>
    <li>Creative coding</li>
    <li>HTML Canvas</li>
    <li>Liens entre DOM et Canvas pas direct</li>
  </ul>
  <br />

  <Reference
    referenceLink="https://p5js.org/examples/"
    referenceText="p5.js | Examples"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <a href="https://threejs.org/"
      ><img src={threejsLogo} alt="three.js" width="250" height="150" /></a
    >
  </div>
  <br />
  <ul>
    <li>3D</li>
    <li>WebGL</li>
    <li>Haute performance</li>
  </ul>
  <br />

  <Reference referenceLink="https://threejs.org/" referenceText="three.js"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <a href="https://www.chartjs.org/"
      ><img
        src={ChartJsLogo}
        alt="chartjs"
        width="300"
        height="200"
        class="center"
      /></a
    >
  </div>
  <ul>
    <li>Simple et rapide</li>
    <li>HTML Canvas</li>
    <li>Visualisations simples</li>
    <li>Peu de flexibilité (6 graphiques)</li>
  </ul>
  <br />
  <Reference referenceLink="https://www.chartjs.org/" referenceText="Chart.js"
  ></Reference>
</Slide>

<Slide>
  <h5>VEGA</h5>
  <div class="center">
    <a href="https://vega.github.io/vega/"
      ><img
        src={VegaLogo}
        alt="vega"
        width="300"
        height="200"
        class="center"
      /></a
    >
  </div>
  <ul>
    <li>JSON-declarative</li>
    <li>Visualisation simples</li>
    <li>Bonne documentation</li>
    <li>Difficilement personnalisable</li>
  </ul>
  <br />

  <Reference referenceLink="https://vega.github.io/vega/" referenceText="Vega"
  ></Reference>
</Slide>

<Slide>
  <h5>roughviz.js</h5>
  <div class="center">
    <a href="https://github.com/jwilber/roughViz"
      ><img
        src={roughVizLogo}
        alt="rough"
        width="700"
        height="250"
        class="center"
      /></a
    >
  </div>
  <ul>
    <li>
      Basée sur <code>rough.js</code>, <code>d3.js</code> et <code>handy</code>
    </li>
    <li>Visualisation simples</li>
    <li>Visuelle mais rend résultats approximatifs</li>
    <li>Difficilement personnalisable</li>
  </ul>
  <br />
  <Reference
    referenceLink="https://github.com/jwilber/roughViz"
    referenceText="roughViz"
  ></Reference>
</Slide>

<Slide>
  <h4>Mais alors... pourquoi d3.js ?</h4>
  <ul>
    <li>Flexibilité</li>
    <li>Manipulation du DOM facile</li>
    <li>Maîtrise de <b>d3.js</b>, facile d'apprendre les autres outils!</li>
  </ul>
</Slide>

<Slide>
  <h4>Mais alors... pourquoi <span class="red">pas</span> d3.js ?</h4>
  <ul>
    <li>Avec beaucoup de données, peu performant</li>
    <li>Documentation difficile à trouver</li>
    <li>Longue courbe d'apprentissage</li>
    <li>Simples visualisations: overkill</li>
  </ul>
</Slide>

<Slide>
  <h5>Cours</h5>
  <p>Terminé !</p>
  <h5>Projet</h5>
  <p>Visualisations statiques</p>
  <p>Scrollytelling</p>
  <p>Animation</p>
</Slide>
