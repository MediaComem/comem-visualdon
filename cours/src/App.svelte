<script>
  import "reveal.js/dist/reveal.css";

  import Reveal from "reveal.js";
  import { onMount, tick } from "svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Presentation from "./Presentation.svelte";

  export let app;
  export let reveal;

  onMount(async () => {
    await tick();
    const deck = Reveal(reveal);
    deck.initialize({ slideNumber: "c/t", width: "90%", height: "100%" });
  });
</script>

<svelte:head>
  <title>{app.name}</title>
</svelte:head>

<NavBar />
<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>
