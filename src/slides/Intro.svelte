<script>
  import Slide from "../lib/Slide.svelte";
  import Title from "../lib/Title.svelte";

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
</script>

<Title title="1. Introduction"></Title>

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
  <p><span class="red">Explorer</span>: trouver les tendances</p>
  <div class="row">
    <div class="col-20">
      <img
        src="assets/01-intro-svg/florence.webp"
        alt="florence"
        style="background: transparent;"
        width="130"
        height="180"
      />
    </div>
    <div class="col-80">
      <img
        src="assets/01-intro-svg/1920px-Nightingale-mortality.jpg"
        alt="mortality"
        style="background: transparent;"
        width="800"
        height="600"
      />
    </div>
    <code
      ><small
        >Diagram of the causes of mortality in the army in the East, Florence
        Nightingale, 1858</small
      >
    </code>
  </div>
  <aside class="notes">
    Quand Florence essayait de convaincre qu'on pouvait prévenir!
  </aside>
</Slide>

<Slide>
  <p><span class="red">Analyser</span>: tester une hypothèse</p>
  <div class="row">
    <div class="col-10">
      <img
        src="assets/01-intro-svg/John_Snow.jpg"
        alt="cholera-john"
        style="background: transparent;"
        width="130"
        height="180"
      />
    </div>
    <div class="col-90">
      <img
        src="assets/01-intro-svg/cholera_map.jpg"
        alt="cholera"
        style="background: transparent;"
        width="520"
        height="520"
      />
    </div>
  </div>
  <code
    ><small>L'épidémie choléra de Broad Street, John Snow, 1854</small>
  </code>

  <aside class="notes">
    Quand John snow essayait de convaincre que c'était dû à l'eau contaminée!
  </aside>
</Slide>

<Slide>
  <p><span class="red">Présenter</span>: raconter une histoire</p>
  <div class="row">
    <div class="col-10">
      <img
        src="assets/01-intro-svg/Charles_Joseph_Minard.png"
        alt="charles"
        style="background: transparent;"
        width="140"
        height="170"
      />
    </div>

    <div class="col-90">
      <img
        src="assets/01-intro-svg/minards_map.png"
        alt="minards"
        style="background: transparent;"
        width="800"
        height="450"
      />
    </div>
  </div>
  <code
    ><small>
      La Carte figurative des pertes successives en hommes de l’Armée française
      dans la campagne de Russie en 1812-1813, Charles Joseph Minard, 1869
    </small>
  </code>
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
  <h3>
    <span class="red">Fonctions</span> et
    <span class="red">formes</span> de visualisation
  </h3>
</Slide>

<Slide>
  <img
    src="assets/01-intro-svg/form_and_function_1.svg"
    width="700"
    height="700"
    alt="form_and_function1"
  />
</Slide>

<Slide>
  <div class="row">
    <div class="col-30">
      <img
        data-id="box"
        src="assets/01-intro-svg/form_and_function_2.svg"
        width="350"
        height="200"
        alt="form_and_function2"
      />
    </div>
    <div class="col-70">
      <a
        href="https://www.scmp.com/infographics/article/1248804/allure-climbing-mount-everest"
        ><img
          src="assets/01-intro-svg/everest-summit-hillary.jpg"
          alt="everest"
          style="background: transparent;"
          width="350"
        /></a
      >
      <code><small>Mount Everest, South China Morning Post</small></code>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row">
    <div class="col-20">
      <img
        src="assets/01-intro-svg/form_and_function_3.svg"
        width="300"
        height="200"
        alt="form_and_function3"
      />
    </div>

    <div class="col-80">
      <a
        href="https://www.behance.net/gallery/14283209/European-banks-and-government-debt"
        ><img
          src="assets/01-intro-svg/giorgia_lupi.jpg"
          width="600"
          alt="giorgia-lupi"
        /></a
      >
      <code><small>Banques éuropéennes et dette, Giorgia Lupi </small></code>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row">
    <div class="col-30">
      <img
        src="assets/01-intro-svg/form_and_function_4.svg"
        width="300"
        height="200"
        alt="form_and_function4"
      />
    </div>

    <div class="col-70">
      <a
        href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html"
        ><img
          src="assets/01-intro-svg/ny_times.gif"
          alt="gif_ny"
          width="600"
        /></a
      >
      <code><small>How the virus got out, New York Times </small></code>
    </div>
  </div>
</Slide>

<Slide>
  <div class="row">
    <div class="col-30">
      <img
        src="assets/01-intro-svg/form_and_function_5.svg"
        width="300"
        height="200"
        alt="form_and_function5"
      />
    </div>

    <div class="col-70">
      <a
        href="https://www.rts.ch/info/suisse/12849342-les-cartes-des-resultats-des-votations-federales-commune-par-commune.html"
        ><img
          src="assets/01-intro-svg/rts_cartes.gif"
          alt="gif_rts"
          width="600"
        /></a
      >
      <code><small>Votations fédérales, RTS </small></code>
    </div>
  </div>
</Slide>

<Slide>
  <img
    src="assets/01-intro-svg/form_and_function_objectif.svg"
    width="700"
    height="700"
    alt="form_and_function_objectif"
  />
</Slide>

<Slide>
  <h3>
    <span class="red">Quels sont les outils</span> de visualisation de données intéractive
    ?
  </h3>
</Slide>

<Slide>
  <img
    src="assets/01-intro-svg/data-viz-libraries.svg"
    alt="img-svg-libraries"
  />
</Slide>

<Slide>
  <iframe src="https://d3js.org/" width="800" height="550" title="d3"></iframe>
</Slide>

<Slide>
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
</Slide>

<Slide>
  <h3>Evaluation</h3>
  <img src="assets/01-intro-svg/evaluation.svg" alt="img-svg-evaluation" />
  <br />
  <br />
  <br />
</Slide>

<Slide>
  <h3>Projet</h3>
  <img src="assets/01-intro-svg/project.svg" height="500" alt="project-svg" />
</Slide>

<Slide>
  <h3>Supports</h3>
  <ul>
    <b>COURS</b> <br /> <span class="red">↳</span> Lien
    <a
      href="https://github.com/romanoe/visualdon-cours#programme-de-cours"
      class="red">GitHub</a
    >
    <br />
    <br />
    <b>EXERCICES</b> <br /> <span class="red">↳</span> Lien
    <a href="https://github.com/romanoe/visualdon-exercices" class="red">
      <code> GitHub</code> <i class="fa-brands fa-github"></i></a
    >
  </ul>
</Slide>

<Slide>
  <h3>Questions?</h3>
</Slide>
