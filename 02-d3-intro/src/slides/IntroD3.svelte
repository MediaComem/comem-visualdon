<script>
    import Slide from '../lib/Slide.svelte';
    import Code from "../lib/Code.svelte";
    import {select, selectAll} from 'd3-selection';
    import {shuffle} from "d3-array";
    import {onMount} from "svelte";
    import {transition} from "d3-transition";
    import {easeLinear} from "d3-ease";
    import Fa from 'svelte-fa'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'


    const width = 500
    const height = 300
    const margin = {top : 50, right: 40, bottom: 50, left: 40};

    let x = 0;
    let y = 0;

    const data = ['Pierre', 'Charlotte', 'Jacques'];

    onMount(() => {
        // Select
        const svg = select("#mon-svg");
        const cercle = svg.select("circle");
        cercle.attr("fill", "#E92528");

        // Append
        select("#mon-svg2")
            .attr("width", width)
            .attr("height", height)
            .append("circle")
            .attr("cx", "30%")
            .attr("cy", "40%")
            .attr("r", "100");

        // Events
        select("#mon-svg3")
            .attr("width", width)
            .attr("height", height)
            .select("circle")
            .on('click', function () {
                select(this).attr("fill", 'green');
            })
            .on('mousemove', function(e) {
                x = e.clientX;
                y = e.clientY;
            });

        // Joining data
        select("#mon-div")
            .append("ul")
            .selectAll("li")
            .data(data)
            .join(enter => enter.append("li").text((d, i) => 'Valeur: ' + d + ', Index: ' + i))
            .style("color", 'green');





        const svgJoin = select('#viz_area')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // translate this svg element to leave some margin.
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const svgJoin2 = select('#viz_area2')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // translate this svg element to leave some margin.
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        const svgJoin3 = select('#viz_area3')
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





    });

</script>

<Slide>
    <h2>Semaine passée</h2>
    <p class="fragment"><span class="heig-red">Fonction</span> Explicative ou exploratoire <br></p>
    <p class="fragment"><span class="heig-red">Formes</span> Statique ou interactive <br> </p>
    <p class="fragment"><span class="heig-red">SVG</span> Formes, dessins et transformation </p>
</Slide>


<Slide>
    <iframe src="https://d3js.org/" width="800" height="550" title="d3-iframe"></iframe>
</Slide>

<Slide>
    <h2>Documentation</h2>
    <br>
    <a href="https://github.com/d3/d3/blob/main/API.md"><code>Github: API reference</code></a>

    <br>
    <br>
    <img src="assets/doc_annotation.svg"  alt="js-doc" class="center"> <br>




</Slide>

<!--<Slide>-->
<!--    <h2>DOM</h2>-->
<!--    <p><span class="heig-red">D</span>ocument <span class="heig-red">O</span>bject <span class="heig-red">M</span>odel</p>-->
<!--    <small><blockquote>-->
<!--        Le Document Object Model (DOM) est une interface de programmation normalisée par le W3C, qui permet à des scripts d'examiner et de modifier le contenu du navigateur web-->
<!--    </blockquote></small>-->
<!--    <p class="fragment">(en bref : structure hiérarchique de <code>HTML</code>)</p>-->
<!--</Slide>-->


<Slide>
    <h2>Syntaxe</h2>
    <p>Chaînage de méthodes (fonctions)</p>

    <code>
        <span class="heig-red">objet</span>.methode1() <br>
        .methode2() <br>
        .methode3()
    </code>
    <Code trim>
					d3.select("body")
					  .append("p")
					  .text("Nouveau paragraphe")
				</Code>
</Slide>


<Slide>
    <a href="https://github.com/d3/d3-selection/tree/v3.0.0"><h2> <code class="heig-red"> d3-selection</code> </h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-selection</code></small></p>
</Slide>


<Slide>
    <h2>Sélectionner</h2>

    <code><b class="heig-red">select</b>(<em>selector</em>)</code> <br>
    <code><b class="heig-red">selectAll</b>(<em>selector</em>)</code>

    <br>
    <br>
    <small>
        <table>
            <table>
                <tr>
                    <th></th>
                    <th >CSS</th>
                    <th >Exemple</th>
                </tr>
                <tr>
                    <td>type</td>
                    <td><code>element </code></td>
                    <td><code>.select('h1')</code></td>
                </tr>
                <tr>
                    <td >class</td>
                    <td><code>.class</code></td>
                    <td><code>.select('.class')</code></td>
                </tr>
                <tr>
                <td>identifiant</td>
                <td><code>#id</code></td>
                <td><code>.select('#id')</code></td>
                </tr>
            </table>
        </table>
    </small>
    <br>
    <br>
    <br>
    <small><a href="https://github.com/d3/d3-selection/tree/v3.0.0#selecting-elements"><p> <code class="heig-red"> ↳ d3-selection - Selecting elements</code></p></a></small>


</Slide>

<section data-auto-animate>


    <h2>Modifier</h2>

    <br>
    <code>selection.<b class="heig-red">attr</b>(name[, value])</code>
    <div  class="row no-margin-top">
        <div class="col-60">

 <pre><Code trim>
      <script type="text/template">
<!--index.html-->

<svg id = 'mon-svg'>
    <circle cx="50%" cy="50%" r="50"></circle>
</svg>
</script>
            </Code></pre>

            <br>
            <pre> <Code trim>
// index.js

import {'{'} select {'}'} from 'd3-selection';

const svg = select("#mon-svg");
const cercle = svg.select("circle");
cercle.attr("fill", "#E92528");
 </Code></pre>


        </div>

        <div class="col-40 fig-container no-margin-top">

            <svg id="mon-svg">
                <circle cx="50%" cy="50%" r="50"></circle>
            </svg>

        </div>
    </div>
    <small><a href="https://github.com/d3/d3-selection/tree/v3.0.0#modifying-elements"><p> <code class="heig-red"> ↳ d3-selection - Modifying elements</code></p></a></small>

</section>



<Slide>
    <h2>Ajouter</h2>
    <br>
    <code>selection.<b class="heig-red">append</b>(type)</code>
    <div class="row no-margin-top">
        <div class="col-60">

<pre>
    <Code trim>
const WIDTH = 500
const HEIGHT = 800

const div = select("#mon-svg")
              .append("svg")
              .attr("width", WIDTH)
              .attr("height", HEIGHT)
              .append("circle")
              .attr("cx", "30%")
              .attr("cy", "40%")
              .attr("r", "100")
    </Code>
</pre>

    </div>
        <div class="col-40">
        <svg id="mon-svg2">
        </svg>
        </div>
    </div>
    <small><a href="https://github.com/d3/d3-selection/tree/v3.0.0"><p> <code class="heig-red"> ↳ d3-selection -  Modifying elements</code></p></a></small>

</Slide>


<Slide>
    <h2>Ecouter les événements</h2>

    <code>selection.<b class="heig-red">on</b>(typenames[, listener[, options]])</code>
    <div class="row no-margin-top">
        <div class="col-60">
				<pre><Code trim>
<script type="text/template">
<!--index.html-->

<svg id = 'mon-svg'>
    <circle cx="50%" cy="50%" r="50"></circle>

</svg>

</script>
</Code></pre>

<pre><Code trim>
// index.js

import {'{'} select {'}'} from 'd3-selection';

select("#mon-svg")
    .select("circle")
    .on('click', function () {'{'}
                   select(this).attr("fill", 'green')
    {'}'})
    .on('mousemove', function(e) {'{'}
                    console.log("x: " + e.clientX + ", y:" + e.clientY )
    {'}'});

</Code>
</pre>



        </div>
        <div class="col-40 fig-container no-margin-top" >

        <svg id="mon-svg3">
            <circle cx="50%" cy="50%" r="100"></circle>
        </svg>


            <p>x: {x}, y: {y}</p>

        </div>


    </div>
    <small><a href="https://github.com/d3/d3-selection/tree/v3.0.0#handling-events"><p> <code class="heig-red"> ↳ d3-selection - Handling events</code></p></a></small>

</Slide>


<Slide>
    <h2>Joindre les données</h2>
    <p class="heig-red"><em>Joindre les données aux éléments <b>sélectionnés</b></em></p>
    <br>

    <code>
        selection.<b class="heig-red">data</b>([data[, key]])
    </code>

    <br>
    <br>
    <br>

    <code>
        selection.<b class="heig-red">data</b>(<em>tableau</em>).<b class="heig-red">join</b>(enter[, update][, exit])
    </code>

    <br>

</Slide>



<Slide>
    <h2>Joindre les données</h2>
    <h5><span class="heig-red">Entering data</span></h5>

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

            <div id="viz_area"></div>

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
            <div id="viz_area2"></div>

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
            <div id="viz_area3"></div>
        </div>
    </div>
</Slide>




<Slide>

    <h2>Joindre les données</h2>



    <div class="row">



    <div class="col-60">


<pre><Code trim>
<script type="text/template">
<!--index.html-->

<div id="my-div"></div>

</script>
</Code></pre>



<pre><Code trim>
// index.js

import {'{'} select, selectAll {'}'} from 'd3-selection';

const data = ['Pierre', 'Charlotte', 'Jacques'];

select("#ma-div")
    .append("ul")
    .selectAll("li")
    .data(data)
    .join(enter => enter
                    .append("li")
                    .text((d, i) => 'Valeur: ' + d + ', Index: ' + i))
    .style("color", 'green');



</Code></pre>


    </div>


    <div class="col-40">


    <div id="mon-div"></div>


    </div>


    </div>





    <small><a href="https://github.com/d3/d3-selection/tree/v3.0.0#joining-data"><p> <code class="heig-red"> ↳ d3-selection - Joining data</code></p></a></small>

</Slide>



<Slide>
    <h2>Projet</h2>
    <div class="row">
        <div class="col-60">
            <h4 ><span class="heig-red">Thématique (10 mars)</span></h4>
            <ul>
                <li>Trouver un jeu de données </li>
                <li>Créer un dossier github pour le projet</li>
                <li>Suivre directives <a href="https://github.com/romanoe/visualdon-exercices/tree/main/projet">ici</a> </li>
            </ul>
        </div>

        <div class="col-40">
            <img src="assets/data.gif" alt="data-gif"> <br>
        </div>
    </div>
</Slide>

<Slide>
    <h2>Exemples</h2>
    <ul>
        <li>
            <a href="http://www.bmdata.co.uk/titanic/">Titanic</a>
        </li>
        <li><a href="https://projects.two-n.com/world-gender/">Global gender gap</a></li>
        <li><a href="http://rhythm-of-food.net/">The Rythm of food</a></li>
        <li><a href="https://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth/">Satellites</a>
        </li>
    </ul>

</Slide>


<Slide>
    <h2>Exercices</h2>
    <p><span class="heig-red">Rajouter dossier du cours en upstream</span> <br> <small><code>git remote add upstream
        git@github.com:romanoe/visualdon-exercices.git</code></small></p>
    <p><span class="heig-red">Télécharger changements</span> <br> <small><code>git fetch upstream</code></small></p>
    <p>
    <p><span class="heig-red">Mettre à jour</span> <br> <small><code>git merge upstream/main</code></small></p>
</Slide>

