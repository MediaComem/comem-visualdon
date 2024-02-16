<script>
  import Slide from "../lib/Slide.svelte";
  import Title from "../lib/Title.svelte";
  import Reference from "../lib/Reference.svelte";
  import { select } from "d3-selection";
  import { onMount } from "svelte";

  const width = 500;
  const height = 400;
  const margin = { top: 50, right: 40, bottom: 50, left: 40 };

  let x = 0;
  let y = 0;

  onMount(() => {
    // Select
    const svg = select("#mon-svg");
    const cercle = svg.select("circle");
    cercle.attr("fill", "#E92528");

    // Append
    select("#mon-svg2")
      .attr("width", width)
      .attr("height", height)
      .append("circle")
      .attr("cx", "30%")
      .attr("cy", "40%")
      .attr("r", "100")
      .attr("fill", "green");
  });
</script>

<Title title="2. Introduction à d3.js"></Title>
<Slide>
  <h3>Semaine passée</h3>
  <p class="fragment">
    <span class="red">Fonction</span> Explicative ou exploratoire <br />
  </p>
  <p class="fragment">
    <span class="red">Formes</span> Statique ou interactive <br />
  </p>
  <p class="fragment">
    <span class="red">SVG</span> Formes, dessins, transformation et animations
  </p>
</Slide>

<Slide>
  <div class="row no-margin-top center">
    <div class="col-40">
      <h3 class="red">D3</h3>
      <ul>
        <li class="small">
          <b class="red">Data-Driven Approach</b> : vous liez vos données directement
          aux éléments du DOM
        </li>
        <li class="small">
          <b class="red">Manipulation du DOM</b> : vous associez des données à des
          éléments HTML existants (ou d'en créer de nouveaux)
        </li>
        <li class="small">
          <b class="red">Construction de Graphiques</b> : vous créez des éléments
          graphiques en langage SVG à partir de données
        </li>
      </ul>
    </div>
    <div class="col-50">
      <iframe
        src="https://d3js.org/"
        width="100%"
        height="550"
        title="d3-iframe"
      ></iframe>
    </div>
  </div>
  <br />

  <Reference referenceLink="https://d3js.org/" referenceText="d3"></Reference>
</Slide>

<Slide>
  <h3>Documentation</h3>
  <br />

  <div class="center">
    <img
      src="assets/02-intro-d3//doc_annotation.svg"
      alt="js-doc"
      width="60%"
    />
  </div>
  <br />

  <Reference
    referenceLink="https://github.com/d3/d3/blob/main/API.md"
    referenceText="Github: API reference"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Syntaxe</h3>
      <ul>
        <b class="black">Chaînage de méthodes</b>
        <li>Enchaîner plusieurs méthodes sur une sélection ou un objet D3</li>
        <li>
          Chaque méthode renvoie un objet qui peut être manipulé par d'autres
          méthodes
        </li>
      </ul>
      <code class="small">
        objet.<span class="red">methode1()</span>.<span class="red"
          >methode2()</span
        >.<span class="red">methode3()</span>
      </code>
    </div>
    <div class="col-50">
      <img
        src="assets/02-intro-d3//code_chaining_methods.png"
        alt="chaining-methods"
      />

      <p>Tout de bon !</p>
    </div>
  </div>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-selection/tree/v3.0.0"
    ><h3><code class="red"> d3-selection</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-selection</code></small>
  </p>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Sélectionner</h3>
      <code class="small">d3.<b class="red">select</b>(selector)</code>
      <br />
      <code class="small">d3.<b class="red">selectAll</b>(selector)</code>

      <ul>
        <li class="small">
          <code>d3.<span class="red">select</span></code> : méthode qui permet de
          sélectionner un élément unique du DOM en fonction d'un sélecteur CSS
        </li>
        <li class="small">
          <code>d3.<span class="red">selectAll</span></code> : méthode qui permet
          de sélectionner tous les éléments correspondant au sélecteur CSS donné
        </li>
        <li class="small">
          <code class="red">selector</code> : le sélecteur CSS utilisé pour sélectionner
          les éléments du DOM
        </li>
      </ul>
    </div>
    <div class="col-50">
      <small>
        <table>
          <table>
            <tr>
              <th></th>
              <th>CSS</th>
              <th>Exemple</th>
            </tr>
            <tr>
              <td>type</td>
              <td><code>element </code></td>
              <td><code>.select('h1')</code></td>
            </tr>
            <tr>
              <td>class</td>
              <td><code>.class</code></td>
              <td><code>.select('.class')</code></td>
            </tr>
            <tr>
              <td>identifiant</td>
              <td><code>#id</code></td>
              <td><code>.select('#id')</code></td>
            </tr>
          </table>
        </table>
      </small>
    </div>
  </div>
  <br />

  <Reference
    referenceLink="https://github.com/d3/d3-selection/tree/v3.0.0#selecting-elements"
    referenceText="d3-selection - Selecting elements"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Modifier</h3>
      <code class="small">selection.<b class="red">attr</b>(name[, value])</code
      >
      <ul>
        <li class="small">
          <code class="red">attr</code> : méthode qui permet de modifier les attributs
          des éléments sélectionnés
        </li>
        <li class="small">
          <code class="red">name</code> : le nom de l'attribut à modifier
        </li>
        <li class="small">
          <code class="red">value </code> (optionnel) : la valeur à assigner à l'attribut
        </li>
      </ul>
    </div>
    <div class="col-50">
      <div class="row center">
        <div class="col-50">
          <img
            src="assets/02-intro-d3//code_modifier_html.png"
            alt="code-modifier-html"
          />
        </div>
        <div class="col-50">
          <img
            src="assets/02-intro-d3//code_modifier_js.png"
            alt="code-modifier-js"
          />
        </div>
      </div>

      <svg id="mon-svg">
        <circle cx="50%" cy="50%" r="50" fill="red"></circle>
      </svg>
    </div>
  </div>

  <br />

  <Reference
    referenceLink="https://github.com/d3/d3-selection/tree/v3.0.0"
    referenceText="d3-selection - Modifying elements"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Créer</h3>
      <code class="small">selection.<b class="red">append</b>(element)</code>
      <ul>
        <li class="small">
          <code class="red">append</code> : méthode qui permet d'ajouter de nouveaux
          éléments DOM à une sélection existante
        </li>
        <li class="small">
          <code class="red">element</code> : le type d'élément à créer (balise HTML)
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img src="assets/02-intro-d3/code_creer_js.png" alt="code-creer-js" />
    </div>

    <svg id="mon-svg2"> </svg>
  </div>

  <br />

  <Reference
    referenceLink="https://github.com/d3/d3-selection/tree/v3.0.0"
    referenceText="d3-selection - Modifying elements"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Événements</h3>
      <code class="small"
        >selection.<b class="red">on</b>(eventType, callback)</code
      >
      <ul>
        <li class="small">
          <code class="red">on</code> : méthode qui permet d'attacher des gestionnaires
          d'événements à une sélection d'éléments du DOM
        </li>
        <li class="small">
          <code class="red">eventType</code> : le type d'événement que vous
          souhaitez gérer (par exemple, <em>click</em>, <em>mouseover</em>,
          <em>keydown</em>, etc.).
        </li>
        <li class="small">
          <code class="red">callback</code> : la fonction de rappel (callback) qui
          sera exécutée lorsque l'événement se produit.
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img src="assets/02-intro-d3//code_events.png" alt="code-events" />
      <!-- <p>x: {x}, y: {y}</p>
      <svg id="mon-svg3"> </svg> -->
    </div>
  </div>

  <Reference
    referenceLink="https://github.com/d3/d3-selection/tree/v3.0.0#handling-events"
    referenceText="d3-selection - Handling events"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Données</h3>
      <code class="small"
        >selection.<b class="red">data</b>(tableauDonnees[,key])</code
      >
      <ul>
        <li class="small">
          <code class="red">data</code> : méthode qui permet de lier les données
          aux éléments du DOM existants.
        </li>
        <li class="small">
          <code class="red">tableauDonnees</code> : tableau de données à lier aux
          éléments du DOM.
        </li>
        <li class="small">
          <code class="red">key</code> (optionnel): fonction ou une valeur qui spécifie
          comment faire correspondre les données aux éléments du DOM existants en
          utilisant une clé. Si la clé n'est pas fournie, la correspondance est faite
          par indice.
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img
        src="assets/02-intro-d3/data-enter-update-exit.svg"
        alt="join-data-drawing"
        width="700"
      />
    </div>
  </div>

  <Reference
    referenceLink="https://d3js.org/d3-selection/joining"
    referenceText="d3-selection - Joining data"
  ></Reference>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Données</h3>
      <code class="small"
        >selection.<b class="red">data</b>(data).<b class="red">join</b>(enter,
        update, exit)</code
      >
      <ul>
        <li class="small">
          <code class="red">join</code> : méthode introduite dans D3.js version 6,
          simplifiant la gestion des nouvelles données, des mises à jour et des éléments
          à supprimer
        </li>
        <li class="small">
          <code class="red">enter</code> : représente les nouveaux éléments à créer
          pour correspondre aux nouvelles données.
        </li>
        <li class="small">
          <code class="red">update</code> : représente les éléments existants qui
          correspondent aux données actuelles et qui doivent être mis à jour.
        </li>

        <li class="small">
          <code class="red">exit</code> : représente les éléments sans correspondance
          avec les données actuelles et qui doivent être supprimés.
        </li>
      </ul>
    </div>
    <div class="col-50">
      <img
        src="assets/02-intro-d3/data-enter-update-exit.svg"
        alt="join-data-drawing"
        width="600"
      />
      <img
        src="assets/02-intro-d3/data-enter-update-exit-letters.svg"
        alt="enter-update-exit-letters"
        width="600"
      />
    </div>
  </div>

  <Reference
    referenceLink="https://d3js.org/d3-selection/joining"
    referenceText="d3-selection - Joining data"
  ></Reference>
</Slide>

<Slide>
  <h3>Exemples</h3>
  <Reference
    referenceLink="https://observablehq.com/d/fdf49f03eec10be6"
    referenceText="Observable: d3-selection"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-60">
      <h3>Projet</h3>
      <h4><span class="red">Thématique (8 mars)</span></h4>
      <ul>
        <li>Former les groupes (2-3 personnes par groupe)</li>
        <li>Trouver un jeu de données</li>
        <li>Créer un dossier github pour le projet</li>
        <li>
          Suivre directives <a
            href="https://github.com/MediaComem/comem-visualdon/tree/main/projet"
            >ici</a
          >
        </li>
      </ul>
    </div>

    <div class="col-40">
      <img src="assets/02-intro-d3/data.gif" alt="data-gif" />
      <br />
    </div>
  </div>
</Slide>

<Slide>
  <h3>Exemples</h3>
  <ul>
    <li>
      <a href="http://www.bmdata.co.uk/titanic/">Titanic</a>
    </li>
    <li>
      <a href="https://projects.two-n.com/world-gender/">Global gender gap</a>
    </li>
    <li><a href="http://rhythm-of-food.net/">The Rythm of food</a></li>
    <li>
      <a
        href="https://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth/"
        >Satellites</a
      >
    </li>
  </ul>
</Slide>

<Slide>
  <h3>Exercices</h3>
  <Reference
    referenceLink="https://github.com/MediaComem/comem-visualdon/tree/main/exercices"
    referenceText="Github - comem-visualdon/exercices"
  ></Reference>
</Slide>
