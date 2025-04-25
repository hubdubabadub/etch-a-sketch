let container = document.querySelector(".container");
let documentBody = document.querySelector("body");

function randomRGB() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random()
    * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function increaseOpacity(element) {
  let op = Number(element.style.getPropertyValue("opacity"));
  op += 0.1;
  element.style.opacity = String(op);
}

function generateGrid(sideLength = 16) {
  let squared = (sideLength * sideLength);
  let squareScale = 100/sideLength,
    sqArg = String(squareScale) + "%";
  container.replaceChildren(); //clear previous grid

  for ( i = 0; i < squared; i++ ) {
    let sq = document.createElement("div");
    sq.style.height = sqArg;
    sq.style.aspectRatio = "1 / 1";
    sq.style.opacity = "0";
    sq.addEventListener("mouseover", (event) => {
      if ( event.target.style.getPropertyValue("opacity") === "0" ) {
        event.target.style.backgroundColor = randomRGB();
        event.target.style.opacity = "0.1";
      } else {increaseOpacity(event.target);
      }
    });
    container.appendChild(sq);
  }
};

let resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
  let size = prompt("Enter side length (max 100):\nDefault size: 16", '');
  if ( size === '' ) {
    generateGrid();
  } else if ( size > 100 ) {
    generateGrid(100);
  } else generateGrid(size)});