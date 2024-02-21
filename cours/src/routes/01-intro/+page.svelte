<script>
  import Reference from "$lib/Reference.svelte";
  import Slide from "$lib/Slide.svelte";
  import Title from "$lib/Title.svelte";

  import Florence from "$lib/assets/01-intro-svg/florence.webp";
  import JohnSnow from "$lib/assets/01-intro-svg/John_Snow.jpg";
  import Minard from "$lib/assets/01-intro-svg/Charles_Joseph_Minard.png";
  import NightingaleMortality from "$lib/assets/01-intro-svg/1920px-Nightingale-mortality.jpg";
  import CholeraMap from "$lib/assets/01-intro-svg/cholera_map.jpg";
  import MinardsMap from "$lib/assets/01-intro-svg/minards_map.png";
  import Everest from "$lib/assets/01-intro-svg/everest-summit-hillary.jpg";
  import GiorgiaLupi from "$lib/assets/01-intro-svg/giorgia_lupi.jpg";
  import NYTimes from "$lib/assets/01-intro-svg/ny_times.gif";
  import RTSCartes from "$lib/assets/01-intro-svg/rts_cartes.gif";
  import FormFunction1 from "$lib/assets/01-intro-svg/form_and_function_1.svg";
  import FormFunction2 from "$lib/assets/01-intro-svg/form_and_function_2.svg";
  import FormFunction3 from "$lib/assets/01-intro-svg/form_and_function_3.svg";
  import FormFunction4 from "$lib/assets/01-intro-svg/form_and_function_4.svg";
  import FormFunction5 from "$lib/assets/01-intro-svg/form_and_function_5.svg";
  import DataVizLibraries from "$lib/assets/01-intro-svg/data-viz-libraries.svg";
  import FormFunctionObjectif from "$lib/assets/01-intro-svg/form_and_function_objectif.svg";
  import Evaluation from "$lib/assets/01-intro-svg/evaluation.svg";
  import Project from "$lib/assets/01-intro-svg/project.svg";
</script>

<Title title="01 - Introduction"></Title>

<Slide>
  <h3>
    <span class="red">Qu'est-ce que </span>la visualisation de données ?
  </h3>
  <p></p>
</Slide>

<Slide>
  Représentation graphique (<code class="red">visualisation</code>) de
  l'information (<code class="red">données</code>)
</Slide>

<Slide>
  <h3><span class="red">Pourquoi</span> la visualisation de données ?</h3>
</Slide>

<Slide>
  <h3><span class="red">Explorer</span>: trouver les tendances</h3>
  <div class="row center">
    <div class="col-20">
      <img
        src={Florence}
        alt="florence"
        style="background: transparent;"
        width="130"
        height="180"
      />
      <p>
        <code
          ><small
            >Diagram of the causes of mortality in the army in the East,
            Florence Nightingale, 1858</small
          >
        </code>
      </p>
    </div>
    <div class="col-80">
      <img
        src={NightingaleMortality}
        alt="mortality"
        style="background: transparent;"
        width="1000"
        height="600"
      />
    </div>
  </div>

  <aside class="notes">
    Quand Florence essayait de convaincre qu'on pouvait prévenir!
  </aside>
</Slide>

<Slide>
  <h3><span class="red">Analyser</span>: tester une hypothèse</h3>
  <div class="row center">
    <div class="col-30">
      <img
        src={JohnSnow}
        alt="cholera-john"
        style="background: transparent;"
        width="130"
        height="180"
      />
      <p>
        <code
          ><small>L'épidémie choléra de Broad Street, John Snow, 1854</small>
        </code>
      </p>
    </div>
    <div class="col-70">
      <img
        src={CholeraMap}
        alt="cholera"
        style="background: transparent;"
        width="600"
        height="600"
      />
    </div>
  </div>

  <aside class="notes">
    Quand John snow essayait de convaincre que c'était dû à l'eau contaminée!
  </aside>
</Slide>

<Slide>
  <h3><span class="red">Présenter</span>: raconter une histoire</h3>
  <div class="row center">
    <div class="col-20">
      <img
        src={Minard}
        alt="charles"
        style="background: transparent;"
        width="140"
        height="170"
      />
      <p>
        <code
          ><small>
            La Carte figurative des pertes successives en hommes de l’Armée
            française dans la campagne de Russie en 1812-1813, Charles Joseph
            Minard, 1869
          </small>
        </code>
      </p>
    </div>

    <div class="col-80">
      <img
        src={MinardsMap}
        alt="minards"
        style="background: transparent;"
        width="1200"
        height="450"
      />
    </div>
  </div>

  <aside class="notes">
    Emblématique depuis sa popularisation par Edward Tufte 1 , la « Carte
    figurative des pertes successives en hommes de l’armée française dans la
    campagne de Russie 1812–1813» de Charles Joseph Minard, datée de 1869, est
    fréquemment citée 2 comme la première visualisation de don- nées en raison
    de la très grande lisibilité dont elle fait preuve malgré son importante
    densité d’informations. Sur un fond de carte géographique représentant la
    distance entre Kaunas et Moscou se déroule le trajet aller- retour des
    armées napoléoniennes. L’épaisseur de la ligne varie en fonction de
    l’effectif diminuant des soldats français alors que le tragique trajet du
    retour est augmenté de repères indiquant les températures endurées par la
    Grande Armée. Cette image tire sa puissante valeur narrative du fait qu’on y
    lit en un seul coup d’œil plusieurs mois de campagne et qu’on en tire
    rapidement un enseignement fondamental pour la compréhension de cet épisode
    historique : les effectifs napoléoniens ont subi une diminution relativement
    constante due aux maladies, au froid, aux escarmouches avec les troupes
    russes, alors qu’aucune bataille majeure n’a été perdue
  </aside>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Fonctions et formes de visualisation</h3>
    </div>
    <div class="col-50">
      <img
        src={FormFunction1}
        width="1000"
        height="1000"
        alt="form_and_function1"
      />

      <Reference
        referenceLink="https://urban-institute.medium.com/form-and-function-let-your-audiences-needs-drive-your-data-visualization-choices-3c0603745822"
        referenceText="Form and Function: Let Your Audience’s Needs Drive Your Data
      Visualization Choices"
      ></Reference>
    </div>
  </div>
</Slide>
<Slide>
  <div class="row center">
    <div class="col-30">
      <img
        data-id="box"
        src={FormFunction2}
        width="550"
        height="200"
        alt="form_and_function2"
      />
    </div>
    <div class="col-70">
      <a
        href="https://www.scmp.com/infographics/article/1248804/allure-climbing-mount-everest"
        ><img
          src={Everest}
          alt="everest"
          style="background: transparent;"
          width="450"
        /></a
      >

      <Reference
        referenceLink="https://www.scmp.com/infographics/article/1248804/allure-climbing-mount-everest"
        referenceText="Mount Everest, South China Morning Post"
      ></Reference>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-30">
      <img
        src={FormFunction3}
        width="550"
        height="200"
        alt="form_and_function3"
      />
    </div>

    <div class="col-70">
      <a
        href="https://www.behance.net/gallery/14283209/European-banks-and-government-debt"
        ><img src={GiorgiaLupi} width="100%" alt="giorgia-lupi" /></a
      >
      <Reference
        referenceLink="https://www.behance.net/gallery/14283209/European-banks-and-government-debt?locale=de_DE"
        referenceText="European banks and government debt, Giorgia Lupi"
      ></Reference>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-30">
      <img
        src={FormFunction4}
        width="550"
        height="200"
        alt="form_and_function4"
      />
    </div>

    <div class="col-70">
      <a
        href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html"
        ><img src={NYTimes} alt="gif_ny" width="100%" /></a
      >

      <Reference
        referenceLink="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html"
        referenceText="How the Virus Got Out, The New York Times"
      ></Reference>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row center">
    <div class="col-30">
      <img
        src={FormFunction5}
        width="550"
        height="200"
        alt="form_and_function5"
      />
    </div>

    <div class="col-70">
      <a
        href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"
        ><img src={RTSCartes} alt="gif_rts" width="80%" /></a
      >
      <code
        ><small>
          <a
            href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"
          >
            ↳ Les cartes des résultats des votations fédérales, RTS
          </a></small
        ></code
      >
    </div>
  </div>
</Slide>

<Slide>
  <h3>
    <span class="red">Quels sont les outils</span> de visualisation de données intéractive
    ?
  </h3>
</Slide>

<Slide>
  <img src={DataVizLibraries} alt="img-svg-libraries" />
</Slide>

<Slide>
  <div class="row center">
    <div class="col-50">
      <h3>Objectifs</h3>
      <ul>
        <li>
          Connaître différentes technologies de visualisation de données dans un
          navigateur Web
        </li>
        <li>Maîtriser la librairie d3.js</li>
        <li>Connaître une librairie de cartographie web</li>
        <li>Maîtriser la manipulation des donneés avec JS</li>
      </ul>
    </div>
    <div class="col-50">
      <img
        src={FormFunctionObjectif}
        width="700"
        height="700"
        alt="form_and_function_objectif"
      />
    </div>
  </div>
</Slide>

<Slide>
  <h3>Evaluation</h3>
  <img src={Evaluation} width="100%" alt="img-svg-evaluation" />
</Slide>

<Slide>
  <h3>Projet</h3>
  <img src={Project} width="100%" alt="project-svg" />
</Slide>

<Slide>
  <h3>Supports</h3>
  <ul>
    <b>COURS</b> <br /> <span class="red">↳</span> Lien
    <a
      href="https://github.com/MediaComem/comem-visualdon/blob/main/cours/README.md"
      class="red">GitHub</a
    >
    <br />
    <br />
    <b>EXERCICES</b> <br /> <span class="red">↳</span> Lien
    <a
      href="https://github.com/MediaComem/comem-visualdon/tree/main/exercices"
      class="red"
    >
      <code> GitHub</code> <i class="fa-brands fa-github"></i></a
    >
  </ul>
</Slide>

<Slide>
  <h3>Questions?</h3>
</Slide>
