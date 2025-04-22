let container = document.querySelector(".container");

let resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
  let size = prompt("Enter side length", '');
  if ( size === '' ) {
    generateGrid();
  } else generateGrid(size)});

function generateGrid(sideLength = 16) {
  let squared = (sideLength * sideLength);
  let squareScale = 100/sideLength,
    sqArg = String(squareScale) + "%";
  container.replaceChildren(); //clear previous grid

  for ( i = 0; i < squared; i++ ) {
    let sq = document.createElement("div");
    sq.setAttribute("class", "square")
    sq.style.height = sqArg;
    sq.style.aspectRatio = "1 / 1";
    sq.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black"});
    container.appendChild(sq);
  }
};

