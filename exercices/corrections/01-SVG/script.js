// On click
let rectangle = document.querySelector("#rectangle");
let isRed = true;

rectangle.addEventListener('click', () => {
    isRed = !isRed;
    color = isRed ? "red" : "black";
    rectangle.style.fill = color;
});


// On hover
let donut = document.querySelector("#donut");

donut.addEventListener("mouseover", evt => {
    donut.setAttribute('r', '75');
})


