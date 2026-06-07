import { select } from "d3-selection";
import { scaleSqrt, scaleLinear, scalePow } from "d3-scale";
import { max, min } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";
import { json } from "d3-fetch";
import { transition } from "d3-transition";
import { easeLinear } from "d3-ease";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { geoMercator, geoPath } from "d3-geo";

// Pour importer les données (@rollup/plugin-dsv)
import populationData from "../data/population_total.csv";
import lifeData from "../data/life_expectancy_years.csv";
import incomeData from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";

const STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const WORLD_GEOJSON =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// Convertit les valeurs SI (M, B, k) en nombres
const converterSI = (array, variable, variableName) =>
  array.map((d) => {
    const raw = d[variable.toString()];
    const isString = typeof raw === "string";
    const SI = isString ? raw.slice(-1) : raw;
    const number = isString ? parseFloat(raw.slice(0, -1)) : raw;
    const multipliers = { M: 1e6, B: 1e9, k: 1e3 };
    return {
      country: d.country,
      [variableName]: multipliers[SI] ? multipliers[SI] * number : number,
    };
  });

// Fusionne trois tableaux par pays
const mergeByCountry = (a1, a2, a3) =>
  a1.map((itm) => ({
    ...a2.find((item) => item.country === itm.country),
    ...a3.find((item) => item.country === itm.country),
    ...itm,
  }));

const annees = Object.keys(populationData[0]).filter((k) => k !== "country");

const dataCombined = annees.map((annee) => ({
  annee,
  data: mergeByCountry(
    converterSI(populationData, annee, "pop"),
    converterSI(incomeData, annee, "income"),
    converterSI(lifeData, annee, "life")
  ),
}));

const data2021 = dataCombined.find((d) => d.annee === "2021").data;

// Scatter / Bubble chart
const margin = { top: 10, right: 40, bottom: 40, left: 50 };
const width = 0.8 * window.innerWidth - margin.left - margin.right;
const height = 0.6 * window.innerHeight - margin.top - margin.bottom;

const figure = select("#vizArea")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const popScale = scaleSqrt()
  .domain([0, max(data2021, (d) => d.pop)])
  .range([2, 30]);

const incomeScale = scaleLinear()
  .domain([0, max(data2021, (d) => d.income)])
  .range([0, width]);

const lifeScale = scalePow()
  .domain([0, max(data2021, (d) => d.life)])
  .range([height, 0])
  .exponent(3);

figure
  .append("g")
  .attr("transform", `translate(0,${height})`)
  .call(axisBottom(incomeScale));

figure.append("g").call(axisLeft(lifeScale));

figure
  .append("text")
  .attr("text-anchor", "end")
  .attr("x", width)
  .attr("y", height + 35)
  .text("PIB par habitant (dollars)");

figure
  .append("text")
  .attr("text-anchor", "end")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
  .attr("x", 0)
  .text("Espérance de vie (années)");

// Animation
let nIntervId;
let i = 0;

function updateChart(data_iteration) {
  figure
    .selectAll("circle")
    .data(data_iteration, (d) => d.country)
    .join(
      (enter) =>
        enter
          .append("circle")
          .attr("cx", (d) => incomeScale(d.income))
          .attr("cy", (d) => lifeScale(d.life))
          .attr("r", 0)
          .transition(transition().duration(500).ease(easeLinear))
          .attr("r", (d) => popScale(d.pop))
          .attr("fill", "rgba(0,0,0,.5)"),
      (update) =>
        update
          .transition(transition().duration(500).ease(easeLinear))
          .attr("cx", (d) => incomeScale(d.income))
          .attr("cy", (d) => lifeScale(d.life))
          .attr("r", (d) => popScale(d.pop)),
      (exit) => exit.remove()
    );
}

function play() {
  i = dataCombined[i].annee === "2021" ? 0 : i + 1;
  select("#paragraphe").text(dataCombined[i].annee);
  updateChart(dataCombined[i].data);
}

document.getElementById("play").addEventListener("click", () => {
  if (!nIntervId) nIntervId = setInterval(play, 100);
});
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(nIntervId);
  nIntervId = null;
});

// Carte choroplète avec d3-geo (SVG)
json(WORLD_GEOJSON).then((geojson) => {
  const svgMap = select("#mapSVG")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", 400);

  const projection = geoMercator().scale(100).center([0, 20]).translate([(width + margin.left + margin.right) / 2, 200]);
  const path = geoPath().projection(projection);

  const lifeMin = min(data2021, (d) => d.life);
  const lifeMax = max(data2021, (d) => d.life);
  const colorScale = scaleLinear().domain([lifeMin, lifeMax]).range(["#fef0d9", "#b30000"]);

  // Correction du nom USA
  const usIndex = data2021.findIndex((d) => d.country === "United States");
  if (usIndex !== -1) data2021[usIndex].country = "USA";

  svgMap
    .selectAll("path")
    .data(geojson.features)
    .join("path")
    .attr("d", path)
    .attr("fill", (d) => {
      const match = data2021.find((dc) => dc.country === d.properties.name);
      return match ? colorScale(match.life) : "#ccc";
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.5);
});

// Carte choroplète avec MapLibre
const map = new maplibregl.Map({
  container: "mapArea",
  style: STYLE,
  center: [0, 20],
  zoom: 1.5,
});

map.on("load", async () => {
  const geojson = await json(WORLD_GEOJSON);

  // Fusionner les données d'espérance de vie dans les propriétés GeoJSON
  geojson.features.forEach((feature) => {
    const name = feature.properties.name;
    const match = data2021.find((d) => d.country === name);
    feature.properties.life = match ? match.life : null;
  });

  map.addSource("world", { type: "geojson", data: geojson });

  map.addLayer({
    id: "world-choropleth",
    type: "fill",
    source: "world",
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "life"], null],
        "#cccccc",
        [
          "interpolate",
          ["linear"],
          ["get", "life"],
          40, "#fef0d9",
          55, "#fdcc8a",
          65, "#fc8d59",
          75, "#e34a33",
          85, "#b30000",
        ],
      ],
      "fill-opacity": 0.85,
    },
  });

  map.addLayer({
    id: "world-outline",
    type: "line",
    source: "world",
    paint: { "line-color": "#fff", "line-width": 0.5 },
  });
});
