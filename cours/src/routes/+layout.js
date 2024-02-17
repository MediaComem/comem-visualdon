/** @type {import('./$types').PageLoad} */
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
    ],
  };
}