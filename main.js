const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');
let gridSize = 16;
let rainbowMode = document.querySelector('#rainbow');
let shaderMode = document.querySelector('#shading');

createGrid()


const slider = document.getElementById('numberSlider');

slider.oninput = function() {
    const selectedNumber = this.value;
    gridSize = selectedNumber
    createGrid();
};
// let size = document.querySelector('#size')
//     size.onclick = function(){
//         sizeNum = prompt("Please enter a grid size between 16 and 100.")
//         if (sizeNum <= 100 && sizeNum > 16) {
//             gridSize = sizeNum
//             createGrid()
//         }
//     }

let clear = document.querySelector('#clear')
    clear.onclick = function(){
        createGrid()
    }

function createGrid() {

    content.innerHTML = ''

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `calc(100%/ ${gridSize})`;
        gridSquare.style.height = `calc(100%/ ${gridSize})`;
        content.appendChild(gridSquare);
        painter(gridSquare)
        }
}   

function painter(gridSquare){
    let alpha = 0.1
    gridSquare.addEventListener("mouseover", event => {
        if (rainbowMode.checked){ 
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        gridSquare.style.backgroundColor = shaderMode.checked ? "rgba(" + r + "," + g + "," + b + "," + alpha + ")" : "rgb(" + r + "," + g + "," + b + ")";
        } else {
            gridSquare.style.backgroundColor = shaderMode.checked ? "rgba(0, 0, 0, " + alpha + ")" : "rgb(0, 0, 0)";
        }

        if (shaderMode.checked && alpha < 1) {
            alpha += 0.1
        }
    });
}




container.appendChild(content);


