<script>
  // Svelte
  import { onMount, tick } from "svelte";

  // Styles
  import "reveal.js/dist/reveal.css";
  import "../app.css";
  import "../simple-heigvd.css";

  // Components
  import NavBar from "$lib/NavBar.svelte";

  let reveal;
  let revealApp;

  onMount(async () => {
    const Reveal = await import("reveal.js");
    reveal = Reveal.default;

    await tick();
    const deck = reveal(revealApp);

    deck.initialize({
      slideNumber: "c/t",
      width: "90%",
      height: "80%",
    });
  });
</script>

<div class="reveal">
  <div class="slides">
    <slot />
  </div>
</div>
