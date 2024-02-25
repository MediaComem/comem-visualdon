<script>
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";
  import qualitativeQuantitativeImg from "$lib/assets/03-d3-data/qualitative_quantitative.png";
  import csvImg from "$lib/assets/03-d3-data/csv.svg";
  import jsonImg from "$lib/assets/03-d3-data/json.svg";
  import rollupDsvCode from "$lib/assets/03-d3-data/rollup_dsv_code.png";
  import viteConfigDsvCode from "$lib/assets/03-d3-data/vite_config_dsv_code.png";
  import d3CsvCode from "$lib/assets/03-d3-data/d3_csv_code.png";
  import importCsvCode from "$lib/assets/03-d3-data/import_csv_code.png";
  import Reference from "$lib/Reference.svelte";
  import d3JsonCode from "$lib/assets/03-d3-data/d3_json_code.png";
  import fetchJsCode from "$lib/assets/03-d3-data/fetch_js_code.png";
  import d3ArrayCode from "$lib/assets/03-d3-data/d3_array_code.png";
  import ArrayPrototypeMap from "$lib/assets/03-d3-data/array_prototype_map_code.png";
  import ArrayPrototypeFilter from "$lib/assets/03-d3-data/array_prototype_filter_code.png";
  import ArrayPrototypeIncludes from "$lib/assets/03-d3-data/array_prototype_includes_code.png";
  import ArrayPrototypeReduce from "$lib/assets/03-d3-data/array_prototype_reduce_code.png";
  import ArrayPrototypeSort from "$lib/assets/03-d3-data/array_prototype_sort_code.png";
</script>

<Title title="04 - Données"></Title>

<Slide class="fragment">
  <h3>Cours précédent</h3>
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

<Slide>
  <h3>Types de données</h3>
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

    <img
      src={qualitativeQuantitativeImg}
      alt="data-type"
      style="height: 350px"
      class="center"
    />
  </div>
  <br />
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-fetch/tree/v3.0.1"
    ><h3><code class="red"> d3-fetch</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-fetch</code></small>
  </p>
</Slide>

<Slide>
  <h3>
    <span class="red">CSV</span> <br /><small>(Comma-Separated Values)</small>
  </h3>
  <div class="row">
    <img src={csvImg} alt="csv" class="center" />
  </div>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>D3</h4>
      <code><small><b class="red">csv</b>(input[, init][, row])</small></code>
      <img src={d3CsvCode} alt="d3-csv" />
    </div>
    <div class="col-50">
      <h4>Vite JS</h4>
      <p class="small">Plugin <code>@rollup/plugin-dsv</code> pour Vite</p>
      <div class="row">
        <div class="col-50">
          <img src={rollupDsvCode} alt="rollup-csv" />
        </div>
        <div class="col-50">
          <img src={viteConfigDsvCode} alt="vite-config-csv" />
          <img src={importCsvCode} alt="vite-config-csv" />
        </div>
        <Reference
          referenceLink="https://d3js.org/d3-fetch#csv"
          referenceText="d3-fetch | csv"
        ></Reference>
        <Reference
          referenceLink="https://github.com/vitejs/vite/discussions/8271"
          referenceText="Vite JS | Rollup Plugin DSV"
        ></Reference>
      </div>
    </div>
  </div>
</Slide>

<Slide>
  <h3>
    <span class="red">JSON</span> <br /><small
      >(Javascript Object Notation)</small
    >
  </h3>
  <div class="row">
    <img src={jsonImg} alt="csv" class="center" width="20%" />
  </div>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>D3</h4>
      <code><small><b class="red">json</b>(input[, init][, row])</small></code>
      <img src={d3JsonCode} alt="d3-json" width="80%" />
    </div>
    <div class="col-50">
      <h4>Vanilla JS</h4>
      <img src={fetchJsCode} alt="fetch-js" width="80%" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-fetch#json"
    referenceText="d3-fetch | json, "
  ></Reference>
  <Reference
    referenceLink="https://developer.mozilla.org/en-US/docs/Web/API/fetch"
    referenceText="MDN | Fetch API"
  ></Reference>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-array"
    ><h3><code class="red">d3-array</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-array</code></small>
  </p>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>Statistiques</h4>
      <code class="small"><b class="red">max</b>(iterable[, accessor])</code><br
      />
      <code class="small"><b class="red">min</b>(iterable[, accessor])</code><br
      />
      <code class="small"><b class="red">sum</b>(iterable[, accessor])</code><br
      />
      <code class="small"><b class="red">extent</b>(iterable[, accessor])</code
      ><br />
      <code class="small"><b class="red">mean</b>(iterable[, accessor])</code>
    </div>
    <div class="col-50">
      <img src={d3ArrayCode} alt="d3-array" width="80%" />
    </div>
  </div>
  <Reference
    referenceLink="https://d3js.org/d3-array/summarize"
    referenceText="d3-array | Summarizing data"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>Transformer</h4>
      <code class="small">Array.prototype.<b class="red">map</b>(callback)</code
      >
      <ul>
        <ul>
          <li class="small">
            <code class="red">map</code> : méthode qui crée un nouveau tableau en
            appliquant une fonction de rappel à chaque élément du tableau d'origine
          </li>
          <li class="small">
            <code class="red">callback</code> : la fonction à appliquer à chaque
            élément, prenant en paramètre l'élément actuel et renvoyant la valeur
            transformée
          </li>
        </ul>
      </ul>
    </div>

    <div class="col-50">
      <img src={ArrayPrototypeMap} alt="array-prototype-map" width="80%" />
    </div>
  </div>
  <Reference
    referenceLink="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
    referenceText="MDN Web Docs | Array.Prototype.map()"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>Filtrer</h4>
      <code class="small"
        >Array.prototype.<b class="red">filter</b>(callback)</code
      >
      <ul>
        <ul>
          <li class="small">
            <code class="red">filter</code> : méthode qui crée un nouveau tableau
            en filtrant les éléments du tableau d'origine en fonction d'une condition
            définie dans la fonction de rappel
          </li>
          <li class="small">
            <code class="red">callback</code> : la fonction à appliquer à chaque
            élément, prenant en paramètre l'élément actuel et renvoyant un booléen
            indiquant s'il doit être inclus dans le nouveau tableau filtré
          </li>
        </ul>
      </ul>
    </div>

    <div class="col-50">
      <img
        src={ArrayPrototypeFilter}
        alt="array-prototype-filter"
        width="80%"
      />
    </div>
  </div>
  <Reference
    referenceLink="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
    referenceText="MDN Web Docs | Array.Prototype.filter()"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>Vérifier l'inclusion d'un élément</h4>
      <code class="small"
        >Array.prototype.<b class="red">includes</b>(value)</code
      >
      <ul>
        <ul>
          <li class="small">
            <code class="red">includes</code> : méthode qui vérifie si un tableau
            inclut une certaine valeur parmi ses éléments
          </li>
          <li class="small">
            <code class="red">value</code> : la valeur à rechercher dans le tableau
          </li>
        </ul>
      </ul>
    </div>

    <div class="col-50">
      <img
        src={ArrayPrototypeIncludes}
        alt="array-prototype-includes"
        width="80%"
      />
    </div>
  </div>
  <Reference
    referenceLink="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
    referenceText="MDN Web Docs | Array.Prototype.includes()"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-60">
      <h4>Réduire (aggréger)</h4>
      <code class="small"
        >Array.prototype.<b class="red">reduce</b>(callback[, initialValue])</code
      >
      <ul>
        <ul>
          <li class="small">
            <code class="red">reduce</code> : méthode qui applique une fonction de
            rappel à chaque élément du tableau, produisant ainsi une seule valeur
            résultante
          </li>
          <li class="small">
            <code class="red">callback</code> : la fonction à appliquer, prenant
            en paramètre un accumulateur et l'élément actuel
          </li>
          <li class="small">
            <code class="red">initialValue</code> : une valeur optionnelle servant
            d'accumulateur initial
          </li>
        </ul>
      </ul>
    </div>

    <div class="col-40">
      <img
        src={ArrayPrototypeReduce}
        alt="array-prototype-reduce"
        width="80%"
      />
    </div>
  </div>
  <Reference
    referenceLink="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
    referenceText="MDN Web Docs | Array.Prototype.reduce()"
  ></Reference>
</Slide>

<Slide>
  <div class="row">
    <div class="col-50">
      <h4>Trier</h4>
      <code class="small"
        >Array.prototype.<b class="red">sort</b>([,compareFunction])</code
      >
      <ul>
        <ul>
          <li class="small">
            <code class="red">sort</code> : méthode qui trie les éléments d'un tableau
            selon un critère spécifié par une fonction de comparaison
          </li>
          <li class="small">
            <code class="red">compareFunction</code> : une fonction de comparaison
            optionnelle déterminant l'ordre de tri
          </li>
        </ul>
      </ul>
    </div>

    <div class="col-50">
      <img src={ArrayPrototypeSort} alt="array-prototype-sort" width="80%" />
    </div>
  </div>
  <Reference
    referenceLink="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
    referenceText="MDN Web Docs | Array.Prototype.sort()"
  ></Reference>
</Slide>

<Slide>
  <h3>Exemples</h3>
  <Reference
    referenceLink="https://observablehq.com/d/c6452b640ad09152"
    referenceText="Observable: d3-fetch, d3-array"
  ></Reference>
</Slide>
