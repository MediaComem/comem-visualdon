<script>
    import Slide from '../lib/Slide.svelte';

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

</script>

<Slide>

    <h2>Visualisation de données</h2>
    <code class="heig-red">1. Introduction + SVG</code>

    <br>
    <br>

    <small id="current_date">{date.toLocaleDateString('fr-FR', options)}</small>


    <br>


    <p>Noemi Romano<br>
        <small> <a href="mailto:noemi.romano@heig-vd.ch" style="color:grey">noemi.romano@heig-vd.ch</a></small> </p>

</Slide>


