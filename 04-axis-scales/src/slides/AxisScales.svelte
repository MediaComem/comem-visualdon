<script>
    import Slide from "../lib/Slide.svelte";
   import Code from "../lib/Code.svelte";
   import {scaleThreshold} from "d3-scale";

    const scale = scaleThreshold()
        .domain([0, 50, 100])
        .range(["white", "red", "blue", "green"])


    console.log(scale(-10)) // Expected output white
    console.log(scale(0))// Expected output red
    console.log(scale(80)) // Expected output blue
    console.log(scale(120)) // Expected output green

</script>



<Slide class="fragment">
    <h2>Semaine passée</h2>
    <p class="fragment"><span class="heig-red">Charger les données</span>  <code>json()</code>,  <code>csv()</code> </p>
    <p class="fragment"><span class="heig-red">Statistiques</span>  <code>mean()</code>,  <code>max()</code>,  <code>extent()</code> etc. </p>
    <p class="fragment"><span class="heig-red">Manipuler les données</span> <code>map()</code>, <code>filter()</code>,<code>reduce()</code><br>  etc. </p>
</Slide>



<Slide class="fragment">
    <h3>Jusqu'à maintenant</h3>

    <code><span class = 'heig-red'>Données</span> = <span class = 'heig-red'>Pixels</span> </code>
    <br>
    <br>

    <div class="r-stack">
        <img class = "fragment fade-in-then-out" src="assets/data2pixel.svg" alt="" >
        <img class = "fragment" src="assets/data2not_fitting.svg" alt="" >
    </div>


</Slide>

<Slide>
    <h3>Dès aujourd'hui</h3>

    <code><span class = 'heig-red'>Données</span> = Echelle * <span class = 'heig-red'>Pixels</span> </code>
    <br>
    <br>

    <img src="assets/data2scaledpixel.svg" alt="data-scaled" class="center" >
</Slide>


<Slide>
    <a href="https://github.com/d3/d3-scale"><h2><code class="heig-red">d3-scale</code></h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-scale</code></small></p>
</Slide>

<Slide>
    <h3>Syntaxe</h3>
    <br>

    <img src="assets/domain_range.png" alt="scale-syntax" >

</Slide>

<Slide>
    <h3>Échelles continues</h3>
    <code><small>Données continues</small></code>
    <br>
    <img src="assets/continuous-scales.svg" alt="numeric-scales" >
    <pre>
        <Code trim>
            const scale = scaleLinear
                            .domain([0, 100])
                            .range([0, 1000])

            scale(0) // Expected output 0
            scale(50)  // Expected output 500
            scale(100) // Expected output 1000
        </Code>
    </pre>
</Slide>


<Slide>
    <h3>Échelles continues</h3>
    <code><small>Données temporelles</small></code>
    <img src="assets/scaleTime.png" alt="scaleTime" >

    <pre>
        <Code trim>
            const firstDay = new Date(new Date().getFullYear(), 0, 1);
            const lastDay = new Date(new Date().getFullYear(), 11, 31);
            const christmasDay = new Data(new Date().getFullYear(), 11, 25);

            const scale = scaleTime
                            .domain([firstDay, lastDay])
                            .range([0, 100])


            scale(firstDay) // Expected output 0
            scale(lastDay)  // Expected output 100
            scale(christmasDay) // Expected output 98.35164835164835
        </Code>
    </pre>

</Slide>


<Slide>
    <h3>Échelles discrètes</h3>
    <code><small>Données continues</small></code>
    <img src="assets/scaleQuantize.png" alt="scale-quantize" >

    <pre>
        <Code trim>
            const scale = scaleQuantize
                            .domain([0, 100])
                            .range(["white", "red", "blue"])


            scale(0) // Expected output white
            scale(50)  // Expected output red
            scale(-10) // Expected output white
        </Code>
    </pre>

</Slide>


<Slide>
    <h3>Échelles discrètes</h3>
    <code><small>Données continues</small></code>
    <img src="assets/scaleThreshold.png" alt="scale-threshold" >


</Slide>


<Slide>
    <h3>Échelles discrètes</h3>
    <code><small>Données discrètes</small></code>
    <img src="assets/scaleOrdinal.png" alt="scale-ordinal" >


</Slide>


<Slide>
    <h3>Échelles discrètes</h3>
    <code><small>Données discrètes</small></code>
    <img src="assets/scaleBand.png" alt="scale-band" >

    <pre>
        <Code trim>
const myData = [
            {"{"}day : 'Mon', value: 10{"}"},
            {"{"}day : 'Tue', value: 40{"}"},
            {"{"}day : 'Wed', value: 30{"}"},
            {"{"}day : 'Thu', value: 60{"}"},
            {"{"}day : 'Fri', value: 3{"}"}
            ];

const bandScale = d3.scaleBand()
	.domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
	.range([0, 200])
	.paddingInner(0.05);

const monBarChart = monSvg.
	                .selectAll('rect')
	                .data(myData)
                    .join(enter => enter.append('rect')
                        .attr('y', bandScale(d.day))
                        .attr('width', bandscale.bandwidth())
                        .attr('height', d => d.value));
        </Code>
    </pre>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-axis"><h2><code class="heig-red">d3-axis</code></h2></a>
    <p><span class="heig-red">Installation</span> <br> <small><code>npm install d3-axis</code></small></p>
</Slide>

<Slide>
    <h2>Axes</h2>

    <img src="assets/axis.svg" alt="" >

</Slide>


<Slide>
    <h2>Axes</h2>
    <div class="row">
        <div class="col-50">
            <h5 class="heig-red">Création</h5>
            <code>const axe = <br>d3.<span class="heig-red">axisBottom(</span>echelle<span class="heig-red">)</span></code>
        </div>

        <div class="col-50">
            <h5 class="heig-red">Dessin</h5>
            <code>selecteur <br>.append('g')<br><span class="heig-red">.call(</span>axe<span class="heig-red">)</span></code>
        </div>

    </div>
</Slide>

<Slide><h2>Exemple</h2>
    <div class = "row">
        <div class="col-50">


							<pre><code data-line-numbers="6">
const x = d3.scaleLinear()
			.domain([0, 100])
			.range([0, 400]);

svg.call(d3.axisBottom(x));

svg.append("circle")
		.attr("cx", x(10))
		.attr("cy", x(100))
		.attr("r", 40)
		.style("fill", "blue");
						</code></pre>
        </div>
        <div class="col-50">
            <div class = "fig-container no-margin-top" data-file="d3-exemples/axes.html"></div>
        </div>
    </div>
</Slide>



<Slide>
    <h3>Marges & Translations</h3>
    <img src="assets/margin_convention.svg" alt="" >
</Slide>

<Slide data-auto-animate>
    <h3>Marges & Translations</h3>
    <pre>
					<code class="hljs" data-trim data-line-numbers="1-3|5-8|10-12|14-16|18-20|22-23|26-31">
const margin = {"{"} top : 10, right: 40, bottom: 10, left: 40{"}"},
		   width = 450 - margin.left - margin.right,
		   height = 400 - margin.top - margin.bottom;

svg.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const x = d3.scaleLinear()
		.domain([0,100])
		.range([0,width])

svg.append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

const y = d3.scaleLinear()
		.domain([0,100])
		.range([height,0])

svg.append('g')
  .call(d3.axisLeft(y));


svg.append("circle")
   .attr("cx", x(10)).attr("cy", y(60)).attr("r", 40).style("fill", "blue");
svg.append("circle")
   .attr("cx", x(50)).attr("cy", y(60)).attr("r", 40).style("fill", "red");
svg.append("circle")
    .attr("cx", x(100)).attr("cy", y(60)).attr("r", 40).style("fill", "green");

					</code>
				</pre>
</Slide>

<Slide>
    <h3>Marges & Translations</h3>

    <div class = "fig-container no-margin-top" data-file="d3-exemples/margin_translation.html"></div>

</Slide>



<Slide>
    <h2>Projet</h2>
    <h4 ><span class="heig-red">Thématique (ce soir)</span></h4>
    <br>

    <h4 ><span class="heig-red">Wireframe (17 mars)</span></h4>

    <div class="row">


        <div class="col-60">

            <img src="assets/sketch1.jpg" alt="">


        </div>

        <div class="col-40">
            <img src="assets/figma.png" alt="">
            <img src="assets/invision-logo-square.png" alt="">
        </div>
    </div>

</Slide>



