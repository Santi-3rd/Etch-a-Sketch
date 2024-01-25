const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');

let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    content.appendChild(gridSquare);
}





container.appendChild(content);


