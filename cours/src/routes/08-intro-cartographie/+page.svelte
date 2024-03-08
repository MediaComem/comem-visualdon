<script>
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";

  // Import images
  import interactiveMapsImage from "$lib/assets/08-intro-cartography/interactive-story-maps.gif";
  import mappingProcessImage from "$lib/assets/08-intro-cartography/mapping-process-1.svg";
  import cantonsImage from "$lib/assets/08-intro-cartography/26cantons.png";
  import rtsCartesImage from "$lib/assets/08-intro-cartography/rts_cartes.gif";
  import cartogrammeImage from "$lib/assets/08-intro-cartography/cartogramme.png";
  import reliefImage from "$lib/assets/08-intro-cartography/relief.jpg";
  import transportMapImage from "$lib/assets/08-intro-cartography/lausanne-transport-map.jpg";
  import designImage from "$lib/assets/08-intro-cartography/design.svg";
  import projectionImage from "$lib/assets/08-intro-cartography/projection.gif";
  import Reference from "$lib/Reference.svelte";
</script>

<Title title="08 - Introduction à la cartographie"></Title>

<Slide>
  <h3>Un peu d'histoire</h3>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/02/Archaeopark_Pavlov_I_mammoth_tusk_map_1.jpg"
      alt="mammut"
      style="background: transparent;"
      width="800"
      height="400"
    />
  </div>
  <Reference
    referenceLink="https://upload.wikimedia.org/wikipedia/commons/0/02/Archaeopark_Pavlov_I_mammoth_tusk_map_1.jpg"
    referenceText="Carte gravée sur la défense d'un mammouth, 25.000 av. J.-C., Thilo Parg / Wikimedia Commons"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://digitalmapsoftheancientworld.files.wordpress.com/2019/06/800px-anaximander_world_map-en.svg_.png"
      alt="anaxi"
      style="background: transparent;"
      width="600"
      height="400"
    />
  </div>
  <Reference
    referenceLink="https://digitalmapsoftheancientworld.com/ancient-maps/anaximanders-map/"
    referenceText="Reconstruction of Anaximander’s Map, Digital Maps of the Ancient World"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/23/PtolemyWorldMap.jpg"
      alt="ptolemy"
      style="background: transparent;"
      width="700"
      height="400"
      class="center"
    />
  </div>
  <Reference
    referenceLink="https://en.wikipedia.org/wiki/Ptolemy%27s_world_map"
    referenceText="Ptolemy's world map, Wikipedia"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/TabulaRogeriana_upside-down.jpg/1920px-TabulaRogeriana_upside-down.jpg"
      alt="catal"
      style="background: transparent;"
      width="900"
      class="center"
    />
  </div>

  <Reference
    referenceLink="https://en.wikipedia.org/wiki/Muhammad_al-Idrisi"
    referenceText="By Idrīsī, Muḥammad ibn Muḥammad al-Šarīf Abū"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Mercator_1569.png"
      alt="mercator"
      style="background: transparent;"
      width="700"
      height="400"
      class="center"
    />
  </div>
  <Reference
    referenceLink="https://en.wikipedia.org/wiki/Mercator_projection"
    referenceText="Mercator projection, Wikipedia"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/1024px-Snow-cholera-map-1.jpg"
      alt="cholera"
      style="background: transparent;"
      width="600"
      height="400"
    />
  </div>

  <Reference
    referenceLink="https://en.wikipedia.org/wiki/John_Snow"
    referenceText="Clusters of cholera cases in London, John Snow, 1854"
  ></Reference>
</Slide>

<Slide>
  <div class="center">
    <img
      src={interactiveMapsImage}
      alt="interactive-maps"
      style="background: transparent;"
      width="700"
      height="400"
      class="center"
    />
  </div>
  <Reference
    referenceLink="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html"
    referenceText="How the Virus Got Out, The New York Times"
  ></Reference>
</Slide>

<Slide>
  <h3>Processus</h3>
  <div class="center">
    <img
      src={mappingProcessImage}
      alt="mapping-process"
      style="background: transparent;"
    />
  </div></Slide
>

<Slide>
  <h3>Types de carte</h3>
</Slide>

<Slide>
  <h3>Cartes de référence</h3>
  <div class="center">
    <iframe
      width="700"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=6.6391754150390625%2C46.77801443128393%2C6.652565002441406%2C46.78450913603134&amp;layer=mapnik"
      style="border: 1px solid black"
      class="center"
      title="osm"
    ></iframe>
  </div>
  <code><small>Google maps, Openstreetmap, Maps.me </small></code>
</Slide>

<Slide>
  <h3>Cartes thématiques</h3>
  <p>Qualitative</p>
  <div class="center">
    <img
      src={cantonsImage}
      alt="cantons"
      style="background: transparent;"
      width="600"
      height="400"
      class="center"
    />
  </div>
  <code><small>Les cantons (Source: Bonjour Genève) </small></code>
</Slide>

<Slide>
  <h3>Cartes thématiques</h3>
  <p>Choroplète</p>
  <a
    href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"
    ><div class="center">
      <img src={rtsCartesImage} alt="rts_carte" width="600" class="center" />
    </div></a
  >

  <Reference
    referenceLink="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"
    referenceText="Votations fédérales 2022, RTS"
  ></Reference>
</Slide>

<Slide>
  <h3>Cartogrammes</h3>
  <div class="center">
    <img
      src={cartogrammeImage}
      alt="cartogramme"
      style="background: transparent;"
      width="600"
      height="400"
      class="center"
    />
  </div>

  <Reference
    referenceLink="https://www.espacestemps.net/en/articles/vraies-et-fausses-evidences-de-la-geographie-electorale-suisse/"
    referenceText="Vraies et fausses évidences de la géographie électorale suisse, Manouk Borzakian"
  ></Reference>
</Slide>

<Slide>
  <h3>Flowmap</h3>
  <div class="center">
    <iframe
      width="70%"
      height="520"
      frameborder="0"
      src="https://www.flowmap.blue/15kwLB4baXZ7jpip8q0JjgR6zDoS5Gt3gMLCTUAboQxk?v=46.719075%2C7.817990%2C7.51%2C0%2C0&a=0&as=1&b=1&bo=75&c=0&ca=1&d=1&fe=1&lt=1&lfm=ALL&col=Default&f=45"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      oallowfullscreen
      msallowfullscreen
      title="flowmap"
    ></iframe>
  </div>

  <Reference
    referenceLink="https://www.flowmap.blue/15kwLB4baXZ7jpip8q0JjgR6zDoS5Gt3gMLCTUAboQxk?v=46.719075%2C7.817990%2C7.51%2C0%2C0&a=0&as=1&b=1&bo=75&c=0&ca=1&d=1&fe=1&lt=1&lfm=ALL&col=Default&f=45"
    referenceText="Migration en Suisse 2016, flowmap.blue"
  ></Reference>
</Slide>

<Slide>
  <h3>Cartes de chaleur</h3>
  <div class="center">
    <iframe
      width="100%"
      height="520"
      frameborder="0"
      src="https://public.carto.com/viz/872476d9-f3e4-4c66-bcf6-b3dda156a782/embed_map"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      oallowfullscreen
      msallowfullscreen
      title="heatmap"
    ></iframe>
  </div>
  <Reference
    referenceLink="https://public.carto.com/viz/872476d9-f3e4-4c66-bcf6-b3dda156a782/embed_map"
    referenceText="Heat maps, CARTO"
  ></Reference>
</Slide>

<Slide>
  <h3>Cartes topographiques</h3>
  <div class="center">
    <img
      src={reliefImage}
      alt="relief"
      style="background: transparent;"
      width="700"
      height="500"
      class="center"
    />
  </div>

  <Reference
    referenceLink="https://www.reddit.com/r/Switzerland/comments/jav2xv/i_made_a_relief_map_of_switzerland_using_real/"
    referenceText="Images relief, Reddit"
  ></Reference>
</Slide>

<Slide>
  <h3>Cartes topologiques</h3>
  <div class="center">
    <img
      src={transportMapImage}
      alt="lausanne-topologie"
      style="background: transparent;"
      width="700"
      height="500"
      class="center"
    />
  </div>
  <Reference
    referenceLink="https://www.t-l.ch/"
    referenceText="Transports Public Lausannois"
  ></Reference>
</Slide>

<Slide>
  <h3>Design</h3>
  <div class="center">
    <img
      src={designImage}
      alt="design"
      style="background: transparent;"
      class="center"
    />
  </div>
</Slide>

<Slide>
  <h3>Projection</h3>
  <div class="center">
    <img
      src={projectionImage}
      alt="projection"
      height="400"
      width="600"
      class="center"
    />
    <Reference
      referenceLink="https://www.youtube.com/watch?v=kIID5FDi2JQ&t=48s"
      referenceText="Pourquoi les cartes du monde sont fausses"
    ></Reference>
    <!-- <Reference
      referenceLink="https://github.com/d3/d3-geo-projection#projections"
      referenceText="d3 | Liste des projections"
    ></Reference> -->
  </div>
</Slide>

<Slide>
  <h3>Projet</h3>
  <ul>
    <li>Données (création, chargement)</li>
    <li>Visualisation statiques</li>
  </ul>
</Slide>
