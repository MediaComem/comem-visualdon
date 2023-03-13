<script>
    import Slide from "../lib/Slide.svelte";
   import Code from "../lib/Code.svelte";
   import {transition} from "d3-transition";
   import {select, selectAll} from "d3-selection";
   import {easeLinear} from "d3-ease";
    import {shuffle} from "d3-array";
    import {onMount} from "svelte";
    import {zoom} from "d3-zoom";

    const margin = {top : 50, right: 40, bottom: 50, left: 100},
        width = window.innerWidth - margin.left - margin.right,
        height = 0.5*window.innerHeight - margin.top - margin.bottom;


    onMount(() => {

        const t = transition()
            .duration(2000)
            .ease(easeLinear);

        const monSvg = select('#viz_area')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height )
        // translate this svg element to leave some margin.
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const svg2 = select('#viz_area2')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        // translate this svg element to leave some margin.
        .append("g")
        .attr("transform", "translate(0 ," + margin.top + ")");


    function rectTransition() {

        let rectangle = svg2.append("rect")
            .attr("x", 20)
            .attr("y", 0)
            .attr("width", 0)
            .attr("height", 20)
        // .attr('fill','#69b3a2');

        repeat();

        function repeat() {
            rectangle// position the circle at 40 on the x axis
                .transition()        // apply a transition
                .duration(2000)      // apply it over 2000 milliseconds
                .attr('width', 200)
                .transition()        // apply a transition
                .duration(2000)      // apply it over 2000 milliseconds
                .attr("width", 0)
                .on("end", repeat);  // when the transition finishes start again

        };

    };


    rectTransition();

    function circleTransition() {

        let circle = monSvg.append("circle")
            .attr("r", 10);

        repeat();
        function repeat() {

            circle// position the circle at 40 on the x axis
                .attr('r',40)     // position the circle at 250 on the y axis
                .transition()        // apply a transition
                .duration(2000)      // apply it over 2000 milliseconds
                .attr('r', 10)
                .transition()        // apply a transition
                .duration(2000)      // apply it over 2000 milliseconds
                .attr('r', 40)  // move the circle to 920 on the x axis
                .on("end", repeat);  // when the transition finishes start again
        };

    };


    circleTransition();


// Exemple join

    const svgJoin = select('#viz_area_join')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        // translate this svg element to leave some margin.
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const svgJoin2 = select('#viz_area_join2')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        // translate this svg element to leave some margin.
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const svgJoin3 = select('#viz_area_join3')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        // translate this svg element to leave some margin.
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    // Enter
    const tableauLettresAleatoires = () => {
        return shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
            .slice(0, Math.floor(6 + Math.random() * 20))
            .sort();
    }



    setInterval(() => {
        svgJoin.selectAll("text")
            .data(tableauLettresAleatoires(), d => d)
            .join(
                enter => enter.append("text")
                    .attr('fill', 'green')
                    .text(d => d)

            )
            .attr("x", (d, i) => i * 30) // Mettre à jour à chaque fois la position

    }, 1000);





    setInterval(() => {
        svgJoin2.selectAll("text")
            .data(tableauLettresAleatoires(), d=>d)
            .join(
                enter => enter.append("text")
                    .attr('fill', 'green')
                    .attr("x", (d, i) => i * 30) // Mettre à jour à chaque fois la position
                    .text(d => d),
                update => update.attr('fill', 'grey')
                    .attr("x", (d, i) => i * 30) // Mettre à jour à chaque fois la position
            )

    }, 1000);



    function getTransition() {
        return transition()
            .duration(500)
            .ease(easeLinear)
    }

    setInterval(() => {
        svgJoin3.selectAll("text")
            .data(tableauLettresAleatoires, d => d)
            .join(
                enter => enter.append("text")
                    .attr("fill", "green")
                    .attr("x", (d, i) => i * 30)
                    .attr("y", 0)
                    .text(d => d)
                ,
                update => update
                    .attr("fill", "grey")
                    .attr("y", 0)
                    .attr("x", (d, i) => i * 30),
                exit => exit
                    .attr("fill", "brown")
                    .transition(getTransition())
                    .attr("y", 30)
                    .remove()
            );
    }, 2000);



// Zoom
        const svgZoom =select('#viz_area_zoom')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // translate this svg element to leave some margin.
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let data = [], numPoints = 100;

        let zoomHandler = zoom()
            .on('zoom', handleZoom);

        function handleZoom(e) {
            svgZoom.attr('transform', e.transform);
        }


            svgZoom
                .call(zoomHandler);


        function updateData() {
            data = [];
            for(let i=0; i<numPoints; i++) {
                data.push({
                    id: i,
                    x: Math.random() * width,
                    y: Math.random() * height
                });
            }
        }

        function update() {

            svgZoom.selectAll('circle')
                .data(data)
                .join('circle')
                .attr('cx', function(d) { return d.x; })
                .attr('cy', function(d) { return d.y; })
                .attr('r', 3);
        }



        updateData();
        update();



    });





</script>


<Slide class="fragment">
    <h2>Semaine passée</h2>
    <p class="fragment"><span class="heig-red">Echelles</span>  <code>.scaleLinear().domain().range()</code></p>
    <p class="fragment"><span class="heig-red">Axes</span> <code>.axisBottom()</code>, <code>.axisTop()</code>,<code>.axisLeft()</code>,<code>.axisRight()</code><br> </p>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-transition"><h2><code class="heig-red">d3-transition</code></h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-transition</code></small></p>
</Slide>

<Slide>
    <h2>Transitions</h2>

    <div class="row">
 <img src="assets/transition.svg" alt="" height="200" class="center"/>


        <div class="col-50">

            <p>Etat 1: r = 10, Etat 2: r = 50 </p>
            <div id="viz_area"></div>


        </div>

        <div class="col-50">
            <p>Etat 1: width = 0, Etat 2: width = 200 </p>
            <div id="viz_area2"></div>

        </div>

    </div>


</Slide>

<Slide>
    <h2>Transitions</h2>	<div class="row">

    <div class="col-50">
        <img src="assets/transition-syntaxe.svg" alt="" height="250"/>
    </div>

    <div class="col-50">
        <img src="assets/transition.svg" alt="" height="200"/>
    </div>


</div>

    Pour les fonctions <em>Easing</em>: <a href="https://observablehq.com/@d3/easing-animations" target="_blank">ici</a>
</Slide>


<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">RAPPEL</span></h5>
    <div class="row">
        <img src="assets/data-enter-2.svg" alt="" height="300"/>
    </div>
</Slide>

<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">Mise à jour des données</span></h5>
    <code>enter, update, exit</code>
    <div class="row">
        <img src="assets/data-enter-update-exit.svg" alt="" height="300"/>
    </div>
</Slide>

<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">EXEMPLE</span></h5>
    <div class="row">
        <div class="col-50">
            <img src="assets/data-join-example-1.svg" alt="" height="300"/>
        </div>
        <div class="col-50">

            <div id="viz_area_join"></div>

        </div>
    </div>
</Slide>

<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">EXEMPLE</span></h5>
    <div class="row">
        <div class="col-50">
            <img src="assets/data-join-example-2.svg" alt="" height="300"/>
        </div>
        <div class="col-50">
            <div id="viz_area_join2"></div>

        </div>
    </div>
</Slide>



<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">EXEMPLE</span></h5>
    <div class="row">
        <div class="col-50">
            <img src="assets/data-join-example-3.svg" alt="" height="300"/>
        </div>
        <div class="col-50">
            <div id="viz_area_join3"></div>
        </div>
    </div>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-zoom"><h2><code class="heig-red">d3-zoom</code></h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-zoom</code></small></p>
</Slide>


<Slide>
    <h2>Zoom & Pan</h2>
    <code><span class="heig-red">zoom()</span></code>
    <div class="row">
        <div class="col-40">
            <img src="assets/zoom-syntaxe.svg" alt="" height="300"/>
        </div>
        <div class="col-60">
            <br>
            <br>
            <ul>
                <li>Événements: <code>'zoom', 'start', 'end'</code></li>
                <li>Retourne : <code>transform</code> (qu'on peut injecter dans .attr()!)</li>
            </ul>
        </div>
    </div>

</Slide>

<Slide>
    <h2>Zoom & Pan</h2>
    <h5><span class="heig-red">Exemple</span></h5>

    <div class="row">
        <div class="col-50">
						<pre>
<Code lineNumbers="1-2|4-7|9-10|12-17" trim>
let zoomSvg = zoom()
        .on('zoom', handleZoom);

function handleZoom(e) {"{"}
        monSvg
            .attr('transform', e.transform);
    {"}"}

monSvg
   .call(zoom);

svg.selectAll('circle')
	.data(data)
    .join( enter => enter.append('circle')
                .attr('cx', d => d.x;)
                .attr('cy', d => d.y;)
                .attr('r', 3);
</Code>
	</pre>
        </div>
        <div class="col-50">

            <div id="viz_area_zoom" height=200 width=700></div>
        </div>
    </div>
</Slide>

<Slide>
    <h2>Zoom & Pan</h2>

    <h5><span class="heig-red">Contraintes</span></h5>

    <div class="row">
        <code>zoom().<span class="heig-red">contrainte(props)</span></code>
        <br>
        <br>
        <div class="col-50">
            <small><code><span class="heig-red">scaleExtent([min, max])</span></code></small>
            <img src="assets/scale-extent.svg" alt="scale-extent" height="200" class="center"/>

        </div>


        <div class="col-50">
            <small><code><span class="heig-red">translateExtent([minX,minY],[maxX, maxY])</span> </code></small>
            <img src="assets/translate-extent.svg" alt="translate-extent" height="200" class="center"/>

        </div>

    </div>

</Slide>

<Slide>
    <h2>Zoom & Pan</h2>

    <h5><span class="heig-red">Méthodes</span></h5>

    <div class="row">
        <code><em>selector</em>.call(zoom<span class="heig-red">.methode, props</span>)</code>
        <br>
        <br>
        <div class="col-50">
            <code><span class="heig-red">Zoom</span></code>
            <br>
            <br>

            <small><code>(zoom.<span class="heig-red">scaleBy, facteur_échelle</span>)</code> <br>Multiplie l'échelle actuelle par le facteur d'échelle
                <br><br>

                <code>(zoom.<span class="heig-red">scaleTo, échelle</span>)</code> <br>Change l'échelle à échelle définie</small>

        </div>


        <div class="col-50">
            <code><span class="heig-red">Pan</span> </code>
            <br>
            <br>

            <small><code>(zoom.<span class="heig-red">translateBy, x, y </span>)</code><br>Translation de x, y
                <br><br>
                <code>(zoom.<span class="heig-red">translateTo, x, y</span>)</code><br>Translation jusqu'à x, y</small>
        </div>
    </div>
</Slide>

<Slide>
    <h2>Projet</h2>
    <p>Charger les données</p>
    <p>Agréger et manipuler les différents datasets</p>
    <p>Commencer la visualisation "statique"</p>
</Slide>

<Slide>
    <h2>Exercices</h2>
    <h5>gapminder</h5>
    <div class="row">
        <div class="col-50">
            <ol>
                <li>Visualisation statique </li>
                <li>Cartographie</li>
                <li>Interaction et animation</li>
            </ol>
        </div>
        <div class="col-50">
            <iframe src="https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1" width="800" height="550"></iframe>

        </div>

    </div>
</Slide>
