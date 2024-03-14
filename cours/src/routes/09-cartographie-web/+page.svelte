<script>
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";

  import Geojson2Path from "$lib/assets/09-web-cartography/geojson2path.svg";
  import CarteSyntaxe from "$lib/assets/09-web-cartography/d3-carte-syntaxe.svg";
  import LeafletSyntaxe from "$lib/assets/09-web-cartography/leaflet-syntaxe.svg";
  import Projection from "$lib/assets/09-web-cartography/projection.gif";
  import Reference from "$lib/Reference.svelte";
</script>

<Title title="09 - Cartographie web"></Title>

<Slide>
  <h3>Formats de données</h3>
  <ul>
    <li>
      <code
        ><a href="https://observablehq.com/@idris-maps/donnees-cartographiques"
          >geojson</a
        ></code
      >
      Extension <code>.json</code> avec les données géographiques (<code
        >features</code
      >)
    </li>
    <li>
      <code
        ><a href="https://wiki.openstreetmap.org/wiki/OSM_XML">OSM (xml)</a
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
    <li>
      <code><a href="https://geoparquet.org/">GeoParquet</a></code> Extension Parquet
      pour les données géographiques (cloud based)
    </li>
  </ul>
  <Reference
    referenceLink="https://observablehq.com/@idris-maps/donnees-cartographiques"
    referenceText="Observable | Données cartographiques"
  ></Reference>
</Slide>

<Slide>
  <h3>Sources de données</h3>
  <ul>
    <li>
      Mondiales: <a href="https://wiki.openstreetmap.org/wiki/Downloading_data"
        >OpenStreetMap (OSM)</a
      >, <a href="https://www.naturalearthdata.com/downloads/">Natural Earth</a>
    </li>
    <li>
      Suisse: <a
        href="https://opendata.swiss/fr/dataset?q=swissboundaries&sort=score+desc%2C+metadata_modified+desc"
        >opendata.swiss</a
      >,
      <a
        href="https://api3.geo.admin.ch/api/faq/index.html#which-layers-are-available"
        >swisstopo</a
      >, <a href="https://viageo.ch/">Viageo</a>
    </li>
  </ul>
</Slide>

<Slide>
  <h3>OpenStreetMap (OSM)</h3>
  <div class="center">
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
    ></iframe>
  </div>

  <Reference
    referenceLink="https://www.openstreetmap.org/#map=15/46.7841/6.6392"
    referenceText="OpenStreetMap"
  ></Reference>
</Slide>

<Slide>
  <h3>OSM</h3>
  <p>vs</p>
  <h3>Google Map</h3>
  <div class="row">
    <q class="small col-60">
      Google Map is a closed system, and every information is property of
      Google. OpenStreetMap is an open data source, and its information is
      available to every organisation and user.
    </q>
  </div>
  <Reference
    referenceLink="https://medium.com/@thegeospatialnews/how-are-google-maps-different-from-openstreetmap-bc65f704cdab"
    referenceText="How are Google Maps different from OpenStreetMap?, Medium"
  ></Reference>
</Slide>

<Slide>
  <h3>Récupérer les données</h3>
  <div class="row">
    <div class="col-80">
      <ul>
        <li class="small">
          Par région : <code>
            curl
            "https://api.openstreetmap.org/api/0.6/map?bbox=6.645,46.779,6.65,46.783"
            heig.osm</code
          >
        </li>
        <li class="small">
          Par types d'objets : <a href="https://overpass-turbo.osm.ch/"
            ><span class="red">Overpass Turbo API</span></a
          >
        </li>
        <li class="small">
          Types d' Objets: <a
            href="https://wiki.openstreetmap.org/wiki/Map_features "
            >https://wiki.openstreetmap.org/wiki/Map_features
          </a>
        </li>
        <li class="small">
          Géocodage: <a href="https://nominatim.org/"
            ><span class="red">Nominatim</span></a
          >
          <code
            >https://nominatim.openstreetmap.org/search?city=yverdon&format=json</code
          >
        </li>
      </ul>
    </div>
  </div>
  <p></p>
</Slide>

<Slide>
  <h3>Overpass API</h3>

  <Reference
    referenceLink="https://overpass-turbo.osm.ch/"
    referenceText="Exemple : Overpass Turbo"
  ></Reference>

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
  <h3>Librairies JS</h3>
  <ul>
    <li class="small">
      <a href="https://observablehq.com/collection/@d3/d3-geo">d3-geo</a>
    </li>
    <li class="small">
      <a href="https://leafletjs.com/examples.html">Leaflet.js</a>
    </li>
    <li class="small">
      <a href="https://openlayers.org/">OpenLayers.js</a>
    </li>
    <li class="small">
      <a href="https://deck.gl/examples">Deck.gl</a>
    </li>
    <li class="small">
      <a href="https://maplibre.org/maplibre-gl-js/docs/examples/"
        >MapLibre GL JS</a
      >
    </li>
    <li class="small">
      <a href="https://kepler.gl/demo">Kepler.gl</a>
    </li>
    <li class="small"><a href="https://giro3d.org/examples/">Giro3D</a></li>
  </ul>
  <ul></ul>
</Slide>

<Slide>
  <a href="https://github.com/d3/d3-geo"
    ><h3><code class="red">d3-geo</code></h3></a
  >
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install d3-geo</code></small>
  </p>
</Slide>

<Slide>
  <h3>Projections</h3>

  <div class="row">
    <div class="col-30 center">
      <img src={Projection} alt="projection" class="center" />
    </div>

    <div class="col-70">
      <br />
      <br />
      <small
        ><code
          >let projection = <span class="dheig-re"><em>nom_projection</em></span
          >()</code
        ></small
      ><br /><br />
      <Reference
        referenceLink="https://observablehq.com/collection/@d3/d3-geo-projection"
        referenceText="d3 | Projections"
      ></Reference>

      <br />
    </div>
  </div>
</Slide>

<Slide>
  <h3>Projections</h3>
  <code>Transformations</code> <br />
  <small
    ><code>projection.<span class="red">fonction</span>(arguments)</code></small
  >

  <div class="row">
    <div class="col-50">
      <code><span class="red">Manuelles</span></code>
      <br />
      <br />

      <small
        ><code>.<span class="red">scale</span>(facteur_échelle)</code>
        <br />Changer l'échelle de la carte
        <br /><br />

        <code>.<span class="red">translate</span>(X, Y)</code>
        <br />Appliquer une translation de X et Y
      </small>
    </div>

    <div class="col-50">
      <code><span class="red">Selon les données</span></code>
      <br />
      <br />

      <small
        ><code>.<span class="red">fitSize</span>([width, height], geojson)</code
        > <br />Adapter selon largeur/hauteur du SVG
        <br /><br />

        <code
          >.<span class="red">fitExtent</span>([X<sub>0</sub>, Y<sub>0</sub>, X<sub
            >1</sub
          >, Y<sub>1</sub>], geojson)</code
        > <br />Adapter selon une certaine étendue
      </small>
    </div>
  </div>
</Slide>

<Slide>
  <h3>Geopath</h3>
  <code>Syntaxe</code>

  <div class="center">
    <img
      src={Geojson2Path}
      alt="geojson2path"
      style="background: transparent;"
    />
  </div>
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
    <div class="col-50 center">
      <img src={CarteSyntaxe} alt="d3-carte-syntaxe" height="300" />
    </div>
  </div>
</Slide>

<Slide>
  <h3>Exemple</h3>
  <Reference
    referenceLink="https://observablehq.com/d/e95a07bb2e4347c1"
    referenceText="Observable | d3-geo"
  ></Reference>
</Slide>

<Slide>
  <a href="https://leafletjs.com/"><h3><code class="red">Leaflet</code></h3></a>
  <p>
    <span class="red">Installation</span> <br />
    <small><code>npm install leaflet</code></small>
  </p>
</Slide>

<Slide>
  <h3>Syntaxe</h3>
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

      <Reference
        referenceLink="https://leafletjs.com/examples.html"
        referenceText="Leaflet | Tutoriels"
      ></Reference>
    </div>
    <div class="col-50 center">
      <img
        src={LeafletSyntaxe}
        alt="leaflet-syntaxe"
        width="500"
        class="center"
      />
    </div>
  </div>
</Slide>

<Slide>
  <h3>Exemple</h3>
  <Reference
    referenceLink="https://observablehq.com/d/e95a07bb2e4347c1#cell-220"
    referenceText="Observable | Leaflet"
  ></Reference>
</Slide>

<Slide>
  <h3>Autres ressources</h3>
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
  <h3>Projet</h3>
  <ul>
    <li>Wireframe (ce soir, 15 Mars)</li>
    <li>
      Organisation des fichier (<a
        href="https://github.com/MediaComem/comem-visualdon/tree/main/exercices/04-gapminder"
        >Exemple exercice 4</a
      >)
    </li>
    <li>Charger les données</li>
  </ul>
</Slide>
