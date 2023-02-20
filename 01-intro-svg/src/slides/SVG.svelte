
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
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Bitmap_VS_SVG_Fr.svg" alt="">
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
    <pre><code data-trim>
					<svg width="700" height="200">
						<rect x="0" y="0" width="100" height="100" fill="steelblue" />
						<circle cx="150" cy="50" r="40" fill="indianred" />
						<ellipse cx="250" cy="50" rx="30" ry="20" />
						<line x1="300" y1="0" x2="500" y2="100" stroke="red" /> <br>
						<text x="500" y="80">Et bien d'autres...</text>
					</svg>
				</code></pre>

    <svg width="700" height="150">
        <rect x="0" y="0" width="100" height="100" fill="steelblue" />
        <circle cx="150" cy="50" r="40" fill="indianred" />
        <ellipse cx="250" cy="50" rx="30" ry="20" />
        <line x1="300" y1="0" x2="500" y2="100" stroke="red" /> <br>
        <text x="500" y="80">Et bien d'autres...</text>
    </svg>
    <Slide>

    </Slide>
</Slide>

<Slide>
    <h2>Path</h2>
    <span class="heig-red">M</span>ove to (<code>M x y</code>) <br>
    <span class="heig-red">L</span>ine to (<code>L x y</code>) <br>
    <span class="heig-red">H</span>orizontal line (<code>H x</code>) <br>
    <span class="heig-red">V</span>ertical line (<code>V y</code>) <br>


    <pre><code data-trim >
						<svg width="200" height="100">
							<circle cx="0" cy="0" r="2" fill="red" />
							<path d="M 0 90 L 100 0 H 200 V 100" fill="none" stroke="steelblue" stroke-width="5" />
						</svg>
				</code></pre>


    <svg width="200" height="100">
        <circle cx="0" cy="0" r="5" fill="red" />
        <path d="M 0 90 L 100 0 H 200 V 100" fill="none" stroke="steelblue" stroke-width="5" />
    </svg>

</Slide>

<Slide>
    <h2>Courbes</h2>
    <pre><code data-trim>
					<svg width="200" height="100">
						<path d="M 20 20 L 180 20" fill="none" stroke="steelblue" />
						<path d="M 20 20 C 40 50 160 50 180 20" fill="none" stroke="indianred" />
						<circle cx="40" cy="50" r="2" fill="red" />
						<circle cx="160" cy="50" r="2" fill="red" />
					</svg>
			</code></pre>

    <svg width="200" height="100">
        <path d="M 20 20 L 180 20" fill="none" stroke="steelblue" />
        <path d="M 20 20 C 40 50 160 50 180 20" fill="none" stroke="indianred" />
        <circle cx="40" cy="50" r="2" fill="red" />
        <circle cx="160" cy="50" r="2" fill="red" />
    </svg>
</Slide>



<Slide>
    <h2>Groupes</h2>
    <pre><code data-trim data-line-numbers="2,6" class="r-fit-text">
					<svg width="200" height="100">
						<g fill="indianred" stroke="steelblue" stroke-width="2" transform="translate(-50, 20)">
							<circle cx="50" cy="50" r="30" />
							<rect x="40" y="40" width="60" height="30" />
							<text x="100" y="80" font-size="50">VisualDon</text>
						</g>
					</svg>

			</code></pre>

    <svg width="500" height="150">
        <g fill="indianred" stroke="steelblue" stroke-width="2" transform="translate(-50, 20)">
            <circle cx="150" cy="50" r="30" />
            <rect x="40" y="40" width="60" height="30" />
            <text x="100" y="80" font-size="50">VisualDon</text>
        </g>
    </svg>
</Slide>

<Slide>
    <h2>Transformation</h2>
    <small> <code> <b>translate(x,y)</b> </code> </small><br>
    <small><code> <b>rotate(angle, cx, cy)</b> </code> </small><br>
    <small> <code> <b>scale(facteur_echelle)</b> </code></small> <br>


    <pre><code data-trim data-line-numbers="2,6" class="r-fit-text">
					<svg width="500" height="150">
						<g fill="indianred" stroke="steelblue" stroke-width="2" transform="rotate(20, 100, 50)">
							<circle cx="150" cy="50" r="30" />
							<rect x="40" y="40" width="60" height="30" />
							<text x="100" y="80" font-size="50">VisualDon</text>
						</g>
					</svg>

			</code></pre>

    <svg width="500" height="150">
        <g fill="indianred" stroke="steelblue" stroke-width="2" transform="rotate(20, 100, 50)">
            <circle cx="150" cy="50" r="30" />
            <rect x="40" y="40" width="60" height="30" />
            <text x="100" y="80" font-size="50">VisualDon</text>
        </g>
    </svg>
</Slide>

<Slide>
    <h4>Et maintenant... au boulout!</h4>
    <img src="src/assets/au_boulot.gif" alt=""> <br>

    Rendez-vous sur <a href="https://github.com/romanoe/visualdon-22/blob/main/README.md"> <code>Git</code> <i class="fa-brands fa-github"></i></a>
</Slide>
