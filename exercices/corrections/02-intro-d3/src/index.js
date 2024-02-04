import { select } from "d3-selection";

// Append svg
select("body").append("div").attr("class", "monSVG");

// Set width and height
const width = 500;
const height = 500;

// Création SVG
const monSVG = select(".monSVG")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Définition des groupes
const groupe1 = monSVG.append("g");
const groupe2 = monSVG.append("g");
const groupe3 = monSVG.append("g");

// Premier cercle
groupe1
  .append("circle")
  .attr("cx", "50")
  .attr("cy", "50")
  .attr("r", "40")
  .attr("id", "firstCircle");

groupe1.append("text").text("1").attr("x", "40").attr("y", "120");

groupe1.append("text").text("1").attr("x", "40").attr("y", "120");

// Deuxième cercle
groupe2
  .append("circle")
  .attr("cx", "150")
  .attr("cy", "150")
  .attr("r", "40")
  .attr("id", "secondCircle");

groupe2.append("text").text("2").attr("x", "150").attr("y", "210");

// Troisième cercle
groupe3
  .append("circle")
  .attr("cx", "250")
  .attr("cy", "250")
  .attr("r", "40")
  .attr("id", "thirdCircle");

groupe3.append("text").text("3").attr("x", "250").attr("y", "310");

// Changer la couleur du deuxième cercle
const circle2 = select("#secondCircle").attr("fill", "#E92528");
circle2.attr("cx", "100");
circle2.attr("cx", "200");

// Déplacer les cercles on click
const circle1 = select("#firstCircle");
const circle3 = select("#thirdCircle");

circle3.on("click", () => {
  circle1.attr("cx", "450");
  circle2.attr("cx", "450");
  circle3.attr("cx", "450");
});

// Barchart
const data = [200, 50, 250, 80, 150];

const container = select("body").append("div").attr("id", "barChart");
const barchart = container
  .append("svg")
  .attr("width", width)
  .attr("height", height);

barchart
  .selectAll("rect")
  .data(data)
  .join((enter) =>
    enter
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", (d) => 500 - d)
      .attr("width", 20)
      .attr("height", (d) => d)
      .attr("stroke", "black")
      .attr("fill", "black")
  );
