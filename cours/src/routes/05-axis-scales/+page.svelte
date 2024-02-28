<script>
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";
  import Reference from "$lib/Reference.svelte";
  import data2pixelImg from "$lib/assets/04-axis-scales/data2pixel.svg";
  import data2notFittingImg from "$lib/assets/04-axis-scales/data2not_fitting.svg";
  import dataScaledImg from "$lib/assets/04-axis-scales/data2scaledpixel.svg";
  import domainRangeImg from "$lib/assets/04-axis-scales/domain_range.svg";
  import domainRangeSyntax from "$lib/assets/04-axis-scales/domain_range_syntax.svg";
  import scaleTimeImg from "$lib/assets/04-axis-scales/scaleTime.svg";
  import scaleTimeCode from "$lib/assets/04-axis-scales/scaleTimeCode.png";
  import scaleQuantizeImg from "$lib/assets/04-axis-scales/scaleQuantize.svg";
  import scaleQuantizeCode from "$lib/assets/04-axis-scales/scaleQuantizeCode.png";
  import scaleThresholdImg from "$lib/assets/04-axis-scales/scaleThreshold.png";
  import scaleThresholdCode from "$lib/assets/04-axis-scales/scaleThresholdCode.png";
  import scaleOrdinalImg from "$lib/assets/04-axis-scales/scaleOrdinal.png";
  import scaleOrdinalCode from "$lib/assets/04-axis-scales/scaleOrdinalCode.png";
  import scaleLinearImg from "$lib/assets/04-axis-scales/scaleLinear.svg";
  import scaleLinearCode from "$lib/assets/04-axis-scales/scaleLinearCode.png";
  import scaleBandImg from "$lib/assets/04-axis-scales/scaleBand.png";
  import scaleBandCode from "$lib/assets/04-axis-scales/scaleBandCode.png";
  import axisImg from "$lib/assets/04-axis-scales/axis.svg";
  import marginConventionImg from "$lib/assets/04-axis-scales/margin_convention.svg";
  import sketch1Img from "$lib/assets/04-axis-scales/sketch1.jpg";
  import figmaImg from "$lib/assets/04-axis-scales/figma.png";
  import invisionLogoImg from "$lib/assets/04-axis-scales/invision-logo-square.png";
</script>

<Title title="05 - Échelles et axes"></Title>

<Slide class="fragment">
  <h3>Cours précédent</h3>
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

  <div class="r-stack center">
    <img class="fragment fade-in-then-out" src={data2pixelImg} alt="" />
    <img class="fragment" src={data2notFittingImg} alt="" />
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
  <div class="center">
    <img src={dataScaledImg} alt="data-scaled" class="center" />
  </div>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-scale"
    ><h3><code class="red">d3-scale</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-scale</code></small>
  </p>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Syntaxe</h4>
      <div class="center">
        <img src={domainRangeSyntax} alt="scale-syntax-code" width="60%" />
      </div>
      <ul>
        <li class="small">
          <b><code class="red">typeEchelle</code></b>: La fonction qui détermine
          quel type d'échelle sera utilisé, tels que linéaire, quadratique,
          exponontielle etc.
        </li>
        <li class="small">
          <b><code class="red">domain</code><code>([minData, maxData])</code></b
          >: Définit l'intervalle des données en entrée, avec
          <code class="red">minData</code>
          et <code class="red">maxData</code>.
        </li>
        <li class="small">
          <b><code class="red">range</code><code>([0, svgWidth])</code></b>:
          Définit l'intervalle de sortie, la plage de valeurs souhaitée, avec
          <code class="red">0</code>
          comme début et <code class="red">svgWidth</code> comme fin.
        </li>
      </ul>
    </div>

    <div class="col-50">
      <img src={domainRangeImg} alt="scale-syntax" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles continues</h4>
      <p>Données continues</p>
      <div class="center">
        <img src={scaleLinearImg} alt="numeric-scales" />
      </div>
    </div>

    <div class="col-50">
      <img src={scaleLinearCode} alt="scale-linear-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles continues</h4>
      <p>Données temporelles</p>
      <div class="center">
        <img src={scaleTimeImg} alt="scaleTime" />
      </div>
    </div>

    <div class="col-50">
      <img src={scaleTimeCode} alt="scale-time-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles discrètes</h4>
      <p>Données continues</p>
      <img src={scaleQuantizeImg} alt="scaleQuantize" width="80%" />
    </div>

    <div class="col-50">
      <img src={scaleQuantizeCode} alt="scale-quantize-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles discrètes</h4>
      <p>Données continues</p>
      <img src={scaleThresholdImg} alt="scale-threshold" />
    </div>

    <div class="col-50">
      <img src={scaleThresholdCode} alt="scale-threshold-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles discrètes</h4>
      <p>Données discrètes</p>
      <img src={scaleOrdinalImg} alt="scale-ordinal" />
    </div>

    <div class="col-50">
      <img src={scaleOrdinalCode} alt="scale-ordinal-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h4>Échelles discrètes</h4>
      <p>Données discrètes</p>
      <img src={scaleBandImg} alt="scale-band" />
    </div>

    <div class="col-50">
      <img src={scaleBandCode} alt="scale-band-code" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-scale>"
    referenceText="D3 - d3-scale"
  ></Reference>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-axis"
    ><h3><code class="red">d3-axis</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-axis</code></small>
  </p>
</Slide>

<Slide>
  <h3>Axes</h3>
  <div class="center">
    <img src={axisImg} alt="axis" class="center" />
  </div>
</Slide>

<Slide>
  <h3>Axes</h3>
  <div class="row">
    <div class="col-50">
      <h4>Créer</h4>
      <code class="small"
        >const axe = <span class="red">axisBottom</span>(echelle)</code
      >
      <ul>
        <li class="small">
          <span class="red">axisBottom</span>: Fonction de D3 qui crée un axe
          horizontal en bas.
        </li>
        <li class="small">
          <span class="red">echelle</span>: L'échelle à associer à l'axe.
        </li>
      </ul>
    </div>

    <div class="col-50">
      <h4>Dessiner</h4>
      <code class="small"
        >selecteur.append("g").<span class="red">call</span>(axe)</code
      >
      <ul>
        <li class="small">
          <span class="red">selecteur</span>: Le sélecteur représentant
          l'élément auquel l'axe sera ajouté.
        </li>
        <li class="small">
          <span class="red">g</span>: L'élément "g" (groupe) SVG qui servira de
          conteneur pour l'axe.
        </li>
        <li class="small">
          <span class="red">call</span>: Une méthode D3 qui invoque une fonction
          (dans ce cas, l'axe) sur l'élément sélectionné.
        </li>
        <li class="small">
          <span class="red">axe</span>: L'axe créé avec
          <code class="small"
            >const axe = <span class="red">axisBottom</span>(echelle)</code
          >, prêt à être dessiné.
        </li>
      </ul>
    </div>
  </div>
</Slide>

<Slide>
  <h3>Marges & Translations</h3>
  <div class="center">
    <img src={marginConventionImg} alt="marges" class="center" />
  </div>
</Slide>

<Slide>
  <h3>Exemples</h3>
  <Reference
    referenceLink="https://observablehq.com/d/9759665d742894dd"
    referenceText="Observable: d3-scale, d3-axis"
  ></Reference>
</Slide>

<Slide>
  <h3>Projet</h3>
  <h5><span class="red">Thématique (8 mars)</span></h5>

  <h5><span class="red">Wireframe (15 mars)</span></h5>

  <div class="row">
    <div class="col-60">
      <img src={sketch1Img} alt="sketch-wireframe" width="80%" />
    </div>

    <div class="col-40">
      <img src={figmaImg} alt="figma" />
      <img src={invisionLogoImg} alt="invision" />
    </div>
  </div>
</Slide>
