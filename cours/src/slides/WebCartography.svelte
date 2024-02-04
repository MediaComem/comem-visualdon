<script>
  import Slide from "../lib/Slide.svelte";
  import Title from "src/lib/Title.svelte";
</script>

<Title title="8. Cartographie web"></Title>

<Slide>
  <h2>Formats de données</h2>
  <ul>
    <li>
      <code
        ><a href="https://observablehq.com/@idris-maps/donnees-cartographiques"
          >geojson</a
        ></code
      > Comme du .json mais avec des données géographiques
    </li>
    <li>
      <code
        ><a href="https://https://wiki.openstreetmap.org/wiki/OSM_XML"
          >OSM (xml)</a
        ></code
      > OpenStreetMap
    </li>
    <li>
      <code><a href="https://fr.wikipedia.org/wiki/Shapefile">shp</a></code> Shapefile
    </li>
    <li>
      <code
        ><a
          href="https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry"
          >WKT</a
        ></code
      > Well Known Text
    </li>
  </ul>
</Slide>

<Slide>
  <h2>Sources de données</h2>
  <ul>
    <li>
      Mondiales: <a href="https://www.naturalearthdata.com/downloads/"
        >Natural Earth</a
      >
    </li>
    <li>
      Suisse: <a
        href="https://opendata.swiss/fr/dataset?q=swissboundaries&sort=score+desc%2C+metadata_modified+desc"
        >opendata.swiss</a
      >
    </li>
    <li>OpenStreetMap (OSM)</li>
  </ul>
</Slide>

<Slide>
  <h2>OpenStreetMap (OSM)</h2>
  <iframe
    width="700"
    height="400"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://www.openstreetmap.org/export/embed.html?bbox=6.604886054992677%2C46.77111478612739%2C6.67346477508545%2C46.79709223320696&amp;layer=mapnik"
    style="border: 1px solid black"
    title="openstreetmap"
    class="center"
  ></iframe><br /><small
    ><a href="https://www.openstreetmap.org/#map=15/46.7841/6.6392"
      >OpenStreetMap</a
    ></small
  >
</Slide>

<Slide>
  <h2>OSM</h2>
  <p>vs</p>
  <h2>Google Map</h2>
  <q>
    Google Map is a closed system, and every information is property of Google.
    OpenStreetMap is an open data source, and its information is available to
    every organisation and user.
  </q>
</Slide>

<Slide>
  <h2>Récupérer les données</h2>
  <ul>
    <li>
      Par région : <small
        ><code
          >curl
          "https://api.openstreetmap.org/api/0.6/map?bbox=6.645,46.779,6.65,46.783"
          > heig.osm</code
        ></small
      >
    </li>
    <li>
      Par types d'objets : <a href="https://overpass-turbo.osm.ch/"
        ><span class="heig-red">Overpass API</span></a
      >
    </li>
    <small>
      Objets: <a href="https://wiki.openstreetmap.org/wiki/Map_features "
        >https://wiki.openstreetmap.org/wiki/Map_features
      </a></small
    >
    <li>
      Géocodage: <a href="https://nominatim.org/"
        ><span class="heig-red">Nominatim</span></a
      >
    </li>
    <small
      ><code
        >https://nominatim.openstreetmap.org/search?city=yverdon&format=json</code
      ></small
    >
  </ul>
  <p></p>
</Slide>

<Slide>
  <h2>Overpass API</h2>
  <h5>
    <a href="https://overpass-turbo.osm.ch/"
      ><span class="heig-red">Exemple</span></a
    >
  </h5>
  <ul>
    <li>Cherchez la ville, village, région qui vous intéresse</li>
    <li>Cliquez sur le bouton <b>Wizard</b></li>
    <li>
      Cherchez un mot clef comme <em>pub</em>, <em>bar</em>, <em>tree</em> etc.
    </li>
    <li>
      Cliquez sur <b>Export</b> et choisissez le format que vous souhaitez
    </li>
  </ul>
</Slide>

<Slide>
  <h2>Librairies javascript</h2>
  <ul>
    <li>d3</li>
    <li>Leaflet</li>
    <li>OpenLayers</li>
    <br />
    ... ET BEAUCOUP D'AUTRES!
  </ul>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-geo"
    ><h2><code class="heig-red">d3-geo</code></h2></a
  >
  <p>
    <span class="heig-red">Installation</span> <br />
    <small><code>npm install d3-geo</code></small>
  </p>
</Slide>

<Slide>
  <h2>Projections</h2>

  <div class="row">
    <div class="col-30">
      <img src="assets/img/projection.gif" alt="projection" class="center" />
    </div>

    <div class="col-70">
      <br />
      <br />
      <small
        ><code
          >let projection = <span class="heig-red"><em>nom_projection</em></span
          >()</code
        ></small
      ><br /><br />
      <a href="https://github.com/d3/d3-geo-projection#projections"
        ><code> d3-geo-projection</code></a
      >
      <br />
    </div>
  </div>
</Slide>

<Slide>
  <h2>Projections</h2>
  <code>Transformations</code> <br />
  <small
    ><code>projection.<span class="heig-red">fonction</span>(arguments)</code
    ></small
  >

  <div class="row">
    <div class="col-50">
      <code><span class="heig-red">Manuelles</span></code>
      <br />
      <br />

      <small
        ><code>.<span class="heig-red">scale</span>(facteur_échelle)</code>
        <br />Changer l'échelle de la carte
        <br /><br />

        <code>.<span class="heig-red">translate</span>(X, Y)</code>
        <br />Appliquer une translation de X et Y
      </small>
    </div>

    <div class="col-50">
      <code><span class="heig-red">Selon les données</span></code>
      <br />
      <br />

      <small
        ><code
          >.<span class="heig-red">fitSize</span>([width, height], geojson)</code
        > <br />Adapter selon largeur/hauteur du SVG
        <br /><br />

        <code
          >.<span class="heig-red">fitExtent</span>([X<sub>0</sub>, Y<sub>0</sub
          >, X<sub>1</sub>, Y<sub>1</sub>], geojson)</code
        > <br />Adapter selon une certaine étendue
      </small>
    </div>
  </div>
</Slide>

<Slide>
  <h2>Geopath</h2>
  <code>Syntaxe</code>

  <img
    src="assets/img/geojson2path.svg"
    alt="geojson2path"
    style="background: transparent;"
    class="center"
  />

  <div class="row">
    <div class="col-50">
      <br />
      <ol>
        <small><li>Définition de la projection</li></small>
        <small><li>Générateur de <em><code>path</code></em></li></small>
        <small
          ><li>Dessiner <em><code>path</code></em> selon les données</li></small
        >
      </ol>
    </div>
    <div class="col-50">
      <img
        src="assets/img/d3-carte-syntaxe.svg"
        alt="d3-carte-syntaxe"
        height="300"
        class="center"
      />
    </div>
  </div>
</Slide>

<Slide>
  <h2>Carte de la Suisse</h2>
  <a
    href="https://codepen.io/romanoe/pen/mdGZgBx"
    target="_blank"
    rel="noopener noreferrer"><code>Codepen</code></a
  >
</Slide>

<Slide>
  <a href="https://leafletjs.com/"
    ><h2><code class="heig-red">Leaflet</code></h2></a
  >
  <p>
    <span class="heig-red">Installation</span> <br />
    <small><code>npm install leaflet</code></small>
  </p>
</Slide>

<Slide>
  <h2>Leaflet</h2>
  <h5>
    <a href="https://github.com/d3/d3-geo"
      ><span class="heig-red">Syntaxe</span></a
    >
  </h5>

  <div class="row">
    <div class="col-50">
      <br />
      <ol>
        <small><li>Création division</li></small>
        <small
          ><li>
            Générer un élément <em
              ><a href="https://leafletjs.com/reference.html#map-example">map</a
              ></em
            >
          </li></small
        >
        <small
          ><li>
            Rajouter un <a
              href="https://leaflet-extras.github.io/leaflet-providers/preview/"
              >fond de plans</a
            >
          </li></small
        >
        <small
          ><li>
            Ajouter des <a href="https://leafletjs.com/examples/quick-start/"
              >éléments</a
            > à la carte
          </li></small
        >
        <small
          ><li>
            Écouter des <a href="https://leafletjs.com/reference.html#map-event"
              >événements</a
            >
          </li></small
        >
      </ol>

      <small
        ><a href="https://leafletjs.com/examples.html"
          ><p><code class="heig-red"> ↳ Tutoriels</code></p></a
        ></small
      >
    </div>
    <div class="col-50">
      <img
        src="assets/img/leaflet-syntaxe.svg"
        alt="leaflet-syntaxe"
        height="300"
        class="center"
      />
    </div>
  </div>
</Slide>

<Slide>
  <h2>Carte Leaflet</h2>
  <h5>
    <a href="https://codepen.io/romanoe/pen/qBMeEpr"
      ><span class="heig-red"><code>Codepen</code></span></a
    >
  </h5>
</Slide>

<Slide>
  <h2>Autres ressources</h2>
  <ul>
    <li>
      Cartes de chaleurs: <a
        href="https://www.patrick-wied.at/static/heatmapjs/"
        ><code>heatmap.js</code></a
      >, <a href="https://deck.gl/examples"><code>Deck.gl</code></a>
    </li>
    <li>
      Globe: <a
        href="https://observablehq.com/@michael-keith/draggable-globe-in-d3"
        ><code>d3.js</code></a
      >,
      <a href="https://experiments.withgoogle.com/chrome/globe"
        ><code>three.js</code></a
      >
    </li>
    <li>
      Cartes choroplètes: <a href="https://www.datavis.fr/d3js/map-population"
        ><code>d3.js</code></a
      >,
      <a href="https://www.datavis.fr/maps/leaflet-choroplethe"
        ><code> Leaflet</code></a
      >
    </li>
  </ul>
</Slide>

<Slide>
  <h2>Projet</h2>
  <ul>
    <li>Données chargées ?</li>
    <li>Visualisations statiques !</li>
  </ul>
</Slide>
