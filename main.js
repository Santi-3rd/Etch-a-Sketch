const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');
let gridSize = 16;
let rainbowMode = document.querySelector('#rainbow');
createGrid()

let size = document.querySelector('#size')
    size.onclick = function(){
        sizeNum = prompt("Please enter a grid size between 16 and 100.")
        if (sizeNum <= 100 && sizeNum > 16) {
            gridSize = sizeNum
            createGrid()
        }

    }

function createGrid() {

    content.innerHTML = ''

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `calc(100%/ ${gridSize})`;
        gridSquare.style.height = `calc(100%/ ${gridSize})`;
        content.appendChild(gridSquare);
        Painter(gridSquare)
        }
}   


function Painter(gridSquare){
    console.log(rainbowMode.checked)
    if (rainbowMode.checked){
        gridSquare.addEventListener("mouseover", event => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            gridSquare.style.backgroundColor =  + r + g + b;
        });
    } else {
        gridSquare.addEventListener("mouseover", event => {
            gridSquare.style.backgroundColor = "black"
        });
    }
}

let clear = document.querySelector('#clear')
    clear.onclick = function(){
        createGrid()
    }




container.appendChild(content);


