<script>
  import Slide from "./Slide.svelte";

  export let title = "";
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
</script>

<Slide>
  <h3>Visualisation de données</h3>
  <code class="red">{title}</code>

  <br />
  <br />

  <small id="current_date">{date.toLocaleDateString("fr-FR", options)}</small>

  <br />

  <p>
    Noemi Romano<br />
    <small>
      <a href="mailto:noemi.romano@heig-vd.ch" style="color:grey"
        >noemi.romano@heig-vd.ch</a
      ></small
    >
  </p>
</Slide>
