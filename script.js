let gridDivContainer = document.getElementById("gridContainer");
let node = document.createTextNode("this is some text");
//Creates grid squares inside the grid container
function createGridDiv() {
  for (let i = 0; i <= rangeSlider.value * rangeSlider.value; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "gridSquares";
    gridDivContainer.appendChild(gridDiv);
  }
}

let rangeSlider = document.querySelector(".rangeSlider");
let rangeValue = document.querySelector(".rangeSliderValue");
//Shows slider value in the output element
rangeSlider.addEventListener("input", () => {
  rangeValue.innerHTML = rangeSlider.value;
});

createGridDiv();

let gridSquare = document.getElementsByClassName("gridSquares");
//Changes background color of squares when mouse hovers over various div squares
for (let i = 0; i < gridSquare.length; i++) {
  gridSquare[i].addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
}

/* When the set button is clicked the createGridDiv function is run to create a new grid based on the value of the slider */

//change griddivfunction to accept a value based on the slider to populate the amount of squares needed
