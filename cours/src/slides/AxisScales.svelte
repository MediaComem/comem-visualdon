<script>
  import Slide from "../lib/Slide.svelte";
  import Title from "src/lib/Title.svelte";
  import Code from "../lib/Code.svelte";
  import { scaleThreshold } from "d3-scale";

  const scale = scaleThreshold()
    .domain([0, 50, 100])
    .range(["white", "red", "blue", "green"]);

  console.log(scale(-10)); // Expected output white
  console.log(scale(0)); // Expected output red
  console.log(scale(80)); // Expected output blue
  console.log(scale(120)); // Expected output green
</script>

<Title title="4. Échelles et axes"></Title>

<Slide class="fragment">
  <h2>Semaine passée</h2>
  <p class="fragment">
    <span class="red">Charger les données</span> <code>json()</code>,
    <code>csv()</code>
  </p>
  <p class="fragment">
    <span class="red">Statistiques</span> <code>mean()</code>,
    <code>max()</code>, <code>extent()</code> etc.
  </p>
  <p class="fragment">
    <span class="red">Manipuler les données</span> <code>map()</code>,
    <code>filter()</code>,<code>reduce()</code><br /> etc.
  </p>
</Slide>

<Slide class="fragment">
  <h3>Jusqu'à maintenant</h3>

  <code
    ><span class="red">Données</span> =
    <span class="red">Pixels</span>
  </code>
  <br />
  <br />

  <div class="r-stack">
    <img class="fragment fade-in-then-out" src="assets/data2pixel.svg" alt="" />
    <img class="fragment" src="assets/data2not_fitting.svg" alt="" />
  </div>
</Slide>

<Slide>
  <h3>Dès aujourd'hui</h3>

  <code
    ><span class="red">Données</span> = Echelle *
    <span class="red">Pixels</span>
  </code>
  <br />
  <br />

  <img src="assets/data2scaledpixel.svg" alt="data-scaled" class="center" />
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-scale"
    ><h2><code class="red">d3-scale</code></h2></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-scale</code></small>
  </p>
</Slide>

<Slide>
  <h3>Syntaxe</h3>
  <br />

  <img src="assets/domain_range.png" alt="scale-syntax" />
</Slide>

<Slide>
  <h3>Échelles continues</h3>
  <code><small>Données continues</small></code>
  <br />
  <img src="assets/continuous-scales.svg" alt="numeric-scales" />
  <pre>
        <Code trim>
            const scale = scaleLinear
                            .domain([0, 100])
                            .range([0, 1000])

            scale(0) // Expected output 0
            scale(50)  // Expected output 500
            scale(100) // Expected output 1000
        </Code>
    </pre>
</Slide>

<Slide>
  <h3>Échelles continues</h3>
  <code><small>Données temporelles</small></code>
  <img src="assets/scaleTime.png" alt="scaleTime" />

  <pre>
        <Code trim>
            const firstDay = new Date(new Date().getFullYear(), 0, 1);
            const lastDay = new Date(new Date().getFullYear(), 11, 31);
            const christmasDay = new Data(new Date().getFullYear(), 11, 25);

            const scale = scaleTime
                            .domain([firstDay, lastDay])
                            .range([0, 100])


            scale(firstDay) // Expected output 0
            scale(lastDay)  // Expected output 100
            scale(christmasDay) // Expected output 98.35164835164835
        </Code>
    </pre>
</Slide>

<Slide>
  <h3>Échelles discrètes</h3>
  <code><small>Données continues</small></code>
  <img src="assets/scaleQuantize.png" alt="scale-quantize" />

  <pre>
        <Code trim>
            const scale = scaleQuantize
                            .domain([0, 100])
                            .range(["white", "red", "blue"])


            scale(0) // Expected output white
            scale(50)  // Expected output red
            scale(-10) // Expected output white
        </Code>
    </pre>
</Slide>

<Slide>
  <h3>Échelles discrètes</h3>
  <code><small>Données continues</small></code>
  <img src="assets/scaleThreshold.png" alt="scale-threshold" />
</Slide>

<Slide>
  <h3>Échelles discrètes</h3>
  <code><small>Données discrètes</small></code>
  <img src="assets/scaleOrdinal.png" alt="scale-ordinal" />
</Slide>

<Slide>
  <h3>Échelles discrètes</h3>
  <code><small>Données discrètes</small></code>
  <img src="assets/scaleBand.png" alt="scale-band" />
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-axis"
    ><h2><code class="red">d3-axis</code></h2></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-axis</code></small>
  </p>
</Slide>

<Slide>
  <h2>Axes</h2>

  <img src="assets/axis.svg" alt="axis" class="center" />
</Slide>

<Slide>
  <h2>Axes</h2>
  <div class="row">
    <div class="col-50">
      <h5 class="red">Création</h5>
      <code>const axe = <br /><span class="red">axisBottom</span>(echelle)</code
      >
    </div>

    <div class="col-50">
      <h5 class="red">Dessin</h5>
      <code
        >selecteur <br />.append('g')<br />.<span class="red">call</span
        >(axe)</code
      >
    </div>
  </div>
</Slide>

<Slide>
  <h3>Marges & Translations</h3>
  <img src="assets/margin_convention.svg" alt="marges" class="center" />
</Slide>

<Slide>
  <h2>Diagramme en bâtons</h2>

  <a
    href="https://codepen.io/romanoe/pen/oNPGzyY"
    target="_blank"
    rel="noopener noreferrer"><code>Codepen</code></a
  >
</Slide>

<Slide>
  <h2>Projet</h2>
  <h4><span class="red">Thématique (ce soir)</span></h4>

  <h4><span class="red">Wireframe (17 mars)</span></h4>

  <div class="row">
    <div class="col-60">
      <img src="assets/sketch1.jpg" alt="sketch-wireframe" />
    </div>

    <div class="col-40">
      <img src="assets/figma.png" alt="" />
      <img src="assets/invision-logo-square.png" alt="" />
    </div>
  </div>
</Slide>
