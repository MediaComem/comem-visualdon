<script>
    import Slide from "$lib/Slide.svelte";
    import Title from "$lib/Title.svelte";

    import TruncatedAxis from "$lib/assets/10-do-and-donts/truncated_axis.svg";
    import TruncatedAxis2 from "$lib/assets/10-do-and-donts/truncated_axis2.svg";
    import PommesEtPoires from "$lib/assets/10-do-and-donts/comparer-pomme-et-poires.jpg";
    import ChocolatPrixNobel from "$lib/assets/10-do-and-donts/consommation-de-chocolat-et-prix-nobel.jpg";
    import CorrelationCausalité from "$lib/assets/10-do-and-donts/Dont confuse correlation with causation.png";
    import IraqBlood from "$lib/assets/10-do-and-donts/image-asset.png";
    import IraqBloodReversed from "$lib/assets/10-do-and-donts/iraq_inverse.png";
    import AmericanElections from "$lib/assets/10-do-and-donts/Screenshot_2022-04-28_22-10-29.png";
    import PieChart from "$lib/assets/10-do-and-donts/tumblr_p3utcdJEdu1sgh0voo1_1280.jpg";
    import Banana3D from "$lib/assets/10-do-and-donts/aa959d6be07333834c540a138fecada9--line-chart-data-visualization.jpg";
    import VenteCumulee from "$lib/assets/10-do-and-donts/ventes-cumulées.jpg";
    import ColorBlind from "$lib/assets/10-do-and-donts/Be aware of colour blindness 1.png";
    import RotateBarChart from "$lib/assets/10-do-and-donts/Rotate bar chart.png";
    import EasyComparison from "$lib/assets/10-do-and-donts/sort data for easy comparisons 1.png";
</script>

<Title title="11 - Dos and don’ts"></Title>

<Slide class="fragment">
    <h5 class="fragment">Ne pas couper les axes</h5>
    <div class="center">
        <img src={TruncatedAxis} alt="truncated" width="500" height="500" />
    </div>
</Slide>

<Slide>
    <h5>Couper les axes</h5>
    <div class="center">
        <img src={TruncatedAxis2} alt="truncated2" width="800" height="500" />
    </div>
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Comparer des pommes avec des poires</h5>
    <div class="center">
        <img src={PommesEtPoires} alt="trump" width="500" height="500" />
    </div>
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Correlation et causalité</h5>

    <a href="https://www.tylervigen.com/spurious-correlations">
        <div class="center">
            <img
                src={ChocolatPrixNobel}
                alt="consommation"
                width="550"
                height="450"
                class="center"
            />
        </div>
    </a>
</Slide>

<Slide>
    <h5>Correlation et causalité</h5>
    <a href="https://www.tylervigen.com/spurious-correlations">
        <div class="center">
            <img
                src={CorrelationCausalité}
                alt="correlation-causalité"
                width="550"
                height="500"
            />
        </div>
    </a>
    <code
        ><small
            >Source: Dos and don’ts of data visualisation — European
            Environment Agency (eea.europa.eu)
        </small></code
    >
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Passer le bon message</h5>
    <div class="center">
        <img src={IraqBlood} alt="iraq" width="350" height="500" />
    </div>
    <code
        ><small
            >Source: Iraq’s casualties - Simon Scarr, South China Morning Post,
            2011
        </small></code
    >
</Slide>

<Slide>
    <h5>Passer le bon message</h5>
    <div class="center">
        <img
            src={IraqBloodReversed}
            alt="iraq-inverse"
            width="350"
            height="500"
        />
    </div>
    <code
        ><small
            >Source: Iraq: Deaths on the Decline - Andy Cotgreave, 2014
        </small></code
    >
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Rapporter à la population</h5>
    <div class="center">
        <img
            src={AmericanElections}
            alt="screenshot"
            width="700"
            height="500"
        />
    </div>
    <code
        ><small>Source: Try to impeach this — Karim Douieb, 2019 </small></code
    >
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Doser l'information</h5>
    <div class="center">
        <img src={PieChart} alt="pie-chart" />
    </div>
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Utiliser la 3D avec précaution</h5>
    <div class="center">
        <img src={Banana3D} alt="line-chart-data" />
    </div>
</Slide>

<Slide class="fragment">
    <h5 class="fragment">Cumulation trompeuse</h5>
    <div class="center">
        <img src={VenteCumulee} alt="vente-cumulees" class="center" />
    </div>
    <code
        ><small
            >Source: Cumulative iPad sales chart provided by Apple, 2013
        </small></code
    >
</Slide>

<Slide>
    <h5>Utiliser les bonnes couleurs</h5>
    <p>8% de la population masculine est daltonienne (1/12)</p>
    <div class="center">
        <img src={ColorBlind} alt="color-blind" width="900" height="450" />
    </div>
    <code
        ><small
            >Source: Dos and don’ts of data visualisation — European
            Environment Agency (eea.europa.eu)
        </small></code
    >
</Slide>

<Slide>
    <h5>Tourner les diagrammes en bâtons</h5>
    <div class="center">
        <img src={RotateBarChart} alt="barchart" width="900" height="450" />
    </div>
    <code
        ><small
            >Source: Dos and don’ts of data visualisation — European
            Environment Agency (eea.europa.eu)
        </small></code
    >
</Slide>

<Slide>
    <h5>Ordonner les données</h5>
    <div class="center">
        <img
            src={EasyComparison}
            alt="easy-comparison"
            width="900"
            height="400"
        />
    </div>
    <code
        ><small
            >Source: Dos and don’ts of data visualisation — European
            Environment Agency (eea.europa.eu)
        </small></code
    >
</Slide>

<Slide>
    <h3>Projet</h3>
    <ul>
        <li>Création, chargement, manipulation des données</li>
        <li>Visualisations statiques</li>
    </ul>
</Slide>
