import { select } from "d3-selection";

const width = 500;
const height = 500;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// 3 cercles à (50,50), (150,150), (250,250)
const g1 = svg.append("g");
const g2 = svg.append("g");
const g3 = svg.append("g");

const circle1 = g1.append("circle")
  .attr("cx", 50).attr("cy", 50).attr("r", 40).attr("id", "circle1");
g1.append("text").text("1").attr("x", 45).attr("y", 110);

const circle2 = g2.append("circle")
  .attr("cx", 150).attr("cy", 150).attr("r", 40).attr("id", "circle2");
g2.append("text").text("2").attr("x", 145).attr("y", 210);

const circle3 = g3.append("circle")
  .attr("cx", 250).attr("cy", 250).attr("r", 40).attr("id", "circle3");
g3.append("text").text("3").attr("x", 245).attr("y", 310);

// Changer la couleur du deuxième cercle
circle2.attr("fill", "#E92528");

// Déplacer de 50px vers la droite le premier et le deuxième cercle
circle1.attr("cx", 100);
circle2.attr("cx", 200);

// Aligner verticalement les cercles au clic sur le troisième
circle3.on("click", () => {
  circle1.attr("cx", 250);
  circle2.attr("cx", 250);
  circle3.attr("cx", 250);
});

// Barchart avec les données [20, 5, 25, 8, 15]
// Ces valeurs représentent directement la hauteur des barres
// (sans échelle : ceci illustre pourquoi d3-scale sera utile)
const data = [20, 5, 25, 8, 15];

const barChart = select("body")
  .append("svg")
  .attr("width", 300)
  .attr("height", 200);

const barWidth = 30;
const gap = 10;

barChart.selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", (d, i) => i * (barWidth + gap))
  .attr("y", d => 200 - d)
  .attr("width", barWidth)
  .attr("height", d => d)
  .attr("fill", "black")
  .attr("stroke", "black");
