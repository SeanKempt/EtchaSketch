let gridDivContainer = document.getElementById("gridContainer");
//Creates grid squares inside the grid container
function createGridDiv(squares) {
  let value = squares * squares;
  for (let i = 0; i <= value; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridSquares";
    gridDivContainer.appendChild(gridDiv);
  }
  gridDivContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  gridDivContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  gridColorChange();
}

let rangeSlider = document.querySelector(".rangeSlider");
let rangeValue = document.querySelector(".rangeSliderValue");
//Shows slider value in the output element
rangeSlider.addEventListener("input", () => {
  rangeValue.innerHTML = rangeSlider.value;
});

let gridSquare = document.getElementsByClassName("gridSquares");
//Changes background color of squares when mouse hovers over div squares
function gridColorChange() {
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
}
createGridDiv(rangeSlider.value);

/* When the set button is clicked the createGridDiv function is run to create a new grid based on the value of the slider */
let setButton = document.getElementById("gridButton");
setButton.addEventListener("click", function () {
  let value = parseInt(rangeSlider.value);
  resetGrid();
  createGridDiv(value);
});

let clearButton = document.getElementById("gridClear"); //add event listener to the clear button to clear the grid when pressed by the end user
//Removes all squares from gridContainer; resets the grid back to original state before dom manipulation
function resetGrid() {
  while (gridDivContainer.firstChild) {
    gridDivContainer.removeChild(gridDivContainer.firstChild);
  }
}
