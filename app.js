const middle = document.querySelector('.middle');
const container = document.createElement('div');
container.setAttribute('style', 'height: 512px; width: 512px; display:flex; flex-wrap:wrap;');
middle.appendChild(container);


for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('style', `min-height:${Math.ceil(512/16)}px; min-width:${Math.ceil(512/16)}px; background-color:white; display:inline-block; margin:0; padding:0`);
    container.appendChild(squareDiv);
}
