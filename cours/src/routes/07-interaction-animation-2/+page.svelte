<script>
    import Reference from "$lib/Reference.svelte";
    import Slide from "$lib/Slide.svelte";
    import Title from "$lib/Title.svelte";
    import Animation from "$lib/assets/07-interaction-animation-2/animation-1.svg";
    import BrushSyntaxe from "$lib/assets/07-interaction-animation-2/brush-syntaxe.png";
    import BrushGif from "$lib/assets/07-interaction-animation-2/brush.gif";
    import TranslateExtent from "$lib/assets/06-interaction-animation-1/translate-extent.svg";
    import ScaleExtent from "$lib/assets/06-interaction-animation-1/scale-extent.svg";
    import ZoomSyntaxCode from "$lib/assets/06-interaction-animation-1/zoom-syntaxe-code.png";
</script>

<Title title="07 - Interaction et animation 2"></Title>

<Slide class="fragment">
    <h3>Cours précédent</h3>
    <p class="fragment">
        <span class="red">Animation</span>
        <code>d3-transition</code>
    </p>
    <p class="fragment">
        <span class="red">Interaction</span> <code>d3-zoom</code>
    </p>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-zoom"
        ><h3><code class="red">d3-zoom</code></h3></a
    >
    <p>
        <span class="red">Installation</span> <br />
        <small><code>npm install d3-zoom</code></small>
    </p>
</Slide>

<Slide>
    <div class="row center">
        <div class="col-50">
            <h5>Initialisation</h5>
            <code class="small"
                >const myZoom = d3.<span class="red">zoom()</span></code
            >
            <ul>
                <li class="small">
                    Initialise un objet de zoom pour activer le zoom et le
                    panoramique
                </li>
            </ul>
            <br /> <br />

            <h5>Événements</h5>
            <code class="small"
                >d3.zoom().<span class="red">on(typenames, listener)</span
                ></code
            >
            <ul>
                <li class="small">
                    <code class="small"
                        ><span class="red">typenames</span></code
                    >: Les types d'événements à écouter, par exemple,
                    <code class="red">'zoom'</code>,
                    <code class="red">'start'</code>,
                    <code class="red">'end'</code>
                </li>
                <li class="small">
                    <code class="small"><span class="red">listener</span></code
                    >: La fonction de rappel (callback) appelée lorsqu'un
                    événement spécifié se produit.
                </li>
            </ul>
        </div>

        <div class="col-50 center">
            <!-- Ajoutez ici une image ou un code visuel représentatif du zoom avec d3 -->
            <!-- Remplacez {ZoomSyntaxCode} par le chemin de l'image ou le code visuel -->
            <img src={ZoomSyntaxCode} alt="zoom-syntax" height="300" />
        </div>
    </div>
    <Reference
        referenceLink="https://d3js.org/d3-zoom"
        referenceText="d3 | d3-zoom"
    ></Reference>
</Slide>

<Slide>
    <h3>Contraintes</h3>
    <code class="small">zoom().<span class="red">contrainte(props)</span></code
    >

    <div class="row">
        <div class="col-50">
            <small
                ><code class="small"
                    ><span class="red">scaleExtent([min, max])</span></code
                ></small
            >
            <div class="center">
                <img
                    src={ScaleExtent}
                    alt="scale-extent"
                    width="60%"
                    class="center"
                />
            </div>
        </div>

        <div class="col-50">
            <small
                ><code class="small"
                    ><span class="red"
                        >translateExtent([minX,minY],[maxX, maxY])</span
                    >
                </code></small
            >
            <div class="center">
                <img
                    src={TranslateExtent}
                    alt="translate-extent"
                    width="60%"
                    class="center"
                />
            </div>
        </div>
    </div>
    <Reference
        referenceLink="https://d3js.org/d3-zoom"
        referenceText="d3 | d3-zoom"
    ></Reference>
</Slide>

<Slide>
    <h3>Méthodes</h3>
    <code class="small"
        ><em>selection</em>.call(zoom<span class="red">.methode, props</span
        >)</code
    >
    <div class="row">
        <div class="col-50">
            <code><span class="red">Zoom</span></code>
            <br />
            <br />

            <small
                ><code class="small"
                    >(zoom.<span class="red">scaleBy, facteur_échelle</span
                    >)</code
                >
                <br />Multiplie l'échelle actuelle par le facteur d'échelle
                <br /><br />

                <code class="small"
                    >(zoom.<span class="red">scaleTo, échelle</span>)</code
                >
                <br />Change l'échelle à échelle définie</small
            >
        </div>

        <div class="col-50">
            <code><span class="red">Pan</span> </code>
            <br />
            <br />

            <small
                ><code class="small"
                    >(zoom.<span class="red">translateBy, x, y </span>)</code
                ><br />Translation de x, y
                <br /><br />
                <code class="small"
                    >(zoom.<span class="red">translateTo, x, y</span>)</code
                ><br />Translation jusqu'à x, y</small
            >
        </div>
    </div>
    <Reference
        referenceLink="https://d3js.org/d3-zoom"
        referenceText="d3 | d3-zoom"
    ></Reference>
</Slide>

<Slide>
    <h3>Exemple</h3>
    <Reference
        referenceLink="https://observablehq.com/d/3b44fccdf8827628#cell-290"
        referenceText="Observable | d3-zoom"
    ></Reference>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-brush"
        ><h3><code class="red">d3-brush</code></h3></a
    >
    <p>
        <span class="red">Installation</span> <br />
        <small><code>npm install d3-brush</code></small>
    </p>

    <div class="center">
        <img src={BrushGif} alt="brush" class="center" />
    </div>
</Slide>

<Slide>
    <div class="row center">
        <div class="col-50">
            <h5>Initialisation</h5>
            <code class="small"
                >const myBrush= d3.<span class="red">brush()</span></code
            >
            <br /> <br />

            <h5>Événements</h5>
            <code class="small"
                >d3.brush().<span class="red">on(typenames, listener)</span
                ></code
            >
            <ul>
                <li class="small">
                    <code class="small"
                        ><span class="red">typenames</span></code
                    >: Les types d'événements à écouter, par exemple,
                    <code class="red">'brush'</code>,
                    <code class="red">'start'</code>,
                    <code class="red">'end'</code>. Retourne:
                    <code class="red">event.selection</code> qui correspond à l'étendue
                    du brush [[x0,y0],[x1,y1]]
                </li>
                <li class="small">
                    <code class="small"><span class="red">listener</span></code
                    >: La fonction de rappel (callback) appelée lorsqu'un
                    événement spécifié se produit.
                </li>
            </ul>
        </div>

        <div class="col-50 center">
            <img src={BrushSyntaxe} alt="brush-syntax" height="300" />
        </div>
    </div>
    <Reference
        referenceLink="https://d3js.org/d3-brush"
        referenceText="d3 | d3-brush"
    ></Reference>
</Slide>

<Slide>
    <h3>Exemple</h3>
    <Reference
        referenceLink="https://observablehq.com/d/daa28ed3e44bfbcd"
        referenceText="Observable | d3-brush"
    ></Reference>
</Slide>

<Slide>
    <h3>Animation</h3>

    <div class="center">
        <img
            src={Animation}
            alt="animation-schema"
            width="500"
            height="600"
            class="center"
        />
    </div>
</Slide>

<Slide>
    <h3>Animation</h3>

    <code class="small"
        ><span class="red">setInterval</span>(<em>fonction</em>,
        <em>intervalleEnMs</em> [, params])</code
    >

    <p class="small">
        éxécute une fonction de manière répétée avec une intervalle fixée.
        Retourne un identifiant unique (<code>intervalId</code>).
    </p>

    <br />

    <code class="small"
        ><span class="red">clearInterval</span>(<em>intervalId</em>)</code
    >

    <p class="small">arrête l'intervalle</p>
    <br />

    <Reference
        referenceLink="https://developer.mozilla.org/en-US/docs/Web/API/setInterval"
        referenceText="Doc MDN : setInterval()"
    ></Reference>
</Slide>

<Slide>
    <h3>Exemple</h3>
    <Reference
        referenceLink="https://codepen.io/romanoe/pen/rNZKjvB"
        referenceText="Codepen | Animation"
    ></Reference>
</Slide>

<Slide>
    <h3>Exercices</h3>
    <h5>gapminder</h5>
    <div class="row">
        <div class="col-50">
            <ol>
                <li>Visualisation statique</li>
                <li>Cartographie</li>
                <li>Interaction et animation</li>
            </ol>
        </div>
        <div class="col-50">
            <iframe
                src="https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1"
                width="800"
                height="550"
                title="Gapminder Bubbles Chart"
            ></iframe>
        </div>
    </div>
</Slide>
