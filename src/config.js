import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import MathReveal from 'reveal.js/plugin/math/math';
import RevealNotes from 'reveal.js/plugin/notes/notes';

import "@fontsource/poppins/400.css";


// Import theme
import 'reveal.js/css/theme/source/simple.scss';



// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';


export default {
    // App Config
    app: {
        name: 'COMEM+ | Visualisation de données',
    },
    // Reveal Config
    reveal: {
        plugins: [Highlight, Markdown, MathReveal.MathJax2, MathReveal.KaTeX, RevealNotes],
        hash: true,
    },
};
