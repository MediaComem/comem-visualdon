<script>
  import Slide from "../lib/Slide.svelte";
  import Code from "../lib/Code.svelte";
  import Title from "src/lib/Title.svelte";
</script>

<Title title="03. Données"></Title>

<Slide class="fragment">
  <h2>Cours précédent</h2>
  <p class="fragment">
    <span class="red">Syntaxe</span> Chaînage de méthodes (fonctions)
  </p>
  <p class="fragment">
    <span class="red">Manipulation du DOM</span> <code>select()</code>,
    <code>.attr()</code>,<code>.append()</code>,<code>.on("event")</code><br />
  </p>
  <p class="fragment">
    <span class="red">Données</span>
    <code>data(<em>données</em>).join(enter, update, exit) </code>
  </p>
</Slide>
s

<Slide>
  <h2>Types de données</h2>
  <div class="row">
    <div class="col-50">
      <p class="red"><b>Qualitatives</b></p>
      <ul>
        <li>Nominales</li>
        <li>Ordinales</li>
      </ul>
    </div>
    <div class="col-50">
      <p class="red"><b>Quantitatives</b></p>
      <ul>
        <li>Discrètes</li>
        <li>Continues</li>
      </ul>
    </div>
  </div>
  <img
    src="assets/qualitative_quantitative.png"
    alt="data-type"
    style="height: 350px !important"
    class="center"
  /> <br />
</Slide>

<Slide>
  <h2>Formats</h2>
</Slide>

<Slide>
  <h3>
    <span class="red">CSV</span> <br /><small>(Comma-Separated Values)</small>
  </h3>
  <img src="assets/csv.svg" alt="csv" class="center" />
</Slide>

<Slide>
  <h3>
    <span class="red">JSON</span> <br /><small
      >(JavaScript Object Notation)</small
    >
  </h3>
  <img
    src="assets/json.svg"
    alt="json"
    style="height: 350px !important"
    class="center"
  />
</Slide>

<Slide>
  <h3>
    <span class="red">TSV</span> <br /><small>(Tab-Separated Values)</small>
  </h3>
  <img
    src="assets/tsv.svg"
    alt="tsv"
    style="height: 300px !important"
    class="center"
  />
</Slide>

<Slide>
  <h3>
    <span class="red">XML</span> <br /><small
      >(eXtensible Markup Language)</small
    >
  </h3>
  <img
    src="assets/xml.svg"
    alt="xml"
    style="height: 350px !important"
    class="center"
  />
</Slide>

<Slide>
  <h2>Charger les données</h2>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-fetch/tree/v3.0.1"
    ><h2><code class="red"> d3-fetch</code></h2></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-fetch</code></small>
  </p>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h3><span class="red">CSV</span></h3>
      <code><b class="red">csv</b>(input[, init][, row])</code>
      <br />
      <pre> <Code trim>
import {"{"} csv {"}"} from "d3-fetch";

csv("chemin/du/fichier.csv")
	.then( function(data) {"{"}
                // Dessiner ici
                {"}"})
	.catch(function(error){"{"}
                // Gérer les erreurs ici
                {"}"})
						</Code>
						</pre>
    </div>
    <div class="col-50">
      <h3><span class="red">JSON</span></h3>
      <code><b class="red">json</b>(input[, init][, row])</code>
      <br />
      <pre> <Code trim>
import {"{"} json {"}"} from "d3-fetch";

json("url/ou/chemin/du/fichier.json")
	.then( function(data) {"{"}
                // Dessiner ici
                {"}"})
	.catch(function(error){"{"}
                // Gérer les erreurs ici
                {"}"})
						</Code>
						</pre>
    </div>
  </div>
</Slide>

<Slide>
  <h2>Statistiques</h2>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-array"
    ><h2><code class="red">d3-array</code></h2></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-array</code></small>
  </p>
</Slide>

<Slide>
  <h2>Statistiques</h2>
  <br />
  <code><b class="red">max</b>(iterable[, accessor])</code><br />
  <code><b class="red">min</b>(iterable[, accessor])</code><br />
  <code><b class="red">sum</b>(iterable[, accessor])</code><br />
  <code><b class="red">extent</b>(iterable[, accessor])</code><br />
  <code><b class="red">mean</b>(iterable[, accessor])</code>

  <pre>
    <Code trim>
import {"{"} max, min, sum, extent, mean {"}"} from "d3-array";

const data = [5, 10, 4, 25];

const maxValue = max(data); // Expected output: 25
const minValue = min(data); // Expected output: 5
const sumValues = sum(data); // Expected output : 44
const extentValues = extent(data); // Expected output : [4, 25]
const meanValues = mean(data); // Expected output : 11

    </Code>
</pre>

  <small
    ><a href="https://github.com/d3/d3-array"
      ><p><code class="red"> ↳ d3-array - Statistics</code></p></a
    ></small
  >
</Slide>

<Slide>
  <h2>
    Manipuler les données avec <span class="red"> JavaScript </span> (ES7)
  </h2>
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">map()</span></code></h3>
  <p>
    crée un nouveau tableau avec les résultats de l'appel d'une fonction qui
    s"applique à l'ensemble des données
  </p>

  <pre><Code trim>
const data = [1, 4, 9, 16];

// Pass a function to map
const dataMapped = data.map(x => x * 2); // Expected output: Array [2, 8, 18, 32]

    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
      ><p>
        <code class="red"> ↳ Doc MDN : Array.prototype.map()</code>
      </p></a
    ></small
  >
</Slide>

<Slide
  ><h3><code>Array.prototype.<span class="red">filter()</span></code></h3>
  <p>filtre les données selon une condition</p>

  <pre><Code trim>
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];


const result = words.filter(word => word.length > 6); // Expected output: Array ["exuberant", "destruction", "present"]


    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
      ><p>
        <code class="red"> ↳ Doc MDN: Array.prototype.filter()</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">includes()</span></code></h3>
  <p>vérifie si les données contiennent une valeur spécifiée</p>

  <pre><Code trim>
const array1 = [1, 2, 3];

console.log(array1.includes(2)); // Expected output: true


const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); // Expected output: true


console.log(pets.includes("at")); // Expected output: false


    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
      ><p>
        <code class="red"> ↳ Doc MDN: Array.prototype.includes()</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">pop()</span></code></h3>
  <p>supprime le dernier élément d"un tableau</p>

  <pre><Code trim>
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // Expected output: "tomato"

console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


plants.pop();

console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
      ><p><code class="red"> ↳ Doc MDN: Array.prototype.pop()</code></p></a
    ></small
  >
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">push()</span></code></h3>
  <p>ajoute un ou plusieurs éléments à la fin d"un tableau</p>

  <pre><Code trim>
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(animals); // Expected output: Array ["pigs", "goats", "sheep", "cows"]


animals.push("chickens", "cats", "dogs");
console.log(animals);// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
      ><p>
        <code class="red"> ↳ Doc MDN: Array.prototype.push()</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">reduce()</span></code></h3>
  <p>
    applique une fonction qui est un « accumulateur » et qui traite chaque
    valeur d"une liste (de la gauche vers la droite) afin de la réduire à une
    seule valeur
  </p>

  <pre><Code trim>
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // Expected output: 10

    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
      ><p>
        <code class="red"> ↳ Doc MDN: Array.prototype.reduce()</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <h3><code>Array.prototype.<span class="red">forEach()</span></code></h3>
  <p>exécute une fonction donnée sur chaque élément du tableau</p>

  <pre><Code trim>
const array1 = ["a", "b", "c"];

array1.forEach(element => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

    </Code></pre>

  <small
    ><a
      href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
      ><p>
        <code class="red"> ↳ Doc MDN: Array.prototype.forEach()</code>
      </p></a
    ></small
  >
</Slide>

<Slide>
  <h2>Exercices</h2>
  <p>
    <span class="red">Télécharger changements</span> <br />
    <small><code>git fetch upstream</code></small>
  </p>
  <p></p>
  <p>
    <span class="red">Mettre à jour</span> <br />
    <small><code>git merge upstream/main</code></small>
  </p>
</Slide>
