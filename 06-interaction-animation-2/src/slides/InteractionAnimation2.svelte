<script>
    import Slide from "../lib/Slide.svelte";
    import Code from "../lib/Code.svelte";

    // setInterval example
    const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

    function myCallback(a, b) {
    // Your code here
    // Parameters are purely optional.
    console.log(a);
    console.log(b);
  }

</script>

<Slide class="fragment">
    <h2>Cours précédent</h2>
    <p class="fragment"><span class="heig-red">Animation</span> <code>transitions, data().join(enter, update,
        exit)</code></p>
    <p class="fragment"><span class="heig-red">Interaction</span> <code>.zoom()</code></p>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-brush"><h2><code class="heig-red">d3-brush</code></h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-brush</code></small></p>

    <img src="assets/brush.gif" alt="brush" class="center">
</Slide>



<Slide>
    <h2>Brush</h2>
    <code><span class="heig-red">brush()</span></code>
    <div class="row">
        <div class="col-40">
            <img src="assets/brush-syntaxe.svg" alt="" height="300"/>
        </div>
        <div class="col-60">
            <br>
            <ul>
                <li>Événements: <code>'brush', 'start', 'end'</code></li>
                <li>Retourne: <code>Étendue du brush ([[x0,y0],[x1,y1]])</code></li>
            </ul>
        </div>
    </div>
</Slide>


<Slide>
    <h2>Brush</h2>
    <a   href="https://codepen.io/romanoe/pen/BaOVQER" target="_blank" rel="noopener noreferrer"><code>Codepen</code></a>

</Slide>


<Slide>
    <h2>Animation</h2>

    <img src="assets/animation-1.svg" alt="animation-schema" width="500" height="600" class="center"/>

</Slide>


<Slide>
    <h2>Animation</h2>
    <h5><code><span class="heig-red">setInterval</span>(<em>fonction</em>, <em>intervalleEnMs</em> [, params])</code></h5>
    <small><p>éxécute une fonction de manière répétée avec une intervalle fixée. Retourne un identifiant unique (<code>intervalId</code>).</p></small>

    <br>
    <br>
    <br>
    <h5><code><span class="heig-red">clearInterval</span>(<em>intervalId</em>)</code></h5>
    <small><p>arrête l'intervalle</p></small><br>

    <small><a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval"><p><code
            class="heig-red"> ↳ Doc MDN : setInterval()</code></p></a></small>
</Slide>

<Slide>
    <h2>Animation</h2>
    <a   href="https://codepen.io/romanoe/pen/rNZKjvB" target="_blank" rel="noopener noreferrer"><code>Codepen</code></a>

</Slide>


<Slide>
    <h2>Projet</h2>
    <ul>
        <li>Wireframe (ce soir !)</li>
        <li>Structurer et charger les données</li>
        <li>Visualisations statiques</li>
    </ul>
</Slide>

