// Function to add hover feature on the grid
function addHoverFunction() {
    const grid = document.querySelectorAll('#square');
    [...grid].forEach(function(item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
    });
}
// Funtion to add grid squares to a div container based on the grid size
function addGridSquares(gridSize, container) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('id', 'square');
        squareDiv.setAttribute('style', `min-height:${Math.floor(512/gridSize)}px; min-width:${Math.floor(512/gridSize)}px; background-color:white; display:inline-block; margin:0; padding:0`);
        container.appendChild(squareDiv);
    }
}

// Initialization
const middle = document.querySelector('.middle');
const container = document.createElement('div');
container.setAttribute('style', 'height: 512px; width: 512px; display:flex; flex-wrap:wrap;');
container.setAttribute('class', 'container');
middle.appendChild(container);
let gridSize = 16;
addGridSquares(gridSize, container);
addHoverFunction();

// Size Button Functionality
const button = document.querySelector('.size');
button.addEventListener('click', () => {
    gridSize = Number(prompt("Enter Grid Size"));
    const newContainer = document.createElement('div');
    newContainer.setAttribute('style', 'height: 512px; width: 512px; display:flex; flex-wrap:wrap;');
    newContainer.setAttribute('class', 'container');
    addGridSquares(gridSize, newContainer);
    const oldContainer = document.querySelector('.container');
    middle.removeChild(oldContainer);
    middle.appendChild(newContainer);
    addHoverFunction();
})

//Clear Button Functionality
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const grid = document.querySelectorAll('#square');
    [...grid].forEach(function(item) {
        item.style.backgroundColor = 'white';
    });
})




