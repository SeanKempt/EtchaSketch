let gridDivContainer = document.getElementById("gridContainer");
let node = document.createTextNode("this is some text");

function createGridDiv() {
  for (let i = 0; i <= 32; i++) {
    let gridDiv = document.createElement("div");
    gridDivContainer.appendChild(gridDiv);
  }
}

createGridDiv();
