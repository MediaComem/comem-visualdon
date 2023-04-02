<script>
    import Slide from "../lib/Slide.svelte";
</script>


<Slide>
    <h2>Un peu d'histoire</h2>
</Slide>

<Slide>
    <img src="assets/1280px-Engraving_on_a_mammoth_tusk,_map,_Gravettian,_076872x.jpg" alt="mammut" style="background: transparent;" width="700" height="400" class="center"/>
    <small><code> Carte gravée sur la défense d'un mammouth, 25.000 av. J.-C., trouvé à Pavlov, CZ (Source: Wikipedia)</code></small>
</Slide>

<Slide>
    <img src="assets/800px-anaximander_world_map-en.svg_.png" alt="anix" style="background: transparent;" width="450" height="400" class="center"/>
    <small><code> Reconstruction of Anaximander’s Map (Source: Digital Maps of the Ancient World)</code></small>
</Slide>

<Slide>
    <img src="assets/PtolemyWorldMap.jpg" alt="ptolemy" style="background: transparent;" width="700" height="400" class="center"/>
    <small><code> Ptolemy map of the World, II siècle après J. C. (Source: Wikipedia)</code></small>
</Slide>

<Slide>
    <img src="assets/TabulaRogeriana_upside-down.jpg" alt="catal" style="background: transparent;" width="700" height="400" class="center"/>
    <small><code> Tabula Rogeriana, Muhammad al-Idrisi, 1153 (Source: Wikipedia)</code></small>
</Slide>

<Slide>
    <img src="assets/Mercator_1569.png" alt="catal" style="background: transparent;" width="700" height="400" class="center"/>
    <small><code> Mercator Map (Source: Wikipedia)</code></small>
</Slide>

<Slide>
    <img src="assets/cholera_map.jpg" alt="catal" style="background: transparent;" width="400" height="400" class="center"/>
    <code><small>L'épidémie choléra de Broad Street, John Snow, 1854</small> </code>
</Slide>

<Slide>
    <img src="assets/interactive-story-maps.gif" alt="catal" style="background: transparent;" width="700" height="400" class="center"/>
    <code><small>How the virus got out, New York Times </small></code>
</Slide>


<Slide>
    <h2>Processus</h2>
    <img src="assets/mapping-process-1.svg" alt="catal" style="background: transparent;" >
</Slide>


<Slide>
    <h2>Types de carte</h2>
</Slide>

<Slide>
    <h3>Cartes de référence</h3>
    <iframe width="700" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=6.6391754150390625%2C46.77801443128393%2C6.652565002441406%2C46.78450913603134&amp;layer=mapnik" style="border: 1px solid black" class="center" title="osm"></iframe>
    <code><small>Google maps, Openstreetmap, Maps.me </small></code>
</Slide>

<Slide>
    <h3>Cartes thématiques</h3>
    <p>Qualitative</p>
    <img src="assets/26cantons.png" alt="cantons" style="background: transparent;" width="600" height="400" class="center"/>
    <code><small>Les cantons (Source: Bonjour Genève)  </small></code>
</Slide>

<Slide>
    <h3>Cartes thématiques</h3>
    <p>Choroplète</p>
    <a href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"><img src="assets/rts_cartes.gif" alt="rts_carte" width="600" class="center"/></a>
    <code><small>Votations fédérales 2022 (Source: RTS)  </small></code>
</Slide>

<Slide>
    <h3>Cartogrammes</h3>
    <img src="assets/cartogramme.png" alt="cartogramme" style="background: transparent;" width="600" height="400" class="center"/>
    <code><small>Vraies et fausses évidences de la géographie électorale suisse, Manouk Borzakian</small></code>
</Slide>

<Slide>
    <h3>Flowmap</h3>
    <img src="assets/flowmap.png" alt="flow-map" style="background: transparent;" width="600" height="400" class="center"/>
    <code><small>Migration en Suisse 2016, <a href="https://flowmap.blue/15kwLB4baXZ7jpip8q0JjgR6zDoS5Gt3gMLCTUAboQxk?v=46.719075%2C7.817990%2C7.51%2C0%2C0&a=0&as=1&b=1&bo=75&c=0&ca=1&d=1&fe=1&lt=1&lfm=ALL&col=Default&f=45">flowmap.blue</a>  </small></code>
</Slide>

<Slide>
    <h3>Cartes de chaleur</h3>
    <iframe width='100%' height='520' frameborder='0' src='https://public.carto.com/viz/872476d9-f3e4-4c66-bcf6-b3dda156a782/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen title="heatmap"></iframe>
    <code><small>CARTO Heat Maps</small></code>
</Slide>

<Slide>
    <h3>Cartes topographiques</h3>
    <img src="assets/relief.jpg" alt="relief" style="background: transparent;" width="700" height="500" class="center"/>
    <code><small>Images relief, <a href="https://www.reddit.com/r/Switzerland/comments/jav2xv/i_made_a_relief_map_of_switzerland_using_real/">Reddit</a></small></code>
</Slide>

<Slide>
    <h3>Cartes topologiques</h3>
    <img src="assets/lausanne-transport-map.jpg" alt="lausanne-topologie" style="background: transparent;" width="700" height="500" class="center"/>
    <code><small>Transports Public Lausannois</small></code>
</Slide>


<Slide>
    <h2>Design</h2>
    <img src="assets/design.svg" alt="design" style="background: transparent;" class="center"/>
</Slide>


<Slide>
    <h3>Projection</h3>
    <img src="assets/projection.gif" alt="projection" height= "400" width="400" class="center"/> <br>
    <a href="https://www.youtube.com/watch?v=kIID5FDi2JQ&t=48s">Pourquoi les cartes du monde sont fausses</a>
    <br>
    <a href="https://github.com/d3/d3-geo-projection#projections">Listes de projection (d3)</a>
</Slide>


<Slide>
    <h2>Exercice Gapminder</h2>
    <ul>
        <li>Traitez vos données avant de pouvoir les dessiner</li>
        <li>Utilisez d'autres échelles que scaleLinear() (<code>.scaleSqrt(), .scalePow())</code></li>
    </ul>
</Slide>

<Slide>
    <h2>Projet</h2>
    <ul>
        <li>Données prêtes ? <b>Last call</b></li>
        <li>Visualisation statiques</li>
    </ul>
</Slide>
