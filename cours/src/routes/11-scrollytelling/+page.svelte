<script>
    import Slide from "$lib/Slide.svelte";
    import Title from "$lib/Title.svelte";

    import Reference from "$lib/Reference.svelte";
    import ScrollamaSyntax from "$lib/assets/11-d3-alternatives-scrollytelling/scrollama-syntax.png";
</script>

<Title title="11 - Scrollytelling"></Title>

<Slide>
    <h3>Scrollytelling</h3>

    <a href="https://pudding.cool/2018/08/wiki-death/">↳ Wiki death</a><br />
    <a
        href="https://interactives.stuff.co.nz/2020/05/coronavirus-covid-19-data-new-zealand/"
        >↳ covid-19</a
    ><br />
    <a href="https://labs.mapbox.com/storytelling/">↳ Mapbox</a>
</Slide>

<Slide>
    <div class="row">
        <div class="col-50">
            <a href="https://github.com/russellsamora/scrollama"
                ><h3><code class="heig-red">scrollama</code></h3></a
            >
            <p>
                <span class="heig-red">Installation</span> <br />
                <small
                    ><code>npm install scrollama intersection-observer</code
                    ></small
                >
            </p>

            <Reference
                referenceLink="https://github.com/russellsamora/scrollama"
                referenceText="Doc"
            ></Reference>
            <br />
            <Reference
                referenceLink="https://russellsamora.github.io/scrollama/basic/"
                referenceText="Exemples"
            ></Reference>
        </div>

        <div class="col-50">
            <img
                src={ScrollamaSyntax}
                alt="scrollama-syntax"
                width="800"
                class="center"
            />
        </div>
    </div>
</Slide>

<Slide>
    <h3>Sticky scroller</h3>

    <Reference
        referenceText="Sticky scroller | Codepen"
        referenceLink="https://codepen.io/romanoe/pen/qBJjVaR"
    ></Reference>
    <br />
    <Reference
        referenceText="scrollama + d3 | Github"
        referenceLink="https://github.com/edriessen/scrollytelling-scrollama-d3-demo"
    ></Reference>
</Slide>

<Slide>
    <a href="https://gsap.com/"><h3><code class="heig-red">GSAP</code></h3></a>
    <p>
        <span class="heig-red">Installation</span> <br />
        <small><code>npm install gsap</code></small>
    </p>

    <Reference referenceLink="https://gsap.com/docs/v3/" referenceText="Doc"
    ></Reference>
    <br />
    <Reference
        referenceLink="https://gsap.com/demos?page=1"
        referenceText="Exemples"
    ></Reference>
</Slide>

<Slide>
    <a href="https://scrollmagic.io/"
        ><h3><code class="heig-red">ScrollMagic</code></h3></a
    >
    <p>
        <span class="heig-red">Installation</span> <br />
        <small><code>npm install scrollmagic</code></small>
    </p>

    <Reference referenceLink="https://scrollmagic.io/" referenceText="Doc"
    ></Reference>
    <br />
    <Reference
        referenceLink="https://scrollmagic.io/examples/index.html"
        referenceText="Exemples"
    ></Reference>
</Slide>

<Slide>
    <a href="https://scrollmagic.io/"
        ><h3><code class="heig-red">Locomotive Scroll</code></h3></a
    >
    <p>
        <span class="heig-red">Installation</span> <br />
        <small><code>npm install locomotive-scroll</code></small>
    </p>

    <Reference
        referenceLink="https://github.com/locomotivemtl/locomotive-scroll"
        referenceText="Doc"
    ></Reference>
    <br />
    <Reference
        referenceLink="https://locomotivemtl.github.io/locomotive-scroll/"
        referenceText="Exemples"
    ></Reference>
</Slide>

<Slide>
    <h3>Projet</h3>
    <ul>
        <li>Création, chargement, manipulation des données !</li>
        <li>Visualisations statiques</li>
    </ul>
</Slide>
