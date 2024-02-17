<script>
  export let items;
  import { onMount } from "svelte";
  import HeigVDLogo from "$lib/assets/logo.png";

  let isNavbarOpen = false;

  const toggleNavbar = () => {
    isNavbarOpen = !isNavbarOpen;
  };

  $: visible = isNavbarOpen ? "" : "hidden";

  onMount(() => {
    const navbar = document.getElementById("navbar-hamburger");

    navbar.addEventListener("click", (event) => {
      isNavbarOpen = !isNavbarOpen;
    });
  });
</script>

<nav class="bg-white">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={HeigVDLogo} class="h-8" alt="heigvd-logo" />
      <span
        id="logo-text"
        class="red self-center text-2xl font-semibold whitespace-nowrap"
        >COMEM+</span
      >
    </a>

    <!-- Hamburger menu -->
    <button
      data-collapse-toggle="navbar-hamburger"
      type="button"
      class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"
      aria-controls="navbar-hamburger"
      aria-expanded="false"
      on:click={toggleNavbar}
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <!-- Navbar links -->
    <div class="{visible} w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg dark:bg-white">
        {#each items.lectures as item}
          <li>
            <a
              data-sveltekit-reload
              href="/{item.path}"
              class="block py-2 px-3 text-black rounded red dark:hover:text-white dark:hover:bg-black"
              >{item.title}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    position: relative;
    z-index: 2;
    /* Use a negative margin to move the navbar up */
    margin-bottom: -80px; /* Adjust the value based on your needs */
  }
</style>
