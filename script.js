let gridDivContainer = document.getElementById("gridContainer");
let node = document.createTextNode("this is some text");
//Creates grid squares inside the grid container
function createGridDiv() {
  for (let i = 0; i <= 255; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridSquares";
    gridDivContainer.appendChild(gridDiv);
  }
}

createGridDiv();

let gridSquare = document.getElementsByClassName("gridSquares");

for (let i = 0; i < gridSquare.length; i++) {
  gridSquare[i].addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
}
