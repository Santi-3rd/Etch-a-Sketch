const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');
const gridSquare = document.createElement('div');
gridSquare.classList.add('gridSquare');
content.textContent = 'square';

container.appendChild(content);
content.appendChild(gridSquare);
