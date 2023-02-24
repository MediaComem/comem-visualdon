
<script>
    import Slide from '../lib/Slide.svelte';

</script>


<Slide>
    <h2>D3 & SVG</h2>
    <blockquote cite="https://d3js.org/">
        D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, <b class="heig-red">SVG</b> and CSS
    </blockquote>
</Slide>

<Slide>
    <h2 class="heig-red">SVG</h2>
    <span class="heig-red">S</span>calable <span class="heig-red">V</span>ector <span class="heig-red">G</span>raphics <br>
    (<em>graphique vectoriel adaptable</em>)
</Slide>



<Slide>
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Bitmap_VS_SVG_Fr.svg" alt="bitmap_svg">
</Slide>


<Slide>

    <h2>Syntaxe</h2>
    <img src="assets/svg-syntax.svg" alt="svg-syntax">


</Slide>

<Slide>
    <h2>Système de coordonnées</h2>
    <svg width="500" viewBox="0 0 100 100">
        <line x1="10" y1="10" x2="10" y2="90" stroke="black" stroke-width="0.5" />
        <line x1="10" y1="10" x2="90" y2="10" stroke="black" stroke-width="0.5" />
        <line x1="50" y1="8" x2="50" y2="10" stroke="black" stroke-width="0.5" />
        <line x1="8" y1="50" x2="10" y2="50" stroke="black" stroke-width="0.5" />
        <circle cx="10" cy="10" r="2" fill="red" />
        <text x="8" y="5" font-size="3">Origine</text>
        <text x="49" y="5" font-size="3">5</text>
        <text x="5" y="51" font-size="3">5</text>
        <circle cx="42" cy="50" r="2" fill="red" />
        <text x="46" y="50" font-size="3">x: 4 y: 5</text>
    </svg>
</Slide>

<Slide>
    <h2>Formes et textes</h2>
    <img src="assets/formes_textes.svg" alt="gif">
</Slide>

<Slide>
    <h2>Path</h2>
    <span class="heig-red">M</span>ove to (<code>M x y</code>) <br>
    <span class="heig-red">L</span>ine to (<code>L x y</code>) <br>
    <span class="heig-red">H</span>orizontal line (<code>H x</code>) <br>
    <span class="heig-red">V</span>ertical line (<code>V y</code>) <br>

    <img src="assets/path.svg" alt="path_svg">


</Slide>



<Slide>
    <h2>Groupe</h2>
    <img src="assets/grouping-bird.svg" alt="groupe">
</Slide>

<Slide>
    <h2>Transformation</h2>
    <small> <code> <b>translate(x,y)</b> </code> </small><br>
    <small><code> <b>rotate(angle, cx, cy)</b> </code> </small><br>
    <small> <code> <b>scale(facteur_echelle)</b> </code></small> <br>



                <img src="assets/groupe_translate.png" alt="groupe_translate">




</Slide>

<Slide>
   <h2>Exercices</h2>
    Rendez-vous sur <a href="https://github.com/romanoe/visualdon-exercices"> <code class="heig-red">GitHub</code> <i class="fa-brands fa-github"></i></a>
</Slide>
