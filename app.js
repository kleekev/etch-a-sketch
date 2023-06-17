function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        console.log(parent.firstChild);
    }
}

function addGridSquares(gridSize, container) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('style', `min-height:${Math.floor(512/gridSize)}px; min-width:${Math.floor(512/gridSize)}px; background-color:white; display:inline-block; margin:0; padding:0`);
        container.appendChild(squareDiv);
    }
}

const middle = document.querySelector('.middle');
const container = document.createElement('div');
container.setAttribute('style', 'height: 512px; width: 512px; display:flex; flex-wrap:wrap;');
container.setAttribute('class', 'container');
middle.appendChild(container);

let gridSize = 16;
addGridSquares(gridSize, container);

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
    console.log(gridSize)
})






