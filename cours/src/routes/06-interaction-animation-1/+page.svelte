<script>
    import Slide from "$lib/Slide.svelte";
    import Title from "$lib/Title.svelte";
    import Reference from "$lib/Reference.svelte";
    import { transition } from "d3-transition";
    import { select } from "d3-selection";
    import { easeLinear } from "d3-ease";

    import Transition from "$lib/assets/06-interaction-animation-1/transition.svg";
    import TransitionSyntax from "$lib/assets/06-interaction-animation-1/transition-syntaxe.svg";
    import TransitionCode from "$lib/assets/06-interaction-animation-1/transition-code.png";
    import ZoomSyntaxCode from "$lib/assets/06-interaction-animation-1/zoom-syntaxe-code.png";
    import ScaleExtent from "$lib/assets/06-interaction-animation-1/scale-extent.svg";
    import sketch1Img from "$lib/assets/04-axis-scales/sketch1.jpg";
    import figmaImg from "$lib/assets/04-axis-scales/figma.png";
    import invisionLogoImg from "$lib/assets/04-axis-scales/invision-logo-square.png";

    import { onMount } from "svelte";

    const margin = { top: 50, right: 40, bottom: 10, left: 100 },
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    onMount(() => {
        const t = transition().duration(2000).ease(easeLinear);

        const monSvg = select("#viz_area")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height)
            // translate this svg element to leave some margin.
            .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );

        const svg2 = select("#viz_area2")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // translate this svg element to leave some margin.
            .append("g")
            .attr("transform", "translate(0 ," + margin.top + ")");

        function rectTransition() {
            let rectangle = svg2
                .append("rect")
                .attr("x", 100)
                .attr("y", 50)
                .attr("width", 0)
                .attr("height", 20);
            // .attr('fill','#69b3a2');

            repeat();

            function repeat() {
                rectangle // position the circle at 40 on the x axis
                    .transition() // apply a transition
                    .duration(2000) // apply it over 2000 milliseconds
                    .attr("width", 200)
                    .transition() // apply a transition
                    .duration(2000) // apply it over 2000 milliseconds
                    .attr("width", 0)
                    .on("end", repeat); // when the transition finishes start again
            }
        }

        rectTransition();

        function circleTransition() {
            const circle = monSvg.append("circle").attr("r", 0);

            repeat();
            function repeat() {
                circle
                    .attr("cx", 250) // position the circle at 250 on the x axis
                    .attr("cy", 0) // position the circle at 250 on the y axis
                    .transition() // apply a transition
                    .duration(2000) // apply it over 2000 milliseconds
                    .attr("r", 40) // increase radius to 40
                    .transition() // apply a transition
                    .duration(2000) // apply it over 2000 milliseconds
                    .attr("r", 10) // decrease radius to 10
                    .on("end", repeat); // when the transition finishes start again
            }
        }

        circleTransition();

        const svg3 = select("#viz_area3")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // translate this svg element to leave some margin.
            .append("g")
            .attr("transform", "translate(0 ," + margin.top + ")");

        let radius = 10;
        const circle = svg3
            .append("circle")
            .attr("r", 10)
            .attr("cx", 400)
            .attr("cy", 100)
            .on("click", function () {
                radius = radius + 20;
                circle.transition().duration(2000).attr("r", radius);
            });
    });
</script>

<Title title="06 - Intéraction et animation (partie 1)"></Title>

<Slide class="fragment">
    <h3>Semaine passée</h3>
    <p class="fragment">
        <span class="red">Echelles</span>
        <code>.scaleLinear().domain().range()</code>
    </p>
    <p class="fragment">
        <span class="red">Axes</span> <code>.axisBottom()</code>,
        <code>.axisTop()</code>,<code>.axisLeft()</code>,<code
            >.axisRight()</code
        ><br />
    </p>
</Slide>

<Slide>
    <a href="https://github.com/d3/d3-transition"
        ><h3><code class="red">d3-transition</code></h3></a
    >
    <p>
        <span class="red">Installation</span> <br />
        <small><code>npm install d3-transition</code></small>
    </p>
</Slide>

<Slide>
    <h3>Transitions</h3>
    <div class="center">
        <img src={Transition} alt="transition" height="200" class="center" />
    </div>
    <br />
    <div class="row">
        <div class="col-40">
            <div id="viz_area"></div>
            <p class="small">Etat 1: r = 10, Etat 2: r = 50</p>
        </div>

        <div class="col-40">
            <div id="viz_area2"></div>
            <p class="small">Etat 1: width = 0, Etat 2: width = 200</p>
        </div>
    </div>
</Slide>

<Slide>
    <h3>Transitions</h3>
    <div class="row">
        <div class="col-50">
            <div class="center">
                <img
                    src={TransitionSyntax}
                    alt="transition-syntax"
                    height="250"
                />
            </div>
            <div id="viz_area3"></div>
        </div>

        <div class="col-50">
            <div class="center">
                <img src={TransitionCode} alt="transition-code" width="600" />
            </div>
        </div>
    </div>
</Slide>
<Slide>
    <h4>Méthodes</h4>
    <div class="center">
        <code class="small"
            >transition().<span class="red">duration(dureeTransition)</span
            ></code
        >
    </div>

    <Reference
        referenceLink="https://d3js.org/d3-transition/timing"
        referenceText="d3 | Transition timing"
    ></Reference>
    <br /> <br />
    <div class="center">
        <code class="small"
            >transition().<span class="red">ease(fonctionEasing)</span></code
        >
    </div>
    <Reference
        referenceLink="https://observablehq.com/@d3/easing-animations"
        referenceText="d3 | Easing animations"
    ></Reference>

    <br /> <br />
    <div class="center">
        <code class="small"
            >transition().<span class="red"
                >delay((d,i) => i*<em>tempsMillisecondes</em>)</span
            ></code
        >
    </div>
    <Reference
        referenceLink="https://d3js.org/d3-transition/timing"
        referenceText="d3 | Transition timing"
    ></Reference>
</Slide>

<Slide>
    <h3>Exemple</h3>
    <Reference
        referenceLink="https://observablehq.com/d/3b44fccdf8827628#cell-288"
        referenceText="Observable | d3-transition"
    ></Reference>
</Slide>
