let gridDivContainer = document.getElementById("gridContainer");
let node = document.createTextNode("this is some text");

function createGridDiv() {
  for (let i = 0; i <= 255; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridSquares";
    gridDivContainer.appendChild(gridDiv);
  }
}

createGridDiv();
