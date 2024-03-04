/** @type {import('./$types').PageLoad} */

export const prerender = true;

export function load({ params }) {
  return {
    lectures: [
      {
        title: "01 - Introduction",
        path: "01-intro",
      },
      {
        title: "02 - Scalable Vector Graphics (SVG)",
        path: "02-svg",
      },
      {
        title: "03 - Introduction à D3.js",
        path: "03-intro-d3",
      },
      {
        title: "04 - Données",
        path: "04-data",
      },
      {
        title: "05 - Échelles et Axes",
        path: "05-axis-scales",
      },
      {
        title: "06 - Interaction et animation (partie 1)",
        path: "06-interaction-animation-1",
      },
    ],
  };
}
